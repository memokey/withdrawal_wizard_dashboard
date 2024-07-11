import SuperTokens from "supertokens-node";
import EmailPassword from "supertokens-node/recipe/emailpassword";
import SessionNode from "supertokens-node/recipe/session";
import { appInfo } from "./appInfo";
import { TypeInput } from "supertokens-node/types";
import Dashboard from "supertokens-node/recipe/dashboard";
import UserRoles from "supertokens-node/recipe/userroles";

import { supabase } from "@/utils/supabaseClient";

export const backendConfig = (): TypeInput => {
    return {
        framework: "custom",
        supertokens: {
            // https://try.supertokens.com is for demo purposes. Replace this with the address of your core instance (sign up on supertokens.com), or self host a core.
            connectionURI: process.env.NEXT_PUBLIC_CONNECTION_URI || "",
            apiKey: process.env.NEXT_PUBLIC_SUPERTOKENS_KEY || "",
        },
        appInfo,
        recipeList: [
            EmailPassword.init({
                signUpFeature: {
                    formFields: [
                        {
                            id: "name",
                        },
                    ],
                },
                override: {
                    apis: (originalImplementation) => {
                        return {
                            ...originalImplementation,
                            signUpPOST: async function (input) {
                                if (
                                    originalImplementation.signUpPOST ===
                                    undefined
                                ) {
                                    throw Error("Should never come here");
                                }

                                // First we call the original implementation of signUpPOST.
                                let response =
                                    await originalImplementation.signUpPOST(
                                        input
                                    );

                                // Post sign up response, we check if it was successful
                                if (response.status === "OK") {
                                    // These are the input form fields values that the user used while signing up
                                    let formFields = input.formFields;
                                    // Extract the custom field value
                                    let nameField = formFields.find(
                                        (field) => field.id === "name"
                                    );
                                    let emailField = formFields.find(
                                        (field) => field.id === "email"
                                    );
                                    let userName = nameField
                                        ? nameField.value
                                        : null;
                                    let userEmail = emailField
                                        ? emailField.value
                                        : null;
                                    const { error } = await supabase
                                        .from("users")
                                        .insert([
                                            {
                                                name: userName,
                                                email: userEmail,
                                                modal_content: "",
                                            },
                                        ]);

                                    if (error) console.error("error", error);
                                }
                                return response;
                            },
                        };
                    },
                },
            }),
            Dashboard.init({
                admins: ["bob@wealthpilots.net"],
            }),
            UserRoles.init(),
            SessionNode.init(),
        ],
        isInServerlessEnv: true,
    };
};

let initialized = false;
// This function is used in your APIs to make sure SuperTokens is initialised
export function ensureSuperTokensInit() {
    if (!initialized) {
        SuperTokens.init(backendConfig());
        initialized = true;
    }
}

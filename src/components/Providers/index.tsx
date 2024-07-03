"use client";

import { PrivyProvider } from "@privy-io/react-auth";
import { Provider } from "react-redux";
import store from "@/redux/store";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <PrivyProvider
                appId={
                    process.env.NEXT_PUBLIC_PRIVY_APP_ID ||
                    "cly1zk5n10013f17rklw3nwrr"
                }
                config={{
                    appearance: {
                        theme: "light",
                        accentColor: "#8cc44f",
                        logo: "https://res.cloudinary.com/dmzpebj2g/image/upload/v1719881077/samples/logo/logo.png",
                    },
                }}
            >
                {children}
            </PrivyProvider>
        </Provider>
    );
}

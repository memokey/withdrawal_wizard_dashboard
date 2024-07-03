"use client";

import { usePrivy } from "@privy-io/react-auth";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Logo from "@/components/Layout/Header/Logo";

const Login = () => {
    const router = useRouter();
    const { ready, authenticated, login } = usePrivy();

    useEffect(() => {
        if (!authenticated && ready) {
            login();
        }
        if (authenticated) {
            router.push("/dashboard");
        }
    }, [ready, authenticated]);

    return (
        <div className="relative w-[100vw] h-[100vh] overflow-y-hidden">
            <div className="w-full h-[70px] flex items-center justify-between border-b-gray drop-shadow-sm px-40">
                <Logo />
                <button
                    className="bg-[#8cc44f] text-[#F2F2F2] p-2 px-5 rounded-[4px] hover:shadow-lg hover:border-black"
                    onClick={login}
                >
                    Sign in
                </button>
            </div>
            <img
                src="/images/bg.jpeg"
                alt="background"
                className="w-full h-[100vh-70px]"
            />
        </div>
    );
};

export default Login;

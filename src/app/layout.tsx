import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import "../styles/custom.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Withdrawal Wizard",
    description: "Distribution Risk Analyzer",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="h-full scroll-auto bg-white antialiased">
            <body className={inter.className}>{children}</body>
        </html>
    );
}

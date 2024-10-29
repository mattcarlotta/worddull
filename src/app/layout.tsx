import type { Metadata } from "next";
import localFont from "next/font/local";
import clsx from "clsx";
import "./globals.css";

const worddull = localFont({
    src: [
        {
            path: "./fonts/worddull-500.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "./fonts/worddull-600.woff2",
            weight: "600",
            style: "normal",
        },
        {
            path: "./fonts/worddull-700.woff2",
            weight: "700",
            style: "normal",
        },
    ],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Worddull - An Unexpected Journey",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={clsx(worddull.className, "antialiased min-h-screen")}
                cz-shortcut-listen="true"
            >
                {children}
            </body>
        </html>
    );
}

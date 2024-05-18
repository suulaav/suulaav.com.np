import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {SpeedInsights} from "@vercel/speed-insights/next"


export const metadata: Metadata = {
    title: "Sulav",
    description: "Jack Of All Master Of None",
};

export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <SpeedInsights></SpeedInsights>
        <body>{children}</body>
        </html>
    );
}

import type {Metadata} from "next";
import "../styles/globals.css";
import {SpeedInsights} from "@vercel/speed-insights/next"
import NavBar from "@/app/(navbar)/NavBar";


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
        <body>
        <NavBar/>
        {children}
        </body>
        </html>
    );
}

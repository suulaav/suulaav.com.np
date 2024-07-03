import type {Metadata} from "next";
import "../../../styles/globals.css";
import {SpeedInsights} from "@vercel/speed-insights/next"
import Profile from "@/app/(navbar)/profile/page";
import ProfileSideBar from "@/app/(navbar)/profile/ProfileSideBar";


export const metadata: Metadata = {
    title: "Sulav",
    description: "Jack Of All Master Of None",
};

export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <SpeedInsights/>
            <div className="grid grid-cols-12 min-h-screen">
                <div className="col-span-2 border-r border-gray-200 ">
                    <ProfileSideBar/>
                </div>
                <div className="col-span-10 m-3">
                    {children}
                </div>
            </div>
        </>
    );
}

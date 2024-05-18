"use client"
import Image from "next/image";

export default function Home() {
    return (
        <main className="main-background">
            <div className="glass-effect">
                <div className="flex flex-col items-center">
                    <h1 className="glassy-title w-full flex justify-center">Login</h1>

                    <div className="w-max"><label className="glassy-label">Email</label></div>
                    <input className="border border-gray-400 rounded px-3 py-2 w-64 mb-3" placeholder="email" min="3"
                           type="email"/>

                    <div className="w-max"><label className="glassy-label">Password</label></div>
                    <input className="border border-gray-400 rounded px-3 py-2 w-64 mb-6" placeholder="password"
                           type="password" min="8"/>

                    <div className="w-full flex justify-center">
                        <button className="glassy-button" onClick={() => alert("Invalid Credentials")}>
                            Log In
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}

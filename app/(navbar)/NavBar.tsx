'use client'
import {useState, useEffect, useRef, MutableRefObject} from "react";
import {AiFillAliwangwang} from "react-icons/ai";
import {CiSettings} from "react-icons/ci";
import { useRouter } from 'next/navigation'

export default function NavBar() {
    const router = useRouter();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef: MutableRefObject<any> = useRef(null);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleClickOutside = (event: Event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative">
            <div className="flex w-full items-center border border-gray-200">
                <button onClick={() => router.push("/")}><AiFillAliwangwang className="size-8"/></button>
                <button className="ml-auto" onClick={toggleDropdown}>
                    <CiSettings className="size-8"/>
                </button>
            </div>
            {isDropdownOpen && (
                <div ref={dropdownRef} className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg">
                    <ul className="py-1">
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => router.push("/profile")}>Profile
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => router.push("/preference")}>Preference
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => router.push("/logout")}>Log Out
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}

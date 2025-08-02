'use client';

import { usePathname } from "next/navigation";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

const navItems = [
    { label: "HOME", href: "/"},
    { label: "ABOUT", href: "/about"},
    { label: "CONTACT", href: "/contact"},
]

export default function NavBar() {
    const pathName = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="sticky top-0 w-full z-50">
            {/* NavBar */}
            <div className="flex bg-gray-900 p-4 px-10 justify-between items-center sticky w-full top-0 left-0 z-50 lg:p-7 lg:px-24">

                {/* Logo */}
                <div>
                    <Image src={"/images/logoDark.png"} alt="Logo" width={120} height={100}/>
                </div>

                {/* NavBar Title */}
                <div>

                </div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden"
                >
                    {isOpen ? (
                        <XMarkIcon className="w-9 h-9 text-white" />
                    ) : (
                        <Bars3Icon className="w-8 h-8 text-white"/>
                    )}
                </button>

                {/* Desktop NavItems */}
                <ul className="hidden md:flex gap-10">
                    {navItems.map((item) => (
                        <li key={item.label}>
                            <a 
                                href={item.href}
                                className="bg-gray-800 p-2 px-4 rounded hover:bg-gray-900 lg:p-3"
                            >{item.label}</a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Menu Open */}
            {isOpen &&(
                <div className="fixed top-0 left-0 w-full h-full bg-gray-950 flex flex-col items-center
                    justify-center z-40 pt-[64px]
                ">
                    {navItems.map((item) => (
                        <a 
                            key={item.label}
                            href={item.href}
                            className="p-4 m-6 text-4xl text-white"
                            onClick={() => setIsOpen(false)}
                            >{item.label}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}
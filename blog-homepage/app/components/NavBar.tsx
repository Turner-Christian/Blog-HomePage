'use client';

import { usePathname } from "next/navigation";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";

const navItems = [
    { label: "Home", href: "/"},
    { label: "About", href: "/about"},
    { label: "Contact", href: "/contact"},
]

export default function NavBar() {
    const pathName = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative z-50">
            {/* NavBar */}
            <div 
                className="flex bg-gray-800 p-4 px-6 justify-between items-center fixed w-full
                    top-0 left-0 z-50 lg:p-7
                ">
                <h1 className="text-4xl">Ipsum</h1>

                {/* Hamburger Button */}
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden"
                    >
                    {isOpen? (
                        <XMarkIcon className="w-9 h-9 text-white"/>
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
                                className="bg-gray-700 p-2 px-4 rounded hover:bg-gray-600 lg:p-3"
                            >{item.label}</a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Menu Open */}
            {isOpen &&(
                <div className="fixed top-0 left-0 w-full h-full bg-gray-900 flex flex-col items-center
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
"use client";

import { useState } from "react";
import { CreateUser } from "@/lib/actions";
import Image from "next/image";

export default function RegisterPage(){
    const [error, setError] = useState("");

    async function handleSubmit(formData: FormData) {
        try {
            await CreateUser(formData);
            setError("");
        } catch (err: any) {
            setError(err.message || "Something went wrong");
        }
    }

    return (
        <div className="flex flex-col items-center justify-between bg-slate-950 p-6 h-screen">
            <Image
                src="/images/logoDark.png"
                alt="Logo"
                width={300}
                height={300}
            />

            <form
                action="handleSubmit"
                className="bg-slate-800 rounded-2xl p-6 h-[80%] w-[80%] flex flex-col"
                >
                {error && <p style={{ color: "red" }}>{error}</p>}

                <div className="flex flex-col mt-8">
                    <label htmlFor="username">Username :</label>
                    <input
                        className="bg-slate-900 p-4 rounded-xl mt-2 shadow-2xl"
                        type="text"
                        name="username"
                        placeholder="Username"
                        required />
                </div>
                <div className="flex flex-col mt-8">
                    <label htmlFor="email">Email :</label>
                    <input
                        className="bg-slate-900 p-4 rounded-xl mt-2 shadow-2xl"
                        type="email"
                        name="email"
                        placeholder="Email"
                        required />
                </div>
                <div className="flex flex-col mt-8">
                    <label htmlFor="password">Password :</label>
                    <input
                        className="bg-slate-900 p-4 rounded-xl mt-2 shadow-2xl"
                        type="password"
                        name="password"
                        placeholder="Password"
                        required />
                </div>

                <button
                    className="bg-lime-600 text-white p-4 rounded-xl mt-4 cursor-pointer"
                    type="submit">Register</button>
            </form>

        </div>
    )
};
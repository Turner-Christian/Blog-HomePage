"use client";

import { useState } from "react";
import { CreateUser } from "@/lib/actions";
import clsx from "clsx";
import Image from "next/image";

export default function RegisterPage() {
  const [error, setError] = useState("");

  return (
    <div className="flex flex-col items-center justify-between bg-slate-950 p-6 h-screen">
      <Image src="/images/logoDark.png" alt="Logo" width={300} height={300} />

      <form
        action={CreateUser}
        className="bg-slate-800 rounded-2xl px-6 h-[80%] w-96 flex flex-col justify-around"
      >
        {error && <p style={{ color: "red" }}>{error}</p>}

        <div className="flex flex-col">
          <label htmlFor="username">Username :</label>
          <input
            className="bg-slate-900 p-4 rounded-xl mt-2 shadow-2xl"
            type="text"
            name="username"
            placeholder="Username"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email :</label>
          <input
            className="bg-slate-900 p-4 rounded-xl mt-2 shadow-2xl"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password :</label>
          <input
            className="bg-slate-900 p-4 rounded-xl mt-2 shadow-2xl"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <ol className="text-xs text-gray-400 mt-2">
            <li className={clsx("")}>Password must be at least 8 characters long</li>
            <li>Password must contain at least one uppercase letter</li>
            <li>Password must contain at least one number</li>
          </ol>
        </div>

        <button
          className="bg-lime-600 text-white p-4 rounded-xl mt-4 cursor-pointer hover:bg-lime-700 transition"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
}

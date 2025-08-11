"use client";

import React, { useState } from "react";
import { CreateUser } from "@/lib/actions";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export default function RegisterPage() {
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");

  // Validation checks
  const hasMinLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);

  const allValid = hasMinLength && hasUppercase && hasNumber;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!allValid) {
      setError("Password does not meet the criteria.");
      return;
    }

    const formData = new FormData(e.currentTarget);
    await CreateUser(formData);
  };

  return (
    <div className="flex flex-col items-center justify-between bg-slate-950 p-6 h-screen text-sm">
      <Link href="/">
			  <Image src="/images/logoDark.png" alt="Logo" width={300} height={300} />
		  </Link>

      <form
        onSubmit={handleSubmit}
        className="bg-slate-800 rounded-2xl px-6 h-[80%] w-96 flex flex-col justify-around"
      >


        <div className="flex flex-col">
          <label htmlFor="username">Username :</label>
          <input
            className="bg-slate-900 p-3 rounded-xl mt-2 shadow-2xl"
            type="text"
            name="username"
            placeholder="Username"
            required
            />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email :</label>
          <input
            className="bg-slate-900 p-3 rounded-xl mt-2 shadow-2xl"
            type="email"
            name="email"
            placeholder="Email"
            required
            />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password :</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="bg-slate-900 p-3 rounded-xl mt-2 shadow-2xl"
            type="password"
            name="password"
            placeholder="Password"
            required
            />
          <ol className="text-xs text-lime-600 mt-2">
            <li className={clsx(
              { "text-red-500": !hasMinLength }
            )}>Password must be at least 8 characters long</li>
            <li className={clsx(
              { "text-red-500": !hasUppercase }
            )}>Password must contain at least one uppercase letter</li>
            <li className={clsx(
              { "text-red-500": !hasNumber }
            )}>Password must contain at least one number</li>
          </ol>
        </div>
        <div className="flex flex-col">
          {error && <p className="text-red-500">{error}</p>}
          <button
            className="bg-lime-600 text-white p-4 rounded-xl mt-4 cursor-pointer hover:bg-lime-700 transition"
            type="submit"
          >
            Register
          </button>
          <Link
            href="/login"
            className="text-center text-xs text-slate-400 mt-4 hover:underline"
          >
            Already have an account?
          </Link>
        </div>
      </form>
    </div>
  );
}

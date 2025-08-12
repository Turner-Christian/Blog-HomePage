"use client";

import React, { useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { LoginUser } from "@/lib/actions";

export default function LoginPage() {
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
	e.preventDefault();
	const formData = new FormData(e.currentTarget);
	
	try {
		LoginUser(formData)
	} catch (error) {
		if (error instanceof Error) {
			setError(error.message);
		} else {
			setError("An unknown error occurred.");
		}
	}
  };

  return (
	<div className="flex flex-col items-center bg-slate-950 p-6 h-screen text-sm">
		<Link href="/">
			<Image src="/images/logoDark.png" alt="Logo" width={300} height={300} />
		</Link>

	  <form
		onSubmit={handleSubmit}
		className="bg-slate-800 rounded-2xl mt-30 px-6 h-[60%] w-96 flex flex-col justify-around"
	  >
		  {error && <p className="text-red-500">{error}</p>}

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
		</div>
		<div className="flex flex-col">
		  <button
			className="bg-lime-600 text-white p-4 rounded-xl mt-4 cursor-pointer hover:bg-lime-700 transition"
			type="submit"
		  >
			Login
		  </button>
		  <Link
			href="/register"
			className="text-center text-xs text-slate-400 mt-4 hover:underline"
		  >
			Dont have an account?
		  </Link>
		</div>
	  </form>
	</div>
  );
}

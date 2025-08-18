"use server";

import { sql } from "./db"
import bcrypt from "bcrypt";
import { redirect } from 'next/navigation'
import { cookies } from "next/headers";
import { createJWT } from "./auth";

export async function CreateUser(formData : FormData) {
    const email = formData.get("email") as string;
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    if (!email || !username || !password) {
        throw new Error("All fields are required");
    }

    //password hashing
    const passwordHash = await bcrypt.hash(password, 10);

    try {
        await sql`
        INSERT INTO users (email, password_hash, username)
        VALUES (${email}, ${passwordHash}, ${username});
        `;
    } catch (error) {
        console.error("Error inserting user:", error);
        const errorMessage = typeof error === "object" && error !== null && "message" in error
            ? (error as { message: string }).message
            : "Could not create user";
        throw new Error(errorMessage);
    }

    redirect("/");
}

export async function LoginUser(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) {
        throw new Error("All fields are required");
    }

    const result = await sql`
        SELECT * FROM users WHERE email = ${email}
    `;

    const user = result[0];
    if (!user) {
        throw new Error("User not found");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password_hash);
    if (!isPasswordValid) {
        throw new Error("Invalid password");
    }

    const token = await createJWT({ email });
    const cookieStore = await cookies();

    // Set the session cookie
    cookieStore.set("session_token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        path: "/",
        maxAge: 60 * 60 * 24 // 1 day
    });

    redirect("/");
}
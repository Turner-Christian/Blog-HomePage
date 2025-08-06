"use server";

import { sql } from "./db"
import bcrypt from "bcrypt";
import { redirect } from 'next/navigation'

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

    // Redirect to the homepage after successful registration
    redirect("/");
}
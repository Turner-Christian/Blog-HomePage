"use server";

import { sql } from "./db"
import bcrypt from "bcrypt";

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
        INSERT INTO users (email, username, password_hash)
        VALUES (${email}, ${username}, ${passwordHash})
        `;
    } catch (error) {
        console.error("Error inserting user:", error);
        throw new Error("Could not create user");
    }
}
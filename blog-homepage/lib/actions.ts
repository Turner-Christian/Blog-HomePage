"use server";

import { sql } from "./db"
import bcrypt from "bcrypt";
import { redirect } from 'next/navigation'
import { cookies } from "next/headers";
import { sign } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

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

    // Create a JWT and set it in a secure HttpOnly cookie
    const token = sign(
        { userId: user.id, email: user.email, username: user.username },
        JWT_SECRET,
        { expiresIn: "7d" }
    );

    // Set the cookie
    const cookieStore = await cookies();
    cookieStore.set("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 7, // 1 week
    });

    console.log("User logged in:", user[0]);
    // Redirect to the homepage after successful login
    redirect("/");
}
import {SignJWT, jwtVerify} from "jose";
import type { JWTPayload } from 'jose';

const secret = new TextEncoder().encode(process.env.JWT_SECRET || "dev-secret-key");

// Create a JWT
export async function createJWT(payload: JWTPayload) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setExpirationTime("1h")
        .sign(secret);
}

// Verify a JWT
export async function verifyJWT(token: string) {
    try {
        const { payload } = await jwtVerify(token, secret);
        return payload;
    } catch (error) {
        console.error("JWT verification error:", error);
        return null;
    }
}

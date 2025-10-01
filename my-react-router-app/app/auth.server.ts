import { betterAuth } from "better-auth";
import { db } from "./db/db";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import * as schema from '~/db/schema/auth-schema'

export const auth = betterAuth({
    emailAndPassword: {
        enabled: true,
        requireEmailVerification: false,
    },
    database: drizzleAdapter(db, {
        provider: "pg", // or "pg" or "mysql"
        schema: schema,
    }),
})
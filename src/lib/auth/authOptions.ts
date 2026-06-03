// lib/auth.ts
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@/generated/prisma/client";
import Google from "next-auth/providers/google";
import type { NextAuthOptions } from "next-auth";
import LinkedIn from "next-auth/providers/linkedin";
import { CredentialsProvider } from "./credentials";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    {
      id: "linkedin",
      name: "LinkedIn",
      type: "oauth",
      idToken: true,
      wellKnown:
        "https://www.linkedin.com/oauth/.well-known/openid-configuration",
      authorization: {
        params: {
          scope: "openid profile email",
        },
      },
      clientId: process.env.LINKEDIN_CLIENT_ID!,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET!,
      client: {
        token_endpoint_auth_method: "client_secret_post",
      },
      allowDangerousEmailAccountLinking: true,
      checks: ["state"],
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email ?? null,
          image: profile.picture ?? null,
        };
      },
    },
    CredentialsProvider,
  ],
  session: {
    strategy: "database",
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn({ user, account }) {
      return true;
    },
  },
};

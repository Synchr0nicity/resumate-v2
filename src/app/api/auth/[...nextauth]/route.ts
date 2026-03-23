import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@/generated/prisma/client";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const prisma = new PrismaClient();

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "database",
  },
});

export { handler as GET, handler as POST };

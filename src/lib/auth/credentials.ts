import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@/generated/prisma/client";

const prisma = new PrismaClient();

export const CredentialsProvider = Credentials({
  name: "Credentials",
  credentials: {
    email: { type: "email" },
    password: { type: "password" },
  },

  async authorize(credentials) {
    if (!credentials?.email || !credentials?.password) return null;

    const user = await prisma.user.findUnique({
      where: { email: credentials.email },
    });

    if (!user?.password) return null;

    const isValid = await bcrypt.compare(credentials.password, user.password);

    if (!isValid) return null;

    return {
      id: user.id,
      email: user.email,
      name: user.name,
    };
  },
});

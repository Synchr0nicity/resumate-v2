import { authOptions } from "@/app/lib/authOptions";
import { PrismaClient } from "@/generated/prisma/client";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) {
    return NextResponse.json({ error: "User note found" }, { status: 404 });
  }

  const body = await req.json();
  const { title, content } = body;

  const resume = await prisma.resume.create({
    data: {
      title,
      content,
      userId: user.id,
    },
  });

  return NextResponse.json(resume);
}

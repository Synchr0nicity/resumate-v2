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

  const resume = await prisma.resume.create({
    data: {
      title: body.title,
      userId: user.id,
      personalDetails: body.personalDetails
        ? { create: body.personalDetails }
        : undefined,
      workHistory: body.workHistory?.length
        ? { create: body.workHistory }
        : undefined,
      education: body.education?.length
        ? { create: body.education }
        : undefined,
      skills: body.skills || [],
    },
  });

  return NextResponse.json(resume);
}

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const resumes = await prisma.resume.findMany({
    where: {
      userId: user.id,
    },
    select: {
      id: true,
      title: true,
      createdAt: true,
      updatedAt: true,
      workHistory: true,
      education: true,
      personalDetails: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(resumes);
}

import { authOptions } from "@/app/lib/authOptions";
import { PrismaClient } from "@/generated/prisma/client";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const resume = await prisma.resume.findFirst({
    where: { id: params.id, user: { email: session.user.email } },
  });

  return NextResponse.json(resume);
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } },
) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const body = await req.json();

  const updated = await prisma.resume.update({
    where: { id: params.id, userId: user.id },
    data: {
      title: body.title,
      pdfUrl: body.pdfUrl,

      ...(body.personalDetails && {
        personalDetails: {
          upsert: {
            create: body.personalDetails,
            update: body.personalDetails,
          },
        },
      }),

      ...(body.workHistory && {
        workHistory: {
          deleteMany: {},
          create: body.workHistory,
        },
      }),

      ...(body.education && {
        education: {
          deleteMany: {},
          create: body.education,
        },
      }),

      ...(body.skills && {
        skills: body.skills,
      }),
    },
  });

  return NextResponse.json(updated);
}

export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> },
) {
  const session = await getServerSession(authOptions);
  const { id } = await context.params;
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

  const result = await prisma.resume.deleteMany({
    where: {
      id: id,
      userId: user.id,
    },
  });

  if (result.count === 0) {
    return NextResponse.json({ error: "Not Found" }, { status: 404 });
  }

  return NextResponse.json({ success: true });
}

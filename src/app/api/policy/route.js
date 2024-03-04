import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

// Register Api
export async function GET(req, res) {
  try {
    let { searchParams } = new URL(req.url);
    let type = searchParams.get("type");

    const prisma = new PrismaClient();
    const result = await prisma.policies.findMany({ where: { type } });
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error });
  }
}
// Register Api
export async function POST(req, res) {
  try {
    let reqBody = await req.json();

    const prisma = new PrismaClient();
    const result = await prisma.policies.create({ data: reqBody });
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error });
  }
}

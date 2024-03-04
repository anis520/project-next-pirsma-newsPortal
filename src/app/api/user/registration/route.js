import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

// Register Api
export async function POST(req, res) {
  try {
    let reqBody = await req.json();
    reqBody.otp = "0";
    const prisma = new PrismaClient();
    // check exist
    const count = await prisma.users.count({ where: { email: reqBody.email } });

    if (count == 1) {
      return NextResponse.json(
        { status: "faild", message: "Email already exist" },
        { status: 500 }
      );
    }
    const result = await prisma.users.create({ data: reqBody });
    return NextResponse.json({ message: "Register successfull", data: result });
  } catch (error) {
    return NextResponse.json(
      { status: "faild", message: error.message },
      { status: 500 }
    );
  }
}

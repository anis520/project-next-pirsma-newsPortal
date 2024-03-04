import { sendOtp } from "@/utility/EmailUtility";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

// Register Api
export async function POST(req, res) {
  try {
    let reqBody = await req.json();

    const prisma = new PrismaClient();
    let code = Math.floor(100000 + Math.random() * 900000);
    await sendOtp(reqBody.email, "your otp", code);
    reqBody.otp = code + "";
    // check exist
    const count = await prisma.users.count({ where: { email: reqBody.email } });

    if (count == 1) {
      return NextResponse.json(
        { status: "faild", message: "Email already exist" },
        { status: 500 }
      );
    }
    const result = await prisma.users.create({ data: reqBody });
    return NextResponse.json({ message: "Register successfull", user: result });
  } catch (error) {
    return NextResponse.json(
      { status: "faild", message: error.message },
      { status: 500 }
    );
  }
}

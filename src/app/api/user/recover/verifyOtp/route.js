import { sendOtp } from "@/utility/EmailUtility";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const reqBody = await req.json();
    const prisma = new PrismaClient();
    const count = await prisma.users.count({ where: reqBody });

    if (count === 1) {
      const result = await prisma.users.update({
        where: { email: reqBody.email },
        data: { otp: "0", isVerifyed: true },
      });
      return NextResponse.json({
        status: "success",
        message: "Email verify successfull",
        user: {
          firstName: result.firstName,
          lastName: result.lastName,
          email: result.email,
          mobile: result.mobile,
          id: result.id,
          isVerifyed: result.isVerifyed,
        },
      });
    } else {
      return NextResponse.json(
        { status: "fail", message: "Wrong Otp " },
        { status: 500 }
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: "fail", data: error }, { status: 500 });
  }
}

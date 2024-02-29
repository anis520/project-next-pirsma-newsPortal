import { sendOtp } from "@/utility/EmailUtility";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const reqBody = await req.json();
    const prisma = new PrismaClient();
    const count = await prisma.users.count({ where: reqBody });

    if (count === 1) {
      let result = await prisma.users.update({
        where: { email: reqBody.email },
        data: { otp: "0" },
      });
      return NextResponse.json({ status: "success", data: result });
    } else {
      return NextResponse.json({ status: "fail", data: "Wrong Otp " });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: "fail", data: error });
  }
}

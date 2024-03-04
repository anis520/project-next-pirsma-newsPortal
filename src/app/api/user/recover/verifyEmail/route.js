import { sendOtp } from "@/utility/EmailUtility";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const prisma = new PrismaClient();
    let { searchParams } = new URL(req.url);
    let email = searchParams.get("email");
    console.log(email);
    const count = await prisma.users.count({ where: { email: email } });
    if (count === 1) {
      let code = Math.floor(100000 + Math.random() * 900000);
      await sendOtp(email, "your otp", code);
      let result = await prisma.users.update({
        where: { email: email },
        data: { otp: code.toString() },
      });
      return NextResponse.json({ status: "success", data: result });
    } else {
      return NextResponse.json({ status: "fail", data: "user not found" });
    }
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error });
  }
}

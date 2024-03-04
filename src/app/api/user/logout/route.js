import { sendOtp } from "@/utility/EmailUtility";
import { CreateToken } from "@/utility/JWTTokenHelper";
import { setToken } from "@/utility/setTokenCookie";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

// Register Api
export async function GET(req, res) {
  try {
    const cookieString = `token=${null};expires=${0};Max-Age=0;path=/`;

    return NextResponse.json(
      { status: "fail" },
      { status: 500, headers: { "set-cookie": cookieString } }
    );
  } catch (error) {
    const cookieString = `token=${null};expires=${0};Max-Age=0;path=/`;

    return NextResponse.json(
      { status: "fail" },
      { status: 500, headers: { "set-cookie": cookieString } }
    );
  }
}

import { sendOtp } from "@/utility/EmailUtility";
import { CreateToken } from "@/utility/JWTTokenHelper";
import { setToken } from "@/utility/setTokenCookie";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

// Register Api
export async function POST(req, res) {
  try {
    let reqBody = await req.json();

    const prisma = new PrismaClient();
    const result = await prisma.users.findUnique({
      where: { email: reqBody.email },
    });

    if (!result) {
      return NextResponse.json(
        { status: "fail", message: "User not found" },
        { status: 500 }
      );
    }

    if (reqBody.password == result.password) {
      const token = await CreateToken(result.email, result.id);
      let expireDuration = new Date(Date.now() + 24 * 60 * 60 * 1000);
      const cookieString = `token=${token};expires=${expireDuration.toUTCString()};path=/`;

      return NextResponse.json(
        {
          status: "success",
          message: "login successfull",
          user: {
            firstname: result.firstName,
            lastName: result.lastName,
            email: result.email,
            mobile: result.mobile,
            id: result.id,
          },
        },
        {
          status: 200,
          headers: { "set-cookie": cookieString },
        }
      );
    }
    return NextResponse.json(
      { status: "fail", message: "Invalid password" },
      { status: 500 }
    );
  } catch (error) {
    return NextResponse.json(
      { status: "faild", message: error.message },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
export async function GET(req, res) {
  try {
    let headerList = headers();

    let id = parseInt(headerList.get("id"));
    const prisma = new PrismaClient();

    const result = await prisma.users.findUnique({
      where: { id: id },
      select: {
        id: true,
        email: true,
        mobile: true,
        firstName: true,
        lastName: true,
        isVerifyed: true,
      },
    });
    if (!result) {
      const cookieString = `token=${null};expires=${0};Max-Age=0;path=/`;

      return NextResponse.json(
        { status: "fail" },
        { status: 500, headers: { "set-cookie": cookieString } }
      );
    }

    return NextResponse.json({ status: "success", user: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error });
  }
}

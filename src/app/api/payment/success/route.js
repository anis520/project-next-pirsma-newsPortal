import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const prisma = new PrismaClient();
    let { searchParams } = new URL(req.url);
    let tran_id = searchParams.get("tran_id");
    /**
     * According to tran_id
     * update your payment stastus="success"
     */
    await prisma.subscribers.update({
      where: { tran_id: tran_id },
      data: { status: true },
    });

    return NextResponse.redirect(new URL("/payment/success", req.url), 303);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

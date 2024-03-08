import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const prisma = new PrismaClient();

    let { searchParams } = new URL(req.url);
    let tran_id = searchParams.get("tran_id");
    /**
     * According to tran_id
     * update your payment stastus="fail"
     */

    // const result = await prisma.subscribers.findUnique({
    //   where: { tran_id: tran_id },
    // });

    await prisma.subscribers.delete({ where: { tran_id: tran_id } });
    return NextResponse.redirect(new URL("/payment/fail", req.url), 303);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

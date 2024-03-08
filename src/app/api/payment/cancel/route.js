import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    let { searchParams } = new URL(req.url);
    let tran_id = searchParams.get("tran_id");
    /**
     * According to tran_id
     * update your payment stastus="cancel"
     */

    return NextResponse.redirect(new URL("/payment/cancel", req.url), 303);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

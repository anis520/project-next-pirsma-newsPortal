import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    let reqBody = await req.json();
    let tran_id = reqBody["tran_id"];
    let val_id = reqBody["val_id"];
    let status = reqBody["status"];
    /**
     * According to tran_id
     * update your payment stastus="fail"
     */
    console.log(tran_id + "  has  " + status + " in final state");
    return NextResponse.json({ status: "success" });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

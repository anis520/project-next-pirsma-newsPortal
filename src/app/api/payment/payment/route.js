import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const prisma = new PrismaClient();
    const reqBody = await req.json();
    const tran_id = Math.floor(100000 + Math.random() * 900000).toString();
    await prisma.subscribers.create({
      data: {
        email: reqBody.email,
        type: reqBody.type,
        amount: reqBody.amount,
        tran_id: tran_id,
        userId: reqBody.id,
      },
    });
    const init_url = "";
    const formData = new FormData();
    formData.append("store_id", "");
    formData.append("store_passwd", "");
    formData.append("total_amount", reqBody.amount);
    formData.append("currency", "BDT");
    formData.append("tran_id", `${tran_id}`);
    formData.append(
      "success_url",
      `http://localhost:3000/api/payment/success?tran_id=${tran_id}`
    );
    formData.append(
      "fail_url",
      `http://localhost:3000/api/payment/fail?tran_id=${tran_id}`
    );
    formData.append(
      "cancel_url",
      `http://localhost:3000/api/payment/cancel?tran_id=${tran_id}`
    );
    formData.append("ipn_url", `http://localhost:3000/api/payment/ipn`);
    formData.append("cus_name", "Anisul hoque");
    formData.append("cus_email", reqBody.email);
    formData.append("cus_add1", "Condonish ,Chottagram");
    formData.append("cus_add2", "Rangunia , chottagram");
    formData.append("cus_city", "Chottagram");
    formData.append("cus_state", "Chottagram");
    formData.append("cus_postcode", "4387");
    formData.append("cus_country", "Bangladesh");
    formData.append("cus_phone", "01852320729");
    formData.append("cus_fax", "01852320729");
    formData.append("shipping_method", "YES");
    formData.append("ship_name", "Anisul hoque");
    formData.append("ship_add1", "Rangunia , chottagram");
    formData.append("ship_add2", "Rangunia , chottagram");
    formData.append("ship_city", "Chottagram");
    formData.append("ship_country", "Bangladesh");
    formData.append("ship_postcode", "4387");
    formData.append("product_name", "newsSuscribtion");
    formData.append("product_category", "news");
    formData.append("product_profile", "newsProfile");
    formData.append("product_amount", reqBody.amount);
    const requestOption = { method: "POST", body: formData };
    let SSLRes = await fetch(init_url, requestOption);
    let SSLResJSON = await SSLRes.json();
    return NextResponse.json({ data: SSLResJSON });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

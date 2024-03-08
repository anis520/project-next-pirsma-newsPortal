import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

// category Api
export async function GET(req, res) {
  try {
    const prisma = new PrismaClient();

    const result = await prisma.categories.findMany({
      select: { id: true, name: true, status: true },
    });
    return NextResponse.json({ status: "success", categorys: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error }, { status: 500 });
  }
}
// category Api
export async function POST(req, res) {
  try {
    let reqBody = await req.json();
    const prisma = new PrismaClient();

    const ceckExist = await prisma.categories.count({
      where: { name: reqBody.name },
    });
    if (ceckExist == 1) {
      return NextResponse.json(
        { status: "success", message: "Category already exist !" },
        { status: 500 }
      );
    }
    const result = await prisma.categories.create({ data: reqBody });
    return NextResponse.json({
      status: "success",
      category: result,
      message: "Add category successfull",
    });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error }, { status: 500 });
  }
}
// category Api
export async function DELETE(req, res) {
  try {
    let { searchParams } = new URL(req.url);
    let id = searchParams.get("id");

    const prisma = new PrismaClient();

    const result = await prisma.categories.delete({
      where: { id: Number(id) },
    });
    return NextResponse.json({
      status: "success",
      category: result,
      message: `Category ${result.name} has deleted`,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ status: "fail", data: error }, { status: 500 });
  }
}

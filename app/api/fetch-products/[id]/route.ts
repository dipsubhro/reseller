// app/api/fetch-product/[id]/route.ts

import { connectDB } from "../../db/connectDB";
import Product from "../../models/product.model";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: any) {
  await connectDB();

  try {
    const product = await Product.findById(params.id);
    if (!product) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ product }, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching product:", error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

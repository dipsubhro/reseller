import { NextRequest } from "next/server";
import { connectDB } from "../db/connectDB";
import Product from "../models/product.model";

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const searchParams = request.nextUrl.searchParams;
    const searchTerm = searchParams.get("searchTerm") || "";
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);
    const skip = (page - 1) * limit;

    const query = {
      name: {
        $regex: searchTerm,
        $options: "i",
      },
    };

    const products = await Product.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const totalProducts = await Product.countDocuments(query);
    const totalPages = Math.ceil(totalProducts / limit);

    return Response.json({ products, totalPages }, { status: 200 });
  } catch (error: any) {
    return Response.json({ message: error.message }, { status: 400 });
  }
}

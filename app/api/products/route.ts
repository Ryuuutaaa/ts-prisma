import { products } from "@/app/data/productData";
import { NextRequest } from "next/server";

// GET  : to get the data
export async function GET() {
  return Response.json(products);
}

// POST : to create the data
export async function POST(req: NextRequest) {
  const body = await req.json();
  const newProduct = {
    id: products.length + 1,
    title: body.title,
    description: body.description,
    price: body.price,
    category: body.category,
    image: body.image,
  };
  products.push(newProduct);
  return Response.json(newProduct, { status: 201 });
}

// PUT : to update the data

// DELETE : to delete the data

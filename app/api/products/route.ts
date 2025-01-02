// import { products } from "@/app/data/productData";
import { prisma } from "@/prisma/db_client";
import { NextRequest } from "next/server";

// GET  : to get the data
export async function GET() {
  const product = await prisma.product.findMany();
  return Response.json(product);
}

// POST : to create the data
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (
      !body.title ||
      !body.description ||
      !body.price ||
      !body.category ||
      !body.image
    ) {
      return Response.json(
        {
          error:
            "All fields (title, description, price, category, image) are required.",
        },
        { status: 400 }
      );
    }

    const newProduct = await prisma.product.create({
      data: {
        title: body.title,
        description: body.description,
        price: body.price,
        category: body.category,
        image: body.image,
      },
    });

    return Response.json(newProduct, { status: 201 });
  } catch (error) {
    console.error("Error creating product:", error);

    return Response.json(
      { error: "An unexpected error occurred while creating the product." },
      { status: 500 }
    );
  }
}

// PUT : to update the data

// DELETE : to delete the data

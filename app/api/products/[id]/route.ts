// import { products } from "@/app/data/productData";
import { prisma } from "@/prisma/db_client";
import { NextRequest } from "next/server";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await req.json();

    const productId = parseInt(params.id);
    if (isNaN(productId)) {
      return Response.json({ error: "Invalid product ID" }, { status: 400 });
    }

    const existingProduct = await prisma.product.findUnique({
      where: { id: productId },
    });

    if (!existingProduct) {
      return Response.json({ error: "Product not found" }, { status: 404 });
    }

    const updatedProduct = await prisma.product.update({
      where: { id: productId },
      data: {
        title: body.title || existingProduct.title,
        description: body.description || existingProduct.description,
        price: body.price || existingProduct.price,
        category: body.category || existingProduct.category,
        image: body.image || existingProduct.image,
      },
    });

    return Response.json(updatedProduct, { status: 200 });
  } catch (error) {
    console.error("Error updating product:", error);

    return Response.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const product = await prisma.product.findUnique({
    where: { id: parseInt(params.id) },
  });

  await prisma.product.delete({
    where: { id: product?.id },
  });

  return Response.json("Delete successfully", { status: 200 });
}

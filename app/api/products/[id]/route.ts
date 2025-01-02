import { products } from "@/app/data/productData";
import { prisma } from "@/prisma/db_client";
import { NextRequest } from "next/server";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await req.json();

    // Validasi ID produk yang valid
    const productId = parseInt(params.id);
    if (isNaN(productId)) {
      return Response.json({ error: "Invalid product ID" }, { status: 400 });
    }

    // Periksa apakah produk ada di database
    const existingProduct = await prisma.product.findUnique({
      where: { id: productId },
    });

    if (!existingProduct) {
      return Response.json({ error: "Product not found" }, { status: 404 });
    }

    // Update produk menggunakan Prisma
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

    // Mengembalikan produk yang diperbarui
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
  context: { params: { id: string } }
) {
  const { id } = await context.params;

  const productIndex = products.findIndex(
    (product) => product.id === parseInt(id)
  );

  if (productIndex === -1) {
    return new Response(JSON.stringify({ error: "Product not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Menghapus produk dari array dan mengambil produk yang dihapus
  const deletedProduct = products.splice(productIndex, 1)[0];

  // Mengembalikan respons dengan produk yang terhapus
  return new Response(
    JSON.stringify({
      message: "Delete successfully",
      deletedProduct,
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}

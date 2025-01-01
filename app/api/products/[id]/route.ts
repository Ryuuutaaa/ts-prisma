import { products } from "@/app/data/productData";
import { NextRequest } from "next/server";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await req.json();
    const productIndex = products.findIndex(
      (product) => product.id === parseInt(params.id)
    );

    if (productIndex === -1) {
      return new Response(JSON.stringify({ error: "Product not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    const updatedProduct = {
      id: parseInt(params.id),
      title: body.title || products[productIndex].title,
      description: body.description || products[productIndex].description,
      price: body.price || products[productIndex].price,
      category: body.category || products[productIndex].category,
      image: body.image || products[productIndex].image,
    };

    products[productIndex] = updatedProduct;

    return new Response(JSON.stringify(updatedProduct), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch {
    // Respons error saat body tidak valid
    return new Response(JSON.stringify({ error: "Invalid request body" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
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

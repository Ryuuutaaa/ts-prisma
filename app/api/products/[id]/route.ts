import { products } from "@/app/data/productData";
import { NextRequest } from "next/server";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await req.json();
  const { id, title, description, price, category, image } = body;

  const productIndex = products.findIndex(
    (product) => product.id == parseInt(params.id)
  );

  products[productIndex] = {
    id,
    title,
    description,
    price,
    category,
    image,
  };

  return Response.json(products[productIndex], { status: 200 });
}

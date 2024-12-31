import { products } from "@/app/data/productData";

// GET  : to get the data
export async function GET() {
  return Response.json(products);
}

// POST : to create the data

// PUT : to update the data

// DELETE : to delete the data

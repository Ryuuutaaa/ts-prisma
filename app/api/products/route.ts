import { products } from "@/app/data/productData";
import { NextRequest } from "next/server";

// GET  : to get the data
export async function GET() {
  return Response.json(products);
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
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const newProduct = {
      id: products.length + 1,
      title: body.title,
      description: body.description,
      price: body.price,
      category: body.category,
      image: body.image,
    };

    products.push(newProduct);

    return new Response(JSON.stringify(newProduct), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch {
    return new Response(
      JSON.stringify({ error: "Invalid JSON body or request format" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

// PUT : to update the data

// DELETE : to delete the data

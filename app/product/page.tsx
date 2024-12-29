import React from "react";
import ProductCard from "./ProductCard";

interface ProductsProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

const ProductPage = async () => {
  const res = await fetch("https://fakestoreapi.com/products?limit=2");
  const products: ProductsProps[] = await res.json();
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Our products</h1>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductPage;

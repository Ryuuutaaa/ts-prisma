import React, { Suspense } from "react";
import ProductCard from "./ProductCard";
import Loading from "../loading";

interface ProductsProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

const ProductPage = async () => {
  const res = await fetch("https://fakestoreapi.com/products?limit=5", {
    cache: "no-store",
  });
  const products: ProductsProps[] = await res.json();
  return (
    <div className="container mx-auto px-4 py-8">
      <p>Rendering time of this page {new Date().toLocaleTimeString()}</p>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Our products</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        <Suspense fallback={<Loading />}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default ProductPage;

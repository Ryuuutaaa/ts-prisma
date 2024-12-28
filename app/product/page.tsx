import React from "react";

interface ProductsProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

const ProductPage = async () => {
  const res = await fetch("https://fakestoreapi.com/products?limit=2");
  const products: ProductsProps[] = await res.json();
  console.log(products);
  return <div>{products.map((products) => products.title)} </div>;
};

export default ProductPage;

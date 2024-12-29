import React from "react";

interface Product {
  title: string;
  image: string;
  price: number;
}

interface ProductProps {
  product: Product;
}

const ProductCard = ({ product }: ProductProps) => {
  return (
    <div>
      <h1>{product.title}</h1>
    </div>
  );
};

export default ProductCard;

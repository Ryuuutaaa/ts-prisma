import Image from "next/image";
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
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg">
      <div className="relative h-48 w-full">
        <Image
          src={product.image}
          alt={product.title}
          layout="fill"
          objectFit="contain"
        />
      </div>

      <h2 className="text-sm font-bold text-gray-800 mb-2 truncate">
        {product.title}
      </h2>
    </div>
  );
};

export default ProductCard;

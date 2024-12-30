"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <div className="bg-blue-500 p-3">
      <nav>
        <div className="flex space-x-4">
          <div
            className={
              pathName === "/"
                ? "text-white bg-gray-500 px-3 py-2 rounded-md"
                : "text-gray-300 hover:text-white px-3 py-2 rounded-md"
            }
          >
            <Link href="/">Home</Link>
          </div>
          <div
            className={
              pathName === "/about"
                ? "text-white bg-gray-500 px-3 py-2 rounded-md"
                : "text-gray-300 hover:text-white px-3 py-2 rounded-md"
            }
          >
            <Link href="/about">About</Link>
          </div>

          <div
            className={
              pathName === "/product"
                ? "text-white bg-gray-500 px-3 py-2 rounded-md"
                : "text-gray-300 hover:text-white px-3 py-2 rounded-md"
            }
          >
            <Link href="/product">Product</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

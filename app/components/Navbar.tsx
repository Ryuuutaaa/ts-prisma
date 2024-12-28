import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/product">Product</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

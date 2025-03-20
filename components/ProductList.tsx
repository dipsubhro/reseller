import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductList = () => {
  const products = ["", "", "", ""];
  return (
    <div id="product" className="px-4 md:px-12 py-5 md:py-10 flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {products.map((product, index) => (
          <Link href="/product/123" key={index}>
            <Image
              src="/watch2.jpg"
              alt="img"
              width={1000}
              height={1000}
              className="max-w-[17rem] h-72 object-cover object-center rounded-lg"
            />

            <div className="mt-4">
              <h3 className="text-lg font-semibold text-blue-950">Product Name</h3>
              <p className="text-cyan-950 text-sm mt-1 font-medium">Price</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

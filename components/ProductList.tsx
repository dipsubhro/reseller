"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [startIndex, setStartIndex] = useState(0);
  const ITEMS_PER_PAGE = 5;

  useEffect(() => {
    axios.get("/api/fetch-products").then((res) => {
      setProducts(res.data.products || []);
    });
  }, []);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - ITEMS_PER_PAGE, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + ITEMS_PER_PAGE, products.length - ITEMS_PER_PAGE)
    );
  };

  const visibleProducts = products.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="px-4 md:px-12 py-10 w-full">
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className="p-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={handleNext}
          disabled={startIndex + ITEMS_PER_PAGE >= products.length}
          className="p-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          <ChevronRight />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5">
        {visibleProducts.map((product) => (
          <Link
            href={`/product/${product._id}`}
            key={product._id}
            className="bg-white p-4 rounded shadow hover:shadow-lg transition"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded"
            />
            <div className="mt-3">
              <h3 className="text-md font-semibold">{product.name}</h3>
              <p className="text-gray-600 font-medium mt-1">₹{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

// "use client"

// import axios from "axios";
// import { set } from "mongoose";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useEffect } from "react";

// interface Product {
//   _id: string;
//   name: string;
//   price: number;
//   image: string;

// };

// const ProductList = () => {
//   const [products, setProducts] = React.useState([]);
//   useEffect(() => {
//     axios.get("/api/fetch-products").then((res) => {
//       setProducts(res.data.products);
//     })
//   }, []);
//   return (
//     <div id="product" className="px-4 md:px-12 py-5 md:py-10 flex justify-center items-center">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
//         {products.map((product : Product, index) => (
//           <Link href={`/product/${product._id}`} key={index}>
//             <Image
//               src={product.image}
//               alt="img"
//               width={1000}
//               height={1000}
//               className="max-w-[17rem] h-72 object-cover object-center rounded-lg"
//             />

//             <div className="mt-4">
//               <h3 className="text-lg font-semibold text-blue-950">{product.name}</h3>
//               <p className="text-cyan-950 text-sm mt-1 font-medium">{product.price}</p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;

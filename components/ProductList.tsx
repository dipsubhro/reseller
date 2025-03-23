"use client"

import axios from "axios";
import { set } from "mongoose";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;

};

const ProductList = () => {
  const [products, setProducts] = React.useState([]);
  useEffect(() => {
    axios.get("/api/fetch-products").then((res) => {
      setProducts(res.data.products);
    })
  }, []);
  return (
    <div id="product" className="px-4 md:px-12 py-5 md:py-10 flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {products.map((product : Product, index) => (
          <Link href={`/product/${product._id}`} key={index}>
            <Image
              src={product.image}
              alt="img"
              width={1000}
              height={1000}
              className="max-w-[17rem] h-72 object-cover object-center rounded-lg"
            />

            <div className="mt-4">
              <h3 className="text-lg font-semibold text-blue-950">{product.name}</h3>
              <p className="text-cyan-950 text-sm mt-1 font-medium">{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

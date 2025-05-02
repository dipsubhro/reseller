"use client";

import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
}

const SearchPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    const searchTermFromUrl = searchParams.get("searchTerm");

    if (searchTermFromUrl) {
      setLoading(true);
      axios
        .get(`/api/search?searchTerm=${encodeURIComponent(searchTermFromUrl)}`)
        .then((response) => {
          setProducts(response.data.products);
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
        })
        .finally(() => setLoading(false));
    } else {
      setProducts([]);
    }
  }, [searchParams]);

  return (
    <div className="px-4 md:px-12 py-5 md:py-10">
      {loading ? (
        <p className="text-center text-gray-500">Searching...</p>
      ) : products.length === 0 ? (
        <p className="text-center text-gray-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {products.map((product) => (
            <Link href={`/product/${product._id}`} key={product._id}>
              <div>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={1000}
                  height={1000}
                  className="max-w-[17rem] h-72 object-cover object-center rounded-lg"
                />
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-blue-950">
                    {product.name}
                  </h3>
                  <p className="text-cyan-950 text-sm mt-1 font-medium">
                    ${product.price}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;

// "use client";

// import axios from "axios";
// import { Link } from "lucide-react";
// import Image from "next/image";
// import { useSearchParams } from "next/navigation";
// import React, { useEffect } from "react";

// interface Product {
//   _id: string;
//   name: string;
//   price: number;
//   image: string;

// };

// const SearchPage = () => {
//   const [products, setProducts] = React.useState([]);
//   const searchParams = useSearchParams();

//   useEffect(() => {
//     const searchTermFromUrl = searchParams.get("searchTerm");

//     if (searchTermFromUrl) {
//       axios
//         .get(`/api/search?searchTerm=${searchTermFromUrl}`)
//         .then((response) => setProducts(response.data.products)).catch((error) => {
//           console.log("error fetching search results");
//         })
//     }

//   }, [searchParams]);

//   return  <div id="product" className="px-4 md:px-12 py-5 md:py-10 flex justify-center items-center">
//   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
//     {products.map((product : Product, index) => (
//       <Link href={`/product/${product._id}`} key={index}>
//         <Image
//           src={product.image}
//           alt="img"
//           width={1000}
//           height={1000}
//           className="max-w-[17rem] h-72 object-cover object-center rounded-lg"
//         />

//         <div className="mt-4">
//           <h3 className="text-lg font-semibold text-blue-950">{product.name}</h3>
//           <p className="text-cyan-950 text-sm mt-1 font-medium">{product.price}</p>
//         </div>
//       </Link>
//     ))}
//   </div>
// </div>;
// };

// export default SearchPage;

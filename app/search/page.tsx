"use client";

import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
}

const ITEMS_PER_PAGE = 10;

const SearchPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");

  useEffect(() => {
    if (searchTerm) {
      setLoading(true);
      axios
        .get(
          `/api/search?searchTerm=${encodeURIComponent(
            searchTerm
          )}&page=${currentPage}&limit=${ITEMS_PER_PAGE}`
        )
        .then((response) => {
          setProducts(response.data.products);
          setTotalPages(response.data.totalPages);
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
        })
        .finally(() => setLoading(false));
    } else {
      setProducts([]);
    }
  }, [searchTerm, currentPage]);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="px-4 md:px-12 py-5 md:py-10">
      <h1 className="text-2xl font-semibold mb-5">
        Search Results for &quot;{searchTerm}&quot;
      </h1>
      {loading ? (
        <p className="text-center text-gray-500">Searching...</p>
      ) : products.length === 0 ? (
        <p className="text-center text-gray-500">No products found.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
          <div className="flex justify-center items-center mt-10 space-x-4">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="p-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
            >
              <ChevronLeft />
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="p-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
            >
              <ChevronRight />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default SearchPage;

"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

function Navbar() {

  const router = useRouter();

  const handlechange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const urlparams = new URLSearchParams(window.location.search);
    urlparams.set("searchTerm", e.target.value);

    const searchQuery = urlparams.toString();

    router.push(`/search?${searchQuery}`);
  };
  return (
    <nav className="px-4 md:px-12 py-4 md:py-6 bg-white text-black">
      <div className="flex justify-between items-center">
        <Link href="/" className="hidden md:inline-block text-lg font-semibold">
          {" "}
          Zwatches{" "}
        </Link>
        <div className="relative max-w-[300px] md:w-[400px]">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <Search className="h-4 w-4" />
          </div>
          <input
            type="text"
            onChange={handlechange}
            className="h-[36px] relative pl-10 border-[1px] border-blacl/[0.7] text-sm rounded-[8px] w-full py-2 px-3 focus:outline-none bg-transparent"
            placeholder="Search Zwatches"
          />
        </div>
        <Link href="/add-product">
          <button className="bg-[#212529] text-white px-3 py-2 rounded-md cursor-pointer">
            Add Product
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

"use client";

import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const SearchPage = () => {
  const searchParams = useSearchParams();

  useEffect(() => {
    const searchTermFromUrl = searchParams.get("searchTerm"); 

    if (searchTermFromUrl) {
      axios
        .get(`/api/search?searchTerm=${searchTermFromUrl}`)
        .then((response) => console.log("Products: ", response.data));
    }
  }, [searchParams]);

  return <div>SearchPage</div>;
};

export default SearchPage;

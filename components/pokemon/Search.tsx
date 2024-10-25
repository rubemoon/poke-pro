"use client";

import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";
import { useEffect, useRef, useState } from "react";
import { FiX, FiSearch } from "react-icons/fi"; 

const Search = ({ search }: { search?: string }) => {
  const router = useRouter();
  const initialRender = useRef(true);
  const [text, setText] = useState(search);

  const [query] = useDebounce(text, 750);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    if (!query) {
      router.push("/");
    } else {
      router.push(`?search=${query}`);
    }
  }, [query, router]);

  const clearSearch = () => {
    setText("");
    router.push("/");
  };

  return (
    <div className="flex justify-center w-[90%] mx-auto max-w-[1500px] relative mb-10 bg-white dark:bg-gray-900 rounded-md">
      <div className="relative w-full">
        <input
          type="text"
          value={text}
          placeholder="Search Pokemon..."
          onChange={(e) => setText(e.target.value)}
          className="block w-full rounded-md border-0 py-2 pl-10 pr-10 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary focus:outline-none sm:text-sm sm:leading-6 bg-white dark:bg-gray-800"
        />
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        {text && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <FiX className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Search;
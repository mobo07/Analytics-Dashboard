"use client";

import Image from "next/image";
import searchIcon from "../assets/icons/search-icon.svg";
import SearchBar from "./SearchBar";
import Backdrop from "./Backdrop";
import { useState } from "react";

export default function MobileSearch() {
  const [showSearchBar, setShowSearchBar] = useState(false);

  return (
    <>
      <span
        className="rounded-full border border-[var(--gray-200)] p-2 cursor-pointer dark:border-[var(--gray-700)] md:hidden"
        onClick={() => setShowSearchBar(!showSearchBar)}
      >
        {showSearchBar && (
          <div className="md:hidden">
            <Backdrop show={showSearchBar} setShow={setShowSearchBar} />
          </div>
        )}
        <Image src={searchIcon} alt="search-icon" />
      </span>
      {showSearchBar && (
        <div className="fixed w-[85%] max-w-72 top-24 left-[50%] -translate-x-[60%] z-[80] md:hidden">
          <SearchBar />
        </div>
      )}
    </>
  );
}

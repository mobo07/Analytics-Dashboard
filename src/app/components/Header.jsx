"use client";

import SearchBar from "./SearchBar";
import profilePhoto from "../assets/people/profile-photo.png";
import Image from "next/image";
import BellIcon from "./icons/BellIcon";
import ArrowDownIcon from "./icons/ArrowDownIcon";
import CalendarIcon from "./icons/CalendarIcon";
import logo from "../assets/logo.svg";
import MobileSearch from "./MobileSearch";
import { useContext } from "react";
import { SidebarContext } from "../context/SideBarContext";

export default function Header() {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext);

  return (
    <header className="sticky top-0 left-0 z-50 p-2 border-b border-[var(--gray-200)] flex items-center justify-between bg-[var(--gray-50)] shadow-sm dark:bg-[var(--dark-bg-primary)] dark:text-[var(--gray-500)] dark:border-[var(--gray-700)] sm:p-4">
      <h5 className="hidden font-semibold sm:block">Dashboard</h5>
      {/* Sidebar Menu Toggle */}
      <div className="sm:hidden">
        {!isSidebarOpen && (
          <Image
            src={logo}
            alt="logo"
            className="block mx-auto my-3 cursor-pointer"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          />
        )}
      </div>
      <div className="flex items-center">
        <div className="hidden md:block">
          <SearchBar />
        </div>
        <div className="flex items-center gap-3">
          <div className="text-sm flex items-center gap-3 font-semibold">
            <CalendarIcon />
            <p className="hidden text-nowrap sm:block">January 24, 2024</p>
            {/* This component only shows on small screen sizes */}
            <MobileSearch />
            <span className="rounded-full border border-[var(--gray-200)] p-2 cursor-pointer dark:border-[var(--gray-700)]">
              <BellIcon />
            </span>
          </div>
          {/* Profile */}
          <div className="p-2 rounded-[999px] lg:border lg:border[var(--gray-200)] flex items-center gap-2 dark:border-[var(--gray-700)]">
            <span className="rounded-full w-8 h-8">
              <Image
                src={profilePhoto}
                alt="profile-photo"
                className="w-full h-full object-fit"
              />
            </span>
            <div className="hidden lg:block">
              <p className="text-sm">Justin Bergson</p>
              <p className="text-xs text-[var(--gray-300)]">justin@gmail.com</p>
            </div>
            <span className="hidden lg:block">
              <ArrowDownIcon />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

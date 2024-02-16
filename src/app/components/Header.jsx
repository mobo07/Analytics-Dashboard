"use client";

import SearchBar from "./SearchBar";
import profilePhoto from "../assets/people/profile-photo.png";
import Image from "next/image";
import bellIcon from "../assets/icons/bell-icon.svg";
import arrowDownIcon from "../assets/icons/arrow-down.svg";
import calendarIcon from "../assets/icons/calender.svg";
import logo from "../assets/logo.svg";
import MobileSearch from "./MobileSearch";
import { useContext, useState } from "react";
import { SidebarContext } from "../context/SidebarContext";

export default function Header() {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  return (
    <header className="fixed top-0 left-0 sm:left-16 w-full sm:w-[calc(100vw-4rem)] z-50 px-4 sm:p-4 border-b border-[var(--gray-200)] flex items-center justify-between bg-[var(--gray-50)] shadow-sm dark:bg-[var(--dark-bg-primary)] dark:text-[var(--gray-500)] dark:border-[var(--gray-700)]">
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
            <Image
              src={calendarIcon}
              alt="calendar-icon"
              className="hidden sm:block"
            />
            <p className="hidden text-nowrap sm:block">January 24, 2024</p>
            {/* This component only shows on small screen sizes */}
            <MobileSearch />
            <span className="rounded-full border border-[var(--gray-200)] p-2 cursor-pointer dark:border-[var(--gray-700)]">
              <Image src={bellIcon} alt="bell-icon" />
            </span>
          </div>
          {/* Profile */}
          <div className="relative p-2 rounded-[999px] lg:border lg:border[var(--gray-200)] flex items-center gap-2 dark:border-[var(--gray-700)]">
            <span
              className="rounded-full w-8 h-8"
              onClick={() => setShowProfileDropdown(!showProfileDropdown)}
            >
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
            <span
              className="hidden lg:block"
              onClick={() => setShowProfileDropdown(!showProfileDropdown)}
            >
              <Image
                src={arrowDownIcon}
                alt="arrow-down-icon"
                className="cursor-pointer"
              />
            </span>
            {/* Profile drop down menu */}
            {showProfileDropdown && (
              <div className="absolute top-16 left-[-150px] z-50 w-full min-w-[187.75px] bg-white border border-[var(--gray-200)] rounded-md shadow-sm dark:bg-[var(--dark-bg-primary)] dark:border-[var(--gray-700)] lg:left-0">
                <span className="block w-full p-3 text-center border-b border-b-[var(--gray-200)] dark:border-b-[var(--gray-700)] text-[#34CAA5] text-sm">
                  justin@gmail.com
                </span>
                <span className="block w-full p-2 cursor-pointer hover:bg-[var(--gray-100)] dark:hover:bg-[var(--gray-700)]">
                  Profile
                </span>
                <span className="block w-full p-2 cursor-pointer hover:bg-[var(--gray-100)] dark:hover:bg-[var(--gray-700)]">
                  Settings
                </span>
                <span className="block w-full p-2 cursor-pointer text-[#ED544E] hover:bg-[var(--gray-100)] dark:hover:bg-[var(--gray-700)]">
                  Logout
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

"use client";

import Image from "next/image";
import logo from "../assets/logo.svg";
import { Tooltip } from "@mui/material";
import ThemeSwitcher from "../providers/ThemeSwitcher";
import MenuIcon from "./icons/MenuIcon";
import AnalyticsIcon from "./icons/AnalyticsIcon";
import UsersIcon from "./icons/UsersIcon";
import ProductsIcon from "./icons/ProductsIcon";
import DivisionIcon from "./DivisionIcon";
import InfoIcon from "./icons/InfoIcon";
import ForwardIcon from "./icons/ForwardIcon";
import SettingsIcon from "./icons/SettingsIcon";
import LogoutIcon from "./icons/LogoutIcon";
import { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { cn } from "../utils/cn";

export default function Sidebar() {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext);

  return (
    <div
      className={cn(
        "sidebar sticky top-0 left-0 z-50 w-0 py-3 h-screen overflow-y-scroll bg-[#F7F8FA] border-r border-[var(--gray-200)] transition-[width] ease-in-out dark:bg-[var(--dark-bg-primary)] dark:border-[var(--gray-700)] sm:w-16",
        isSidebarOpen ? "w-16" : "w-0"
      )}
    >
      <Image
        src={logo}
        alt="logo"
        className="block mx-auto my-3 cursor-pointer"
        onClick={() => {
          isSidebarOpen && setIsSidebarOpen(false);
        }}
      />
      <div className="w-full flex flex-col">
        <div className="w-full my-3 flex flex-col gap-3 items-center">
          <div className="selected icon cursor-pointer w-full flex items-center justify-center dark:after:bg-[#34CAA5]">
            <Tooltip title="Dashboard" placement="right" arrow>
              <MenuIcon />
            </Tooltip>
          </div>
          <div className="icon cursor-pointer w-full flex items-center justify-center">
            <Tooltip title="Analytics" placement="right" arrow>
              <AnalyticsIcon />
            </Tooltip>
          </div>
          <div className="icon cursor-pointer w-full flex items-center justify-center">
            <Tooltip title="Users" placement="right" arrow>
              <UsersIcon />
            </Tooltip>
          </div>
          <div className="icon cursor-pointer w-full flex items-center justify-center">
            <Tooltip title="Products" placement="right" arrow>
              <ProductsIcon />
            </Tooltip>
          </div>
          <div className="icon cursor-pointer w-full flex items-center justify-center">
            <Tooltip title="Item" placement="right" arrow>
              <DivisionIcon />
            </Tooltip>
          </div>
          <div className="icon cursor-pointer w-full flex items-center justify-center">
            <Tooltip title="Info" placement="right" arrow>
              <InfoIcon />
            </Tooltip>
          </div>
          {/* Theme toggle */}
          <ThemeSwitcher />
        </div>
        <div className="w-full mt-10 flex flex-col gap-3 items-center">
          <div className="icon cursor-pointer w-full flex items-center justify-center">
            <Tooltip title="Forward" placement="right" arrow>
              <ForwardIcon />
            </Tooltip>
          </div>
          <div className="icon cursor-pointer w-full flex items-center justify-center">
            <Tooltip title="Settings" placement="right" arrow>
              <SettingsIcon />
            </Tooltip>
          </div>
          <div className="icon cursor-pointer w-full flex items-center justify-center">
            <Tooltip title="Logout" placement="right" arrow>
              <LogoutIcon />
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}

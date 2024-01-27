"use client";
import LightModeIcon from "@mui/icons-material/LightMode";
import moonIcon from "../assets/icons/moon-icon.svg";
import Image from "next/image";

const ThemeToggle = ({ currentTheme, setTheme }) => {
  return (
    <div className="bg-white px-[5px] py-2 rounded-[999px] flex flex-col items-center gap-3 dark:bg-[var(--dark-bg-secondary)]">
      <LightModeIcon
        fontSize="medium"
        className="p-[2px] rounded-full bg-[#34CAA5] transition-colors duration-200 ease-in-out cursor-pointer dark:bg-transparent text-white"
        onClick={() => {
          currentTheme === "dark" && setTheme("light");
        }}
      />

      <div
        className="p-[1px] rounded-full dark:bg-[#34CAA5] transition-colors duration-200 ease-in-out cursor-pointer"
        onClick={() => {
          currentTheme === "light" && setTheme("dark");
        }}
      >
        <Image
          src={moonIcon}
          alt="moon-icon"
          className="cursor-pointer"
          onClick={() => {
            currentTheme === "dark" && setTheme("light");
          }}
        />
      </div>
    </div>
  );
};

export default ThemeToggle;

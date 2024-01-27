"use client";
import LightModeIcon from "@mui/icons-material/LightMode";
import MoonIcon from "../components/icons/MoonIcon";

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
      <MoonIcon setTheme={setTheme} currentTheme={currentTheme} />
    </div>
  );
};

export default ThemeToggle;

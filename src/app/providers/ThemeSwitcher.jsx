"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import ThemeToggle from "../components/ThemeToggle";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return <ThemeToggle currentTheme={currentTheme} setTheme={setTheme} />;
};

export default ThemeSwitcher;

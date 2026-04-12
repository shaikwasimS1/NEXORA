'use client';
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 px-4 py-2 rounded-lg border bg-white text-black dark:bg-black dark:text-white transition"
    >
      {dark ? "Light" : "Dark"}
    </button>
  );
}
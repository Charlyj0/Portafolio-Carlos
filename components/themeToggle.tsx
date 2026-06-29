"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="rounded-full border border-white/10 bg-white/5 p-3 transition-all duration-300 hover:rotate-12 hover:scale-110 hover:bg-white/10"
      aria-label="Cambiar tema"
    >
      {isDark ? (
        <FaSun className="text-yellow-400" size={18} />
      ) : (
        <FaMoon className="text-slate-700 dark:text-slate-300" size={18} />
      )}
    </button>
  );
}
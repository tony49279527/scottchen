"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

const THEME_STORAGE_KEY = "scottchen-theme";
const THEME_CHANGE_EVENT = "scottchen-theme-change";

function applyTheme(theme: Theme, animate = false) {
  const root = document.documentElement;

  if (animate) {
    root.classList.add("theme-transition");
    window.setTimeout(() => root.classList.remove("theme-transition"), 250);
  }

  root.dataset.theme = theme;
  root.style.colorScheme = theme;
}

function getStoredTheme() {
  try {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    return storedTheme === "light" || storedTheme === "dark" ? storedTheme : null;
  } catch {
    return null;
  }
}

export default function ThemeToggle({ isZh }: { isZh: boolean }) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const currentTheme =
      document.documentElement.dataset.theme === "light" ? "light" : "dark";
    setTheme(currentTheme);

    const media = window.matchMedia("(prefers-color-scheme: light)");
    const handleSystemTheme = (event: MediaQueryListEvent) => {
      if (getStoredTheme()) return;

      const nextTheme = event.matches ? "light" : "dark";
      applyTheme(nextTheme);
      setTheme(nextTheme);
    };
    const handleThemeChange = (event: Event) => {
      setTheme((event as CustomEvent<Theme>).detail);
    };

    media.addEventListener("change", handleSystemTheme);
    window.addEventListener(THEME_CHANGE_EVENT, handleThemeChange);

    return () => {
      media.removeEventListener("change", handleSystemTheme);
      window.removeEventListener(THEME_CHANGE_EVENT, handleThemeChange);
    };
  }, []);

  const isLight = theme === "light";
  const nextTheme: Theme = isLight ? "dark" : "light";
  const label = isZh
    ? isLight
      ? "切换到深色模式"
      : "切换到浅色模式"
    : isLight
      ? "Switch to dark theme"
      : "Switch to light theme";

  const toggleTheme = () => {
    applyTheme(nextTheme, true);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch {
      // The active theme still works for the current page when storage is blocked.
    }
    window.dispatchEvent(
      new CustomEvent<Theme>(THEME_CHANGE_EVENT, { detail: nextTheme })
    );
  };

  return (
    <button
      type="button"
      data-theme-toggle
      onClick={toggleTheme}
      className="theme-toggle-control inline-flex h-9 items-center justify-center gap-2 rounded-md border border-industry-slate-800 bg-industry-slate-900/60 px-2.5 text-industry-slate-300 transition-colors hover:border-industry-slate-700 hover:bg-industry-slate-800 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-industry-orange"
      aria-label={label}
      title={label}
    >
      {isLight ? (
        <svg
          aria-hidden="true"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
          />
        </svg>
      ) : (
        <svg
          aria-hidden="true"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <circle cx="12" cy="12" r="4" />
          <path
            strokeLinecap="round"
            d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"
          />
        </svg>
      )}
      <span className="hidden xl:inline text-xs font-bold">
        {isZh ? (isLight ? "深色" : "浅色") : isLight ? "Dark" : "Light"}
      </span>
    </button>
  );
}

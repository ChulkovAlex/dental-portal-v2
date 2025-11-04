"use client";

export function ThemeToggleButton() {
  return (
    <button
      type="button"
      onClick={() => document.documentElement.classList.toggle("dark")}
      className="px-3 py-1 rounded-xl border"
    >
      Тема
    </button>
  );
}

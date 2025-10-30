"use client";

import { ChevronDown } from "lucide-react";

export default function NavBar() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="flex items-center justify-end gap-6 px-8 py-4">
        <button className="relative p-2 text-slate-400 hover:text-slate-600">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full" />
        </button>
        <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-100">
          <div className="h-8 w-8 rounded-full bg-slate-300" />
          <span className="text-sm font-medium text-slate-900">John Doe</span>
          <ChevronDown className="text-[#838383]" />
        </button>
      </div>
    </header>
  );
}

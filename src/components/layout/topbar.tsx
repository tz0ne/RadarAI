"use client";

import { Bell, Search } from "lucide-react";

export default function Topbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">
      <div className="flex items-center gap-2 rounded-lg border px-3 py-2 w-80">
        <Search size={16} />
        <input
          className="w-full outline-none"
          placeholder="Search companies..."
        />
      </div>

      <div className="flex items-center gap-4">
        <Bell size={18} />

        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-200 font-bold">
          A
        </div>
      </div>
    </header>
  );
}

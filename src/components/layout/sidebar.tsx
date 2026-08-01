"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Search,
  Building2,
  Brain,
  Target,
  Bot,
  Settings,
} from "lucide-react";

const navigation = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "Search", href: "/search", icon: Search },
  { name: "Companies", href: "/companies", icon: Building2 },
  { name: "Intelligence", href: "/intelligence", icon: Brain },
  { name: "Opportunities", href: "/opportunities", icon: Target },
  { name: "AI Copilot", href: "/copilot", icon: Bot },
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="w-64 border-r bg-white">
      <div className="border-b p-6">
        <h1 className="text-2xl font-bold">RadarAI</h1>
      </div>

      <nav className="p-4 space-y-2">
        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-100 transition"
            >
              <Icon size={18} />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

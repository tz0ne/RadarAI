import { ReactNode } from "react";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-slate-100">
      <aside className="w-64 border-r bg-white">
        Sidebar
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="h-16 border-b bg-white flex items-center px-6">
          Top Navigation
        </header>

        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

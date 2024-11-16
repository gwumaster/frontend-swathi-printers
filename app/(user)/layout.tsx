"use client";

import { ReactNode } from "react";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { homeNavItems, userNavItems } from "@/lib/data";

export default function UserLayout({ children }: { children: ReactNode }) {
  const isLoggedIn = true; // Replace with your actual logic

  return (
    <div className="relative">
      {/* FloatingNav will appear for all user routes */}
      <FloatingNav navItems={isLoggedIn ? userNavItems : homeNavItems} />
      <main className="relative max-w-7xl mx-auto">{children}</main>
    </div>
  );
}

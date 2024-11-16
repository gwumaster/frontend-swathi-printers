"use client";

import { useState } from "react";
import { homeNavItems, userNavItems } from "@/lib/data";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Hero from "@/components/HomePage/Hero";
import AboutUs from "@/components/HomePage/AboutUs";
import { CardsGrid } from "@/components/HomePage/Cards";
import ContactUs from "@/components/HomePage/ContactUs";
import Footer from "@/components/HomePage/Footer";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <main className="relative flex justify-center items-center flex-col overflow-clip mx-auto">
      <FloatingNav navItems={isLoggedIn ? userNavItems : homeNavItems} />
      <div className="max-w-7xl w-full relative z-10 sm:px-10">
        <Hero />
        <AboutUs />
        <CardsGrid />
        <ContactUs />
      </div>
      <Footer />
    </main>
  );
}

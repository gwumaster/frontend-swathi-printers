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
    <main className="relative flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10">
      <div className="max-w-7xl w-full relative z-10">
        <FloatingNav navItems={isLoggedIn ? userNavItems : homeNavItems} />
        <Hero />
        <AboutUs />
        <CardsGrid />
        <ContactUs />
        <Footer />
      </div>
    </main>
  );
}

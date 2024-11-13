import Image from "next/image";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/lib/data";
import Hero from "@/components/Hero"; 
import AboutUs from "@/components/AboutUs";
import { CardsGrid } from "@/components/Cards";
import ContactUs from "@/components/ContactUs";


export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10">
      <div className="max-w-7xl w-full relative z-10">
        <FloatingNav navItems={navItems} />
        <Hero />
        <AboutUs />
        <CardsGrid />
        <ContactUs />
      </div>
    </main>
  );
}

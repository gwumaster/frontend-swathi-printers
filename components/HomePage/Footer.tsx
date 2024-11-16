import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-t from-yellow-400 to-yellow-300 text-neutral-800 py-10 w-full">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-14 md:gap-48">
          {/* Brand and Tagline */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-3xl font-bold text-amber-600">Swathi Printers</h2>
            <p className="mt-3 text-sm md:text-base">
              Bringing your ideas to life with high-quality printing services tailored for every occasion.
            </p>
          </div>

          {/* Social Media and Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-4">Connect with Us</h3>
            <p className="text-sm md:text-base mb-4">
              Follow us on social media for the latest updates and designs!
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-700 hover:text-blue-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-700 hover:text-blue-400"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-700 hover:text-pink-500"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-sm text-gray-700">
          &copy; {new Date().getFullYear()} Grow With Us. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
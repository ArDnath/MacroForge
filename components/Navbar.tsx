import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="sticky top-4 border-2 rounded-lg px-6 py-4 mx-4 mt-4 lg:px-8 lg:mx-8 flex justify-between items-center shadow-lg bg-white text-black">
      {/* Logo and Name */}
      <div className="flex items-center gap-3">
        <Link href="/">
          <Image
            src="/MacroForge.png"
            width={50}
            height={50}
            alt="MacroForge Logo"
            className="rounded-full cursor-pointer"
          />
        </Link>
        <h1 className="text-2xl font-bold tracking-tight">MacroForge</h1>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex items-center">
        <ul className="flex gap-6">
          {["Home", "Features", "Pricing", "Testimonials"].map(
            (item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="hover:text-green-600 transition-colors"
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>

      {/* Call to Action Button */}
      <div className="hidden md:block">
        <Link
          href="/signup"
          className="bg-green-950 text-white font-semibold px-5 py-3  rounded-lg hover:bg-green-600 transition"
        >
          Sign Up
        </Link>
      </div>
    </header>
  );
};

export default Navbar;

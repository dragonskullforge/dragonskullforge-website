"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-red-900"
          : "bg-black/60 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        {/* Business Name */}

        <Link href="/" className="flex flex-col">

          <h1 className="text-2xl font-bold text-white tracking-wide">
            Dragonskull Forge
          </h1>

          <span className="text-red-500 text-xs uppercase tracking-[0.3em]">
            Built for Legends
          </span>

        </Link>

        {/* Navigation */}

        <nav className="hidden md:flex items-center gap-8">

          <Link
            href="/"
            className="text-gray-300 hover:text-red-500 transition"
          >
            Home
          </Link>

          <Link
            href="/gallery"
            className="text-gray-300 hover:text-red-500 transition"
          >
            Gallery
          </Link>

          <Link
            href="/commission"
            className="text-gray-300 hover:text-red-500 transition"
          >
            Commission
          </Link>

          <Link
            href="/contact"
            className="text-gray-300 hover:text-red-500 transition"
          >
            Contact
          </Link>

        </nav>

      </div>
    </header>
  );
}
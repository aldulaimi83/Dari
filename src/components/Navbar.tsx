"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/youooo_logo.png" alt="Youooo" width={80} height={40} className="object-contain" priority />
          <div className="flex items-center gap-1.5">
            <span className="text-2xl font-bold text-emerald-600">Dari</span>
            <span className="text-lg text-gray-400 font-light">داري</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/properties?status=sale" className="text-gray-600 hover:text-emerald-600 transition-colors">Buy</Link>
          <Link href="/properties?status=rent" className="text-gray-600 hover:text-emerald-600 transition-colors">Rent</Link>
          <Link href="/properties" className="text-gray-600 hover:text-emerald-600 transition-colors">All Listings</Link>
          <Link href="/contact" className="text-gray-600 hover:text-emerald-600 transition-colors">Contact Us</Link>
          <Link href="/list" className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
            List Property
          </Link>
        </div>

        {/* Mobile burger */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t bg-white px-4 py-3 flex flex-col gap-3 text-sm">
          <Link href="/properties?status=sale" className="text-gray-700" onClick={() => setMenuOpen(false)}>Buy</Link>
          <Link href="/properties?status=rent" className="text-gray-700" onClick={() => setMenuOpen(false)}>Rent</Link>
          <Link href="/properties" className="text-gray-700" onClick={() => setMenuOpen(false)}>All Listings</Link>
          <Link href="/contact" className="text-gray-700" onClick={() => setMenuOpen(false)}>Contact Us</Link>
          <Link href="/list" className="text-emerald-600 font-semibold" onClick={() => setMenuOpen(false)}>+ List Property</Link>
        </div>
      )}
    </nav>
  );
}

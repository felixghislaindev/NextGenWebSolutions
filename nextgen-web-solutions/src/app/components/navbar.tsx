"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-white">
              NextGen<span className="text-gradient">Web</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#services"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Services
            </Link>
            <Link
              href="#portfolio"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="#contact"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Contact
            </Link>
            <Link
              href="#get-started"
              className="bg-white text-slate-950 px-4 py-2 rounded-lg hover:bg-slate-200 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="#services"
                className="block px-3 py-2 text-slate-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#portfolio"
                className="block px-3 py-2 text-slate-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="#contact"
                className="block px-3 py-2 text-slate-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="#get-started"
                className="block px-3 py-2 bg-white text-slate-950 rounded-lg hover:bg-slate-200 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

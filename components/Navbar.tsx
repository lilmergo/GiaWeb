'use client';

import { useState } from 'react';
import Link from 'next/link';

const pages = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Experience', href: '/experience' },
  { name: 'Projects-n-Stuff', href: '/projects-n-stuff' }
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white border border-black border-t-0 static">
      <div className="flex-grow flex justify-center items-center p-2.5">
        {/* Desktop Navigation */}
        <div className="hidden sm:flex justify-center border border-black">
          {pages.map((page) => (
            <Link
              key={page.name}
              href={page.href}
              className="my-2 mx-2 px-4 py-2 border-l border-r border-black transition-custom hover:px-6 hover:bg-white hover:border-l-2 hover:border-r-2"
            >
              {page.name}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="w-full flex sm:hidden justify-between items-center">
          <p className="text-black font-medium">GIA HANH NGUYEN</p>
          
          <button
            onClick={handleMenuToggle}
            className="text-black p-2"
            aria-label="menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-white border border-black border-t-0 z-50">
              {pages.map((page) => (
                <Link
                  key={page.name}
                  href={page.href}
                  onClick={handleMenuClose}
                  className="block px-4 py-3 border-b border-black hover:bg-gray-50 transition-colors"
                >
                  {page.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

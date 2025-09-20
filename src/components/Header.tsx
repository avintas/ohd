'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/shop', label: 'Shop' },
    { href: '/academy', label: 'Academy' },
    { href: '/extras', label: 'Extras' },
    { href: '/faq', label: 'FAQ' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="w-full bg-[#0a0e1a] py-4 px-4 md:px-6 2xl:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo - Left aligned */}
        <Link 
          href="/" 
          className="flex items-center justify-center px-4 py-2 md:px-6 md:py-3 bg-blue-600 rounded-full text-white font-bold text-sm md:text-base hover:bg-blue-700 transition-colors duration-200 border-2 border-[#4cc9f0] z-50 relative whitespace-nowrap"
          aria-label="OnlyHockey home"
        >
          Only Hockey
        </Link>
        
        {/* Desktop Navigation - Right aligned */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Main navigation">
          {menuItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href} 
              className={`transition-colors duration-200 text-sm lg:text-base font-medium ${
                isActive(item.href)
                  ? 'text-[#4cc9f0]'
                  : 'text-[#a0aec0] hover:text-[#4cc9f0]'
              }`}
              aria-label={item.label}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 z-50 relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={`block w-6 h-0.5 bg-[#a0aec0] transition-all duration-300 ${
            isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
          }`}></span>
          <span className={`block w-6 h-0.5 bg-[#a0aec0] transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-0' : ''
          }`}></span>
          <span className={`block w-6 h-0.5 bg-[#a0aec0] transition-all duration-300 ${
            isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
          }`}></span>
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" 
               onClick={() => setIsMobileMenuOpen(false)} />
        )}

        {/* Mobile Navigation Menu */}
        <nav className={`fixed top-0 right-0 h-full w-64 bg-[#0a0e1a] border-l border-[#4cc9f0] transform transition-transform duration-300 z-40 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`} aria-label="Mobile navigation">
          <div className="pt-20 px-6">
            {menuItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className={`block py-4 text-lg font-medium transition-colors duration-200 border-b border-gray-800 ${
                  isActive(item.href)
                    ? 'text-[#4cc9f0]'
                    : 'text-[#a0aec0] hover:text-[#4cc9f0]'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label={item.label}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}

import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#0a0e1a] py-6 md:py-12 px-4 md:px-6 2xl:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Main Footer Links */}
        <nav
          className="flex justify-center items-center gap-6 mb-4 md:mb-8"
          aria-label="Main footer navigation"
        >
          <Link
            href="/about"
            className="text-[#a0aec0] hover:text-[#4cc9f0] transition-colors duration-200"
            aria-label="Learn more about OnlyHockey"
          >
            About
          </Link>
          <Link
            href="/support"
            className="text-[#a0aec0] hover:text-[#4cc9f0] transition-colors duration-200"
            aria-label="Get product support"
          >
            Support
          </Link>
          <Link
            href="/privacy"
            className="text-[#a0aec0] hover:text-[#4cc9f0] transition-colors duration-200"
            aria-label="View privacy policy"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="text-[#a0aec0] hover:text-[#4cc9f0] transition-colors duration-200"
            aria-label="View terms of service"
          >
            Terms
          </Link>
        </nav>

        {/* Copyright and Legal */}
        <div className="border-t border-[#2d3748] pt-4 md:pt-8">
          <div className="flex flex-col items-center gap-2 md:gap-4 text-center">
            {/* Copyright */}
            <div className="text-sm text-[#718096]">
              © 2025 OnlyHockey, LLC. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

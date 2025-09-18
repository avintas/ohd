import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function PageLayout({ children, className = '' }: PageLayoutProps) {
  return (
    <div className={`min-h-screen bg-[#0a0e1a] text-white flex flex-col border-8 border-red-900 ${className}`}>
      <Header />
      <main className="flex-1 border-4 border-green-900">
        {children}
      </main>
      <Footer />
    </div>
  );
}

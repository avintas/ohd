import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://onlyhockey.com' : 'http://localhost:3000'),
  title: "OnlyHockey.com",
  description: "OnlyHockey.com App - Your ultimate hockey companion",
  openGraph: {
    title: "OnlyHockey.com - Hockey Trivia with Samantha",
    description: "Test your hockey knowledge with Samantha, your trivia master",
    images: [
      {
        url: "/pims/pim-1008.webp",
        width: 512,
        height: 512,
        alt: "Samantha - Hockey Trivia Master",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OnlyHockey.com - Hockey Trivia with Samantha',
    description: 'Test your hockey knowledge with Samantha, your trivia master',
    images: ['/pims/pim-1008.webp'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

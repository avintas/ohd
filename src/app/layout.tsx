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
  title: "OnlyHockey.com App",
  description: "OnlyHockey.com App - Your ultimate hockey companion",
  openGraph: {
    title: "OnlyHockey.com - Hockey Trivia with Samantha",
    description: "Test your hockey knowledge with Samantha, your trivia master",
    images: [
      {
        url: "/pims/pim-1008.webp",
        width: 260,
        height: 260,
        alt: "Samantha - Hockey Trivia Master",
      },
    ],
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

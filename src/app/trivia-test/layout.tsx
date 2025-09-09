import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hockey Trivia with Samantha | OnlyHockey.com",
  description: "Test your hockey knowledge with Samantha, your trivia master. Challenge yourself with themed question sets!",
  openGraph: {
    title: "Hockey Trivia with Samantha",
    description: "Test your hockey knowledge with themed trivia sets",
    images: [
      {
        url: "/pims/pim-1008.webp",
        width: 260,
        height: 260,
        alt: "Samantha - Hockey Trivia Master",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Hockey Trivia with Samantha",
    description: "Test your hockey knowledge with themed trivia sets",
    images: ["/pims/pim-1008.webp"],
  },
};

export default function TriviaTestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

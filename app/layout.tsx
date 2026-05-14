import type { Metadata } from "next";
export const viewport = {
  themeColor: "#0f0f0f",
};
import "./globals.css";

export const metadata: Metadata = {

  title: "Jash Deshani | Full Stack Developer",

  description:
    "Portfolio of Jash Deshani — Full Stack Developer building modern web applications using Next.js, React, Node.js, Tailwind CSS, and Socket.IO.",

  keywords: [
    "Jash Deshani",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Web Developer",
    "Portfolio",
  ],

  authors: [
    {
      name: "Jash Deshani",
    },
  ],

  creator: "Jash Deshani",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">

      <body>
        {children}
      </body>

    </html>
  );
}
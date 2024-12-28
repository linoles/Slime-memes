"use client";

import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Slime Memes</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content="Лучшие мемы со всего интернета" />
        <link rel="canonical" href="https://slime-memes.vercel.app/" />
        <meta name="keywords" content="мемы, слайм, лучшие, мемы со всего интернета, лучшие мемы, slime, memes, kamar, linoles, fun, comunity" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Linoles" />
        <meta name="copyright" content="Slime Memes" />
      </head>
      <body className={`${inter.className} antialiased h-full w-screen overflow-y-scroll overflow-x-hidden`}>{children}</body>
    </html>
  );
}

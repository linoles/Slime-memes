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
        <title>Slime Memes - Лучшие мемы со всего интернета</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${inter.className} antialiased h-full w-screen overflow-y-scroll overflow-x-hidden`}>{children}</body>
    </html>
  );
}

"use client";

import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased h-full w-screen overflow-y-scroll overflow-x-hidden`}>{children}</body>
    </html>
  );
}

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
        <meta name="description" content="Лучшие мемы со всего интернета. Мемы, слайм, лучшие, мемы со всего интернета, лучшие мемы, slime, memes, kamar, linoles, fun, comunity" />
        <meta name="keywords" content="мемы, слайм, лучшие, мемы со всего интернета, лучшие мемы, slime, memes, kamar, linoles, fun, comunity" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Linoles" />
        <meta name="copyright" content="Slime Memes" />
        <meta property="og:title" content="Slime Memes - Лучшие мемы со всего интернета" />
        <meta property="og:description" content="Лучшие мемы со всего интернета. Мемы, слайм, лучшие, мемы со всего интернета, лучшие мемы, slime, memes, kamar, linoles, fun, comunity" />
        <meta property="og:image" content="https://slime-memes.vercel.app/og-image.png" />
        <meta property="og:site_name" content="Slime Memes" />
        <meta property="og:url" content="https://slime-memes.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@slime_meme" />
        <meta name="twitter:creator" content="@Linoles" />
        <meta name="twitter:title" content="Slime Memes - Лучшие мемы со всего интернета" />
        <meta name="twitter:description" content="Лучшие мемы со всего интернета. Мемы, слайм, лучшие, мемы со всего интернета, лучшие мемы, slime, memes, kamar, linoles, fun, comunity" />
        <meta name="twitter:image" content="https://slime-memes.vercel.app/og-image.png" />
      </head>
      <body className={`${inter.className} antialiased h-full w-screen overflow-y-scroll overflow-x-hidden`}>{children}</body>
    </html>
  );
}

import { Inter, Nunito_Sans, Roboto_Condensed, Tektur } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
export const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
});
export const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
});
export const tektur = Tektur({
  subsets: ["latin", "cyrillic"],
  variable: "--font-tektur",
})
export const chapterStyle = "flex flex-col items-center justify-center relative ";
export const chapterHeadingStyle = `text-[5cqi] font-medium text-slate-700 mb-[10px] typing text-center ${tektur.className}`;
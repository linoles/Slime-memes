import { Inter, Nunito_Sans, Roboto_Condensed, Tektur, Rubik_Vinyl } from "next/font/google";

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
export const rubikVinyl = Rubik_Vinyl({
  subsets: ["latin", "cyrillic"],
  variable: "--font-rubik-vinyl",
  weight: "400",
})
export const chapterStyle = "flex flex-col items-center justify-center relative ";
export const chapterHeadingStyle = `ml3:text-[5cqi] ml2:text-[7cqi] ml1:text-[9cqi] text-[10cqi] font-medium text-slate-700 mb-[10px] typing text-center ${tektur.className}`;
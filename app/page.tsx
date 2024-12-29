"use client";

import "@/app/ui/global.css";
import GreetPage from "@/app/ui/greetPage";
import { PlusesCards } from "./ui/card";
import { chapterHeadingStyle, chapterStyle } from "./ui/fonts";
import { GoodReviews } from "./ui/review";
import { BestMemes } from "./ui/meme";

export default function Page() {
  return (
    <main className="h-screen w-screen overflow-x-hidden bg-gradient-to-b from-slate-100 to-white pt-[45vh]">
      <GreetPage />
      <div className={chapterStyle + "mt-[45vh]"}>
        <span className={chapterHeadingStyle}>Что я могу получить?</span>
        <PlusesCards />
      </div>
      <div className={chapterStyle + "mt-[30px]"}>
        <span className={chapterHeadingStyle}>Отзывы подписчиков</span>
        <GoodReviews />
      </div>
      <div className={chapterStyle + "mt-[30px]"}>
        <span className={chapterHeadingStyle}>Обзор мемов</span>
        <BestMemes />
      </div>
    </main>
  );
}

"use client";

import "@/app/ui/global.css";
import GreetPage from "@/app/ui/greetPage";
import { PlusesCards } from "./ui/card";
import { chapterHeadingStyle, chapterStyle } from "./ui/fonts";
import { GoodReviews } from "./ui/review";
import { BestMemes } from "./ui/meme";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    const container = document.createElement("div");
    container.className = "fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50";
    const alert = document.createElement("div");
    alert.className = "bg-white p-4 rounded-lg shadow-lg w-96 flex flex-col justify-center items-center";
    const title = document.createElement("h2");
    title.className = "text-center text-2xl font-bold mb-4";
    title.textContent = "Телеграм-канал @prizrako";
    const text = document.createElement("p");
    text.className = "text-center";
    text.textContent = "Хотите пообщаться или вам нужна психологическая помощь? Тогда вам поможет этот канал (Бот)";
    const butDiv = document.createElement("div");
    butDiv.className = "flex justify-center mt-4 gap-4";
    const button = document.createElement("button");
    button.className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";
    button.textContent = "Зайти";
    const button2 = document.createElement("button");
    button2.className = "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded";
    button2.textContent = "Закрыть";
    button.onclick = () => {
      window.open("https://t.me/prizrako", "_blank");
      container.remove();
    };
    button2.onclick = () => container.remove();
    alert.appendChild(title);
    alert.appendChild(text);
    butDiv.appendChild(button);
    butDiv.appendChild(button2);
    alert.appendChild(butDiv);
    container.appendChild(alert);
    document.body.appendChild(container);
  })
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

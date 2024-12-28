"use client";

import "@/app/ui/global.css";
import GreetPage from "@/app/ui/greetPage";
import { PlusesCards } from "./ui/card";
import { tektur } from "./ui/fonts";

export default function Page() {
  return (
    <main className="h-screen w-screen overflow-x-hidden bg-gradient-to-b from-slate-100 to-white pt-[45vh]">
      <GreetPage />
      <div className="flex flex-col items-center justify-center relative mt-[45vh]">
        <span
          className={`text-[5cqi] font-medium text-slate-700 mb-[10px] typing text-center ${tektur.className}`}
        >
          Что я могу получить?
        </span>
        <PlusesCards />
      </div>
    </main>
  );
}

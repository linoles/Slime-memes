"use client";

import "@/app/ui/global.css";
import GreetPage from "@/app/ui/greetPage";
import { PlusesCards } from "./ui/card";

export default function Page() {
  return (
    <main className="h-screen w-screen overflow-x-hidden bg-gradient-to-b from-slate-100 to-white pt-[45vh]">
      <GreetPage />
      <div className="flex flex-col items-center justify-center relative mt-[45vh]">
        <p className="text-3xl font-medium text-slate-700 text-[1.5em]">
          Что я могу получить?
        </p>
        <PlusesCards />
      </div>
    </main>
  );
}
'use client';

import { questions } from "../lib/definitions";
import { robotoCondensed } from "./fonts";

export const FAQ = () => {
  return (
    <div>
      {questions.map((question) => (
        <div className="flex flex-col items-center justify-center w-full h-full cursor-pointer">
          <h1 className="lg:text-7xl md:text-5xl sm:text-4xl text-3xl font-bold text-slate-800 text-center">
            {question.question}
          </h1>
          <h2 className={`${robotoCondensed.className} lg:text-4xl md:text-3xl sm:text-2xl text-gray-700 font-medium text-center`}>
            {question.answer}
          </h2>
        </div>
      ))}
    </div>
  )
}
import Link from "next/link";
import { inter } from "./fonts";

export default function GreetPage() {
  return (
    <Link
      href="https://t.me/slimememes08"
      className="flex flex-col items-center justify-center w-full h-fit cursor-pointer left-appearence-trans"
    >
      <div className="flex flex-col items-center justify-center w-full h-full cursor-pointer">
        <h1 className="lg:text-7xl md:text-5xl sm:text-4xl text-3xl font-bold text-slate-800 text-center">
          Slime Memes
        </h1>
        <h2 className={`${inter.className} lg:text-4xl md:text-3xl sm:text-2xl text-gray-700 font-medium text-center`}>
          Лучшие мемы со всего интернета
        </h2>
      </div>
    </Link>
  );
}

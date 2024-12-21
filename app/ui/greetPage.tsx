import Link from "next/link";
import { inter } from "./fonts";

export default function GreetPage() {
  return (
    <Link
      href="https://t.me/slimememes08"
      className="flex flex-col items-center justify-center w-full h-full left-appearence-trans cursor-pointer"
    >
      <div className="flex flex-col items-center justify-center w-full h-full left-appearence-trans cursor-pointer">
        <h1 className="text-7xl font-bold text-slate-800">Slime Memes</h1>
        <h2 className={`${inter.className} text-4xl text-gray-700 font-medium`}>
          Лучшие мемы со всего интернета
        </h2>
      </div>
    </Link>
  );
}

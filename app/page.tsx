import "@/app/ui/global.css";
import GreetPage from "@/app/ui/greetPage";
import { PlusesCards } from "./ui/card";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-b from-slate-50 to-white overflow-x-hidden">
      <GreetPage />
      <div className="flex flex-col items-center justify-center relative top-full pb-20 bg-white w-full">
        <p className="text-3xl font-medium text-slate-700">
          Что я могу получить?
        </p>
        <PlusesCards />
      </div>
    </main>
  );
}

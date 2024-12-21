import "@/app/ui/global.css";
import GreetPage from "@/app/ui/greetPage";
import { PlusesCards } from "./ui/card";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-slate-100">
      <GreetPage />
      <div className="flex flex-col items-center justify-center relative h-fit top-full pb-20 bg-white w-full">
        <p className="text-3xl font-medium text-slate-700">Что я могу получить?</p>
        <div className="flex flex-col items-start justify-center w-full h-fit">
          <PlusesCards />
        </div>
      </div>
    </main>
  );
}

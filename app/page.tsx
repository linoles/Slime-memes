import "@/app/ui/global.css";
import GreetPage from "./ui/greetPage";
import clsx from "clsx";

export default function Page() {
  return (
    <main className="flex flex-row h-screen bg-slate-100">
      <GreetPage />
    </main>
  );
}

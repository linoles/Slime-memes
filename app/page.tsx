import "@/app/ui/global.css";
import GreetLeft from "@/app/ui/greetLeft";
import clsx from "clsx";

export default function Page() {
  return (
    <main className="flex flex-row h-screen bg-slate-50">
      <GreetLeft />
      <img
        src="/mainView.png"
        alt="main"
        className={clsx("w-1/2 h-full object-cover", "hidden xl:block")}
      />
    </main>
  );
}

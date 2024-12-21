import { nunitoSans } from "@/app/ui/fonts";
import LoginButton from "@/app/ui/loginButton";

export default function GreetLeft() {
  return (
    <div className="h-full gap-5 w-full xl:w-1/2 flex flex-col items-center justify-center xl:border-r-4 xl:border-r-slate-800">
      <div className="w-full xl:w-1/2 flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-slate-800 tracking-wider text-center">
          WELCOME
        </h1>
        <p
          className={`${nunitoSans.className} text-3xl text-zinc-900 font-extrabold mt-2`}
        >
          SLNP To-do list
        </p>
      </div>
      <div className="w-full h-min flex justify-center">
        <LoginButton />
      </div>
    </div>
  );
}

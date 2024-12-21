import "@/app/ui/global.css";
import LoginForm from "@/app/ui/loginForm";

export default function Page() {
  return (
    <main className="bg-slate-50 flex flex-col items-center justify-center h-full w-full">
      <h1 className="text-5xl font-bold">Login</h1>
      <LoginForm />
    </main>
  )
}
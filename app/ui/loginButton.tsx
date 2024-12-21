"use client";

import { inter } from "@/app/ui/fonts";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function LoginButton() {
  const pathname = usePathname();

  const handleLoginClick = () => {
    const loginPath = "/login";
    if (pathname !== loginPath) {
      window.location.href = loginPath;
    }
  };

  return (
    <div
      className={`flex justify-center items-center w-44 h-14 bg-zinc-500 text-slate-50 rounded-3xl cursor-pointer`}
      onClick={handleLoginClick}
    >
      <p className={`${inter.className} text-3xl`}>login</p>
    </div>
  );
}


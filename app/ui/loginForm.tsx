'use client';

import { handleLogin } from "@/app/lib/actions";
import { useActionState } from "react";
import { authenticate } from "../lib/actions"

export default function LoginForm() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  )

  return (
    <div>
      <form action={formAction}></form>
    </div>
  )
}
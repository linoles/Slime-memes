/* "use server";

import { signIn } from "@/auth";
import AuthError from "next-auth";

export async function handleLogin(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      return "Invalid credentials.";
    }
    throw error;
  }
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      return "Invalid credentials.";
    }
    throw error;
  }
} */
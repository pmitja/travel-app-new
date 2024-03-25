import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

import { auth } from "@/auth";

export const currentUser = async () => {
  const session = await auth();

  return session?.user;
};
"use server";

import { signIn } from "@/lib/auth";

export const magicLink = async (formData: FormData) => {
  await signIn("resend", formData);
};

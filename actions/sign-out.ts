"use server";

import { signOut as handleSignOut } from "@/lib/auth";

export const signOut = async () => {
  await handleSignOut();
};

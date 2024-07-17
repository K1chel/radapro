import NextAuth from "next-auth";
import { render } from "@react-email/render";
import Resend from "next-auth/providers/resend";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import { MagicLinkEmail } from "@/components/emails/magic-link-email";
import { db } from "@/lib/db";

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(db),
  providers: [
    Resend({
      from: "Acme <onboarding@resend.dev>",
      sendVerificationRequest: async function ({
        identifier: email,
        url,
        provider: { server, from },
      }) {
        const emailHtml = render(MagicLinkEmail({ url }));
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.AUTH_RESEND_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from,
            to: email,
            subject: "Sign in to Your App",
            html: emailHtml,
          }),
        });
        if (!res.ok) {
          throw new Error("Failed to send verification email");
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/sign-in",
    verifyRequest: "/auth/verify-request",
    error: "/auth/error",
  },
});

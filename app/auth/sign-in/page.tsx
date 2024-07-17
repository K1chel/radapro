"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { magicLink } from "@/actions/magic-link";
import { ErrorMessage } from "@/components/error-message";
import { loginSchema } from "@/lib/schemas";
import { cn } from "@/lib/utils";
import { redirect } from "next/navigation";

const SignInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    const formData = new FormData();
    formData.append("email", data.email);

    try {
      await magicLink(formData).then(() => redirect("/"));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-md mx-auto w-full px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center gap-y-4 w-full"
      >
        <div className="w-full">
          <label className="text-sm font-semibold">Email</label>
          <input
            placeholder="email@email.com"
            className={cn(
              "w-full p-2 rounded border",
              isSubmitting && "opacity-50 cursor-not-allowed"
            )}
            {...register("email")}
            disabled={isSubmitting}
          />
        </div>
        <ErrorMessage message={errors.email?.message} />
        <button
          className={cn(
            "w-full bg-slate-200 p-2 rounded",
            isSubmitting && "opacity-50 cursor-not-allowed"
          )}
          type="submit"
          disabled={isSubmitting}
        >
          Send Magic Link
        </button>
      </form>
    </div>
  );
};

export default SignInPage;

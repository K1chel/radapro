"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { redirect } from "next/navigation";
import Image from "next/image";
import { Loader2Icon } from "lucide-react";

import { magicLink } from "@/actions/magic-link";
import { ErrorMessage } from "@/components/error-message";
import { loginSchema } from "@/lib/schemas";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
    <div className="w-full flex flex-col space-y-5">
      <div className="flex items-center gap-x-3 justify-center">
        <Image src="/logo.svg" alt="Radapro Logo" width={55} height={55} />
        <h3 className="text-lg font-semibold">Radapro</h3>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center gap-y-4 w-full"
      >
        <div className="w-full">
          <label className="text-sm font-semibold">Email</label>
          <Input
            placeholder="email@email.com"
            className={cn(
              "w-full input input-bordered input-primary",
              isSubmitting && "opacity-50 cursor-not-allowed"
            )}
            {...register("email")}
            disabled={isSubmitting}
          />
        </div>
        <ErrorMessage message={errors.email?.message} />
        <Button
          className={cn(
            "w-full btn btn-primary",
            isSubmitting && "opacity-75 cursor-not-allowed"
          )}
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="flex items-center gap-x-2">
              <Loader2Icon className="size-5 animate-spin" />
              <p>Sending...</p>
            </div>
          ) : (
            "Send Magic Link"
          )}
        </Button>
      </form>
    </div>
  );
};

export default SignInPage;

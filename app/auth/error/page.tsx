import Link from "next/link";
import { TriangleAlertIcon } from "lucide-react";

const ErrorPage = () => {
  return (
    <div className="flex flex-col gap-y-5 items-center justify-center">
      <TriangleAlertIcon className="size-12 text-red-500" />
      <div className="flex flex-col gap-y-2 items-center justify-center text-center">
        <h3 className="text-2xl font-bold">Oops! Something Went Wrong.</h3>
        <span className="text-base text-black/70 tracking-tighter">
          It looks like the magic link you used is either expired or invalid.
          Please try logging in again or request a{" "}
          <Link href="/auth/sign-in" className="underline text-primary">
            new magic link.
          </Link>
        </span>
      </div>
    </div>
  );
};

export default ErrorPage;

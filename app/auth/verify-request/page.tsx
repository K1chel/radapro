import { MailCheckIcon } from "lucide-react";
import Link from "next/link";

const VerifyRequest = () => {
  return (
    <div className="flex flex-col gap-y-5 items-center justify-center">
      <MailCheckIcon className="size-12 text-primary" />
      <div className="flex flex-col gap-y-2 items-center justify-center text-center">
        <h3 className="text-2xl font-bold">Check your email</h3>
        <p className="text-base text-black/70 tracking-tighter">
          We emailed a magic link to your email address. Click the link to log
          in. If you didn&apos;t receive the email, please check your spam
          folder or you can try{" "}
          <Link href="/auth/sign-in" className="text-primary underline">
            resending the email
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default VerifyRequest;

import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const AuthLayout = async ({ children }: Props) => {
  const session = await auth();

  if (session) redirect("/dashboard");

  return (
    <div className="h-screen max-h-screen w-full flex items-center justify-center px-4 bg-primary/10">
      <main className="max-w-md mx-auto w-full px-6 py-12 rounded-2xl bg-white drop-shadow-lg">
        {children}
      </main>
    </div>
  );
};

export default AuthLayout;

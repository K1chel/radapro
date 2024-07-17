import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const AuthLayout = async ({ children }: Props) => {
  const session = await auth();

  if (session) redirect("/dashboard");

  return (
    <div className="h-screen flex items-center justify-center">{children}</div>
  );
};

export default AuthLayout;

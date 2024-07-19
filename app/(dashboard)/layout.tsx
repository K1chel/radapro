import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = async ({ children }: Props) => {
  const session = await auth();

  if (!session) redirect("/auth/sign-in");

  return <div>{children}</div>;
};

export default DashboardLayout;

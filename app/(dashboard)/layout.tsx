import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import { Footer, Navbar, Sidebar } from "./_components";
import { ThemeProvider } from "@/providers/theme-provider";
import { ToastProvider } from "@/providers/toast-provider";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = async ({ children }: Props) => {
  const session = await auth();

  if (!session) redirect("/auth/sign-in");

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ToastProvider />
      <div className="flex flex-col min-h-screen h-full">
        <Navbar />
        <Sidebar />
        <main className="flex-1 mt-20 md:pl-24 xl:pl-[220px] w-full dark:bg-[#0a0a0a]">
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default DashboardLayout;

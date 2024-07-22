"use client";

import { LogOutIcon } from "lucide-react";
import Image from "next/image";
import { useTransition } from "react";
import Link from "next/link";

import { signOut } from "@/actions/sign-out";
import { SidebarItem } from ".";

import { SIDEBAR_ITEMS } from "@/constants";

export const Sidebar = () => {
  const [isPending, startTransition] = useTransition();

  const onSubmit = async () => {
    startTransition(async () => {
      await signOut();
    });
  };

  return (
    <aside className="fixed top-0 h-full z-50 dark:bg-[#0a0a0a] dark:border-r bg-neutral-50 md:w-24 xl:w-[220px] hidden md:block">
      <div className="flex flex-col h-full">
        <Link
          href="/dashboard"
          className="h-20 flex items-center justify-center xl:justify-start px-4 gap-x-1.5"
        >
          <Image src="/logo.png" alt="Radapro Logo" width={56} height={56} />
          <span className="hidden xl:block font-semibold text-xl">Radapro</span>
        </Link>
        <div className="flex flex-col flex-1 px-4 py-5 gap-y-3">
          {SIDEBAR_ITEMS.map((item) => (
            <SidebarItem
              key={item.href}
              name={item.name}
              icon={item.icon}
              href={item.href}
              disabled={isPending}
            />
          ))}
        </div>
        <div className="px-4 py-5">
          <form onSubmit={onSubmit}>
            <SidebarItem
              disabled={isPending}
              name="Log Out"
              icon={LogOutIcon}
            />
          </form>
        </div>
      </div>
    </aside>
  );
};

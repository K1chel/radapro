"use client";

import { Loader2Icon, LogOutIcon, MenuIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState, useTransition } from "react";
import { usePathname } from "next/navigation";
import { useMedia } from "react-use";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { signOut } from "@/actions/sign-out";
import { MobileSidebarItem } from ".";

import { SIDEBAR_ITEMS } from "@/constants";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  const isMobile = useMedia("(max-width: 768px)", false);

  const onSubmit = async () => {
    startTransition(async () => {
      await signOut();
    });
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  if (!isMounted) {
    return (
      <Button size="icon" variant="outline" disabled>
        <Loader2Icon className="size-5 animate-spin text-muted-foreground" />
      </Button>
    );
  }

  if (!isMobile) {
    return null;
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild className="outline-none">
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="space-y-5">
          <div className="flex items-center justify-start gap-x-2">
            <Image src="/logo.png" alt="Radapro Logo" width={50} height={50} />
            <span className="text-lg font-semibold">Radapro</span>
          </div>
          <div className="flex flex-col gap-y-3">
            {SIDEBAR_ITEMS.map((item) => (
              <MobileSidebarItem
                key={item.href}
                name={item.name}
                icon={item.icon}
                href={item.href}
                disabled={isPending}
              />
            ))}
          </div>
          <form onSubmit={onSubmit}>
            <MobileSidebarItem
              name="Log Out"
              icon={LogOutIcon}
              disabled={isPending}
            />
          </form>
        </div>
      </SheetContent>
    </Sheet>
  );
};

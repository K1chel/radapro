"use client";

import { Loader2Icon, LogOutIcon, MenuIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState, useTransition } from "react";
import { useMedia } from "react-use";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { signOut } from "@/actions/sign-out";

export const MobileMenu = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isPending, startTransition] = useTransition();

  const isMobile = useMedia("(max-width: 768px)", false);

  const onSubmit = async () => {
    startTransition(async () => {
      await signOut();
    });
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
    <Sheet>
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
            <p>ITEM 1</p>
            <p>ITEM 2</p>
            <p>ITEM 3</p>
          </div>
          <form onSubmit={onSubmit}>
            <Button className="w-full" disabled={isPending}>
              <LogOutIcon className="size-5 mr-2" />
              Log Out
            </Button>
          </form>
        </div>
      </SheetContent>
    </Sheet>
  );
};

"use client";

import * as React from "react";
import { MonitorSmartphone, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="p-0">
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="rounded-none flex items-center gap-x-3"
        >
          <Sun className="size-4" />
          Light
        </DropdownMenuItem>
        <DropdownMenuSeparator className="m-0 p-0" />
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="rounded-none flex items-center gap-x-3"
        >
          <Moon className="size-4" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuSeparator className="m-0 p-0" />
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="rounded-none flex items-center gap-x-3"
        >
          <MonitorSmartphone className="size-4" />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

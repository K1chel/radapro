"use client";

import { Loader2Icon } from "lucide-react";
import { notFound } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserAvatar } from "@/components/user-avatar";
import { useCurrentUser } from "@/hooks/use-current-user";
import { Avatar } from "@/components/ui/avatar";

export const UserMenu = () => {
  const { isLoading, user } = useCurrentUser();

  if (isLoading)
    return (
      <Avatar className="flex items-center justify-center border">
        <Loader2Icon className="size-4 animate-spin text-muted-foreground" />
      </Avatar>
    );

  if (!user) notFound();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <UserAvatar src={user.avatarUrl} email={user.email} />
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={10} className="mr-4 w-[170px]">
        <p className="text-xs text-center text-muted-foreground truncate p-1">
          {user.email}
        </p>
        <DropdownMenuSeparator className="m-0 p-0" />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

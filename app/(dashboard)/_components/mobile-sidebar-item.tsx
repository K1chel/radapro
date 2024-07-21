"use client";

import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
  name: string;
  icon: LucideIcon;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
};

export const MobileSidebarItem = ({
  icon: Icon,
  name,
  href,
  onClick,
  disabled,
}: Props) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = href === pathname;

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    if (href) {
      router.push(href);
    }
  };

  return (
    <Button
      className={cn(
        "w-full justify-start flex items-center gap-x-3",
        !isActive && "text-neutral-600 dark:text-neutral-400"
      )}
      variant={isActive ? "default" : "outline"}
      onClick={handleClick}
      disabled={disabled}
    >
      <Icon className="size-5" />
      <span>{name}</span>
    </Button>
  );
};

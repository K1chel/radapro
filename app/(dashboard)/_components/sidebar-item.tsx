"use client";

import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { Button, ButtonProps } from "@/components/ui/button";
import { ActionTooltip } from "@/components/action-tooltip";
import { cn } from "@/lib/utils";

type Props = {
  name: string;
  icon: LucideIcon;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: ButtonProps["variant"];
  className?: string;
};

export const SidebarItem = ({
  icon: Icon,
  name,
  disabled,
  onClick,
  href,
  variant,
  className,
}: Props) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = href === pathname;
  const btnVariant = variant || (isActive ? "default" : "ghost");

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    if (href) {
      router.push(href);
    }
  };

  return (
    <ActionTooltip
      name={name}
      side="right"
      sideOffset={17}
      className="hidden md:block xl:hidden"
    >
      <Button
        className={cn(
          "w-full xl:justify-start justify-center flex items-center gap-x-3",
          !isActive && "text-neutral-600 dark:text-neutral-400",
          className
        )}
        variant={btnVariant}
        onClick={handleClick}
        disabled={disabled}
      >
        <Icon className="size-5" />
        <span className="hidden xl:block">{name}</span>
      </Button>
    </ActionTooltip>
  );
};

"use client";

import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { ActionTooltip } from "@/components/action-tooltip";

type Props = {
  name: string;
  icon: LucideIcon;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
};

export const SidebarItem = ({
  icon: Icon,
  name,
  disabled,
  onClick,
  href,
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
    <ActionTooltip
      name={name}
      side="right"
      sideOffset={17}
      className="hidden md:block xl:hidden"
    >
      <Button
        className="w-full justify-center xl:justify-start flex items-center gap-x-3"
        variant={isActive ? "default" : "outline"}
        onClick={handleClick}
        disabled={disabled}
      >
        <Icon className="size-5" />
        <span className="hidden xl:block">{name}</span>
      </Button>
    </ActionTooltip>
  );
};

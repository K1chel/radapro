import { FileStackIcon, LayoutDashboardIcon } from "lucide-react";

export const SIDEBAR_ITEMS = [
  {
    name: "Dashboard",
    icon: LayoutDashboardIcon,
    href: "/dashboard",
  },
  {
    name: "Resumes",
    icon: FileStackIcon,
    href: "/resumes",
  },
] as const;

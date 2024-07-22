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

type Title = {
  title: string;
  subtitle: string;
};

type NavbarTitles = {
  [key: string]: Title;
};

export const NAVBAR_TITLES: NavbarTitles = {
  "/dashboard": { title: "Dashboard", subtitle: "Welcome to the home page" },
  "/resumes": {
    title: "Resumes",
    subtitle: "Upload or delete your resumes here",
  },
  "/resumes/[resumeId]": {
    title: "Resume",
    subtitle: "View your resume here",
  },
};

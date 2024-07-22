// "use client";

// import { usePathname } from "next/navigation";

// import { ModeToggle } from "@/components/mode-toggle";
// import { MobileMenu } from ".";

// import { UserMenu } from "@/components/user-menu";
// import { NAVBAR_TITLES } from "@/constants";

// export const Navbar = () => {
//   const pathname = usePathname();

//   const { title, subtitle } = NAVBAR_TITLES[pathname] || {
//     title: "",
//     subtitle: "",
//   };

//   return (
//     <nav className="fixed top-0 h-20 w-full z-50 bg-background md:pl-24 xl:pl-[220px]">
//       <header className="flex items-center h-full w-full justify-between px-5">
//         <div className="flex items-center gap-x-4">
//           <div className="block md:hidden">
//             <MobileMenu />
//           </div>
//           <div>
//             <h2 className="xl:text-3xl md:text-2xl text-lg font-semibold">
//               {title}
//             </h2>
//             <p className="text-xs md:text-sm xl:text-base text-muted-foreground">
//               {subtitle}
//             </p>
//           </div>
//         </div>
//         <div className="flex items-center gap-x-4">
//           <ModeToggle />
//           <UserMenu />
//         </div>
//       </header>
//     </nav>
//   );
// };

"use client";

import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/mode-toggle";
import { MobileMenu } from ".";
import { UserMenu } from "@/components/user-menu";
import { NAVBAR_TITLES } from "@/constants";

const getNavbarTitle = (path: string) => {
  const dynamicRoute = Object.keys(NAVBAR_TITLES).find((route) => {
    const regex = new RegExp(`^${route.replace(/\[.+?\]/g, "[^/]+")}$`);
    return regex.test(path);
  });

  if (dynamicRoute) {
    return NAVBAR_TITLES[dynamicRoute];
  } else {
    return { title: "", subtitle: "" };
  }
};

export const Navbar = () => {
  const pathname = usePathname();
  const { title, subtitle } = getNavbarTitle(pathname);

  return (
    <nav className="fixed top-0 h-20 w-full z-50 bg-background dark:bg-[#0a0a0a] md:pl-24 xl:pl-[220px]">
      <header className="flex items-center h-full w-full justify-between px-5">
        <div className="flex items-center gap-x-4">
          <div className="block md:hidden">
            <MobileMenu />
          </div>
          <div>
            <h2 className="xl:text-3xl md:text-2xl text-lg font-semibold">
              {title}
            </h2>
            <p className="text-xs md:text-sm xl:text-base text-muted-foreground">
              {subtitle}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <ModeToggle />
          <UserMenu />
        </div>
      </header>
    </nav>
  );
};

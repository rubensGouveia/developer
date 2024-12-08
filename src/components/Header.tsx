import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Menu } from "@/types/fetchData.types";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import Link from "next/link";

interface HeaderProps {
  menus: Menu[];
}
export const Header: React.FC<HeaderProps> = ({ menus }) => {
  const loginString = "login";
  const menusToIterate = [...menus];
  const loginIndice = menusToIterate.findIndex((menu) => menu.title.toLowerCase() === loginString);
  const hasLogin = loginIndice >= 0;
  const loginItem = menus[loginIndice];
  if (hasLogin) {
    menusToIterate.splice(loginIndice, 1);
  }

  return (
    <header className="fixed z-10 w-full bg-transparent py-8 text-white">
      <div className="mx-auto flex max-w-screen-2xl justify-between px-6 sm:px-6 lg:px-16">
        <Image src="brand.svg" width={105} height={22} alt="Company Logo" />

        <NavigationMenu>
          <NavigationMenuList>
            {menusToIterate.map((menu) => (
              <NavigationMenuItem key={menu.id}>
                {menu.dropdown?.length ? (
                  <>
                    <NavigationMenuTrigger>{menu.title}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      {menu.dropdown.map((drop) => (
                        <NavigationMenuLink  key={drop.id} asChild>
                          <Link
                            href={drop.link}
                            className="flex size-full select-none flex-col justify-end rounded-md to-muted  px-6 py-3 no-underline outline-none focus:shadow-md"
                          >
                            {drop.title}
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href={menu.link || ""} target={menu.openNewWindow ? "_blank" : "_self"}>{menu.title}</Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {hasLogin && (
          <div className="flex">
            <Link href={loginItem.link || ""}   target={loginItem.openNewWindow ? "_blank" : "_self"}>
              {loginItem.title}
              <ArrowRight className="inline" />
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

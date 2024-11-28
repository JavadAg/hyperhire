'use client';

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/NavigationMenu';
import type { TNavList } from '../Header';

interface IProps {
  navList: TNavList[];
}

const Navbar: React.FC<IProps> = ({ navList }) => {
  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList>
        {navList.map((link) => {
          return link.subMenu ? (
            <NavigationMenuItem key={link.id}>
              <NavigationMenuTrigger>{link.title}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {link.subMenu.map((subLink) => (
                    <NavigationMenuLink key={subLink.id} title={subLink.title} href={subLink.link}>
                      {subLink.title}
                    </NavigationMenuLink>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={link.id}>
              <NavigationMenuLink href={link.link} className={navigationMenuTriggerStyle()}>
                {link.title}
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;

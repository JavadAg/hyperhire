import { SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, Sheet } from '@/components/ui/Sheet';
import { Menu } from 'lucide-react';
import type { TNavList } from '../Header';
import coloredLogo from '@/assets/images/logo-colored.svg';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

interface IProps {
  navList: TNavList[];
}

const MobileNavbar: React.FC<IProps> = ({ navList }) => {
  return (
    <Sheet>
      <SheetTrigger className="block md:hidden">
        <Menu className="text-white" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <Image src={coloredLogo} alt="logo" height={24} />
          </SheetTitle>
        </SheetHeader>
        <div className="grid gap-3 mt-10">
          {navList.map((nav) => {
            return nav.subMenu ? (
              nav.subMenu.map((subNav) => (
                <Button key={subNav.id} asChild variant={'link'}>
                  <Link href={subNav.link!} className="text-gray-700 bg-gray-100 px-2 py-1.5 rounded-md ">
                    {subNav.title}
                  </Link>
                </Button>
              ))
            ) : (
              <Button key={nav.id} asChild variant={'link'}>
                <Link href={nav.link!} className="text-gray-700 bg-gray-100 px-2 py-1.5 rounded-md ">
                  {nav.title}
                </Link>
              </Button>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;

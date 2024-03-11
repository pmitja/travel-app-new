"use client";

import { cn } from '@/lib/utils';
import { Montserrat } from 'next/font/google';
import { MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

const montserrat = Montserrat({ weight: '600', subsets: ['latin'] });

const routes = [
  {
    label: 'Planning next trip',
    icon: MapPin,
    href: '/discover',
  },
];

const SideBar = () => {
  const pathname = usePathname();
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-sidebarColor text-textColor">
      <div className="py-2 flex-1">
        <Link href={'/'} className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image fill alt="logo" src={'/ExploreEase.svg'} />
          </div>
          <h1 className={cn('text-2xl font-bold', montserrat.className)}>
            Explore Ease
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-black hover:bg-white transition",
                pathname === route.href && "text-textColor bg-sidebarColor-active"
              )}>
              <div className="flex items-center flex-1">
                <route.icon className={'w-5 h-5 mr-3'} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;

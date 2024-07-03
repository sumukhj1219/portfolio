'use client'
import React, { useState } from 'react';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from 'next/link';
import { cn } from '@/utils/cn';

const components: { title: string; href: string; }[] = [
    {
        title: "HOME",
        href: "/",
    },
    {
        title: "ABOUT",
        href: "/about",
    },
    {
        title: "CONTACT",
        href: "mailto:sumukhjoshi4@gmail",
    },
    {
        title: "PROJECTS",
        href: "/projects",
    },
];

const Navbar = () => {
    const [active, setActive] = useState<string>(components[0].href);

    return (
		<>
		<div className='hidden md:block border-black'>
            <div className='fixed flex top-0 left-1/2 transform -translate-x-1/2 items-center justify-center h-14 w-full bg-white z-10 p-4 rounded-full max-w-lg mt-5 border-2 border-black shadow-lg'>
                <NavigationMenu>
                    <NavigationMenuList className='flex gap-x-2'>
                        {
                            components.map((c) => (
                                <NavigationMenuItem key={c.href}>
                                    <Link
                                        href={c.href}
                                        className={cn(
                                            'w-full p-3 rounded-full transition-colors duration-500 hover:bg-black hover:text-secondary',
                                            active === c.href ? 'bg-black' : ''
                                        )}
                                        onClick={() => setActive(c.href)}
                                    >
                                        <span className={cn(
                                            'font-semibold',
                                            active === c.href ? 'text-secondary' : ''
                                        )}>
                                            {c.title}
                                        </span>
                                    </Link>
                                </NavigationMenuItem>
                            ))
                        }
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </div>
		</>
        
    );
}

export default Navbar;

"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import NavLink from './NavLink';

const Header = () => {
  const pathname = usePathname();
  if (pathname.startsWith("/dashboard")) return <></>;

    return (
        <header className="px-8 py-4 border-b-2 border-gray-500 flex justify-between items-center flex-wrap">
          <Link href="/" className="text-xl font-extrabold">🐞Dev Story</Link>

          <nav className='space-x-5 '>
            <NavLink href="/about">About Us</NavLink>
            <NavLink href="/tutorials">Tutorials</NavLink>
            <NavLink href="/stories">Stories</NavLink>
          </nav>

          <nav className='space-x-5'>
            <NavLink href="/login">Login</NavLink>
            <NavLink href="/register">Register</NavLink>
          </nav>
        </header>
    );
};

export default Header;
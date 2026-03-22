"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Header = () => {
  const pathname = usePathname();
  if (pathname.startsWith("/dashboard")) return <></>;
  
    return (
        <header className="px-8 py-4 border-b-2 border-gray-500 flex justify-between items-center flex-wrap">
          <Link href="/" className="text-xl font-extrabold">🐞Dev Story</Link>

          <nav className='space-x-5 '>
            <Link href="/about">About Us</Link>
            <Link href="/tutorials">Tutorials</Link>
            <Link href="/stories">Stories</Link>
          </nav>

          <nav className='space-x-5'>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </nav>
        </header>
    );
};

export default Header;
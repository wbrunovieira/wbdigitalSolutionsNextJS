"use client";
import { useState } from 'react';
import Link from 'next/link';

export function Navbar () {
  const [showSubMenu, setShowSubMenu] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <button className="lg:hidden px-2 py-1 text-white">
            <span className="block"></span>
            <span className="block mt-1"></span>
          </button>
          <Link href="/">
            <img src="/assets/img/logo.png" alt="Logo" className="h-8 ml-4 cursor-pointer" />
          </Link>
        </div>
        <div className="hidden lg:flex items-center">
          <div className="relative">
            <Link href="/">Home</Link>
            <button onClick={() => setShowSubMenu(!showSubMenu)}>▼</button>
            {showSubMenu && (
              <div className="absolute bg-gray-800 text-white mt-2">
                <Link href="/home">Home</Link>
                <Link href="/sobre-nos">Sobre Nós</Link>
              </div>
            )}
          </div>
          <Link href="/sistemas">Sistemas</Link>
          <Link href="/sites">Sites</Link>
          <Link href="/marketing-digital">Marketing Digital</Link>
          <Link href="/clientes">Clientes</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contato">Contato</Link>
        </div>
      </div>
    </nav>
  );
};


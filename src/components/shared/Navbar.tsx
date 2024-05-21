import React, { FC } from 'react';
import Link from 'next/link';
import ThemeSwitcherButton from '../ui/ThemeSwitcher';
import Logo from './Logo';

const Navbar: FC = () => {
  return (
    <nav className="shadow-md py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Logo />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/home" passHref>
                <span className="text-lg font-semibold hover:text-links transition duration-300 ease-in-out cursor-pointer">Home</span>
              </Link>
              <Link href="/#steps">
                <span className="text-lg font-semibold hover:text-links transition duration-300 ease-in-out cursor-pointer">Como usar?</span>
              </Link>
              <Link href="/background" passHref>
                <span className="text-lg font-semibold hover:text-links transition duration-300 ease-in-out cursor-pointer">Remover fundo</span>
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            {/* Botão de menu para dispositivos móveis (caso queira) */}
          </div>
          <div className="flex items-center">
            <ThemeSwitcherButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

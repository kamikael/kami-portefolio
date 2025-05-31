import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About me' },
    { href: '#skills', label: 'SKILLS' },
    { href: '#projects', label: 'Projets' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-[#0A1A2E] text-white fixed w-full top-0 z-10 border-b-black shadow-lg"
    style={{
        background: `
          radial-gradient(circle at 50% 50%, rgba(30, 58, 138, 0.4) 0%, transparent 70%),
          linear-gradient(to right, #0A1A2E, #0A1A2E)
        `,
      }}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-xl md:text-2xl font-bold">
         My Portfolio
        </a>
        {/* Bouton hamburger pour mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
        {/* Menu pour desktop */}
        <div className="hidden md:flex space-x-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base hover:text-gray-300 transition duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      {/* Menu déroulant pour mobile*/}
      <div
        className={`md:hidden bg-[#000203] transition-all z-30 duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-300' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="flex flex-col items-center py-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base hover:text-gray-300 transition duration-300"
              onClick={() => setIsOpen(false)} // Ferme le menu après clic
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
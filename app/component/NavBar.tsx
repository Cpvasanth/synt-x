'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
// Import icons for the mobile menu
import { FiMenu, FiX } from 'react-icons/fi';

function NavBar() {
  const pathname = usePathname();
  // State to manage mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    'Home',
    'About us',
    'Projects',
    'Services',
    'Calculator',
    'Contact',
  ];

  // Helper function to generate links (same as your original)
  const getLinkProps = (item: string) => {
    const formattedId = item.toLowerCase().replace(/\s+/g, '');
    const link = formattedId === 'home' ? '/' : `/${formattedId}`;
    const isActive = pathname === link;
    return { link, isActive };
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* --- Main Navigation Bar --- */}
      <nav className="w-full py-6 px-6 md:px-12 flex justify-between items-center fixed top-0 left-0 z-50 bg-black/80 backdrop-blur-md border-b border-neutral-800">
        <Link href="/" className="text-2xl font-bold text-white">
          SYNT-X
        </Link>

        {/* --- Desktop Navigation (Hidden on mobile) --- */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => {
            const { link, isActive } = getLinkProps(item);
            return (
              <li key={item}>
                <Link
                  href={link}
                  aria-current={isActive ? 'page' : undefined}
                  className={`transition font-medium ${
                    isActive
                      ? 'text-yellow-300 underline decoration-wavy underline-offset-4'
                      : 'text-white hover:text-yellow-300'
                  }`}
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* --- Mobile Menu Button (Hamburger, hidden on desktop) --- */}
        <button
          className="md:hidden text-white z-50"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open navigation menu"
        >
          <FiMenu size={28} />
        </button>
      </nav>

      {/* --- Mobile Menu Overlay --- */}
      {/* Uses transition for a smooth slide-in effect */}
      <div
        className={`fixed inset-0 z-40 bg-black/90 backdrop-blur-lg flex flex-col items-center justify-center transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* --- Close Button (Inside mobile menu) --- */}
        <button
          className="absolute top-6 right-6 text-white"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close navigation menu"
        >
          <FiX size={32} />
        </button>

        {/* --- Mobile Navigation Links --- */}
        <ul className="flex flex-col space-y-8 text-center">
          {navItems.map((item) => {
            const { link, isActive } = getLinkProps(item);
            return (
              <li key={item}>
                <Link
                  href={link}
                  aria-current={isActive ? 'page' : undefined}
                  // Close menu on link click
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-3xl font-medium transition ${
                    isActive
                      ? 'text-yellow-300'
                      : 'text-white hover:text-yellow-300'
                  }`}
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default NavBar;
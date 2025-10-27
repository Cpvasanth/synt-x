'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { IoChevronDownSharp } from 'react-icons/io5';

function NavBar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navItems = [
    'Home',
    'About us',
    'Projects',
    'Services',
    'Calculator',
    'Contact'
  ];

  const services = [
    { id: '01', title: 'Web design' },
    { id: '02', title: 'Logo design' },
    { id: '03', title: 'AD Shooting' },
    { id: '04', title: 'SEO' },
    { id: '05', title: 'Marketing' }
  ];

  const getLinkProps = (item: string) => {
    const formattedId = item.toLowerCase().replace(/\s+/g, '');
    const link = formattedId === 'home' ? '/' : `/${formattedId}`;
    const isActive = pathname === link;
    return { link, isActive };
  };

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="w-full py-6 px-6 md:px-12 flex justify-between items-center fixed top-0 left-0 z-50 bg-black/80 backdrop-blur-md border-b border-neutral-800">
        <Link href="/" className="text-2xl font-bold text-white">
          SYNT-X
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 relative">
          {navItems.map((item) => {
            const { link, isActive } = getLinkProps(item);

            if (item === 'Services') {
              return (
                <li key={item} className="relative">
                  <button
                    onClick={() => setIsServicesOpen((prev) => !prev)}
                    className={`transition font-medium flex items-center space-x-1 ${
                      isActive
                        ? 'text-yellow-300 underline decoration-wavy underline-offset-4'
                        : 'text-white hover:text-yellow-300'
                    }`}
                  >
                    <span>Services</span>
                    <IoChevronDownSharp
                      className={`transition-transform ${
                        isServicesOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isServicesOpen && (
                    <ul className="absolute mt-2 bg-black/95 border border-neutral-700 rounded-md shadow-lg py-3 w-48">
                      {services.map((service) => (
                        <li key={service.id} className="px-5 py-2">
                          <Link
                            href={`/services#${service.id}`}
                            className="text-white hover:text-yellow-300 text-sm transition"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            {service.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            }

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

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-white z-50"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <FiX size={32} /> : <FiMenu size={32} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="flex flex-col space-y-8 text-center">
          {navItems.map((item) => {
            const { link } = getLinkProps(item);

            if (item === 'Services') {
              return (
                <li key={item}>
                  <button
                    onClick={() => setIsServicesOpen((prev) => !prev)}
                    className="text-3xl font-medium text-white flex justify-center items-center space-x-2"
                  >
                    <span>Services</span>
                    <IoChevronDownSharp
                      className={`transition-transform ${
                        isServicesOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isServicesOpen && (
                    <ul className="mt-5 space-y-4">
                      {services.map((service) => (
                        <li key={service.id}>
                          <Link
                            href={`/services#${service.id}`}
                            className="text-lg text-white hover:text-yellow-300 transition block"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {service.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            }

            return (
              <li key={item}>
                <Link
                  href={link}
                  className="text-3xl font-medium text-white hover:text-yellow-300 transition"
                  onClick={() => setIsMobileMenuOpen(false)}
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

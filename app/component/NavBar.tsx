'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { IoChevronDownSharp } from 'react-icons/io5';

function NavBar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const isActiveLink = (href: string) => pathname === href;

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Services', href: '/services' },
    { label: 'Calculator', href: '/calculator' },
    { label: 'Contact', href: '/contact' },
  ];

  const services = [
    { id: '01', title: 'Web Design', href: '/services/web-design' },
    { id: '02', title: 'Logo Design', href: '/services/logo-design' },
    // { id: '03', title: 'AD Shooting', href: '/services/ad-shooting' },
    { id: '03', title: 'SEO', href: '/services/seo' },
    { id: '04', title: 'Marketing', href: '/services/marketing' },
  ];

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
  }, [isMobileMenuOpen]);

  // ✅ Hide navbar on down scroll / show on up scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScrollTop) {
        setShowNav(false); // scrolling down → hide
      } else {
        setShowNav(true); // scrolling up → show
      }
      setLastScrollTop(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return (
    <>
      <nav
        className={`w-full py-4 px-6 md:px-12 flex justify-between items-center fixed top-0 left-0 z-50 
          bg-black/80 backdrop-blur-md border-b border-neutral-800 transition-transform duration-300
          ${showNav ? 'translate-y-0' : '-translate-y-full'}
        `}
      >
        {/* ✅ Your SVG Logo */}
        <Link href="/" className="flex items-center items-center text-lg font-bold text-white space-x-3">
          <Image
            src="/logo_white.svg"
            alt="Logo"
            width={55}
            height={55}
            className="object-contain"
            priority
          />
          SYNT-X
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map(({ label, href }) => {
            if (label === 'Services') {
              const isActive = pathname.startsWith('/services');
              return (
                <li key={href} className="relative">
                  <button
                    onClick={() => setIsServicesOpen(prev => !prev)}
                    className={`transition font-medium flex items-center space-x-1 ${
                      isActive
                        ? 'text-yellow-300 underline decoration-wavy underline-offset-4'
                        : 'text-white hover:text-yellow-300'
                    }`}
                  >
                    <span>{label}</span>
                    <IoChevronDownSharp className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isServicesOpen && (
                    <ul className="absolute mt-3 bg-black/95 border border-neutral-700 rounded-md shadow-lg py-3 w-48">
                      {services.map(({ id, title, href }) => (
                        <li key={id}>
                          <Link
                            href={href}
                            onClick={() => setIsServicesOpen(false)}
                            className="block px-5 py-2 text-white hover:text-yellow-300 text-sm transition"
                          >
                            {title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            }

            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`transition font-medium ${
                    isActiveLink(href)
                      ? 'text-yellow-300 underline decoration-wavy underline-offset-4'
                      : 'text-white hover:text-yellow-300'
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(prev => !prev)}
        >
          {isMobileMenuOpen ? <FiX size={32} /> : <FiMenu size={32} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center 
          transition-transform duration-300 md:hidden ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <ul className="flex flex-col space-y-8 text-center">
          {navItems.map(({ label, href }) => (
            label === 'Services' ? (
              <li key={href}>
                <button
                  onClick={() => setIsServicesOpen(prev => !prev)}
                  className="text-3xl font-medium text-white flex justify-center items-center space-x-2"
                >
                  <span>{label}</span>
                  <IoChevronDownSharp className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isServicesOpen && (
                  <ul className="mt-5 space-y-4">
                    {services.map(({ id, title, href }) => (
                      <li key={id}>
                        <Link
                          href={href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block text-lg text-white hover:text-yellow-300 transition"
                        >
                          {title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-medium text-white hover:text-yellow-300 transition"
                >
                  {label}
                </Link>
              </li>
            )
          ))}
        </ul>
      </div>
    </>
  );
}

export default NavBar;

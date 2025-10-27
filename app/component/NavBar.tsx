"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function NavBar() {
  const pathname = usePathname();

  const navItems = [
    "Home",
    "About us",
    "Projects",
    "Services",
    "Calculator",
    "Contact"
  ];

  return (
    <nav className="w-full py-6 px-12 flex justify-between items-center fixed top-0 left-0 z-50 bg-transparent backdrop-blur-md">
      <h2 className="text-2xl font-bold text-white">SYNT-X</h2>

      <ul className="flex space-x-8">
        {navItems.map((item) => {
          const formattedId = item.toLowerCase().replace(/\s+/g, "");
          const link = formattedId === "home" ? "/" : `/${formattedId}`;
          const isActive = pathname === link;

          return (
            <li key={item}>
              <Link
                href={link}
                aria-current={isActive ? "page" : undefined}
                className={`transition font-medium ${
                  isActive
                    ? "text-yellow-300 underline decoration-wavy underline-offset-4"
                    : "text-white hover:text-yellow-300"
                }`}
              >
                {item}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default NavBar;

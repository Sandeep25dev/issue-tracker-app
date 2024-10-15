"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { MdAddTask } from "react-icons/md";

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
    { label: "About", href: "/about" },
  ];

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <MdAddTask />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link, i) => (
          <Link
            key={i}
            className={`${
              currentPath === link.href ? "text-zinc-900" : "text-zinc-500"
            } hover:text-zinc-800 transition-colors`}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;

import Link from "next/link";
import React from "react";
import { MdAddTask } from "react-icons/md";

const NavBar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/" },
    { label: "About", href: "/" },
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
            className="text-zinc-500 hover:text-zinc-800 transition-colors"
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

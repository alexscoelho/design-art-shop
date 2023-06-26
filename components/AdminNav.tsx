"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const AdminNav = () => {
  const pathname = usePathname();
  const navLinks = [
    {
      label: "Agregar Productos",
      href: "/admin",
    },
    {
      label: "Agregar Diseño",
      href: "/admin/designs",
    },
  ];

  return (
    <nav className="flex items-center gap-5 justify-center px-4 border-b">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            className={isActive ? "text-blue-600" : "text-black"}
            href={link.href}
            key={link.label}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default AdminNav;

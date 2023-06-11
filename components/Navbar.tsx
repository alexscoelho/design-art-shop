"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import logo from "../public/logo.png";
import { MdOutlineEmail } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  const pathname = usePathname();
  const navLinks = [
    {
      label: <AiOutlineShoppingCart />,
      href: "/cart",
    },
    {
      label: "Products",
      href: "/products",
    },
  ];
  const externalLinks = [
    {
      label: "Email",
      icon: <MdOutlineEmail />,
      href: "alex_design_art@hotmail.com",
    },
    {
      label: "Instagram",
      icon: <FiInstagram />,
      href: "https://www.instagram.com/alex_design_art",
    },
  ];
  return (
    <div className="flex items-center gap-5 justify-center px-4 border-b">
      <Link href="/">
        <Image src={logo} alt="logo" width={120} height={100} />
      </Link>
      <form>
        <input
          id="search-input"
          type="text"
          className="border py-2 px-2 border-slate-400 rounded-md"
          placeholder="&#128269; Buscar Productos"
        />
      </form>
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
      {externalLinks.map((link) => {
        return (
          <a
            href={link.label === "Email" ? `mailto:${link.href}` : link.href}
            target="_blank"
            key={link.label}
          >
            {link.icon}
          </a>
        );
      })}
    </div>
  );
};

export default Navbar;

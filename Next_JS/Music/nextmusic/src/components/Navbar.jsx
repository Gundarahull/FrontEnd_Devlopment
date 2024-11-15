"use client";
import { cn } from "@/utils/cn";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import Link from "next/link";

const Navbar = ({ className }) => {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn("fixed top-20 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      {/* Navbar-Menu for horizantal BAR */}
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="HOME"
          ></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="OUR-HERO'S">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="CONTACT-US"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;

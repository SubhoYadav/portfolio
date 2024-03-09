"use client";
import Link from "@/node_modules/next/link";
import React, { useState } from "react";
import Image from "@/node_modules/next/image";
import Navlink from "./Navlink";

const menuList = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Protfolio", url: "/portfolio" },
  { title: "Contact", url: "/contact" },
];

const socialLink = [
  { url: "/", icon: "/github.png" },
  { url: "/", icon: "/linkedin.png" },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    // tailwind applies styles for the small screen first, so px-4 will apply to the small screen
    // lg:px-20 => applies the padding for screen size >= lg breakpoint
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* MENU ON MEDIUM SCREEN */}
      <div className="hidden md:flex gap-6 w-1/3">
        {menuList.map((link) => {
          return <Navlink link={link} key={link.title} />;
        })}
      </div>
      {/* MENU ON MEDIUM SCREEN */}
      {/* LOGO */}
      <Link href={"/"} className="md:hidden lg:flex md:w-1/3 md:justify-center">
        <div className="bg-black rounded-md p-2">
          <span className="text-white mr-1">Subho</span>
          <span className="bg-white text-black p-1 rounded-md">Yadav</span>
        </div>
      </Link>
      {/* LOGO */}

      {/* MENU BUTTON */}
      <div>
        <button
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
          className="z-50 relative md:hidden"
        >
          {/* <div className="w-12 h-6 flex text-white flex-col justify-between">
            <div className="w-12 h-1 bg-black"></div>
            <div className="w-12 h-1 bg-black"></div>
            <div className="w-12 h-1 bg-black"></div>
          </div> */}
          <div className="w-12 h-1 bg-black -rotate-45"></div>
          <div className="w-12 h-1 bg-black rotate-45"></div>
        </button>
        {/* MENU BUTTON */}
      </div>
      {/* MENU BUTTON */}

      {/* SOCIAL LINKS */}
      <div className="hidden md:flex gap-4 w-1/3 justify-end">
        {socialLink.map((e) => {
          return (
            <Link href={e.url} key={e.icon}>
              <Image src={e.icon} alt={e.url} width={24} height={24} />
            </Link>
          );
        })}
      </div>
      {/* SOCIAL LINKS */}

      {/* MOBILE MENU */}
      {openMenu && (
        // In order for an absolute positioned element to take 100vw and 100vh top:0 and left:0 properties are required
        <div className="w-screen h-screen bg-black absolute left-0 top-0 flex flex-col items-center justify-center gap-10">
          {menuList.map((link) => {
            return (
              <Link className="text-white" href={link.url} key={link.title}>
                {link.title}
              </Link>
            );
          })}
        </div>
      )}
      {/* MOBILE MENU */}
    </div>
  );
}

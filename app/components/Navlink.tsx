"use client";
import React from "react";
import Link from "@/node_modules/next/link";
import { usePathname } from "@/node_modules/next/navigation";

type Lnk = {
  title: string;
  url: string;
};

export default function Navlink({ link }) {
  const pathName = usePathname();

  return (
    <Link
      href={link.url}
      className={
        pathName == link.url ? `bg-black text-white p-1 rounded-lg` : ""
      }
    >
      {link.title}
    </Link>
  );
}

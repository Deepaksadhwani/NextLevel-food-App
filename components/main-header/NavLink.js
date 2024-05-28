"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Children } from "react";
import classes from "./NavLink.module.css";

const NavLink = ({ href, children }) => {
  const path = usePathname();

  return (
    <Link
      className={path.startsWith(href) ? classes.active : undefined}
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLink;

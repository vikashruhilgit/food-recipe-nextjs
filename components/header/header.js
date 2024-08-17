import Link from "next/link";
import React from "react";

import LogoImage from "@/public/images/logo.png";

import classes from "./header.module.css"
import Image from "next/image";

export default function Header() {
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <Image priority src={LogoImage} alt="FOOD"></Image>
        Food
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

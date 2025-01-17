import Link from "next/link";
import Image from "next/image";

import logo from "@/public/logo.png";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image src={logo} width={50} height={50} alt="Learning Logo" />
      </Link>
      <h1>Number Ride</h1>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

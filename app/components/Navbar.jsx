import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../public/logo.png";
import Image from "next/image";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.navheader}>
          <Link className={styles.navlinks} href="/">
            <Image src={logo} width={120} height={70} alt="Logo" />
          </Link>
        </div>
        <div className={styles.navbarList}>
          <ul className={styles.navbarItems}>
            <Link className={styles.navlinks} href="/">
              <li className={styles.navbarLinks}>Home</li>
            </Link>
            <Link className={styles.navlinks} href="/about">
              <li className={styles.navbarLinks}>About</li>
            </Link>
            <Link className={styles.navlinks} href="/contact">
              <li className={styles.navbarLinks}>Contact</li>
            </Link>
            <Link className={styles.navlinks} href="/services">
              <li className={styles.navbarLinks}>Services</li>
            </Link>
          </ul>
        </div>
        <div className={styles.navbarbutton}>
          <Link href="/login">
            <button>Login</button>
          </Link>
          <Link href="/signup">
            <button>Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

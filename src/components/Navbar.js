import React from "react";
import styles from "./nav.module.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav
      className={`${styles.nav} ${styles.navSmaller} ${styles.navIphone}
      `}
    >
      <h4 className={styles.nameNav}>AGR</h4>
      <ul className={`${styles.listFlex}`}>
        <li>
          <Link to={"/swap"}>Swap</Link>
        </li>
        <li>
          <Link to={"/pool"}>Pool</Link>
        </li>
      </ul>
      <p>account: 0x00000000</p>
    </nav>
  );
};

export default Navbar;
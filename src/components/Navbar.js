import React from "react";
import styles from "./nav.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { accountSelector, web3Selector, accountLoadedSelector } from "../store/selectors";

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
      <p>
      {props.accountLoaded
              ? `Account: ${props.account
                  .split("")
                  .splice(0, 5, "")
                  .join("")}...${props.account
                  .split("")
                  .splice(38, 4, "")
                  .join("")}`
              : "Log into metamask!"}
      </p>
    </nav>
  );
};

function mapStateToProps(state) {
  return {
    account: accountSelector(state),
    web3: web3Selector(state),
    accountLoaded: accountLoadedSelector(state)
  };
}

export default connect(mapStateToProps)(Navbar);
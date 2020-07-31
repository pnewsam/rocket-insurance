/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from "react-router-dom";
import styles from "./styles";

const MainNav = () => (
  <nav className="navbar" css={styles.nav}>
    <div className="navbar-brand">
      <span className="navbar-item" css={styles.logo}>
        Rocket Insurance
      </span>
    </div>
    <div className="navbar-menu is-active" css={styles.menu}>
      <div className="navbar-end">
        <div className="navbar-item">
          <Link css={styles.link} to="/">
            Home
          </Link>
        </div>
      </div>
    </div>
  </nav>
);

export default MainNav;

import { Outlet, NavLink } from "react-router-dom";
import styles from "./Layout.module.css";

export const Layout = () => {
  return (
    <div>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <NavLink
            className={({ isActive }) => {
              return isActive ? styles.active : styles.link;
            }}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return isActive ? styles.active : styles.link;
            }}
            to="/tweets"
          >
            Tweets
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

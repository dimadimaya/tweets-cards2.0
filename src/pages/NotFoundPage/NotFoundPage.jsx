import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

export const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Opsss! This page doesn&apos;t exist</p>

      <Link to="" className={styles.link}>
        Open home page
      </Link>
    </div>
  );
};

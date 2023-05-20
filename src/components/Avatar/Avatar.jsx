import { ReactComponent as Line } from "../images/line.svg";
import { ReactComponent as Circle } from "../images/circle.svg";
import styles from "./Avatar.module.css";

export const Avatar = ({ avatar }) => {
  return (
    <div className={styles.container}>
      <Line className={styles.line} />
      <Circle className={styles.circle} />
      <img className={styles.img} src={avatar} alt="avatar" />
    </div>
  );
};

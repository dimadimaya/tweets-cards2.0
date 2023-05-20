import { ReactComponent as Logo } from "../images/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  setFollowingStatus,
  setFollowersCount,
} from "../../redux/users/users.slice";
import styles from "./UserCard.module.css";
import { Avatar } from "../Avatar/Avatar";

export const UserCard = ({ user }) => {
  const dispatch = useDispatch();

  const isFollowing = useSelector(
    (state) => state.users.followingStatus[user.id] || false
  );
  const followersCount = useSelector(
    (state) => state.users.followersCount[user.id] || user.followers
  );

  const handleFollowToggle = () => {
    const updatedFollowersCount = isFollowing
      ? followersCount - 1
      : followersCount + 1;

    dispatch(
      setFollowingStatus({ userId: user.id, isFollowing: !isFollowing })
    );
    dispatch(
      setFollowersCount({
        userId: user.id,
        followersCount: updatedFollowersCount,
      })
    );
  };

  return (
    <li className={styles.container}>
      <Logo user={user} />
      <Avatar avatar={user.avatar} />
      <div className={styles.wrap}>
        <div className={styles.data}>
          <p className={styles.text}>
            {user.tweets.toLocaleString("en")} TWEETS
          </p>
          <p className={styles.text}>
            {followersCount.toLocaleString("en")} FOLLOWERS
          </p>
        </div>
        <button
          className={`${styles.btn} ${isFollowing ? styles.following : ""}`}
          onClick={handleFollowToggle}
        >
          {isFollowing ? "Following" : "Follow"}
        </button>
      </div>
    </li>
  );
};

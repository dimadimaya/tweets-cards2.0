import React, { useState, useEffect, useMemo } from "react";
import { UserCard } from "../UserCard/UserCard";
import { Link } from "react-router-dom";
import styles from "./UserCardList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/users/users.slice";
import { getUsersThunk } from "../../redux/users/users.thunk";
import {
  selectFilter,
  selectStatus,
  selectUsers,
  selectfollowingStatus,
} from "../../redux/users/users.selectors";
import ReactSelect from "react-select";
import { filterOptions } from "../Filter/filterOptions";
import { getFilteredUsers } from "../Filter/filteredUsers";
import { STATUS } from "../../constants/status.constants";
import { Loader } from "../Loader/Loader";

export const UserCardList = () => {
  const [page] = useState(1);
  const [limit, setLimit] = useState(3);
  const total = page * limit;

  const dispatch = useDispatch();

  const users = useSelector(selectUsers);
  const filter = useSelector(selectFilter);
  const status = useSelector(selectStatus);
  const followingStatus = useSelector(selectfollowingStatus);

  useEffect(() => {
    dispatch(getUsersThunk({ page, limit }));
  }, [dispatch, page, limit]);

  const handleLoadMore = () => {
    setLimit((prevLimit) => prevLimit + 3);
  };

  const filteredUsers = useMemo(
    () => getFilteredUsers(users, filter, followingStatus),
    [users, filter, followingStatus]
  );

  const handleFilter = (selectedOption) => {
    dispatch(setFilter(selectedOption.value));
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link className={styles.back} to="/">
          Back
        </Link>
        <div className={styles.filter}>
          <ReactSelect
            className={styles.dropdown}
            options={filterOptions}
            value={filterOptions.find((option) => option.value === filter)}
            onChange={handleFilter}
          />
        </div>
        <ul className={styles.card}>
          {filteredUsers?.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </ul>

        {(status === STATUS.loading || status === STATUS.idle) && <Loader />}

        {!(filter === "follow" || filter === "following") && total <= 19 && (
          <button className={styles.btn} onClick={handleLoadMore}>
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

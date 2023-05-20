export const getFilteredUsers = (users, filter, followingStatus) => {
  if (filter === "show all") {
    return users;
  } else if (filter === "following") {
    return users.filter((user) => followingStatus[user.id]);
  } else if (filter === "follow") {
    return users.filter((user) => !followingStatus[user.id]);
  }
  return [];
};

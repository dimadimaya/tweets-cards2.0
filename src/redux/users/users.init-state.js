import { STATUS } from "../../constants/status.constants";

export const usersInitState = {
  users: null,
  status: STATUS.idle,
  filter: "show all",
  followingStatus: {},
  followersCount: {},
};

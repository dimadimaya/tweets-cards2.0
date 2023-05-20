import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../constants/status.constants";
import { usersInitState } from "./users.init-state";
import { getUsersThunk } from "./users.thunk";

const usersSlice = createSlice({
  name: "users",
  initialState: usersInitState,
  reducers: {
    setFollowersCount: (state, action) => {
      const { userId, followersCount } = action.payload;
      state.followersCount[userId] = followersCount;
    },
    setFollowingStatus: (state, action) => {
      const { userId, isFollowing } = action.payload;
      state.followingStatus = {
        ...state.followingStatus,
        [userId]: isFollowing,
      };
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsersThunk.pending, (state) => {
        state.status = STATUS.loading;
      })
      .addCase(getUsersThunk.fulfilled, (state, { payload }) => {
        state.status = STATUS.success;
        state.users = payload;
      })
      .addCase(getUsersThunk.rejected, (state) => {
        state.status = STATUS.error;
      });
  },
});

export const { setFollowingStatus, setFollowersCount } = usersSlice.actions;
export const { setFilter } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;

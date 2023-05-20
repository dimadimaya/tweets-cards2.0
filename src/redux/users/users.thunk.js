import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUsers } from "../../services/api";

export const getUsersThunk = createAsyncThunk(
  "users",
  async (params, thunkAPI) => {
    try {
      const { data } = await getUsers({ params });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

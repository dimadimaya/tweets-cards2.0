import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { usersInitState } from "./users/users.init-state";
import { usersReducer } from "./users/users.slice";

const authPersistConfig = {
  key: "users",
  storage,
  whitelist: ["users", "followingStatus", "followersCount"],
};

const initState = {
  users: usersInitState,
};

export const store = configureStore({
  preloadedState: initState,
  devTools: true,
  reducer: {
    users: persistReducer(authPersistConfig, usersReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

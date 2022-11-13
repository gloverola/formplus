import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import templateSlice from "./features/templateSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  throttle: 500,
};

const reducers = combineReducers({
  template: templateSlice,
});

const rootReducer = (state, action) => {
  if (action.type === "app/resetAppState") {
    // this applies to all keys defined in persistConfig(s)
    storage.removeItem("persist:root");

    state = {};
  }
  return reducers(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

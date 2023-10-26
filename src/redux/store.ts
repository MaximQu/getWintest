import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./search/searchSlice";

export const store = configureStore({
	reducer: { searchSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

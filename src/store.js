import { configureStore } from "@reduxjs/toolkit";
import readingListReducer from "./features/readingList/readingListSlice";

export const store = configureStore({
    reducer: {
        readingList: readingListReducer,
    },
});
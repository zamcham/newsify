import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    newsList: [],
    total: 0,
};

export const readingListSlice = createSlice({
    name: 'readingList',
    initialState,
    reducers: {
        addToReadingList: (state, action) => {
            state.newsList.push(action.payload);
            state.total += 1;
        },
        removeFromReadingList: (state, action) => {
            state.newsList = state.newsList.filter((news) => news.id !== action.payload.id);
        },
    },
});

export const { addToReadingList, removeFromReadingList } = readingListSlice.actions;

export default readingListSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    newsList: [],
    total: 0,
};

export const readingListSlice = createSlice({
    name: 'readingList',
    initialState,
    reducers: {
        toggleNewAddition: (state, action) => {
            const existingIndex = state.newsList.findIndex((news) => news.source.name === action.payload.source.name);
            if (existingIndex === -1) {
                console.log('Adding new article to reading list');
                return {
                    ...state,
                    newsList: [...state.newsList, action.payload],
                    total: state.total + 1,
                };
            } else {
                console.log('Removing article from reading list');
                return {
                    ...state,
                    newsList: state.newsList.filter((news) => news.source.name !== action.payload.source.name),
                    total: state.total - 1,
                };
            }
        },
        removeFromReadingList: (state, action) => {
            return {
                ...state,
                newsList: state.newsList.filter((news) => news.id !== action.payload.id),
                total: state.total - 1,
            };
        },
    },
});

export const { toggleNewAddition, removeFromReadingList } = readingListSlice.actions;

export default readingListSlice.reducer;

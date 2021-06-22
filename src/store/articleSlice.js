import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Api } from '../api';

const api = new Api();

export const fetchArticleById = createAsyncThunk(
    'articleById/fetch',
    async (id) => {
        return await api.article(id);
    }
);

export const articleByIdSlice = createSlice({
    name: 'articleById',
    initialState: {},
    extraReducers: (builder) => {
        builder.addCase(fetchArticleById.fulfilled, (state, action) => {
            state[action.payload.id] = action.payload;
        });
    },
});

export const getArticleById = id => state => state.articleById[id];

export const { reducer: articleByIdReducer } = articleByIdSlice;

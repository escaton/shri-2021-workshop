import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Api } from '../api';

const api = new Api();

export const fetchArticles = createAsyncThunk(
    'articles/fetch',
    async () => {
        const {articleIds, articleRefs} = await api.articles();
        return articleIds.map((id) => articleRefs[id]);
    }
);

export const articlesSlice = createSlice({
    name: 'articles',
    initialState: null,
    extraReducers: (builder) => {
        builder.addCase(fetchArticles.fulfilled, (state, action) => {
            return action.payload;
        });
    },
});

export const getArticles = state => state.articles;

export const { reducer: articlesReducer } = articlesSlice;

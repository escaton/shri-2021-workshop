import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchArticleById = createAsyncThunk(
    'articleById/fetch',
    async (id, { extra: { api } }) => {
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

export const getArticleById = (id) => (state) => state.articleById[id];

export const { reducer: articleByIdReducer } = articleByIdSlice;

import { configureStore } from '@reduxjs/toolkit';
import { articleByIdReducer } from './articleSlice';
import { articlesReducer } from './articlesSlice';

export const store = configureStore({
    reducer: {
        articles: articlesReducer,
        articleById: articleByIdReducer
    },
});

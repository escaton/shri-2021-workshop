import { configureStore } from '@reduxjs/toolkit';

import { Api } from '../api';
import { articleByIdReducer } from './articleSlice';
import { articlesReducer } from './articlesSlice';

export const store = configureStore({
    reducer: {
        articles: articlesReducer,
        articleById: articleByIdReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: { extraArgument: { api: new Api() } },
        }),
});

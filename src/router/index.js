import { Post } from '../components/Post/Post';
import { Feed } from '../components/Feed/Feed';

import { fetchArticles } from '../store/articlesSlice';
import { fetchArticleById } from '../store/articleSlice';

export const routes = [
    {
        path: '/post/:id',
        component: Post,
        loadData: (id) => fetchArticleById(id),
    },
    {
        path: '/',
        component: Feed,
        loadData: () => fetchArticles(),
    },
];

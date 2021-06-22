import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles, getArticles } from '../../store/articlesSlice';

export const App = () => {

    const dispatch = useDispatch();
    const articles = useSelector(getArticles);
    useEffect(() => {
        dispatch(fetchArticles())
    }, [dispatch]);

    if (articles === null) {
        return 'loading'
    }

    return (
        <ul>
            {articles.map((article) => (
                <li
                    key={article.id}
                    dangerouslySetInnerHTML={{__html: article.leadData.textHtml}}
                />
            ))}
        </ul>
    );
};

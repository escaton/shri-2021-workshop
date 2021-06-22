import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchArticles, getArticles } from '../../store/articlesSlice';

export const Feed = () => {
    const dispatch = useDispatch();
    const articles = useSelector(getArticles);
    useEffect(() => {
        dispatch(fetchArticles());
    }, [dispatch]);

    if (articles === null) {
        return 'loading';
    }

    return (
        <ul>
            {articles.map((article) => (
                <li key={article.id}>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: article.leadData.textHtml,
                        }}
                    />
                    <Link to={`/post/${article.id}`}>
                        <span
                            dangerouslySetInnerHTML={{
                                __html: article.leadData.buttonTextHtml,
                            }}
                        />
                    </Link>
                </li>
            ))}
        </ul>
    );
};

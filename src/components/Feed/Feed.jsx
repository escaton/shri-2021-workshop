import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getArticles } from '../../store/articlesSlice';

import styles from './styles.module.scss';

export const Feed = ({ loadData }) => {
    const dispatch = useDispatch();
    const articles = useSelector(getArticles);
    useEffect(() => {
        dispatch(loadData());
    }, [loadData, dispatch]);

    if (articles === null) {
        return 'loading';
    }

    return (
        <ul className={styles.list}>
            {articles.map((article) => (
                <li key={article.id} className={styles.shortPost}>
                    <div
                        className={styles.postInfo}
                        dangerouslySetInnerHTML={{
                            __html: article.leadData.textHtml,
                        }}
                    />
                    <Link
                        to={`/post/${article.id}`}
                        className={styles.postLink}
                    >
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

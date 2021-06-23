import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getArticleById } from '../../store/articleSlice';

import styles from './styles.module.scss';

export const Post = ({ loadData }) => {
    const { id: postId } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadData(postId));
    }, [postId, dispatch]);

    const post = useSelector(getArticleById(postId));

    if (!post) {
        return 'loading';
    }

    return (
        <div className={styles.root}>
            <h1>Пост</h1>
            <div className={styles.post} dangerouslySetInnerHTML={{ __html: post.textHtml }}></div>
        </div>);
};

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import useStyles from 'isomorphic-style-loader/useStyles';

import { getArticleById } from '../../store/articleSlice';

import styles from './styles.module.scss';

export const Post = ({ loadData }) => {
    useStyles(styles);
    
    const routeParams = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadData(routeParams));
    }, [routeParams, dispatch]);

    const post = useSelector(getArticleById(routeParams.id));

    if (!post) {
        return 'loading';
    }

    return (
        <div>
            <h1 dangerouslySetInnerHTML={{ __html: post.titleHtml }}></h1>
            <div
                className={styles.post}
                dangerouslySetInnerHTML={{ __html: post.textHtml }}
            ></div>
        </div>
    );
};

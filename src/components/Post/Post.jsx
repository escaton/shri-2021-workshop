import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getArticleById } from '../../store/articleSlice';

export const Post = ({ loadData }) => {
    const { id: postId } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadData(postId));
    }, [postId, dispatch]);

    const post = useSelector(getArticleById(postId));

    if (!post) {
        return 'laoding';
    }

    return <div dangerouslySetInnerHTML={{ __html: post.textHtml }}></div>;
};

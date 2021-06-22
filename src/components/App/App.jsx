import React, { useEffect, useState } from 'react';

export const App = ({ api }) => {

    const [articles, setArticles] = useState([]);
    useEffect(() => {
        api.articles().then(({ articleIds, articleRefs }) => {
            const articles = articleIds.map((id) => articleRefs[id]);
            setArticles(articles);
        });
    });

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

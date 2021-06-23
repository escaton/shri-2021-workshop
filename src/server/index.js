import http from 'http';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import { Provider } from 'react-redux';
import StyleContext from 'isomorphic-style-loader/StyleContext';
import fetch from 'node-fetch';
import serialize from 'serialize-javascript';

import { App } from '../components/App/App';
import { createStore } from '../store';
import { routes } from '../router';


const headTemplate = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Хабр</title>
    <script src="/index.js" defer></script>
`

const tailTemplate = (innerHTml, state) => `
    <script>
    window.__SERVER_STATE = ${serialize(state)}
    </script>
  </head>
  <body>${innerHTml}</body>
</html>
`;

http.createServer(async (req, res) => {
    res.write(headTemplate);

    const store = createStore({fetcher: fetch})

    const matchedRoute = routes.find((route) => {
        const match = matchPath(req.url, route);
        return match;
    });

    const { params } = matchPath(req.url, matchedRoute);

    if (matchedRoute && matchedRoute.loadData) {
        await store.dispatch(matchedRoute.loadData(params));
    }

    const routerContext = {};
    const reactHtml = ReactDOMServer.renderToString(
        <StyleContext.Provider value={{ insertCss: () => {} }}>
            <StaticRouter location={req.url} context={routerContext}>
                <Provider store={store}>
                    <App />
                </Provider>
            </StaticRouter>
        </StyleContext.Provider>
    );

    res.write(tailTemplate(reactHtml, store.getState()));
    res.end();
}).listen(8081);

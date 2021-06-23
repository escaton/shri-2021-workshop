import http from 'http';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import StyleContext from 'isomorphic-style-loader/StyleContext';

import { App } from '../components/App/App';
import { store } from '../store';

const htmlTemplate = (innerHTml) => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Хабр</title>
    <script src="/index.js" defer></script>
  </head>
  <body>${innerHTml}</body>
</html>
`;

http.createServer((req, res) => {
    const context = {};
    const reactHtml = ReactDOMServer.renderToString(
        <StyleContext.Provider value={{ insertCss: () => {} }}>
            <StaticRouter location={req.url} context={context}>
                <Provider store={store}>
                    <App />
                </Provider>
            </StaticRouter>
        </StyleContext.Provider>
    );

    res.write(htmlTemplate(reactHtml));
    res.end();
}).listen(8081);

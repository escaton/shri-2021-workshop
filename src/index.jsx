import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import StyleContext from 'isomorphic-style-loader/StyleContext';
import { App } from './components/App/App';
import { store } from './store';

const insertCss = (...styles) => {
  const removeCss = styles.map(style => style._insertCss())
  return () => removeCss.forEach(dispose => dispose())
}

ReactDOM.hydrate(
    <StyleContext.Provider value={{ insertCss }}>
        <Router>
            <Provider store={store}>
                <App />
            </Provider>
        </Router>
    </StyleContext.Provider>,
    document.querySelector('body')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { Api } from './api';
import { App } from './components/App/App';

const api = new Api();

ReactDOM.render(<App api={api} />, document.querySelector('body'));

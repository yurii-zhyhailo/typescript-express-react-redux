import * as React from 'react';

import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/store';
import { App } from './components';

// setup fake backend
import { configureFakeBackend } from './helpers/';
configureFakeBackend();

const store = configureStore();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
import * as React from 'react';

import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './redux/store';
import { App } from './app';

// setup fake backend
import { configureFakeBackend } from './helpers/';
configureFakeBackend();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
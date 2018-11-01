import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
 
import configureStore from './store/store';
import App from './components/App';

// setup fake backend
import { configureFakeBackend } from './helpers/';
configureFakeBackend();

const configuredStore = configureStore();

const app = (
    <Provider store={configuredStore}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById("root") as HTMLElement);
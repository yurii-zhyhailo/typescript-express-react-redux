import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Error404Page from '../components/errors/Error404Page';

import {
    registerPath,
    loginPath,
    homePath
} from './paths';

interface IRoutesProp {
    readonly isAuthenticated: boolean;
}

export default function Routes(props: IRoutesProp) {
    return (
        <Switch>
            <Route component={Error404Page} />
        </Switch>
    );
}
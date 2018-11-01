import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Error404Page from '../components/errors/Error404Page';

import { LoginPage } from '../components/LoginPage';
import { RegisterPage } from '../components/RegisterPage';
import { HomePage } from '../components/HomePage';

import AuthenticateRoute from './AuthenticateRoute';
import RedirectIfAuthenticated from './RedirectIfAuthenticated';

import {
    registerPath,
    loginPath,
    homePath,
    signUpPath
} from './paths';

interface IRoutesProp {
    readonly isAuthenticated: boolean;
}

export default function Routes(props: IRoutesProp) {
    return (
        <Switch>

            <AuthenticateRoute
                authenticatePath={signUpPath}
                path={signUpPath}
                component={HomePage}
                isAuthenticated={props.isAuthenticated}
            />

            <RedirectIfAuthenticated
                exact={true}
                path={homePath}
                component={LoginPage}
                redirectPath={registerPath}
                isAuthenticated={props.isAuthenticated}
            />
            <Route component={Error404Page} />
        </Switch>
    );
}

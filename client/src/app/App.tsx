import * as React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../helpers/';
import { PrivateRoute } from '../router';
import { LoginPage } from '../pages';
import { HomePage } from '../pages';
import { RegisterPage } from '../pages';

class App extends React.Component {
    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <div className='jumbotron'>
                <div className='container'>
                    <div className='col-sm-8 col-sm-offset-2'>
                        <Router history={history}>
                            <div>
                                <PrivateRoute exact path='/' component={HomePage} />
                                <Route path='/register' component={RegisterPage} />
                                <Route path='/login' component={LoginPage} />
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state: any) {
    let { alert } = state;
    return {
        alert
    }
}

let connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App};

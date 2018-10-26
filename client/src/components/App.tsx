import * as React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../helpers/';
import { PrivateRoute } from '../router';
import { LoginPage } from '../components/LoginPage';
import { HomePage } from '../components/HomePage';
import { RegisterPage } from '../components/RegisterPage';

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

import * as React from 'react';
import { RouteComponentProps, Router, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../helpers';
import { PrivateRoute } from '../router';
import { LoginPage } from '../components/LoginPage';
import { HomePage } from '../components/HomePage';
import { RegisterPage } from '../components/Register';

import Routes from '../router/Routes';
import IStoreState from 'store/IStoreState';
import { Dispatch, Action } from 'redux';

interface IAppProps extends RouteComponentProps<any> {
    readonly isAuthenticated: boolean;
}

class App extends React.Component<IAppProps> {
    constructor(props: IAppProps) {
        super(props)
    }

    render() {
        return (
            <div>
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

                <div className="container-fluid">
                    <Routes isAuthenticated={this.props.isAuthenticated} />
                </div>

            </div>
        )
    }
}

function mapStateToProps(state: IStoreState) {
    return {
        isAuthenticated: true
    }
}

function mapDispatchToProps(dispatch: Dispatch<Action>) {
    return {
        signOut: () => {}
    }
}

export default withRouter(
    connect<{}, {}, IAppProps>(mapStateToProps, mapDispatchToProps)(App)
) as React.ComponentClass<{}>;

import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import { userActions } from '../../actions';

class HomePage extends React.Component<any ,any> {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    render() {
        const { user } = this.props;

        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Hi {user.firsName}</h1>
                <p>You're logged in with React!!</p>
                <h3>All registered users:</h3>
                <em>Emphasized text</em>
                 <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        )
    }
}

function mapStateToProps(state: any) {
    let { authentication } = state;
    let { user } = authentication;
    return {
        user: user
    }
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage}

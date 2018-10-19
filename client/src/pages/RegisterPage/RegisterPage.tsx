import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

import { Dispatch, Action } from 'redux';
import { connect } from 'react-redux';

import { userActions } from '../../redux/actions';

import { IState } from '../../models';

type MapStateToProps = ReturnType<typeof mapStateToProps>;
type MapDispatchToProps = ReturnType<typeof mapDispatchToProps>;

interface IRegisterOwnProps extends RouteComponentProps<undefined> {};

// use union instead of interface extending
type IRegisterProps = MapStateToProps | MapDispatchToProps | IRegisterOwnProps;

const mapStateToProps = (state: IState, ownProps: IRegisterOwnProps) => ({

});

const mapDispatchToProps = (dispatch: Dispatch<Action>, ownProps: IRegisterOwnProps) => ({
    handleSubmit: () => {

    }
}); 

export class RegisterPage extends React.Component<any, any> {

    constructor(props: IRegisterProps) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                userName: '',
                password: ''
            },
            submitted: false
        }

    }

    handleChange(event: React.SyntheticEvent): void {
        let target = event.target as HTMLInputElement;
        let { name, value } = target;
        let { user } = this.state;

        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event: React.SyntheticEvent): void {
        event.preventDefault();

        this.setState({ submitted: true });
        let { user } = this.state;
        let { dispatch } = this.props;
        if (user.firstName && user.lastName && user.username && user.password) {
           // dispatch(userActions.register(user));
        }
    }

    render() {
        return(
            <h2>Register Component</h2>
        )
    }
}

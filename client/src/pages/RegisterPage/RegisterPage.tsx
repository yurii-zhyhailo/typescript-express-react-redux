import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

import { Dispatch, Action } from 'redux';
import { connect } from 'react-redux';

import { register } from '../../redux/actions';

import { IState } from '../../models';

type MapStateToProps = ReturnType<typeof mapStateToProps>;
type MapDispatchToProps = ReturnType<typeof mapDispatchToProps>;
interface IRegisterOwnProps extends RouteComponentProps<undefined> {};
type IRegisterProps = MapStateToProps & MapDispatchToProps & IRegisterOwnProps;

const mapStateToProps = (state: IState, ownProps: IRegisterOwnProps) => ({
    user: state.registration.user,
    isRegistering: state.registration.isRegistering
});

const mapDispatchToProps = (dispatch: Dispatch<Action>, ownProps: IRegisterOwnProps) => ({
    register: () => {
        return dispatch(register() as any);
    }
});

interface State {
    internalComponentState: any
}

export class RegisterPage extends React.Component<IRegisterProps/*, State*/> {

    constructor(props: IRegisterProps) {
        super(props);
    }

    handleChange(event: React.SyntheticEvent): void {
        let target = event.target as HTMLInputElement;
        let { name, value } = target;
    }

    handleSubmit(event: React.SyntheticEvent): void {
        event.preventDefault();
        let { user } = this.props;

        if (user.first_name && user.last_name && user.username && user.password) {
            this.props.register();
        }
    }

    render() {
        return(
            <div className="col-md-6 col-md-offset-3">
            <h2>Register</h2>
        </div>
        )
    }
}

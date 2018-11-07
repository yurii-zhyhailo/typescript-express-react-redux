import * as React from 'react';
import { validate } from "class-validator";
import { Link, RouteComponentProps } from 'react-router-dom';

import { Dispatch, Action, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import IStoreState from '../../store/IStoreState';

import { registerUser as registerUserAction } from '../../actions/register';
import { IUser } from '../../models/interfaces';
import UserViewModel from '../../models/user.model';

import IValidationErrors from '../../models/interfaces/IValidationErrors';
import { mapToValidationErrors } from '../../utilities';
import RegisterForm from './RegisterForm';
import strings from '../../strings';

interface IRegisterPageProps extends RouteComponentProps<any> {
    readonly viewModel: UserViewModel,
    register: (user: IUser) => (dispatch: Dispatch<any>) => Promise<void>;
}

interface IRegisterPageState {
    readonly actionInProgress: boolean;
    readonly viewModel: UserViewModel;
    readonly validationErrors: IValidationErrors;
}

class RegisterPage extends React.Component<IRegisterPageProps, IRegisterPageState> {
    constructor(props: IRegisterPageProps) {
        super(props);

        this.state = {
            actionInProgress: false,
            viewModel: this.props.viewModel,
            validationErrors: {}
        };

        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleSaveClick = this.handleSaveClick.bind(this);
        this.handleCancelClick = this.handleCancelClick.bind(this);
    }

    render() {
        return(
            <div className="col-md-6 col-md-offset-3">
                <h2>{strings.registerPage.title}</h2>

                <div className="card-body">
                <RegisterForm
                    user={this.state.viewModel}
                    validationErrors={this.state.validationErrors}
                    actionInProgress={this.state.actionInProgress}
                    handleSaveClick={this.handleSaveClick}
                    handleCancelClick={this.handleCancelClick} 
                    handleValueChange={this.handleValueChange}
                />
                </div>
            </div>
        )
    }

    private handleValueChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const propertyName = event.target.id;
        const updatedValue = event.target.value;

        const updatedUser = {
            ...this.state.viewModel,
            [propertyName]: updatedValue
        };

        this.setState({
            viewModel: updatedUser
        });
    }
    
    private async handleSaveClick(event: React.SyntheticEvent) {
        event.preventDefault();

        this.setState({
            actionInProgress: true 
        });

        const { viewModel } = this.state;

        const validationResult = await validate(viewModel);
        if (validationResult.length > 0) {
            this.setState({
              validationErrors: mapToValidationErrors(validationResult)
            });
        } else {
            await this.registerUser(viewModel);
           
            this.props.history.goBack();
        }

        this.setState({
            actionInProgress: false 
        });
    }

    private handleCancelClick() {
        this.props.history.goBack();
    }

    private async registerUser(user: IUser) {
        await this.props.register(user);
    }
}

function mapStateToProps(state: IStoreState, ownProps: RouteComponentProps<any>) {
    let userViewModel = new UserViewModel();
    return {
        viewModel: userViewModel
    };
};

function mapDispatchToProps(dispatch: Dispatch<Action>) {
    return {
        register: bindActionCreators(registerUserAction, dispatch)
    };
};

const connectedRegisterPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterPage);

export { connectedRegisterPage as RegisterPage }

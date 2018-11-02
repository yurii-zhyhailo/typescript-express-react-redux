import * as React from 'react';
import { validate } from "class-validator";
import { Link, RouteComponentProps } from 'react-router-dom';

import { Dispatch, Action, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import IStoreState from '../../store/IStoreState';

import { registerUser as registerUserAction } from '../../actions/registration';
import { IUser } from '../../models/interfaces';
import UserViewModel from '../../models/user.model';

import IValidationErrors from '../../models/interfaces/IValidationErrors';
import { mapToValidationErrors } from '../../utilities';
import SignUpForm from './SignUpForm';

interface IRegisterPageProps extends RouteComponentProps<any> {
    readonly viewModel: UserViewModel,
    register: (user: IUser) => (dispatch: Dispatch<any>) => Promise<void>;
}

interface IRegisterPageState {
    readonly actionInProgress: boolean;
    readonly submitted: boolean;
    readonly viewModel: UserViewModel;
    readonly validationErrors: IValidationErrors;
}

class RegisterPage extends React.Component<IRegisterPageProps, IRegisterPageState> {
    constructor(props: IRegisterPageProps) {
        super(props);

        this.state = {
            actionInProgress: false,
            submitted: false,
            viewModel: this.props.viewModel,
            validationErrors: {}
        };

        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleSaveClick = this.handleSaveClick.bind(this);
    }

    render() {
        let { actionInProgress } = this.state;
        let user = this.state.viewModel;
        let submitted = false;
        return(
            <div className="col-md-6 col-md-offset-3">
                <h2>Register</h2>

             <div className="card-body">
              <SignUpForm
                user={this.state.viewModel}
                validationErrors={this.state.validationErrors}
                actionInProgress={this.state.actionInProgress}
                handleSaveClick={this.handleSaveClick}
                handleValueChange={this.handleValueChange}
              />
            </div>

                {/* <form name="form" onSubmit={this.handleSaveClick}>
                    <div className={'form-group' + (submitted && !user.firstName ? ' has-error' : '')}>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" name="firstName" value={user.firstName ? user.firstName : ''} onChange={this.handleValueChange} />
                        {submitted && !user.firstName &&
                            <div className="help-block">First Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.lastName ? ' has-error' : '')}>
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control" name="lastName" value={user.lastName ? user.lastName : ''} onChange={this.handleValueChange} />
                        {submitted && !user.lastName &&
                            <div className="help-block">Last Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.username ? ' has-error' : '')}>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" value={user.username ? user.username : ''} onChange={this.handleValueChange} />
                        {submitted && !user.username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={user.password ? user.password : ''} onChange={this.handleValueChange} />
                        {submitted && !user.password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Register</button>
                        {actionInProgress && 
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                        <Link to="/login" className="btn btn-link">Cancel</Link>
                    </div>
                </form> */}
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
            submitted: true,
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
        }

        this.setState({
            actionInProgress: false 
        });
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

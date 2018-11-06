import * as React from 'react';
import Input from '../common/Input';
import strings from '../../strings';
import { Link } from 'react-router-dom';

interface ILoginForm {
    readonly username: string;
    readonly password: string;
    readonly actionInProgress: boolean;
    handleLoginClick: (
        event: React.SyntheticEvent
    ) => void;
    handleCancelClick: () => void;
    handleValueChange: (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => void;
}

export default function LoginForm(props: ILoginForm) {
    return (
        <form name="form" noValidate={true}>
            <div className="form-row">
                <Input
                    className="col-6"
                    id="username"
                    label={strings.loginPage.usernameLabel}
                    type="text"
                    placeholder={strings.loginPage.usernamePlaceholder}
                    value={props.username}
                    handleChange={props.handleValueChange}
                />

                <Input
                    className="col-6"
                    id="password"
                    label={strings.loginPage.passwordLabel}
                    type="text"
                    placeholder={strings.loginPage.passwordPlaceholder}
                    value={props.password}
                    handleChange={props.handleValueChange}
                />
            </div>

            <div className="col-11">
                <button
                    type="button"
                    className="btn btn-light"
                    onClick={props.handleCancelClick}
                >
                    {strings.registerPage.cancelButton}
                </button>
                <button
                    disabled={props.actionInProgress}
                    type="submit"
                    className="btn btn-primary ml-1"
                    onClick={props.handleLoginClick}
                >
                    {strings.registerPage.saveButton}
                </button>
            </div>

            <Link to="/register" className="btn btn-link">Register</Link>
        </form>
    )
}

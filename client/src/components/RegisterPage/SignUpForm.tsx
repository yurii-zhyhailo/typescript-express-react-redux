import * as React from 'react';
import IValidationErrors from '../../models/interfaces/IValidationErrors';
import UserViewModel from '../../models/user.model';
import Input from '../common/Input';
import strings from '../../strings';
import { nameOf } from '../../utilities';

interface ISignUpForm {
    readonly user: UserViewModel;
    readonly validationErrors: IValidationErrors;
    readonly actionInProgress: boolean;
    handleSaveClick: (
        event: React.SyntheticEvent
    ) => void;
    handleValueChange: (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => void;
}

export default function SignUpForm(props: ISignUpForm) {
    const firstName = nameOf<UserViewModel>("firstName");
    const lastName = nameOf<UserViewModel>("lastName");

    return (
        <form name="form" noValidate={true}>
            <div className="form-row">
                <Input
                    className="col-6"
                    id={firstName}
                    label={strings.signUpPage.firstNameLabel}
                    type="text"
                    placeholder={strings.signUpPage.firstNamePlaceholder}
                    value={props.user.firstName}
                    handleChange={props.handleValueChange}
                    validationErrors={props.validationErrors[firstName]}
                />

                <Input
                    className="col-6"
                    id={lastName}
                    label={strings.signUpPage.lastNameLabel}
                    type="text"
                    placeholder={strings.signUpPage.lastNamePlaceholder}
                    value={props.user.lastName}
                    handleChange={props.handleValueChange}
                    validationErrors={props.validationErrors[lastName]}
                />
            </div>

            <div className="col-11">
                <button disabled={props.actionInProgress} type="submit" className="btn btn-primary ml-1" onClick={props.handleSaveClick}>{strings.signUpPage.saveButton}</button>
            </div>
        </form>
    );
}

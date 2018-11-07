import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../actions';
import { IUserStoreState } from '../../store';
import LoginForm from './LoginForm';
import strings from '../../strings';

interface ILoginPageProps extends RouteComponentProps<any> {}

interface ILoginPageState {
    readonly username: string;
    readonly password: string;
    readonly actionInProgress: boolean;
}

class LoginPage extends React.Component<ILoginPageProps, ILoginPageState> {
    constructor(props: ILoginPageProps){
        super(props);

        this.state = {
            username: '',
            password: '',
            actionInProgress: false
        };

        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
    }

    render() {
        return(
            <div className="col-md-6 col-md-offset-3">
                <h2>{strings.loginPage.title}</h2>

                <div className="card-body">
                    <LoginForm 
                        username={this.state.username}
                        password={this.state.password}
                        actionInProgress={this.state.actionInProgress}
                        handleLoginClick={this.handleLoginClick}
                        handleCancelClick={this.handleCancelClick}
                        handleValueChange={this.handleValueChange}
                    />
             </div>
            </div>
        );
    }

    private handleValueChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const propertyName = event.target.name;
        const propertyValue = event.target.value;

        this.setState({
            ...this.state,
            [propertyName]: propertyValue
        });
    }

    private handleLoginClick(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        let { username, password } = this.state;

        if (username && password) {

        }
    }

     private handleCancelClick(){
        this.props.history.goBack();
     }

}


function mapStateToProps(state: any): any {
    return {
        logginIn: state.authentication.logginIn
    }
}

let connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage}

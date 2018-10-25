import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../actions';
import { IUserStoreState } from '../../store';

class LoginPage extends React.Component<any, any> {
    constructor(props: any){
        super(props);

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.props.dispatch(userActions.logout());

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    public handleChange(event: React.SyntheticEvent) : void {
        let target = event.target as HTMLInputElement;

        this.setState({
            [target.name]: target.value
        });
    }

    public handleSubmit(event: React.SyntheticEvent) : void {
        event.preventDefault();
        
        this.setState({ submitted: true });
        let { username, password } = this.state;
        let { dispatch } = this.props;

        if (username && password) {
            dispatch(userActions.login({
                username: username,
                password: password
            } as IUserStoreState));
        }
    }

    render() {
        let logginIn = this.props.logginIn;
        let { username, password, submitted} = this.state;
        return(
            <div className='col-md-6 col-md-offset-3'>
                <h2>Login</h2>
                <form name='form' onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !username ? ' has-error': '')}>
                        <label htmlFor='username'>Username</label>
                        <input type='text' className='form-control' name='username' value={username} onChange={this.handleChange}/>
                        {
                            submitted && !username && 
                                <div className='help-block'>Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <label htmlFor='password'>Password</label>
                        <input type='password' className='form-control' name='password' value={password} onChange={this.handleChange} />
                        {submitted && !password &&
                            <div className='help-block'>Password is required</div>
                        }
                    </div>
                    <div className='form-group'>
                        <button className='btn btn-primary'>Login</button>
                        {logginIn &&
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                        <Link to='/register' className='btn btn-link'>Register</Link>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state: any): any {
    return {
        logginIn: state.authentication.logginIn
    }
}

let connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage}

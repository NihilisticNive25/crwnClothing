import React from 'react';
import SignIn from '../../components/signIn/signIn.component';
import SignUp from '../../components/signUp/signUp.component';
import './signInAndSignUp.styles.scss';

export default class SignInandSignUp extends React.Component {
    render() {
        return (
            <div className="signInandSignUp">
			<SignIn/>
			<SignUp/>
			</div>
        )
    }
}
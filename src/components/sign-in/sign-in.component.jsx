import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {SignInWithGoogle} from '../../firebase/firebase.utils.js';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({email:'', password:''})
    }

    handleChange = (event) => {
        const {value, name} = event.target;

        this.setState({[name]: value});
    }

    render() {
        return (
            <div className='sign-in'>
                <h1>I already have an account</h1>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' label='Email' handleChange={this.handleChange} value={this.state.email} required />
                    <FormInput name='password' type='password' label='Password' handleChange={this.handleChange} value={this.state.password} />

                    <div className='buttons'>
                        <CustomButton type='submit' >SIGN IN</CustomButton>
                        <CustomButton type='button' onClick={SignInWithGoogle} isGoogleSignIn>
                            SIGN IN WITH GOOGLE
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;

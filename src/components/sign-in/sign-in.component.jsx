import React from 'react'

import './sign-in.styles.scss'

import FormInput from '../form-input/form-input.components';
import CustomButton from '../custom-button/custom-button.component';
import { loginUser, signInWithGoogle } from '../../firebase/firebase.utils';


class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password : ''
        }
    }

    handleSubmit = async event=>{
        event.preventDefault();
        const {email,password} = this.state;
        try {
            const user = await loginUser(email,password);
            console.log(user.user);
            this.setState({email : '', password : ''});
        }
        catch(e){
            console.log("Error logging In : " + e.message );
        }

    }

    handleChange  = event=>{
        const{value,name} = event.target;

        this.setState({[name]:value})
        //this [] will dynamically set the values
    }

    googleSignIn = async ()=>{
        try {
        const res = await signInWithGoogle();
        console.log(res.user);
        }catch(err) {
            console.log('Error Signing In With Google!' + err);
        }
    }

    render() {
        return(
            <div className= 'sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" label = "Email" value = {this.state.email}
                        onChange = {this.handleChange} required
                        
                    />
                    <FormInput type="password" name="password" value = {this.state.password}
                     onChange = {this.handleChange} label="Password"
                     required />

                     <div className="buttons">
                    <CustomButton type="submit">Sign In </CustomButton>
                    <CustomButton onClick={this.googleSignIn} isGoogleSignIn>
                        {''}
                        Sign in with google {''}
                    </CustomButton>
                    </div>                         
                </form>
            </div>
        )
    }
}

export default SignIn;
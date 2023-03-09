import React from 'react';
import { LoginBoxProps } from '../../types';
import './LoginBox.css';

const LoginBox = (props: LoginBoxProps) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.setUserData({
            ...props.userData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="login-box">
            <div className='login-input-section'>
                <span>Email</span>
                <input type='text' name='email' onChange={(e) => handleInputChange(e)} />
            </div>
            <div className='login-input-section'>
                <span> Password </span>
                <input type='password' name='password' onChange={(e) => handleInputChange(e)} />
            </div>
            <button onClick={props.handleLoginClick}>{ props.param === 'login' ? 'Login' : 'Register'}</button>
            { props.param == 'register' &&  <a href='/login'>Have an account</a>}
            { props.param == 'login' &&  <a href='/register'>Create an account</a>}
        </div>
    );
};

export default LoginBox;
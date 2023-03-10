import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginBox } from '../../components';
import { LOGIN_USER, REGISTER_USER } from '../../constants/apiEndpoints';
import { UserData } from '../../types';
import { makeRequestToAuth } from '../../utils/makeRequest/makeRequest';
import './LoginPage.css';

const LoginPage = () => {
    const navigate = useNavigate();
    const param = window.location.pathname.split('/')[1];
    const [userData, setUserData] = useState<UserData>({
        email: '',
        password: ''
    });

    const handleLoginClick = () => {
        makeRequestToAuth({ ...LOGIN_USER }, { data: userData }).then(resp => {
            if (resp) {
                localStorage.setItem('jwtToken', resp.data);
                navigate('/dashboard');
            }
        }
        );
    };

    const handleRegisterClick = () => {
        makeRequestToAuth({ ...REGISTER_USER }, { data: userData }).then(resp => {
            if (resp) {
                navigate('/login');
            }
        }
        );
    };

    return (
        <div className='login-page'>
            <div className='login-image'>
                <h1>Design APIs fast,
                    <br />
                    Manage content easily.
                </h1>
                <div className='login-image-container' >
                    <img src={'/assets/undraw-upload-re-pasx@3x.png'} alt='login' />
                </div>
            </div>
            <div className='login-box-container'>
                {param === 'login' && <h1>Login to your CMS+ account</h1>}
                {param === 'register' && <h1>Signup to your CMS+ account</h1>}
                <LoginBox
                    param={param}
                    userData={userData}
                    setUserData={setUserData}
                    handleLoginClick={param == 'login' ? handleLoginClick : handleRegisterClick}
                />
            </div>
        </div>
    );
};

export default LoginPage;
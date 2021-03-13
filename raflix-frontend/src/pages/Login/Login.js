import React from 'react';
import { Link } from 'react-router-dom';
import HeaderLogo from '../components/HeaderLogo';
import LoginForm from './LoginForm';
import Footer from '../components/Footer';
import './Login.css';

const Login = () => {
    return (
        <div className="login">
<<<<<<< HEAD
        <header>
            <Link to="/">
                <HeaderLogo/>
            </Link>                
        </header>
        <div className="login-bg">
            <img src="./images/KR-ko-20210222-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="로그인" />
            <div className="home-background-shadow"></div>
        </div>
        <LoginForm />
        <Footer />
=======
            <header>
                <Link to="/">
                    <HeaderLogo/>
                </Link>                
            </header>
            <div className="login-bg">
                <img src="./images/KR-ko-20210222-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="로그인" />
                <div className="home-background-shadow"></div>
            </div>
            <LoginForm />
            <Footer />
>>>>>>> 080dd0ccd29c0ab3d125bc522ee4193a0101b334
        </div>
    );
}

export default Login;
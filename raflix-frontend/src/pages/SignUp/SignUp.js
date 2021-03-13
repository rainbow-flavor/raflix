import React from 'react';
import { Link } from 'react-router-dom';
import HeaderLogo from '../components/HeaderLogo';
import SignUpSteps from './SignUpSteps';
import Footer from '../components/Footer';
import './SignUp.css';

const SIGN_UP_FOOTER = {
    backgroundColor: '#f3f3f3',
    color: '#0071eb',
};

const SignUp = ({ history, location }) => {
    const EMAIL = location.state.email;    
    return (
        <div className="sign-up">
            <header>
                <Link to="/">
                    <HeaderLogo/>
                </Link>
                <Link className="login" to="/login">로그인</Link>                
            </header>

            <div className="sign-up-steps">
                <SignUpSteps EMAIL={EMAIL}/>
            </div>
            <Footer style={SIGN_UP_FOOTER} />
        </div>
    );
};

export default SignUp;
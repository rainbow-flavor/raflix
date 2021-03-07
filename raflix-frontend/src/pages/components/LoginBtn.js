import React from 'react';
import { Link } from 'react-router-dom';

const LOGIN_BTN_STYLE = {
    padding: '7px 16px',
    backgroundColor: '#e50914',
    color: '#fff',
    fontSize: '16px',
    borderRadius: '5px',     
};

const LOGIN_A_STYLE = {      
    marginBottom: '9px',
    letterSpacing: '1px',
    color: '#fff',
};

const LoginBtn = () => {
    return (
        <button style={LOGIN_BTN_STYLE}>
            <Link style={LOGIN_A_STYLE} to='/login'>로그인</Link>   
        </button>
    );
}

export default LoginBtn;
import React from 'react';
import HeaderLogo from './HeaderLogo';
import LoginBtn from './LoginBtn';

const HEADER_STYLE = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    width: '100%', 
    zIndex: '100',
    padding: '25px 56px',   
};

function Header() {
    return (
        <div className="header" style={HEADER_STYLE}>
            <HeaderLogo/>
            <LoginBtn/>
        </div>
    );
}

export default Header;
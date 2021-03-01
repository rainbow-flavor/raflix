import React from 'react';
import Header_Logo from './Header_Logo';
import Login_Btn from './Login_Btn';

const HEADER_STYLE = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    width: '100%', 
    padding: '25px 56px',   
};

function Header() {
    return (
        <div className="header" style={HEADER_STYLE}>
            <Header_Logo/>
            <Login_Btn/>
        </div>
    );
}

export default Header;
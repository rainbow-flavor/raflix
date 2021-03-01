import React from 'react';

const LOGO = {
    width: "167px",
    height: "53px",
    background: "url('./images/Netflix_Logo_PMS2.png')no-repeat center / 100%",    
};

const Header_Logo = () => {
    return (        
        <h1 style={LOGO}>
            <span className="hide">Raflix</span>
        </h1>       
    );
}

export default Header_Logo;
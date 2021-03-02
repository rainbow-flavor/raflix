import React, { useState, useRef } from 'react';
import './HomeSignUp.css';

const HomeSignUp = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const labelRef = useRef();

    const handleEmail = (e) => {
        const emailRule = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;        

        if (emailRule.test(e.target.value)) {
            setEmailError('');
        } else if(e.target.value.length < 5){
            setEmailError('이메일 주소를 입력해 주세요.');
        } else {
            setEmailError('정확한 이메일 주소를 입력하세요.');
        }
        setEmail(e.target.value);
    };

    const handleLabel = (e) => {
        if (e.target.value !== '') return
        labelRef.current.classList.toggle('focus');
    }

    return (
        <>            
            <div className="home-email-container">
                <div className="home-email-form">
                    <div className="email-form">
                        <label ref={labelRef} htmlFor="email_input">이메일 주소</label>
                        <input                             
                        id="email_input"                
                        value={email} 
                        onChange={handleEmail}
                        onFocus={handleLabel}
                        onBlur={handleLabel}
                        />                
                    </div>
                    <div className="email-error">{emailError}</div>          
                </div>                
                <a href="#a" className="email-submit">30일 무료이용</a>
            </div>
            <p className="home-email-tip">신규 회원만 이 프로모션을 이용하실 수 있습니다.</p>
            
        </>
    );
};

export default HomeSignUp;
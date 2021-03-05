import React, { useState } from 'react';

const StepPriceOne = ({ setNextStep }) => {
    const handleClick = () => {
        setNextStep(true);
    };
    return (
        <>
            <img src="./images/Checkmark.png" alt="멤버쉽 안내사항"></img>
            <p className="step-current">2/3단계</p>
            <h2>원하는 멤버십을 선택하세요.</h2>
            <ul>
                <li>
                    <div className="check-tip"><img src="./images/check.gif" alt="안내사항1"/></div>
                    <span>무료 이용이 종료되기 전까지는<br/> 요금이 청구되지 않습니다.</span>
                </li>
                <li>
                    <div className="check-tip"><img src="./images/check.gif" alt="안내사항2"/></div>
                    <span>무료 이용 종료 3일 전에 알림<br/> 이메일을 보내드립니다.</span>
                </li>
                <li>
                    <div className="check-tip"><img src="./images/check.gif" alt="안내사항3"/></div>
                    <span>無약정, 無위약금. 해지도 쿨하게<br/> 언제든지.</span>
                </li>
            </ul>
            <button onClick={handleClick}>멤버쉽 요금제 보기</button>
        </>
    )
};

const StepPriceTwo = () => {
    return (
        <div className="step-priceinfo">
            <p className="step-current">2/3단계</p>
            <h2>원하는 멤버십을 선택하세요.</h2>
            <ul className="step-check-tip">
                <li>
                    <div className="check-tip"><img src="./images/check.gif" alt="안내사항1"/></div>
                    <span>첫 달 요금은 0원입니다.</span>
                </li>
                <li>
                    <div className="check-tip"><img src="./images/check.gif" alt="안내사항2"/></div>
                    <span>광고 없이 무제한으로 시청.</span>
                </li>
                <li>
                    <div className="check-tip"><img src="./images/check.gif" alt="안내사항3"/></div>
                    <span>멤버십은 언제든지 변경 또는 해지할 수 있습니다.</span>
                </li>
            </ul>
        </div>
    )
}

const SignUpTwo = ({ userData, setUserData }) => {
    const [nextStep, setNextStep] = useState(false);
    return (
        <div className="">
            {!nextStep 
            ? <StepPriceOne setNextStep={setNextStep}/>
            : <StepPriceTwo userData={userData} setUserData={setUserData}/>
            }
        </div>
    );
}

export default SignUpTwo;
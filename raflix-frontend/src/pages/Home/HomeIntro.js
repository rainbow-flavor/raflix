import React from 'react';
import HomeSignUp from './HomeSignUp';
import './HomeIntro.css';

const HomeIntro = () => {
    return (
        <section className="home-intro">
                <div className="home-intro-content">
                    <h2>
                        영화, TV 프로그램을 <br/>
                        무제한으로.
                    </h2>
                    <h3>다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.</h3>              
                          
                    <HomeSignUp/>
                    <p className="home-email-tip">신규 회원만 이 프로모션을 이용하실 수 있습니다.</p>
                </div>
                <div className="home-background">
                    <img 
                        src="https://assets.nflxext.com/ffe/siteui/vlv3/e178a4e7-4f52-4661-b2ae-41efa25dca7c/176b55fc-f48b-481d-8d81-925ea2d5bcb9/KR-ko-20210222-popsignuptwoweeks-perspective_alpha_website_small.jpg" 
                        alt="home소개글" 
                    />
                    <div className="home-background-shadow"></div>
                </div>          
            </section>
    );
}

export default HomeIntro;
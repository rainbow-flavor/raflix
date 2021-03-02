import React from 'react';
import Header from './Header';
import HomeSignUp from './HomeSignUp';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Header />
            <section className="home-intro">
                <div className="home-intro-content">
                    <h2>
                        영화, TV 프로그램을 <br/>
                        무제한으로.
                    </h2>
                    <h3>다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.</h3>              
                    <h4>시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</h4>      
                    <HomeSignUp/>
                </div>
                <div className="home-background">
                    <img 
                        src="https://assets.nflxext.com/ffe/siteui/vlv3/e178a4e7-4f52-4661-b2ae-41efa25dca7c/176b55fc-f48b-481d-8d81-925ea2d5bcb9/KR-ko-20210222-popsignuptwoweeks-perspective_alpha_website_small.jpg" srcset="https://assets.nflxext.com/ffe/siteui/vlv3/e178a4e7-4f52-4661-b2ae-41efa25dca7c/176b55fc-f48b-481d-8d81-925ea2d5bcb9/KR-ko-20210222-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/e178a4e7-4f52-4661-b2ae-41efa25dca7c/176b55fc-f48b-481d-8d81-925ea2d5bcb9/KR-ko-20210222-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/e178a4e7-4f52-4661-b2ae-41efa25dca7c/176b55fc-f48b-481d-8d81-925ea2d5bcb9/KR-ko-20210222-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w" 
                        alt="home소개글" 
                    />
                    <div className="home-background-shadow"></div>
                </div>
                
                
            </section>
            {/* <Footer />             */}
        </div>
    );
}

export default Home;
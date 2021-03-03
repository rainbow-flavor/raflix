import React from 'react';
import './HomeStory.css';

const HOME_STORY_DATA = [
    {
        title: 'TV로 즐기세요.',
        text: '스마트 TV, PlayStation, Xbox, Chromecast,<br/> Apple TV, 블루레이 플레이어 등 다양한<br/> 디바이스에서 시청하세요.',
        imgSrc: './images/tv.png',
        videoSrc: './videos/video-tv-0819.m4v',               
    },
    {
        title: '즐겨 보는 콘텐츠를<br/> 저장해 오프라인으로<br/> 시청하세요.',
        text: '간편하게 저장하고 빈틈없이 즐겨보세요.',
        imgSrc: './images/mobile-0819.jpg',
        videoSrc: '',               
    },
    {
        title: '다양한 디바이스에서 시청하세요.',
        text: '각종 영화와 TV 프로그램을 스마트폰,<br/> 태블릿, 노트북, TV에서 무제한으로<br/> 스트리밍하세요. 추가 요금이 전혀 없습니다.',
        imgSrc: './images/tv.png',
        videoSrc: './videos/video-devices.m4v',        
    },
];

const HomeStory = () => {       
    return (
        <>
            <section  className="home-story">
                <div className="home-story-content">
                    <div className="home-story-text">
                        <h2>TV로 즐기세요.</h2>
                        <p>스마트 TV, PlayStation, Xbox, Chromecast,<br/> Apple TV, 블루레이 플레이어 등 다양한<br/> 디바이스에서 시청하세요.</p> 
                    </div>
                    <div className="home-story-show">
                        <img src="./images/tv.png"/>                       
                        <video autoPlay playsInline="" muted="true" loop="true">
                            <source src="./videos/video-tv-0819.m4v"/>
                        </video>                                         
                    </div>
                </div>
            </section>            
            <section  className="home-story">
                <div className="home-story-content">
                    <div className="home-story-show">
                        <img src="./images/mobile-0819.jpg"/>                                                                                       
                    </div>
                    <div className="home-story-text">
                        <h2>즐겨 보는 콘텐츠를<br/> 저장해 오프라인으로<br/> 시청하세요.</h2>
                        <p>간편하게 저장하고 빈틈없이 즐겨보세요.</p> 
                    </div>                    
                </div>
            </section>            
            <section  className="home-story">
                <div className="home-story-content">
                    <div className="home-story-text">
                        <h2>다양한 디바이스에서<br/> 시청하세요.</h2>
                        <p>각종 영화와 TV 프로그램을 스마트폰,<br/> 태블릿, 노트북, TV에서 무제한으로<br/> 스트리밍하세요. 추가 요금이 전혀 없습니다.</p> 
                    </div>
                    <div className="home-story-show">
                        <img src="./images/device-pile.png"/>                       
                        <video class="home-video" autoPlay playsInline="" muted="true" loop="true">
                            <source src="./videos/video-devices.m4v"/>
                        </video>                                         
                    </div>
                </div>
            </section>            
        </>
    );
}

export default HomeStory;
                            
                                         
                    
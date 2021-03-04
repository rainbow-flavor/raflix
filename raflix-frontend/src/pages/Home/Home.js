import React from 'react';
import Header from './Header';
import HomeIntro from './HomeIntro';
import HomeStory from './HomeStory';
import Questions from './Questions';
import './Home.css';



const Home = () => {
    return (
        <div>
            <Header />
            <HomeIntro/>                
            <HomeStory/>
            <Questions />
         
            {/* <Footer />             */}
        </div>
    );
}

export default Home;
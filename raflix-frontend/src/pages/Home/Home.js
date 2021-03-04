import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomeIntro from './HomeIntro';
import HomeStory from './HomeStory';
import Questions from './Questions';
import './Home.css';



const Home = () => {
    return (
        <div className="home">
            <Header />
            <HomeIntro/>                
            <HomeStory/>
            <Questions />
            <Footer />            
        </div>
    );
}

export default Home;
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomeIntro from './HomeIntro';
import HomeStory from './HomeStory';
import Questions from './Questions';
import loginCheck from '../../App';
import './Home.css';



const Home = ({ history }) => {
    const loginCheck = () => {
        const userData = localStorage.getItem('USER_DATA');
        const accessToken = JSON.parse(userData).data.accessToken;
        if(!accessToken) {      
          return;      
        } else {
          console.log('토큰인증');      
        }
        return accessToken;
    };
    useEffect(() => {
        console.log(history)
        if(loginCheck()) {
            history.push('/browse');
        }
    },[]);

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
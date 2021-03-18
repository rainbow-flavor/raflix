import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BrowseHeader from './BrowseHeader';
import MainVideo from './MainVideo';
import Footer from '../components/Footer';
import './Browse.css';

const Browse = () => {    
    const [movieData, setMovieData] = useState([]);
    useEffect(() => {
        const movieUrl = "https://yts.mx/api/v2/list_movies.json?sort_by=rating";
        let movieData = [];
        axios.get(movieUrl).then((res) => {
            movieData= [...res.data.data.movies];        
            setMovieData(movieData);
        }); 
    },[movieData]);      

    
    return (       
        <div className="browse">
            <BrowseHeader/>
            <MainVideo movieData={movieData}/>    
            <Footer style={{backgroundColor: '#000'}} />          
        </div>        
    );
};

export default Browse;
            
            

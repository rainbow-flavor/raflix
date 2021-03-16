import React, {useEffect, useState } from 'react';
import axios from 'axios';
import BrowseHeader from './BrowseHeader';
import VideoList from './VideoList';
import Footer from '../components/Footer';
import './Browse.css';

const FooterStyle = {
    backgroundColor: '#000'
};
const MAINBOX = {
    width: '100%',
    height:'300px',
    backgroundColor: '#ccc'
};


const Browse = () => {    
    const [movieData, setMovieData] = useState([]);
    useEffect(() => {
        const movieUrl = "https://yts.mx/api/v2/list_movies.json?sort_by=rating";
        let movieData = [];
        axios.get(movieUrl).then((res) => {
            movieData= [...res.data.data.movies];        
            setMovieData(movieData);
        }); 
    },[]);      
    return (
       
        <div className="browse">
            <BrowseHeader/>
            <div style={MAINBOX}></div>
            <VideoList heading={"Action"} data={movieData.filter((v) => v.genres.includes("Action"))} />           
            {/* <VideoList heading={"Romance"} data={movieData.filter((v) => v.genres.includes("Romance"))} />            */}
            <VideoList heading={"Drama"} data={movieData.filter((v) => v.genres.includes("Drama"))} />           
            <Footer style={FooterStyle} />          
        </div>
        
    );
};

export default Browse;

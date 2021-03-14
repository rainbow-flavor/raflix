import React, { useState } from 'react';
import { FaAngleRight } from "react-icons/fa";
import Slider from "react-slick";
import Video from './Video.js';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './VideoList.css';

const VideoList = ({ heading, data }) => {    
    const [click, setClick] = useState(false);   
     
    const settings = {
        dots: false,        
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,   
        afterChange : () => setClick(true)       
    };
    
    return (
        <div className="video-list">
            <div className="list-name">
                <h3>
                    {heading}
                    <span>모두 보기</span>
                    <b><FaAngleRight/></b>                    
                </h3>                
            </div>

            <ul className={`list ${click ? "focus" : ''}`}>
                <Slider {...settings}>
                    {data.map((info,i) => {
                        const {title, id} = info;
                        return <Video key={id} title={title}/>
                    })}                               
                </Slider>
            </ul>
            
        </div>
    );
};

export default VideoList;
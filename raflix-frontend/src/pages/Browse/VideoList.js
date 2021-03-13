import React, {useState} from 'react';
import Video from './Video.js';
import { FaAngleRight } from "react-icons/fa";
import Slider from "react-slick";
import './VideoList.css';

const VideoList = ({ heading, data }) => {    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };
    return (
        <div className="video-list">
            <div className="list-name">
                <h3>
                    {heading}
                    <span>모두 보기<FaAngleRight/></span>
                </h3>                
            </div>

            <ul className="list">
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
import React, { useState } from 'react';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import Slider from "react-slick";
import Video from './Video.js';
import "slick-carousel/slick/slick.css"; 
import './VideoList.css';

function PrevArrow(props) {
    const {className, style, onClick} = props;
    return (
        <button className={className} style={style} onClick={onClick}>
            <i><FaAngleLeft/></i>
        </button>
    );
}

function NextArrow(props) {
    const {className, style, onClick} = props;
    return (
        <button className={className} style={style} onClick={onClick}>
            <i><FaAngleRight/></i>
        </button>
    );
}

const VideoList = ({ heading, data }) => {    
    const [click, setClick] = useState(false);   
     const [show, setShow] =useState(false);
    const settings = {
        dots: false,        
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,  
        prevArrow: <PrevArrow/>,
        nextArrow: <NextArrow/>,           
        afterChange : () => setClick(true)       
    };
    
    return (    
        <div className={`video-list ${show ? 'focus' : ''}`}>
            <div className="list-name">
                <h3>
                    {heading}
                    <span>모두보기<em>모두보기</em></span>                
                    <b><FaAngleRight/></b>                    
                </h3>                
            </div>

            <ul className={`list ${click ? "focus" : ''}`}>
                {!click && <div className="prev-block"></div>}
                <Slider {...settings}>
                    {data.map((info,i) => {                        
                        const { id } = info;
                        return <Video setShow={setShow} key={id} data={{...info}}/>
                    })}                               
                </Slider>
            </ul>
        </div>
    );
};

export default VideoList;
            
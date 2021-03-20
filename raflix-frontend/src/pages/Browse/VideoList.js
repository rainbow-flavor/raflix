import React, { useState, useRef, useEffect } from 'react';
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
    const {className, style, onClick, btnWidth} = props;
    const btnStyle = {
        ...style,
        width: btnWidth
    }
    return (
        <button className={className} style={btnStyle} onClick={onClick}>
            <i><FaAngleRight/></i>
        </button>
    );
}

const VideoList = ({ heading, data }) => {    
    const [click, setClick] = useState(false);   
    const [show, setShow] =useState(false);
    const containerRef = useRef();   
    const containerWidthRef = useRef(0);

    useEffect(()=> {
        console.dir(containerRef.current)
        containerWidthRef.current = Math.floor(containerRef.current.offsetLeft);        
    },[]);

    const settings = {
        dots: false,        
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,  
        prevArrow: <PrevArrow/>,
        nextArrow: <NextArrow btnWidth={containerWidthRef.current}/>,                   
        afterChange : () => {
            setClick(true);
            containerRef.current.classList.add('focus');
        }      
    };
    
    

    return (            
        <div ref={containerRef} className="video-list-container">
            <div className={`video-list ${show ? 'focus' : ''}`}>
                <div className="list-name">
                    <h3>
                        {heading}
                        <span>모두보기<em>모두보기</em></span>                
                        <b><FaAngleRight/></b>                    
                    </h3>                
                </div>

                <ul className={`list ${click ? "focus" : ''}`}>                    
                    <Slider {...settings}>
                        {data.map((info,i) => {                        
                            const { id } = info;
                            return <Video setShow={setShow} key={id} data={{...info}}/>
                        })}                               
                    </Slider>
                </ul>
            </div>
        </div>
    );
};

export default VideoList;
            
import React, {useState, useRef, useEffect} from 'react';
import VideoInfo from './VideoInfo';
import './Video.css';

const TopVideo = ({ rank,data,setShow }) => {    
    const [trasnformData, setTrasnformData] = useState('');  
    const [userData, setUserData] = useState({
        like : false,
        mine : false,
        disLike : false,
    });  
    const [focus, setFocus] = useState(false);
    const videoRef = useRef();
    const fadeInfo = useRef();

    const indexCheck = () => { 
        const slideIdx = videoRef.current.parentNode.parentNode.dataset.index;        
        if (slideIdx % 6 === 0) {
            setTrasnformData('left center');
        } else if (slideIdx % 6 === 5) {
            setTrasnformData('right center');
        }
    };       

    const hoverShowInfo = () => {
        setFocus(true)
        setShow(true);
    };

    const hoverFadeInfo = () => {
        fadeInfo.current = setTimeout(() => {
            setFocus(false);
            setShow(false);
        }, 1000);             
    };

    useEffect(() => {
        indexCheck();
        return () => {
            clearTimeout(fadeInfo.current);
        };
    },[trasnformData]);    

    return (
        <li 
        className="video top-video" 
        ref={videoRef}         
        onMouseEnter={hoverShowInfo}         
        >
            <div className="video-container">
                <div className="top-poster">
                    <div className="top-rank">
                        <span>{rank + 1}</span>                        
                    </div>
                    <img src={data.large_cover_image} alt={data.title}/>                             
                </div>            
              {focus && <VideoInfo 
              setShow={setShow}
              data={data} 
              focus={focus} 
              hoverFadeInfo={hoverFadeInfo}
              style={{transformOrigin: trasnformData}}
              userData={userData}
              setUserData={setUserData}
              />}
            </div>
        </li>
    );
}

export default TopVideo;
              
                
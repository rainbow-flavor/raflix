import React, {useState, useRef, useEffect} from 'react';
import VideoInfo from './VideoInfo';
import './Video.css';

const Video = ({ data }) => {    
    const [trasnformData, setTrasnformData] = useState('');    
    const [focus, setFocus] = useState(false);
    const videoRef = useRef();
    const changeVideo = useRef();
    const indexCheck = idx => {
        const slideIdx = videoRef.current.parentNode.parentNode.dataset.index;        
        if (slideIdx % 6 === 0) {
            setTrasnformData('left center');
        } else if (slideIdx % 6 === 5) {
            setTrasnformData('right center');
        }
    };   

    const hoverShowInfo = () => {
        setFocus(true)
        
    };

    const hoverFadeInfo = () => {
        setFocus(false);
    }

    useEffect(() => {
        indexCheck();
    },[trasnformData]);    

    return (
        <li 
        className="video" 
        ref={videoRef}         
        onMouseEnter={hoverShowInfo} 
        onMouseLeave={hoverFadeInfo}
        >
            <div className="video-container">
                <div className="video-thumb">
                    <img src="https://occ-0-2794-1360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSTDfc1O_e_SnmVMFiRqLVl72HJT1H6v1Yc67t7LsOAlWnb72thV7jHSMfNL21rvja-4y4XnEijbPjhd1JOcW3FREs3QKJisV9RNxS5IE-GIgfeaB9t6Ud7Upz2WPFzc8EondjJfIc2JE58fnZcMGkCKZFqt3CisQmTltCIqWtfxEW90l63suNqoGMdk.webp?r=c4e/" alt={data.title}/>                             
                </div>            
              {focus && <VideoInfo data={data} focus={focus} style={{transformOrigin: trasnformData}}/>}
            </div>
        </li>
    );
}

export default Video;
              
                
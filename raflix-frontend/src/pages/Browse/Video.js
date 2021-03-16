import React, {useState, useRef, useEffect} from 'react';
import VideoInfo from './VideoInfo';
import './Video.css';

const Video = (props) => {
    console.log(props)
    const [trasnformData, setTrasnformData] = useState(0);
    const [tras, setTras] = useState('');
    const [focus, setFocus] = useState(false);
    const videoRef = useRef();

    const indexCheck = idx => {
        const slideIdx = videoRef.current.parentNode.parentNode.dataset.index;
        setTrasnformData(slideIdx);
        if (slideIdx % 6 === 0) {
            setTras('left center');
        } else if (slideIdx % 6 === 5) {
            setTras('right center');
        }
    };   

    useEffect(() => {
        indexCheck();
    },[trasnformData]);    

    return (
        <li 
        className="video" 
        ref={videoRef}         
        onMouseEnter={() => setFocus(true)} 
        onMouseLeave={() => setFocus(false)}
        >
            <div className="video-container">
                <div className="video-thumb">
                    <img src="https://occ-0-2794-1360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSTDfc1O_e_SnmVMFiRqLVl72HJT1H6v1Yc67t7LsOAlWnb72thV7jHSMfNL21rvja-4y4XnEijbPjhd1JOcW3FREs3QKJisV9RNxS5IE-GIgfeaB9t6Ud7Upz2WPFzc8EondjJfIc2JE58fnZcMGkCKZFqt3CisQmTltCIqWtfxEW90l63suNqoGMdk.webp?r=c4e/" alt={props.title}/>                             
                </div>

                {focus && <VideoInfo focus={focus} style={{
                        transformOrigin: tras,                        
                    }}/> }     
            </div>
        </li>
    );
}

export default Video;
                
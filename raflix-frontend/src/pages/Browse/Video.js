import React, {useState, useRef, useEffect} from 'react';
import VideoInfo from './VideoInfo';
import './Video.css';

const Video = ({ data,setShow }) => {    
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
        className="video" 
        ref={videoRef}         
        onMouseEnter={hoverShowInfo}         
        >
            <div className="video-container">
                <div className="video-thumb">
                    <img src="https://occ-0-2794-1360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSTDfc1O_e_SnmVMFiRqLVl72HJT1H6v1Yc67t7LsOAlWnb72thV7jHSMfNL21rvja-4y4XnEijbPjhd1JOcW3FREs3QKJisV9RNxS5IE-GIgfeaB9t6Ud7Upz2WPFzc8EondjJfIc2JE58fnZcMGkCKZFqt3CisQmTltCIqWtfxEW90l63suNqoGMdk.webp?r=c4e/" alt={data.title}/>                             
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

export default Video;
              
                
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
                    <img src={data.large_cover_image} alt={data.title}/>        
                                         {/*이미지는 규격 맞추기 임시로 데이터 이미지 활용중*/}
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
              
                
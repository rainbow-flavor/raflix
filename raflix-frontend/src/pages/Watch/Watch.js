import React, {useState, useRef, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaPause, FaPlay, FaBackward, FaForward , FaVolumeUp, FaInfoCircle, FaStepForward, FaRegClone, FaRegClosedCaptioning} from "react-icons/fa";
import { BiFullscreen, BiExitFullscreen } from "react-icons/bi";
import './Watch.css';

function Watch(props) {    
    const {title} = props.location.state;
    const [play, setPlay] = useState(false);
    const [volume, setVolume] = useState(0);    
    
    const videoBoxRef = useRef();
    const videoRef = useRef();
    const playTimeRef = useRef();
    const playBarRef = useRef();
    
    useEffect(() => {        
        if (videoRef.current && playBarRef.current) {
            videoRef.current.addEventListener('timeupdate', changeProgress);       
            playBarRef.current.addEventListener('click',scrub);
        }        
        return () => {
            if (videoBoxRef.current) {
                videoBoxRef.current.removeEventListener('click',handlePlay);
            }            
        } 
    },[play]);

    const changeProgress = (e) => {
        const video = e.currentTarget;
        const runTime = video.duration;
        const playTime = video.currentTime;       
        if (playTimeRef.current) {
            playTimeRef.current.style.width =  `${(playTime / runTime) * 100}%`;
        } else {
            return;
        }
        
    };

    const handlePlay = () => {
        if(play) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
        setPlay(!play);
    };
    
    const handlePlayTime = (e) => {
        const btnType = e.currentTarget.className;        
        if (btnType === 'backward') { // 10초전
            if (play - 10 < 0) return; 
            videoRef.current.currentTime -= 10;
        } else if (btnType === 'forward') { // 10초 뒤
            videoRef.current.currentTime += 10;
        }
    };

    const scrub = (e) => {
        const scrubTime = (e.offsetX / playBarRef.current.offsetWidth) * videoRef.current.duration;        
        videoRef.current.currentTime = scrubTime;
    };

    const handleVideoScreen = () => {
        videoRef.current.requestFullscreen()
    };

    return (
        <div className="watch" ref={videoBoxRef}>
            <div className="watch-video">
                <video ref={videoRef} autoPlay muted>
                    <source src="./videos/watch-1.mp4"/>
                </video>
            </div>
            <div className="watch-controls">
                <div className="back">
                    <Link to="/browse">
                        <FaArrowLeft/>
                    </Link>
                </div>

                <div className="controls">
                    <div className="progress" ref={playBarRef}>
                        <div ref={playTimeRef} className="play-time">
                            <span></span>
                        </div>
                    </div>

                    <div className="watch-btns">
                        <div className="btn-basic">
                            <button onClick={handlePlay} title="재생"><span>{play ? <FaPlay/> : <FaPause/>}</span></button>
                            <button className="backward" onClick={handlePlayTime} title="10초 전으로 감기"><span><FaBackward/></span></button>
                            <button className="forward" onClick={handlePlayTime} title="10초 앞으로 감기"><span><FaForward/></span></button>
                            <button><span><FaVolumeUp/></span></button>
                        </div>

                        <h1>{title}</h1>

                        <div className="btn-util">
                            <button><span><FaInfoCircle/></span></button>
                            <button><span><FaStepForward/></span></button>
                            <button><span><FaRegClone/></span></button>
                            <button><span><FaRegClosedCaptioning/></span></button>                        
                            <button onClick={handleVideoScreen}><span><BiFullscreen/></span></button>               
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    );
}

export default Watch;
                        
                        
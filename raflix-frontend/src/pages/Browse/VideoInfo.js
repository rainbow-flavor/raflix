import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineDislike, AiOutlineLike, AiFillDislike, AiFillLike, AiOutlineMenuUnfold } from "react-icons/ai";
import { FaPlus, FaPlay, FaCheck } from "react-icons/fa";
import './VideoInfo.css';

const VideoInfo = ({ data, style, focus }) => {    
    const { title, genres, rating, background_image } = data;
    const [mine, setMine] = useState(false);
    const [like, setLike] = useState(false);
    const [disLike, setDisLike] = useState(false);

    const clickAddList = () => setMine(!mine)
    const clickLike = () => setLike(!like);
    const clickDisLike = () => setDisLike(!disLike);

    return (
        <>
        
        <div className="video-info" style={style}>
            {
                focus 
                ? <video autoPlay muted >
                    <source src="./videos/video-tv-0819.mp4"/>
                </video> 
                : <img src="https://occ-0-2794-1360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSTDfc1O_e_SnmVMFiRqLVl72HJT1H6v1Yc67t7LsOAlWnb72thV7jHSMfNL21rvja-4y4XnEijbPjhd1JOcW3FREs3QKJisV9RNxS5IE-GIgfeaB9t6Ud7Upz2WPFzc8EondjJfIc2JE58fnZcMGkCKZFqt3CisQmTltCIqWtfxEW90l63suNqoGMdk.webp?r=c4e/" alt={title}/>
            }
             
            
            <div className="video-utils">
                <div className="video-btns">
                    <div className="btns-user">         
                        <Link to="/watch">            
                            <button className="btns-play">                                
                                <span className="hide">재생</span><FaPlay/>                                
                            </button>
                        </Link>   
                        <button onClick={clickAddList} className="btns-add">
                            <div className="text">
                                <span>내가 찜한 콘텐츠에서 추가<b></b></span>
                            </div>
                            {!mine ? <FaPlus/> : <FaCheck/>}                            
                        </button>
                        <button onClick={clickLike} className="btns-like">
                            <div className="text">
                                <span>좋아요<b></b></span>
                            </div>
                            {!like ? <AiOutlineLike/> : <AiFillLike/>}
                            
                        </button>
                        <button onClick={clickDisLike} className="btns-dislike">
                            <div className="text">
                                <span>맘에 안들어요<b></b></span>
                            </div>             
                            {!disLike ? <AiOutlineDislike/> : <AiFillDislike/>}   
                            
                        </button>
                    </div>
                    <div>
                        <button>
                            <div className="text">
                                <span>회차 및 상세정보<b></b></span>
                            </div>                            
                            <AiOutlineMenuUnfold/>
                        </button>
                    </div>
                </div>

                <div className="video-detail">
                    <b>{rating * 10}% 일치</b>
                    <span className="age">15+</span>
                    <span>시즌 1개</span>
                </div>

                <p className="video-genres">
                    {genres.map((v, i) => <span key={i}>{v}</span>)}                    
                </p>
            </div>              
        </div>
        
        </>
    );
}

export default VideoInfo;
            
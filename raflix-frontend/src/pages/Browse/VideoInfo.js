import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AiFillDislike, AiFillLike, AiOutlineCheck,AiOutlineMenuUnfold } from "react-icons/ai";
import { FaPlus, FaPlay } from "react-icons/fa";
import './VideoInfo.css';

const VideoInfo = ({style, focus}) => {    
    return (
        <>
        
        <div className="video-info" style={style}>
            <img src="https://occ-0-2794-1360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSTDfc1O_e_SnmVMFiRqLVl72HJT1H6v1Yc67t7LsOAlWnb72thV7jHSMfNL21rvja-4y4XnEijbPjhd1JOcW3FREs3QKJisV9RNxS5IE-GIgfeaB9t6Ud7Upz2WPFzc8EondjJfIc2JE58fnZcMGkCKZFqt3CisQmTltCIqWtfxEW90l63suNqoGMdk.webp?r=c4e/"/> 
            
            <div className="video-utils">
                <div className="video-btns">
                    <div className="btns-user">         
                        <Link to="/watch">            
                            <button className="btns-play">                                
                                <span className="hide">재생</span><FaPlay/>                                
                            </button>
                        </Link>   
                        <button className="btns-add">
                            <div className="text">
                                <span>내가 찜한 콘텐츠에서 추가<b></b></span>
                            </div>
                            <FaPlus/>
                        </button>
                        <button className="btns-like">
                            <div className="text">
                                <span>좋아요<b></b></span>
                            </div>
                            <AiFillLike/>
                        </button>
                        <button className="btns-dislike">
                            <div className="text">
                                <span>맘에 안들어요<b></b></span>
                            </div>                            
                            <AiFillDislike/>
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
                    <b>98% 일치</b>
                    <span className="age">15+</span>
                    <span>시즌 1개</span>
                </div>

                <p className="video-genres">
                    <span>잔잔한 분위기</span>
                    <span>감동과 영감</span>
                    <span>드라마 장르</span>
                </p>
            </div>              
        </div>
        
        </>
    );
}

export default VideoInfo;
            
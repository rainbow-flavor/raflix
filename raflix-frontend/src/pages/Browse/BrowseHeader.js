import React, { useState, useRef } from 'react';
import {Link} from 'react-router-dom';
import { FaSearch,FaGift,FaBell,FaWindowClose  } from "react-icons/fa";
import './BrowseHeader.css';

const SearchVideo = () => {
    const [search, setSearch] = useState('');
    const [searchSw, setSearchSw] = useState(false);
    
    const labelRef = useRef();
    
    const showInput = () => {
        labelRef.current.classList.add('focus');
    };

    const hideInput = (e) => {
        if(search.length <= 0) {
            setSearchSw(false);
            labelRef.current.classList.remove('focus');
        }        

    };

    const handleInput = e => {
        setSearch(e.target.value);
    };

    return (
        <>
            <label 
            ref={labelRef} 
            className="searchBox" 
            htmlFor="search"
            onFocus={()=> setSearchSw(true)}
            onBlur={hideInput}  
            onClick={showInput}          
            >
                <span className="hide">검색</span>
                <FaSearch className="search-icon" />
                <input id="search" placeholder="제목, 사람, 장르" value={search} onChange={handleInput}/>
                {searchSw && 
                    <FaWindowClose style={{                        
                        fontSize: '20px'
                    }}
                    className="search-close"                     
                    />
                }
            </label>
        </>
    );
};

const BrowseHeader = () => {
    return (
        <header>
            <div>                
                <h1>
                    <Link to="/browse">
                    <img src="./images/Netflix_Logo_PMS2.png" alt="넷플릭스"/>
                    </Link>
                </h1>               

                <ul className="contents-nav">                    
                    <li><Link>홈</Link></li>
                    <li><Link>Tv프로그램</Link></li>
                    <li><Link>영화</Link></li>
                    <li><Link>NEW! 요즘 대세 콘텐츠</Link></li>
                    <li><Link>내가 찜한 콘텐츠</Link></li>
                </ul>
            </div>

            <ul className="user-nav">                
                <li><SearchVideo/></li>
                <li>키즈</li>
                <li><FaGift/></li>
                <li><FaBell/></li>
                <li>USER</li>
            </ul>
        </header>
    )
};

export default BrowseHeader;
                    
                    
                    
                    
                    
                    
                    
                    
                    
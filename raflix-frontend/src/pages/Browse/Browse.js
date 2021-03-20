import React, { useEffect, createContext, useReducer } from 'react';
import axios from 'axios';
import BrowseHeader from './BrowseHeader';
import MainVideo from './MainVideo';
import Footer from '../components/Footer';
import './Browse.css';

export const MovieContext = createContext({
    data: [],
    isSearch: false,
    dispatch: () => {},
});

const initialState = {
    data: [],
    isSearch: false
};

const GET_MOVIE = "GET_MOVIE";
export const CLICK_LIKE = "CLICK_LIKE";
export const CLICK_DISLIKE = "CLICK_DISLIKE";
export const ADD_MYLIST = "ADD_MYLIST";

const reducer = (state, action) => {
    const { data } = state;
    const changeData = [...data];

    switch(action.type) {
        case GET_MOVIE : 
            const videoDatas = [...action.data];
            videoDatas.forEach((info,i) => {
                info.liked = false;
                info.disLiked = false;
                info.myList = false;
            });            
            return {
                ...state,
                data : videoDatas
            }
        case CLICK_LIKE :                        
            changeData.forEach((i) => {
                if (i.id === action.id) {
                    i.liked = action.liked;
                }
            });            
            return {
                ...state,
                data : changeData
            }
        case CLICK_DISLIKE :                    
            changeData.forEach((i) => {
                if (i.id === action.id) {
                    i.disLiked = action.disLiked;
                }
            });            
            return {
                ...state,
                data : changeData
            }
        case ADD_MYLIST : 
            changeData.forEach((i) => {
                if (i.id === action.id) {
                    i.myList = action.myList;
                }
            });            
            return {
                ...state,
                data : changeData
            }
        default :
            return state;
    }
};

const Browse = () => {    
    const [state, dispatch] = useReducer(reducer, initialState);
    const { data, isSearch } = state;       

    useEffect(() => {
        const movieUrl = "https://yts.mx/api/v2/list_movies.json?sort_by=rating";
        let movieData = [];
        axios.get(movieUrl).then((res) => {
            movieData= [...res.data.data.movies];                    
            dispatch({ type: GET_MOVIE, data: movieData});
        }); 
    },[]);      
    

    
    return (       
        <MovieContext.Provider value={{
            data, isSearch, dispatch
        }}>
            <div className="browse">
                <BrowseHeader/>
                <MainVideo/>    
                <Footer style={{backgroundColor: '#000'}} />          
            </div>        
        </MovieContext.Provider>
    );
};

export default Browse;
            
            

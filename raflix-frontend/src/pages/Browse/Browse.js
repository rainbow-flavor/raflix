import React from 'react';
import { Link } from 'react-router-dom';
import BrowseHeader from './BrowseHeader';
import './Browse.css';

const STYLE = {
    background: '#000',
    height: '100vh'
};

const Browse = () => {
    return (
        <div className="browse" style={STYLE}>
            <BrowseHeader/>

            
        </div>
    );
};

export default Browse;

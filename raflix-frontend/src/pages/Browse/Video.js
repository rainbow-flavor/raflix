import React from 'react';
import './Video.css';

const Video = ({title}) => {
    return (
        <li className="video">
            <div>
                {title}
            </div>
        </li>
    );
}

export default Video;
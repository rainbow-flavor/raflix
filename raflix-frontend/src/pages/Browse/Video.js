import React from 'react';

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
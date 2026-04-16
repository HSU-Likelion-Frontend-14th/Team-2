import React from 'react';
import './HobbyItem.scss';

const HobbyItem = ({ label, imgSrc, altText }) => {
    return (
        <div className="hobby-item">
            <div className="hobby-label">{label}</div>
            <div className="hobby-item-img-wrapper">
                <img src={imgSrc} alt={altText} />
            </div>
        </div>
    );
};

export default HobbyItem;
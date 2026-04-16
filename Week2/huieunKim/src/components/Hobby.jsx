import React from 'react';
import './Hobby.scss';
import HobbyItem from './HobbyItem';
import bookImg from '../assets/book.jpg';
import imagineImg from '../assets/imagine.jpg';
import teaImg from '../assets/blacktea.jpg';


const Hobby = () => {
    const hobbyData = [
        { label: "책 읽기", img: bookImg, alt: "책" },
        { label: "공상에 빠지기", img: imagineImg, alt: "공상" },
        { label: "홍차 마시기", img: teaImg, alt: "홍차" }
    ];

    return (
        <section id="hobby" className="hobby-section">
            <h2 className="section-title">HOBBY</h2>
            <div className="hobby-grid">
                {hobbyData.map((hobby) => (
                    <HobbyItem
                        key={hobby.label}
                        label={hobby.label}
                        imgSrc={hobby.img}
                        altText={hobby.alt}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hobby;
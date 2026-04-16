import React from 'react';
import './About.scss';
import phoneIcon from '../assets/Phone.svg';
import envelopeIcon from '../assets/EnvelopeSimple.svg';
import mapPinIcon from '../assets/MapPin.svg';

const About = () => {
    const infoData = [
        { title: "EDUCATION", desc1: "한성대학교 ICT디자인학부", desc2: "2025.03~2029.02" },
        { title: "SKILLS", desc1: "C", desc2: "" },
        { title: "WORK", desc1: "풀스택 개발자(희망...)", desc2: "" },
        { title: "ACTIVITIES", desc1: "멋쟁이사자처럼 14기", desc2: "" }
    ];

    return (
        <section id="about" className="about-section">
            <h2 className="section-title">ABOUT</h2>
            <div className="about-container">
                <div className="profile-card">
                    <div className="profile-img"></div>
                    <h3>김희은</h3>
                    <p className="contact-item">
                        <img src={phoneIcon} alt="phone" className="contact-icon" />
                        <span>010.6464.3985</span>
                    </p>
                    <p className="contact-item">
                        <img src={envelopeIcon} alt="email" className="contact-icon" />
                        <span>hekim@hansung.ac.kr</span>
                    </p>
                    <p className="contact-item">
                        <img src={mapPinIcon} alt="location" className="contact-icon" />
                        <span>서울특별시 서대문구</span>
                    </p>
                </div>

                <div className="info-grid">
                    {infoData.map((info) => (
                        <div className="info-item" key={info.title}>
                            <h4>{info.title}</h4>
                            <p>{info.desc1}</p>
                            {info.desc2 && <p>{info.desc2}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
    return (
        <div className="home-container">
            <div className="home-content">
                <h1 className="home-title">Welcome to Our Website</h1>
                <p className="home-description">
                    Welcome to our website dedicated to the fundamental course on communication security.
                    This application has been developed to help you understand the basics of Remote Desktop Protocol (RDP)
                    communications, its functionalities, and its role in secure communication.
                </p>
                <p className="home-description">
                    Through this platform, you will explore how RDP works, the security threats it faces, and
                    the protective measures that can be implemented to ensure secure remote communications.
                </p>
                <Link to="/introduction" className="home-button">
                    Learn More About RDP
                </Link>
            </div>
        </div>
    );
};

export default HomePage;

import React from 'react';
import { Link } from 'react-router-dom';
import rdpImage from '../../assets/images/image1.avif';
import './Introduction.css';

const Introduction: React.FC = () => {
    return (
        <div className="rdp-document">
            <h1 className="rdp-title">Introduction to the RDP Protocol</h1>

            <h2 className="rdp-subtitle">What is the RDP (Remote Desktop Protocol)?</h2>
            <p className="rdp-paragraph">
                The RDP Protocol was developed by Microsoft as a way to enable communication between a client and a remote server. This Protocol allows users
                to access and remotely control systems on a network via a graphical interface.
            </p>

            <div className="image-container">
                <img src={rdpImage} alt="RDP Diagram" className="rdp-image" />
            </div>

            <div className="rdp-blocks">
                <div className="rdp-block">
                    <h2 className="rdp-block-title">General Functioning</h2>
                    <p className="rdp-paragraph">
                        RDP uses port 3389 and works by encapsulating keyboard, mouse, and display information to transmit it between the client and the server.
                    </p>
                </div>
                <div className="rdp-block">
                    <h2 className="rdp-block-title">Uses</h2>
                    <ul className="rdp-list">
                        <li>Remote server management</li>
                        <li>Access to technical support</li>
                        <li>Remote work</li>
                    </ul>
                </div>
                <div className="rdp-block">
                    <h2 className="rdp-block-title">RDP Functionalities</h2>
                    <ul className="rdp-list">
                        <li>Support for encoding images to enable smooth graphical display</li>
                        <li>Transfer of audio and peripherals (e.g., printers, files, etc.)</li>
                        <li>Encryption of communications via TLS to ensure confidentiality</li>
                    </ul>
                </div>
            </div>

            <div className="button-container">
                <Link to="/type-attack" className="rdp-button">
                    Learn About RDP Attacks
                </Link>
            </div>
        </div>
    );
};

export default Introduction;

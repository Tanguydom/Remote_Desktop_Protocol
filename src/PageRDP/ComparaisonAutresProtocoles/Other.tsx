import React from 'react';
import './Other.css';
import sshImage from '../../assets/images/ssh.webp';
import {Link} from "react-router-dom";

const Other: React.FC = () => {
    return (
        <div className="other-page">
            <div className="other-container">
                <h1 className="other-title">Comparison with Other Remote Access Protocols</h1>

                <div className="other-block">
                    {/* SSH Section */}
                    <div className="ssh-section">
                        <h2 className="other-subtitle">SSH (Secure Shell)</h2>
                        <p className="ssh-description">
                            Encrypted remote access protocol typically used on Linux servers.
                        </p>
                        <p className="ssh-description">
                            SSH is considered more secure than RDP due to its public key authentication model and
                            strong encryption mechanisms.
                        </p>

                        <p className="ssh-description">
                            <strong>Comparison:</strong> SSH is more lightweight, less vulnerable to brute force attacks
                            due
                            to the use of private keys,
                            but it is limited in terms of graphical interface (although this can be circumvented with
                            tools
                            like X11 forwarding).
                        </p>
                        <div className="ssh-image-container">
                            <img src={sshImage} alt="SSH Diagram" className="ssh-image"/>
                        </div>
                    </div>
                </div>

                {/* VNC Section */}
                <div className="other-block">
                    <h2 className="other-subtitle">VNC (Virtual Network Computing)</h2>
                    <p className="other-description">
                        Remote access protocol based on pixel transfer, often used for graphical takeover.
                    </p>
                    <p className="other-description">
                        Less secure than RDP because it does not natively integrate strong encryption, often
                        requiring an SSH or VPN tunnel to be secure.
                    </p>
                </div>

                {/* TeamViewer and Other Tools */}
                <div className="other-block">
                    <h2 className="other-subtitle">TeamViewer, AnyDesk, and Other Commercial Tools</h2>
                    <p className="other-description">
                        Proprietary tools that offer similar functionality to RDP, but with additional layers of
                        security such as multi-factor authentication and cloud login options.
                    </p>
                    <p className="other-description">
                        <strong>Pros:</strong> These tools are often easier for end users to set up, but can
                        introduce security issues if not configured properly.
                    </p>
                </div>
                <div className="button-container">
                    <Link to="/analyse" className="rdp-button">
                        Learn About Analysis of Results and Evaluation of Attacks
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Other;

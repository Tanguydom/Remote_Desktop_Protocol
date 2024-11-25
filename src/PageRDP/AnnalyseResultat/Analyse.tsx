import React from 'react';
import './Analyse.css';
import {Link} from "react-router-dom";

const Analyse: React.FC = () => {
    return (
        <div className="analyse-page">
            <div className="analyse-container">
                <h1 className="analyse-title">Analysis of Results and Evaluation of Attacks</h1>

                {/* Evaluating Attack Effectiveness */}
                <div className="analyse-block">
                    <h2 className="analyse-subtitle">Evaluating Attack Effectiveness</h2>
                    <p className="analyse-description">
                        After performing practical demonstrations (brute force, vulnerability exploitation), analyze the
                        impact of these attacks on server
                        security and data integrity.
                    </p>
                    <p className="analyse-description">
                        Identify the types of systems and configurations that are particularly vulnerable to different
                        attacks.
                    </p>
                </div>

                {/* RDP vs. Other Security Protocols */}
                <div className="analyse-block">
                    <h2 className="analyse-subtitle">RDP vs. Other Security Protocols</h2>
                    <p className="analyse-description">
                        Compare the overall security of RDP with alternatives such as SSH and VNC, particularly in terms
                        of vulnerability to specific
                        attacks (brute force, MitM, vulnerability exploitation).
                    </p>
                    <p className="analyse-description">
                        Discuss contexts where RDP remains useful and secure if the right measures are taken.
                    </p>
                </div>
                <div className="button-container">
                    <Link to="/conclusion" className="rdp-button">
                        Learn About Conclusion
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Analyse;

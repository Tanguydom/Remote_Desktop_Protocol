import React from 'react';
import './Security.css';
import {Link} from "react-router-dom";

const Security: React.FC = () => {
    return (
        <div className="security-page">
            <div className="security-container">
                <h1 className="demonstration-title">Security Measures and Protection Against RDP Attacks</h1>
                {/* Security Measures */}
                <div className="security-block-container">
                    <h1 className="security-title">Security Measures</h1>
                    <div className="security-block">
                        <h3 className="security-block-title">Using VPN and Firewalls</h3>
                        <p className="security-description">
                            Limit RDP access to only via a virtual private network (VPN) and secure connections via
                            firewalls.
                        </p>
                        <p className="security-description">
                            Block direct access to port 3389 from outside the network, thus limiting exposure.
                        </p>
                    </div>
                    <div className="security-block">
                        <h3 className="security-block-title">Update and Patches</h3>
                        <p className="security-description">
                            Ensure regular updates of Windows systems to avoid exploitation of vulnerabilities such as
                            BlueKeep or DejaBlue.
                        </p>
                    </div>
                </div>

                {/* Protection Against RDP Attacks */}
                <div className="security-block-container">
                    <h1 className="security-title">Protection Against RDP Attacks</h1>
                    <div className="security-block">
                        <h3 className="security-block-title">Using Multi-Factor Authentication (MFA)</h3>
                        <p className="security-description">
                            Use RDP gateways that act as a secure proxy, adding additional filtering, auditing, and
                            connection control mechanisms.
                        </p>
                    </div>
                    <div className="security-block">
                        <h3 className="security-block-title">Login Attempt Limiting</h3>
                        <p className="security-description">
                            Configure a policy to block accounts after multiple failed login attempts to reduce the
                            effectiveness of brute force attacks.
                        </p>
                    </div>
                    <div className="security-block">
                        <h3 className="security-block-title">TLS Encryption and Certificates</h3>
                        <p className="security-description">
                            Ensure that RDP connections are secured via TLS encryption, using valid security
                            certificates to prevent MitM attacks.
                        </p>
                    </div>
                </div>
                <div className="button-container">
                    <Link to="/others-protocols" className="rdp-button">
                        Learn About Others Protocols
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Security;

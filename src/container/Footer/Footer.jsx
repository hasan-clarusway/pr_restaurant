import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="blc__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="blc__footer-links">
      <div className="blc__footer-links_contact">
        <h1 className="blc__footer-headtext">Contact Us</h1>
        <p className="p__sans">9 W 53rd St, New York, NY 10019, USA</p>
        <p className="p__sans">+ 1 212 344 123</p>
        <p className="p__sans">+ 1 212 555 123</p>
      </div>

      <div className="blc__footer-brand">
      <p>MARY'S KITCHEN</p>
      </div>

      <div className="blc__footer-links_logo">
        <p className="p__opensans">The best way to find yourself is to lose yourself in the service of others.</p>
        <img src={images.spoon} alt="spoon" className='spoon__img' style={{ marginTop: 15 }} />
        <div className="blc__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="blc__footer-links_work">
        <h1 className="blc__footer-headtext">Working Hours</h1>
        <p className="p__sans">Monday-Friday:</p>
        <p className="p__sans">08:00 am - 12:00 am</p>
        <p className="p__sans">Saturday-Sunday:</p>
        <p className="p__sans">07:00 am - 11:00 pm</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__sans">2021 Gericht. All Rights reserved</p>
    </div>
  </div>
);

export default Footer;

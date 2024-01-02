import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="blc__header blc_wrapper section__padding" id='home'>
    <div className="blc__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <p className="blc__header-p">The Key To Fine Dining</p>
      <p className="p__sans" style={{ margin: '2rem 0'}}>Welcome dear guest . Are you ready to taste authentic flavors in Mary's kitchen?  </p>
      <button type="button" className="custom__button">Explore Menu</button>

      <img src={images.welcome} alt="header_img" className='blc__wrapper-img'/>
    </div>
  </div>
);
export default Header;

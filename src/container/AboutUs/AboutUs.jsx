import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="blc__aboutus blc__bg flex__center section__padding" id="about">
    <div className="blc__aboutus-overlay flex__center">
    <img src={images.M} alt="m letter" />
    </div>

    <div className="blc__aboutus-content flex__center">
      <div className="blc__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className="p__sans" style={{width: '34rem'}}>
        Founded in 1910, our restaurant has been serving for 3 generations. We are happy to offer you traditional Anatolian cuisine flavors in our menu.
        </p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="blc__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="blc__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__sans" style={{width: '34rem'}}>
          Welcome to our tasty-dinner. Our family elders started serving in a small restaurant 3 generations ago.
          Our restaurant has been running since 1910.
          
        </p>
        <button type='button' className="custom__button">Know More</button>
      </div>
     </div>
    </div>
);

export default AboutUs;

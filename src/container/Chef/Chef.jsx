import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='blc__wrapper blc__bg section__padding'>
    <div className="blc_wrapper_img blc__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="blc__wrapper_info">
      <SubHeading title="" />
      <h1 className="headtext__cormorant">What we believe in</h1>
    </div>

    <div className="blc__chef-content">
      <div className="blc__chef-content_quote">
        <img src={images.quote} alt="quote" />
        <p className="p__sans">Hello. I am happy to present you the Anatolian flavors that I have been making with passion since my childhood. We invite you to this journey of taste.</p>
      </div>

      <div className="blc__chef-sign">
      <p className="p__sans" style={{marginLeft: '-6rem', width: '25rem'}}>Chef & Founder</p>
        <h3 className="blc__sign">Mary Rose</h3>
      </div>
    </div>
  </div>
);

export default Chef;

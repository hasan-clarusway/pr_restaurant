import React from 'react';
import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="blc__newsletter">
    <div className="blc__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Subscribe to our Newsletter</h1>
      <p className="p__sans">And never miss latest Updates</p>
    </div>
    <div className="blc__newsletter-input flex__center">
      <input id='blc_email' type="email" placeholder='Enter your e-mail and addr.' />
      <button className="custom__button">Subscribe</button>
    </div>
  </div>
);

export default Newsletter;

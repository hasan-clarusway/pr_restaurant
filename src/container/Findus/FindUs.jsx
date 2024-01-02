import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="blc__bg blc__wrapper section__padding" id='contact'>
    <div className="blc__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem'}}>Find Us</h1>
      <div className="blc__wrapper-content">
        <p className="p__sans">Lane Ends Bungalow, Whatcroft Hall Lane, CW9 7SG</p>
        <p className="p__cormorant" style={{ color: '#DCCA87' , margin: '2rem'}}>Opening Hours</p>
        <p className="p__sans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p__sans">Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
      <button className="custom__button" style={{ marginTop: '2rem'}}>Visit Us</button>
    </div>

    <div className="blc__wrapper_img" >
      <img src={images.findus} alt="findus"style={{height:'40rem', width: '33rem'}}  />
    </div>
  </div>
);

export default FindUs;
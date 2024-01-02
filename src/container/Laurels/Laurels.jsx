import React from 'react';
import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import './Laurels.css';

const AwardCard = ({award: { imgUrl, title, subtitle}}) => (
  <div className="blc__laurels_awards-card">
    <img src={imgUrl} alt="award" />
    <div className="blc__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: '#DCCA87'}}>{title}</p>
      <p className="p__cormorant">{subtitle}</p>
    </div>
  </div>
)

const Laurels = () => (
  <div className="blc__bg blc__wrapper" id="awards">
    <div className="blc__wrapper_info">
      <SubHeading title="Awards & Recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>

      <div className="blc__laurels_awards">
        {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
      </div>
    </div>

    <div className="blc__wrapper-imgs flex__center">
      <img src={images.laurels} alt="laurels" style={{height: '45rem', width: '33rem', marginRight: '1rem'}}/>
      <p className='blc__m'>M</p>
    </div>
  </div>
);

export default Laurels;


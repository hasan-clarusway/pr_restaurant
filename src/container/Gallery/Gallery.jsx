import React, { useState } from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];

const Gallery = () => {
  const [display, setDisplay] = useState(false);
  const [show, setShow] = useState(false);
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if(direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }

  const handleClick = () => {
    setDisplay(!display);
    setShow(!show);
  }
  return(
    <div className="blc__gallery flex__center" id="gallery">
      <div className="blc__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant-dif">Photo Gallery</h1>
        <button type='button' 
          className='custom-button'
          onClick={handleClick}>     
            View {display ? 'Text' : 'Images'}        
        </button>  
      </div>

      <div className="blc__gallery-images">
        <div className="blc__gallery-images_container" ref={scrollRef}>
        {display 
            ? galleryImages.map((image, index) => (
              <div className='blc__gallery-images_card flex__center' key={`gallery_image-${index + 1}`}>
                <img src={image} alt='gallery' />
                <BsInstagram className='gallery__image-icon' />
              </div> ))            
            : <p className="p__sans-dif" style={{ color: '#AAA', margin: '2rem', width: '70rem'}}>
            We present you some of the Anatolian delicacies in our gallery. <br /> Please click the button</p>      
          }
        </div>

      { show
         ? <div className="blc__gallery-images_arrows">
           <BsArrowLeftShort className="gallery__arrow-icons" onClick={() => scroll('left')} />
           <BsArrowRightShort className="gallery__arrow-icons" onClick={() => scroll('right')} />
           </div>
         : null  
        }
      </div>
    </div>
  )
};

export default Gallery; 
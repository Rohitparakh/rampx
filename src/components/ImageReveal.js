import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './ImageReveal.css';

const ImageReveal = ({ src, alt, classes }) => {
    const [ref, inView] = useInView({ triggerOnce: true });
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      console.log(`inView: ${inView}`);
      if (inView) {
        console.log('Image is in view, starting animation...');
        setIsVisible(true);
      }
    }, [inView]);

  return (
    <div className={`image-container ${isVisible ? 'reveal' : ''}`} ref={ref}>
      <img src={src} alt={alt} className={classes+" reveal-image"} />
    </div>
  );
};

export default ImageReveal;

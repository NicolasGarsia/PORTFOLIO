import React, { useState, useEffect } from 'react';
import slide1 from '../../assets/slide1.png';
import slide2 from '../../assets/slide2.png';
import slide3 from '../../assets/slide3.png';




function Carousel() {
  const images = [slide1, slide2, slide3];
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);


    return () => clearInterval(interval);
  }, [images.length]);


  return (
    <div
      className="container-carrossel"
      style={{
        position: 'relative',
        width: '100%',
        height: '40vh',
        margin: '0 auto',
        maxWidth: '100vw',
        overflow: 'hidden'
      }}
    >
      <div
        className="carousel-inner"
        style={{
          width: '100%',
          height: '300',
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
            style={{
              display: index === currentIndex ? 'block' : 'none',
              transition: 'opacity 1s ease-in-out',
              width: '100%',
              height: '300',
              position: 'absolute'
            }}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{
                width: '100%',
                height: 300,
                objectFit: 'cover'
              }}
            />
          </div>
        ))}
      </div>
      <div
        className="carousel-controls"
        style={{
          position: 'absolute',
          top: '50%',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          transform: 'translateY(-50%)'
        }}
      >
      </div>
    </div>
  );
}


export default Carousel;

import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import './Index.css';

const SliderComponent = () => {
  const carouselImages = [
    'https://via.placeholder.com/800x400/5733FF/FFFFFF?text=1',
    'https://via.placeholder.com/800x400/5733FF/FFFFFF?text=2',
    'https://via.placeholder.com/800x400/5733FF/FFFFFF?text=3',
    'https://via.placeholder.com/800x400/5733FF/FFFFFF?text=4',
    'https://via.placeholder.com/800x400/5733FF/FFFFFF?text=5',
    'https://via.placeholder.com/800x400/5733FF/FFFFFF?text=6',
    'https://via.placeholder.com/800x400/5733FF/FFFFFF?text=7',
    'https://via.placeholder.com/800x400/5733FF/FFFFFF?text=8',
    'https://via.placeholder.com/800x400/5733FF/FFFFFF?text=9',
  ];

  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const keyPressed = event.key;

      const keyToIndex = {
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
      };

      if (keyToIndex[keyPressed] !== undefined) {
        const targetIndex = keyToIndex[keyPressed] - 1;
        sliderRef.current.slickGoTo(targetIndex);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="carousel">
      <Slider {...settings} className="slick-fullwidth" ref={sliderRef}>
        {carouselImages.map((image, index) => (
          <div key={index}>
            <img
              className="carousel-image"
              src={image}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;

// src/components/Inicio/Index.js
import React from 'react';
import './Index.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Index = () => {

  const carouselImages = [
    'https://via.placeholder.com/1000x400/FF5733/FFFFFF?text=1',
    'https://via.placeholder.com/1000x400/33FF57/FFFFFF?text=2',
    'https://via.placeholder.com/1000x400/5733FF/FFFFFF?text=3',
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div>

        <div className="nav-bar">
          <div className='bor-nav'>
            <div>
              <a href='/about'> Text </a >
              <a href='/contact'> Text </a >
            </div>
            <div>
              <img className='Logo-nav' src="https://img.icons8.com/?size=256&id=4tUPZNulNQHE&format=png" alt="Logo no disponible" />
            </div>
            <div>
              <a href='/card'> Text </a >
              <a href='/colab'> Text </a >
            </div>
          </div>
        </div>

        <div>
          <div className="container">
            <div className="area1"></div>
            <div className="area2"></div>
          </div>
        </div>

        <div>
          <div className='cont-sect'>
            <div className='circle'></div>
            <div className='rect-sect'></div>
          </div>
        </div>

        <div>
          <div className="carousel">
            <Slider {...settings} className="slick-fullwidth">
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
        </div>
      </div>
    </div>
  );
};

export default Index;
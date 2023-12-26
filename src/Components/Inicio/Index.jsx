// src/components/Inicio/Index.js
import './Index.css';
import React from 'react';
import Nav from '../dist/nav'
import Card from './dist/Card';
import Footer from '../dist/footer';
import Slideshow from './dist/Slider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Index = () => {
  return (
    <div>
      <div>

        <div>
          <Nav />
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

      </div>
      <div className='cont-carou'>
        <Slideshow />
      </div>

      <div>
        <div className='cards'>
         <Card />
        </div>
      </div>
      <div>
        <div>
          < Footer/>
        </div>
      </div>
    </div>
  );
};

export default Index;
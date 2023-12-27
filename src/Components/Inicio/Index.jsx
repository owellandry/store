// src/components/Inicio/Index.js
import './dist/css/Index.css';
import React from 'react';
import Nav from '../dist/js/nav'
import Card from './dist/js/Card';
import Footer from '../dist/js/footer';
import Section from './dist/js/section';
import SliderComponent from './dist/js/Slider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const Index = () => {
  return (
    <div>
      <div>
        <Nav />
      </div>

      <div>
        <Section />
      </div>

      <div className='cont-carou'>
        <SliderComponent />
      </div>

      <div>
        <div className='cards'>
          <Card />
        </div>
      </div>

      <div>
        < Footer />
      </div>
    </div>
  );
};

export default Index;
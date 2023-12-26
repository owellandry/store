// src/components/Inicio/Index.js
import './Index.css';
import React from 'react';
import Nav from '../dist/nav'
import Card from './Card';
import Footer from '../dist/footer';
import Section from './section';
import SliderComponent from './Slider';
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
          <Section />
        </div>

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
        <div>
          < Footer/>
        </div>
      </div>
    </div>
  );
};

export default Index;
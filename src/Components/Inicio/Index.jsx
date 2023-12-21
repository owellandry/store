// src/components/Inicio/Index.js
import React from 'react';
import './Index.css';

const Index = () => {
  return (
    <div>
      <div>
        <div className="nav-bar">
          <div className='bor-nav'>
            <div>
              <a href='/#'> Text </a >
              <a href='/#'> Text </a >
            </div>
            <div>
              <img className='Logo-nav' src="https://img.icons8.com/?size=256&id=4tUPZNulNQHE&format=png" alt="Logo no disponible" />
            </div>
            <div>
              <a href='/#'> Text </a >
              <a href='/#'> Text </a >
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
      </div>
    </div>
  );
};

export default Index;
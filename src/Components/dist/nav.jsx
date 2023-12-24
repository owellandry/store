// src/components/Inicio/Nav.js
import React from 'react';
import './nav.css';

const Nav = () => {
  return (
    <div>
        <div className="nav-bar">
            <div className="bor-nav">
                <div>
                    <a href="/about"> Text </a>
                    <a href="/contact"> Text </a>
                </div>
                <div>
                    <img className="Logo-nav" src="https://img.icons8.com/color/256/000000/company.png" alt="Logo no disponible" />
                </div>
                <div>
                    <a href="/card"> Text </a>
                    <a href="/colab"> Text </a>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Nav;

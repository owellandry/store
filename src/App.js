// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Inicio/Index';
import Contact from './Components/Contact/Index';
import Colaborations from './Components/Colaborations/Index';
import Card from './Components/Card/Index';
import About from './Components/About/Index';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Colab" element={<Colaborations />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Card" element={<Card />} />
        <Route path="/About" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>




  );
};

export default App;
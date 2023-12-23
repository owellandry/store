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
        <Route path="/colab" element={<Colaborations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/card" element={<Card />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>




  );
};

export default App;
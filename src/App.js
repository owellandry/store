// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Colaborations from './Components/Colaborations/Index';
import './Components/dist/css/responsive/Index.css';
import Contact from './Components/Contact/Index';
import About from './Components/About/Index';
import Home from './Components/Inicio/Index';
import Card from './Components/Card/Index';
import React from 'react';
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
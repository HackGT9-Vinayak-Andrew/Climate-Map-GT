import React from 'react';
import Home from './Home'
import Map from './Map';
import './App.css';
import {Router, Routes, Route} from "react-router-dom";




function App() {
  return (
      <div className = "App">
      <Home />
      <Map />
      </div>
  );
}

export default App;

// src/Components/Loader.js
// src/Components/Loader.js
import React from 'react';
import logo from '../assets/Images/skep logo.png';
import './Loader.css'; 

const Loader = () => {
  return (
    <div className="loader">
      <img src={logo} alt="Loading..." className="loader-image" />
    </div>
  );
};

export default Loader;


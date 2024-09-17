// components/Header/header.js

import React from 'react';
import ThemeSwitch from '../ThemeSwitch/theme_switch'; // Adjust the import path as needed
import logo from '../../images/rh_insurance.png'; // Adjust the import path as needed
import './header.css';

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo-title-container">
        <img 
          src={logo} 
          alt="Red Hat Insurance" 
          className="header-logo" 
        />
        <h1 className="page-title">Red Hat Insurance - Utilization Portal</h1>
      </div>
      <ThemeSwitch />
    </header>
  );
};

export default Header;

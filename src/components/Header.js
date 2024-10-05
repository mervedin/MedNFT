// src/components/Header.js
import React from 'react';
import logo from '../assets/mednft-logo.png';
import './Header.css';  // We'll style it later
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <img src={logo} className="logo" alt="MedNFT Logo" />
            <nav className="nav-link">
                <ul>
                    <li><Link to="/">MedNFT</Link></li>
                    <li><Link to="/marketplace">Marketplace</Link></li>
                    <li><Link to="/sell-data">Contribute</Link></li>
                </ul>
            </nav>
        </header>
    );
  }
  
  export default Header;
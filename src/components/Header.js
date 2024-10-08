// src/components/Header.js
import React from 'react';
import Logo from './Logo'
import './Header.css';  // We'll style it later
import { Link } from 'react-router-dom';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

function Header() {
    return (
        <header className="header">
            <Logo/>
            <nav className="nav-link">
                <ul>
                    <li><Link to="/">MedNFT</Link></li>
                    <li><Link to="/marketplace">Marketplace</Link></li>
                    <li><Link to="/contribute">Contribute</Link></li>
                </ul>
            </nav>
            <div className="wallet-button">
                <WalletMultiButton />
            </div>
        </header>
    );
}

export default Header;
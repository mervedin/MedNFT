import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import Header from './components/Header';
import Marketplace from './components/Marketplace';
import SellData from './components/SellData';
import Footer from './components/Footer';
import Home from './components/Home';  
import './App.css';  // Main styles

function App() {
  return (
    <Router>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />  {/* Home Page Route */}
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/sell-data" element={<SellData />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
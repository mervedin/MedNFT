import { useEffect, useMemo, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import Header from './components/Header';
import Marketplace from './components/Marketplace';
import Contribute from './components/Contribute';
import Footer from './components/Footer';
import Home from './components/Home';
import './App.css';  // Main styles

import { RPC_ENDPOINT } from "./utils/utils";
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui"
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';

import "@solana/wallet-adapter-react-ui/styles.css"
function App() {

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter()
    ],
    []
  );


  return (
    <ConnectionProvider
    endpoint={RPC_ENDPOINT}
    config={{commitment: "confirmed"}}
    >
      <WalletProvider
      wallets={wallets} autoConnect
      >
        <WalletModalProvider>
          <Router>
            <Header />
            <div className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />  {/* Home Page Route */}
                <Route path="/marketplace" element={<Marketplace />} />
                <Route path="/contribute" element={<Contribute />} />
              </Routes>
            </div>
            <Footer />
          </Router>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>

  );
}

export default App;
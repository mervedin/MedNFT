// src/components/Marketplace.js
import React from 'react';
import './Marketplace.css';  // Custom styles

function Marketplace() {
  return (
    <div className="marketplace">
      <h1>Explore NFTs</h1>
      <div className="nft-grid">
        {/* Here, you can dynamically render NFTs */}
        <div className="nft-item">NFT #1</div>
        <div className="nft-item">NFT #2</div>
        <div className="nft-item">NFT #3</div>
        {/* Add more items */}
      </div>
      <div className="nft-grid">
        {/* Here, you can dynamically render NFTs */}
        <div className="nft-item">NFT #4</div>
        <div className="nft-item">NFT #5</div>
        <div className="nft-item">NFT #6</div>
        {/* Add more items */}
      </div>
    </div>
  );
}

export default Marketplace;
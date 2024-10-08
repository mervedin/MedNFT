import React from 'react';
import { data } from './data'; // Adjust the import path
import './Marketplace.css';  // Make sure to include your CSS file

const Marketplace = () => {
  const handleBuy = (nft) => {
    // Logic for handling the purchase of the NFT
    alert(`You have bought ${nft.name} for ${nft.price} ETH.`); // Adjust price accordingly
  };

  return (
    <div className="marketplace">
      <h1>Marketplace</h1>
      <div className="nft-grid">
        {Object.keys(data).map((key) => (
          <div key={key} className="nft-item">
            <h2>{data[key].name}</h2>
            <img src={data[key].image_link} alt={data[key].name} className="nft-image" />
            <p>{data[key].description}</p>
            <button className="buy-button" onClick={() => handleBuy(data[key])}>Buy</button> {/* Buy button */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
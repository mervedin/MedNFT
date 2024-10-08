// src/components/Contribute.js
import React, { useState } from 'react';
import './Contribute.css';

const Contribute = () => {
  const [report, setReport] = useState(null);
  const [medicalImage, setMedicalImage] = useState(null);
  const [walletAddress, setWalletAddress] = useState('');
  const [nftPrice, setNftPrice] = useState('');

  const handleReportChange = (event) => setReport(event.target.files[0]);
  const handleMedicalImageChange = (event) => setMedicalImage(event.target.files[0]);

  // Handle form submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!medicalImage || !walletAddress || !nftPrice) {
      alert('Please fill all fields.');
      return;
    }

    alert('Your files have been uploaded successfully!');
  };

  return (
    <div className="contribute">
      <h2>Contribute Medical Data</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Upload Medical Report (PDF)</label>
          <input type="file" accept=".pdf" onChange={handleReportChange} required />
        </div>
        <div>
          <label>Upload Medical Image (X-ray, MRI)</label>
          <input type="file" accept="image/*" onChange={handleMedicalImageChange} required />
        </div>
        <div>
          <label>Blockchain Wallet Address</label>
          <input 
            type="text" 
            value={walletAddress} 
            onChange={(e) => setWalletAddress(e.target.value)} 
            placeholder="Enter wallet address" 
            required 
          />
        </div>
        <div>
          <label>NFT Price (in Solana)</label>
          <input 
            type="number" 
            value={nftPrice} 
            onChange={(e) => setNftPrice(e.target.value)} 
            placeholder="Set NFT price" 
            required 
          />
        </div>
        <button type="submit">Contribute</button>
      </form>
    </div>
  );
};

export default Contribute;
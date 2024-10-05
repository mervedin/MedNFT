import React, { useState } from 'react';
import { NFTStorage, File } from 'nft.storage'; // For IPFS
import { Connection, PublicKey, Transaction, clusterApiUrl } from '@solana/web3.js'; // For Solana
import './SellData.css';

const NFT_STORAGE_API_KEY = 'YOUR_NFT_STORAGE_API_KEY'; // Get this from nft.storage
const SOLANA_NETWORK = 'devnet'; // Change to 'mainnet-beta' for production

const SellData = () => {
  const [report, setReport] = useState(null);
  const [medicalImage, setMedicalImage] = useState(null);
  const [walletAddress, setWalletAddress] = useState('');
  const [nftPrice, setNftPrice] = useState('');
  const [isMinting, setIsMinting] = useState(false);

  const handleReportChange = (event) => setReport(event.target.files[0]);

  const handleMedicalImageChange = (event) => setMedicalImage(event.target.files[0]);

  // Handle form submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!medicalImage || !walletAddress || !nftPrice) {
      alert('Please fill all fields.');
      return;
    }

    setIsMinting(true);

    try {
      // Upload image to IPFS
      const nftData = await uploadToIPFS();
      console.log("IPFS Data:", nftData);

      // Mint the NFT on Solana
      await mintNFT(nftData.url);
      alert('Your NFT has been successfully minted!');
    } catch (error) {
      console.error("Error minting NFT:", error);
      alert('Failed to create NFT.');
    } finally {
      setIsMinting(false);
    }
  };

  const uploadToIPFS = async () => {
    const client = new NFTStorage({ token: NFT_STORAGE_API_KEY });
    const metadata = await client.store({
      name: "Medical Image NFT",
      description: "This NFT represents a medical image.",
      image: new File([medicalImage], medicalImage.name, { type: medicalImage.type }),
    });
    return metadata;
  };

  const mintNFT = async (ipfsUrl) => {
    const connection = new Connection(clusterApiUrl(SOLANA_NETWORK), 'confirmed');
    const walletPublicKey = new PublicKey(walletAddress);
    
    // NFT Minting logic here. You'll need to write or interact with a smart contract for minting.
    // For simplicity, you can use Metaplex's JS SDK or a custom smart contract.

    // Example: Placeholder for minting function
    const transaction = new Transaction();
    // Add instructions to mint NFT...
    await connection.sendTransaction(transaction, [walletPublicKey]);

    console.log(`NFT minted with IPFS URL: ${ipfsUrl}`);
  };

  return (
    <div className="sell-data">
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
        <button type="submit" disabled={isMinting}>
          {isMinting ? 'Minting NFT...' : 'Contribute'}
        </button>
      </form>
    </div>
  );
}

export default SellData;

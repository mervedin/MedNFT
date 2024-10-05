import React from 'react';
import './Home.css';  // You can create a separate CSS file for this page or use existing styles

const Home = () => {
  return (
    <div className="home-container">
      <h1>About MedNFT</h1>
      <p>
        MedNFT is a revolutionary platform that allows individuals to sell their health data anonymously in the form of NFTs.
        The platform focuses on healthcare data such as radiology reports and images, ensuring personal information is removed
        and the data is verified for authenticity. All transactions are secured using the Solana blockchain to ensure privacy and transparency.
      </p>

      <h2>How it Works</h2>
      <ul>
        <li>Upload your medical data without any personal identifiers.</li>
        <li>The data will be verified by validators for authenticity.</li>
        <li>Once verified, the data will be minted as an NFT on the Solana blockchain.</li>
        <li>You will receive payment directly to your wallet when the NFT is sold.</li>
      </ul>
    </div>
  );
}

export default Home;
// solanaUtils.js
import { Connection, PublicKey } from '@solana/web3.js';
import { createQR, encodeURL } from '@solana/pay';

export const connectWallet = async () => {
  try {
    const solana = window.solana;

    if (solana) {
      const response = await solana.connect();
      return response.publicKey.toString();
    } else {
      alert('Solana wallet not found. Please install a wallet like Phantom.');
    }
  } catch (error) {
    console.error("Error connecting to wallet", error);
  }
};
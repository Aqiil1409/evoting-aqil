import React, { useEffect } from 'react';
import { ethers } from 'ethers';
import './App.css';

function App() {
  useEffect(() => {
    async function fetchBlockchainData() {
      // Inisialisasi provider
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      // Meminta user untuk menghubungkan wallet
      await provider.send("eth_requestAccounts", []);
      // Mengambil alamat wallet yang terhubung
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      console.log("Connected address:", address);
    }

    fetchBlockchainData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Voting App</h1>
      </header>
    </div>
  );
}

export default App;

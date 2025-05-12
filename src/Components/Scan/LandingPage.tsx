import React, { useState } from 'react';
import axios from 'axios';
import BarcodeScannerComponent from "react-qr-barcode-scanner"; // Example lib

const LandingPage = () => {
  const [barcode, setBarcode] = useState('');
  const [loading, setLoading] = useState(false);

  const handleBarcodeDetected = async (err, result) => {
    if (result) {
      const code = result.text;
      setBarcode(code);
      setLoading(true);

      try {
        const token = localStorage.getItem('token');
        // await axios.post('/log-scan/', { barcode: code }, {
        //   headers: {
        //     Authorization: `Token ${token}`
        //   }
        // });
        alert("Barcode Detected: " + code);

        // Redirect or show scan result
      } catch (error) {
        console.error("Failed to log scan:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div>
      <h1>Scan a product</h1>
      {loading && <div className="spinner" />}
      <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={handleBarcodeDetected}
      />
    </div>
  );
};

export default LandingPage;
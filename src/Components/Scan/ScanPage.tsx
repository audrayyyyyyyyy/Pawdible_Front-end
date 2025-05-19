import React, { useState } from 'react';
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import NavBar from '../NavBar/NavBar';
import axios from "axios";
import { backendServerIP } from "../../globals";
import { useNavigate } from 'react-router-dom';

const api = axios.create({
  baseURL: backendServerIP,
  headers: {"Content-Type": "application/json"},

});

const ScanPage = () => {
  const [barcode, setBarcode] = useState('');
  const [loading, setLoading] = useState(false);

  const handleBarcodeDetected = async (err, result) => {
    if (result) {
      const code = result.text;
      setBarcode(code);
      setLoading(true);

      // Vibrate the device for 200 milliseconds
      if (navigator.vibrate) {
        navigator.vibrate(200);
      }

      try {
        const token = localStorage.getItem('token');
        const response = await api.get('/scan', {
          params: {barcode : code},
          // headers: {}
          // barcode: code }, {
          headers: { Authorization: `Token ${token}` }
        });
        alert("Barcode Detected: " + code);
        alert("Product Data: " + JSON.stringify(response.data, null, 2));

      } catch (error) {
        console.error("Failed to log scan:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className='flex flex flex-col h-screen w-screen'>
      <div className='camera-scan-container'>
        <BarcodeScannerComponent
          width={window.innerWidth}
          height={300}
          onUpdate={handleBarcodeDetected}
        />
         {loading && <p>Loading...</p>}
        {/* {barcode && <p>Scanned: {barcode}</p>} */}
      </div>
      <div>
        
      </div>
      <NavBar
        current="scan"
        routes={{
          account: "/account",
          scan: "/scan",
          history: "/history",
        }}
      />
    </div>
  );
};

export default ScanPage;

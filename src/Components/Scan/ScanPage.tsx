import React, { useState } from 'react';
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import NavBar from '../NavBar/NavBar';
import axios from "axios";
import { backendServerIP } from "../../globals";
import { useNavigate } from 'react-router-dom';
import RequireLogin from '../Auth/RequireLogin';
import "./ScanPage.css"

// import BarcodeScanner from './CustomScanner/BarcodeScanner';

const api = axios.create({
  baseURL: backendServerIP,
  headers: {"Content-Type": "application/json"},

});

const ScanPage = () => {
  const [barcode, setBarcode] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const handleCustomScanner = (barcode : string) => {
    // alert(barcode);
    handleBarcodeDetected(null, barcode)
  }

  const handleBarcodeDetected = async (err, result) => {
    if (loading || !result) return; // prevent multiple scans
  
    const code = result.text;
    setBarcode(code);
    setLoading(true);
  
    if (navigator.vibrate) {
      navigator.vibrate(300);
    }
  
    try {
      const token = localStorage.getItem('token');
      const response = await api.get('/scan', {
        params: { barcode: code },
        headers: { Authorization: `Token ${token}` }
      });
  
      const { product, source } = response.data;
  
      if (!product || Object.keys(product).length === 0) {
        navigate('/ItemNotFound');
      } else {
        const historyItem = {
          barcode: code,
          product: product,
          timestamp: new Date().toISOString(),
        };
  
        let historyString = localStorage.getItem('scanHistory');
        let existingHistory = historyString ? JSON.parse(historyString) : [];
        const updatedHistory = [historyItem, ...existingHistory].slice(0, 50);
        localStorage.setItem('scanHistory', JSON.stringify(updatedHistory));
  
        navigate('/scan_result', {
          state: {
            barcode: code,
            data: product,
            source: source
          }
        });
      }
  
    } catch (error) {
      alert("An error has occurred: " + error.message);
      console.error("Failed to log scan:", error);
    } finally {
      setLoading(false);
    }
  };
  
    
  
  return (
    <RequireLogin>
      <div className='scan-wrapper'>
        <div className='page-content'>
          <BarcodeScannerComponent
              onUpdate={handleBarcodeDetected}
            />
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
    </RequireLogin>
    
  );
};

export default ScanPage;

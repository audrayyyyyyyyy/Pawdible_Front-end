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
  const [manualBarcode, setManualBarcode] = useState('');


  const handleManualSearch = async () => {
    if (!manualBarcode.trim())
    {
      alert("Please enter a barcode");
      return;
    }
    await searchWithBarcode(manualBarcode.trim());
  }

  const handleCustomScanner = (barcode : string) => {
    // alert(barcode);
    handleBarcodeDetected(null, barcode)
  }

  const searchWithBarcode = async (code : string) => {
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
  
    } 
    catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 404) {
          navigate('/ItemNotFound');
        } else {
          alert("An error has occurred: " + error.message);
          console.error("Failed to log scan:", error);
        }
      } else {
        alert("An unexpected error occurred.");
        console.error("Unknown error:", error);
      }
    }
  }

  const handleBarcodeDetected = async (err, result) => {
    if (loading || !result) return; // prevent multiple scans
    
    searchWithBarcode(result.text);
    
    
  };
  
    
  
  return (
    <RequireLogin>
      <div className='scan-wrapper'>
        <div className='scan-page-content'>
          <BarcodeScannerComponent
              onUpdate={handleBarcodeDetected}
            />
          <div className='manual-scan-wrapper'>
            {/* "images/my-pet-cat.svg" */}
            <img className='manual-scan-pets-image' src="images/manual-scan-pets.svg" alt="" />
            <input type="number" placeholder='Enter barcode' onChange={(e) => setManualBarcode(e.target.value)}/>
            <button className='scan-search' onClick={handleManualSearch}>
              <span className="material-symbols-rounded">
                search
              </span>
            </button>
          </div>
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

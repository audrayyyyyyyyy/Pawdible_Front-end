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
    alert(barcode);
    handleBarcodeDetected(null, barcode)
  }

  const handleBarcodeDetected = async (err, result) => {
    if (result) {
      const code = result.text;
      setBarcode(code);
      setLoading(true);

      // Vibrate the device for 200 milliseconds
      if (navigator.vibrate) {
        navigator.vibrate(300);
      }

      try {
        const token = localStorage.getItem('token');
        const response = await api.get('/scan', {
          params: {barcode : code},
          headers: { Authorization: `Token ${token}` }
        });

        const { product, source } = response.data;

        if (!product || Object.keys(product).length === 0) {
          navigate('/ItemNotFound')
        } else {
          navigate('/scan_result', {
            state: {
              barcode: code,
              data: product,
              source: source
            }
          });
        }

      } catch (error) {
        alert("An error has occured" + err);
        console.error("Failed to log scan:", error);
      } finally {
        setLoading(false);
      }
    }
  };
  // {alert("Width: " + window.innerWidth + ", Height: " + window.innerHeight)}

  return (
    <RequireLogin>
      <div className='scan-wrapper'>
        <div className='page-content'>
          <BarcodeScannerComponent
              
              // width={window.innerWidth}
              // height={window.innerHeight}
              onUpdate={handleBarcodeDetected}

              
            />

          {/* <BarcodeScanner onDetected={handleCustomScanner}/> */}
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
      {/* <div className='flex flex-col w-screen h-screen'>
        <div className='camera-scan-container'>
          <BarcodeScannerComponent
            
            width={window.innerWidth}
            height={window.innerHeight}
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
      </div> */}
    </RequireLogin>
    
  );
};

export default ScanPage;

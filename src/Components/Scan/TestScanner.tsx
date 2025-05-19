import React, { useEffect, useRef } from 'react';
import { BrowserMultiFormatReader, IScannerControls } from '@zxing/browser';

interface BarcodeScannerProps {
  onDetected: (barcode: string) => void;
}

const BarcodeScanner: React.FC<BarcodeScannerProps> = ({ onDetected }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const scannerControlsRef = useRef<IScannerControls | null>(null);

  useEffect(() => {
    const codeReader = new BrowserMultiFormatReader();

    const startScanner = async () => {
      try {
        const controls = await codeReader.decodeFromVideoDevice(
          undefined, // Default camera
          videoRef.current!,
          (result, error) => {
            if (result) {
              const code = result.getText();
              if (navigator.vibrate) navigator.vibrate(200);
              onDetected(code);
              scannerControlsRef.current?.stop(); // Correctly stop scanner
            }
          }
        );
        scannerControlsRef.current = controls;
      } catch (err) {
        console.error("Failed to start barcode scanner:", err);
      }
    };

    startScanner();

    return () => {
      scannerControlsRef.current?.stop();
    };
  }, [onDetected]);

  return (
    <div className="w-full">
      <video ref={videoRef} width="100%" height="300" />
    </div>
  );
};

export default BarcodeScanner;

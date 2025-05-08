import React, { useEffect, useRef, useState } from 'react';

// ✅ Patch legacy Quagga globals BEFORE importing Quagga
if (typeof window !== 'undefined') {
  // @ts-ignore
  window.glMatrixArrayType = Float32Array;

  // @ts-ignore
  window.quat4 = {
    create: () => new Float32Array(4)
  };
}

const BarcodeScanner: React.FC = () => {
  const scannerRef = useRef<HTMLDivElement>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [lastResult, setLastResult] = useState('');

  const startScanner = async () => {
    const Quagga = (await import('quagga')).default;

    Quagga.init(
      {
        inputStream: {
          name: 'Live',
          type: 'LiveStream',
          target: scannerRef.current!,
          constraints: {
            width: 480,
            height: 320,
            facingMode: { ideal: 'environment' }
          }
        },
        decoder: {
          readers: ['code_128_reader', 'ean_reader', 'upc_reader']
        },
        locate: true
      },
      (err) => {
        if (err) {
          console.error('Quagga init error:', err);
          return;
        }
        Quagga.start();
        setIsRunning(true);
        console.log('Scanner started');
      }
    );

    Quagga.onDetected((result: any) => {
      const code = result.codeResult.code;
      setLastResult(code);
      console.log('Scanned:', code);
      Quagga.stop();
      setIsRunning(false);
    });
  };

  const stopScanner = async () => {
    const Quagga = (await import('quagga')).default;
    Quagga.stop();
    setIsRunning(false);
  };

  const toggleScanner = () => {
    if (isRunning) {
      stopScanner();
    } else {
      startScanner();
    }
  };

  useEffect(() => {
    return () => {
      if (isRunning) {
        stopScanner();
      }
    };
  }, [isRunning]);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>📷 Barcode Scanner</h1>
      <div
        ref={scannerRef}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '480px',
          height: '320px',
          margin: 'auto',
          border: '2px dashed #999',
          background: '#000'
        }}
      />
      <br />
      <button onClick={toggleScanner}>
        {isRunning ? 'Stop Scanner' : 'Start Scanner'}
      </button>
      {lastResult && <p>✅ Scanned Code: {lastResult}</p>}
    </div>
  );
};

export default BarcodeScanner;

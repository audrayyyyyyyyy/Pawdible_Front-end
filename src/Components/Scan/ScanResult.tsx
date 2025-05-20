import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "./ScanResult.css"




const ScanResult = () => {
    const location = useLocation();
    const { barcode, data, source } = location.state || {};
    const navigate = useNavigate();


    return (
    <div className="tessst">
        <h1 className="text-2xl font-bold mb-4">Scan Result</h1>
        <p><strong>Barcode:</strong> {barcode}</p>
        <p><strong>Source:</strong> {source}</p>
        <pre className="bg-gray-100 p-4 rounded mt-2">
        {JSON.stringify(data, null, 2)}
        </pre>
        <hr></hr>        
        <p><strong>Toxic To:</strong></p>

        
        <button onClick={() => navigate('/')} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Scan Another
        </button>
    </div>
    );

}

export default ScanResult;
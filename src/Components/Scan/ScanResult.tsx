import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "./ScanResult.css"
import NavBar from '../NavBar/NavBar';

import { backendServerIP } from '../../globals';

const ScanResult = () => {
    const location = useLocation();
    const { barcode, data, source } = location.state || {};
    const navigate = useNavigate();

    // alert(data.frontPicture);

    return (
        <div className='scan-result-wrapper'>
            <div className="page-content">
                <div className='scan-result-page-header'>
                    <img src={backendServerIP + data.frontPicture} alt="Front" style={{ width: '100%' }} />
                </div>
                <div className='scan-result-page-body'>

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
    // <div className="tessst">
    //     <h1 className="text-2xl font-bold mb-4">Scan Result</h1>
    //     <p><strong>Barcode:</strong> {barcode}</p>
    //     <p><strong>Source:</strong> {source}</p>
    //     <pre className="bg-gray-100 p-4 rounded mt-2">
    //     {JSON.stringify(data, null, 2)}
    //     </pre>
    //     <hr></hr>        
    //     <p><strong>Toxic To:</strong></p>

        
    //     <button onClick={() => navigate('/')} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
    //     Scan Another
    //     </button>
    // </div>
    );

}

export default ScanResult;
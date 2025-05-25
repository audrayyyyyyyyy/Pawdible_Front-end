import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./MyHistory.css";
import NavBar from "../../Components/NavBar/NavBar";
import { backendServerIP } from "../../globals";

type ScanHistoryItem = {
  barcode: string;
  product: any; // Replace 'any' with your product type if available
  // source: string;
  timestamp: string;
};


const MyHistory = () => {
  const [history, setHistory] = useState<ScanHistoryItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const historyString = localStorage.getItem('scanHistory');
    if (historyString) {
      const parsedHistory: ScanHistoryItem[] = JSON.parse(historyString);
      setHistory(parsedHistory);
    }
  }, []);

  return (
    <div className="history-wrapper">
      <div className="page-content">
        <div className="page-header">
          My History
        </div>
        <div className="page-body">
          {history.length === 0 ? (
            <p>No scan history found.</p>
          ) : (
            history.map((item, index) => {
              const product = item.product;
              return (
                <div 
                  className="history-item"
                  key={index}
                  onClick={() => {
                    navigate("/scan_result", { state: { barcode: item.barcode, data: product, source: "history" } })}
                  }
                >
                  <img
                    className="history-product-image"
                    src={backendServerIP + product.frontPicture || "https://via.placeholder.com/60"}
                    alt={product.name || "Product image"}
                  />

                  <div className="history-info">
                    <p className="history-info-product-name">{product.name || "Unknown Product"}</p>
                    <p className="history-info-product-manufacturer">{product.manufacturer || "Unknown Manufacturer"}</p>
                    {typeof product.numGrams === "number" && !isNaN(product.numGrams) && (
                      <p className="history-info-num-grams">{product.numGrams} grams</p>
                    )}

                    
                  </div>
                 
                </div>
              );
            })
          )}
          <button onClick={
            () => {
              localStorage.removeItem('scanHistory');
              setHistory([]);
            }
          } className="clear-history-btn"> Clear History </button>
          
        </div>
      </div>
      <NavBar
        current="history"
        routes={{
          account: "/account",
          scan: "/scan",
          history: "/history",
        }}
      />
    </div>
  );
};

export default MyHistory;

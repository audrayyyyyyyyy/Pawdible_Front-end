import React, { useState } from "react";
import "./AddNewItem.css";
import NavBar from "../../Components/NavBar/NavBar";

import axios from "axios";
import { backendServerIP } from "../../globals";

const api = axios.create({
  baseURL: backendServerIP,
  headers: {"Content-Type": "application/json"},

});

const AddNewItem = () => {
  const [productName, setProductName] = useState("");
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [ingredientsImage, setIngredientsImage] = useState(null);
  
  const [backgroundImage_prev, setBackgroundImage_prev] = useState(null);
  const [ingredientsImage_prev, setIngredientsImage_prev] = useState(null);

  const userString = localStorage.getItem("user");
  let username = "";

  if (userString) {
    try {
      const user = JSON.parse(userString);
      username = user.username || "";
    } catch (e) {
      console.error("Invalid JSON in localStorage user:", e);
    }
  }

  const handleSubmit = async () => {
    const formData = new FormData();
    const nowISO = new Date().toISOString();  // e.g. "2025-05-27T15:30:00.000Z"

    formData.append("name", productName);
    formData.append("description", "N/A");
    formData.append("frontPicture", backgroundImage);
    formData.append("ingredientsPicture", ingredientsImage);
    formData.append("requester", username);
    formData.append("requestDate", nowISO);

    try {
      const token = localStorage.getItem("token");
  
      const response = await api.post("/new_product_name/", formData, {
        headers: {
          "Authorization": `Token ${token}`,
          "Content-Type": "multipart/form-data", // Override for this request
        },
      });
  
      alert("Product submitted!");
      console.log(response.data);
    }
    catch (error) {
      if (error.response) {
        console.error("Server responded with:", error.response.data);
        alert("Upload failed: " + JSON.stringify(error.response.data));
      } else {
        console.error("Unexpected error:", error.message);
        alert("Unexpected error occurred.");
      }
    }
    
  }

  return (
    <div className="add-new-item-container">
      <div className="page-content">
        <div className="page-header">
          Add New Product
        </div>
        <div className="page-body">
          <input
            className="product-input"
            type="text"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => {
                setProductName(e.target.value);
              }
            }
          />

          {/* Image Label */}
          <label className="image-label">Background Image</label>
          <div className="upload-box">
            <input
              type="file"
              onChange={(e) => {
                  setBackgroundImage(e.target.files[0])
                  setBackgroundImage_prev(URL.createObjectURL(e.target.files[0]));
                }
              }
            />
            {backgroundImage_prev ? (
              <img src={backgroundImage_prev} alt="Background" />
            ) : (
              <div className="upload-placeholder">
                <span>📤</span>
                <p>Please upload an Image</p>
              </div>
            )}
          </div>

          <label className="image-label">Ingredients Image</label>
          <div className="upload-box">
            <input
              type="file"
              onChange={(e) => {
                  setIngredientsImage(e.target.files[0])
                  setIngredientsImage_prev(URL.createObjectURL(e.target.files[0]))
                }
              }

            />
            {ingredientsImage_prev ? (
              <img src={ingredientsImage_prev} alt="Ingredients" />
            ) : (
              <div className="upload-placeholder">
                <span>📤</span>
                <p>Please upload an Image</p>
              </div>
            )}
          </div>

          <button className="submit-button" onClick={ handleSubmit }>Submit</button>

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

export default AddNewItem;

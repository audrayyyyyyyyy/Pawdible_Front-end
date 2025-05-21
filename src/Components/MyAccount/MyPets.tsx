import React, { useState } from "react";
import "./MyPets.css";
import NavBar from "../../Components/NavBar/NavBar";

import RequireLogin from "../Auth/RequireLogin";

function MyPets() {
  const [selectedPetType, setSelectedPetType] = useState(null);
  const [setPetName] = useState("");

  const handlePetTypeSelect = (type) => {
    setSelectedPetType(type);
  };

  return (
    <RequireLogin>
      <div className="my-pets-container" style={{ display: "flex" }}>
        <div className="my-pets-page-content">
          <div className="my-pets-page-header">
          </div>
        
          <div className="my-pets-page-body">
            {/* My Pets Section */}
            <div className="my-pets-section">
              <div className="my-pets-header">My Pets</div>
              
              {/* Pet List */}
              <div className="my-pets-list">
                <div className="my-pets-list-item">
                  <img src="images/my-pet-cat.svg"  className="pet-image cat"/>
                  <div className="pet-name">Putot</div>
                </div>
                <div className="my-pets-list-item" style={{ backgroundColor: '#F1B24E' }}>
                  <img src="images/my-pet-dog.svg"  className="pet-image cat"/>
                  <div className="pet-name">Choco</div>
                </div>
                <div className="my-pets-list-item">
                  <img src="images/my-pet-cat.svg"  className="pet-image cat"/>
                  <div className="pet-name">Putot</div>
                </div>
                <div className="my-pets-list-item">
                  <img src="images/my-pet-cat.svg"  className="pet-image cat"/>
                  <div className="pet-name">Putot</div>
                </div>
              </div>
            </div>

            <div className="add-pet-section">
              <div className="add-pet-header">Add new Pet?</div>

              {/* Pet Type Selection */}
              <div className="pet-type-selection">
                <div className="pet-type-header">What is your pet?</div>
                <div
                  className={`pet-type-option ${selectedPetType === "Dog" ? "selected" : ""}`}
                  onClick={() => handlePetTypeSelect("Dog")}
                >
                  <div className="pet-type-label"> 
                    Dog</div>
                  <img src="images/add-pet-dog.svg" className="pet-type-image dog"/>
                </div>
                <div
                  className={`pet-type-option ${selectedPetType === "Cat" ? "selected" : ""}`}
                  onClick={() => handlePetTypeSelect("Cat")}
                >
                  <div className="pet-type-label">Cat</div>
                  <img src="images/add-pet-cat.svg"  className="pet-type-image cat"/>
                </div>

                {/* Pet Name Input */}
                <div className="pet-name-input"> Pet Name </div>

                {/* Submit Button */}
                <button className="submit-button"> Submit </button>

              </div>



          
          
            </div>
          </div>
        </div>
        {/* <div className="accent-div">
          
        </div> */}
        {/* Header */}
        {/* <div className="my-pets-header">My Pets</div> */}

        {/* Pet List */}
        {/* <div className="pet-list">
          <div className="pet-item">
            <img src="images/my-pet-cat.svg"  className="pet-image cat"/>
            <div className="pet-name">Putot</div>
          </div>
          <div className="pet-item">
            <div className="pet-image dog"></div>
            <div className="pet-name">Choco</div>
          </div>
        </div> */}

        {/* Add New Pet Section */}
        

        <NavBar
          current="account"
          routes={{
              account: "/account",
              scan: "/scan",
              history: "/history",
          }}
        />
          

      </div>
    </RequireLogin>
  );
}

export default MyPets;
import React, { useEffect, useState } from "react";
import "./MyPets.css";
import NavBar from "../../Components/NavBar/NavBar";

import RequireLogin from "../Auth/RequireLogin";
import axios from "axios";
import { backendServerIP } from "../../globals";

const api = axios.create({
  baseURL: backendServerIP,
  headers: { "Content-Type": "application/json" },
})

type Pet = {
  id?: number;       // if you receive IDs from the backend
  name: string;
  type: "Dog" | "Cat";
};


function MyPets() {
  const [pets, setPets] = useState([]);

  const [selectedPetType, setSelectedPetType] = useState(null);
  const [petName, setPetName] = useState("");

  const handlePetTypeSelect = (type : string) => {
    setSelectedPetType(type);
  };

  const handleSubmit = async () => {
    if (!selectedPetType || !petName.trim()) {
      alert("Please provide both pet type and name.");
      return;
    }
  
    const token = localStorage.getItem("token");
    if (!token) {
      alert("You must be logged in.");
      return;
    }
  
    try {
      const response = await api.post(
        "/my_pets/",
        {
          name: petName.trim(),
          type: selectedPetType,
        },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
  
      alert("Pet added successfully!");
      setPets(prev => [...prev, response.data]); // add new pet to UI list
      setPetName("");
      setSelectedPetType(null);
    } catch (error) {
      console.error("Error adding pet:", error);
      alert("Failed to add pet.");
    }
  };
  

  useEffect(() => {
    const fetchPets = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;
  
      try {
        const response = await api.get("/my_pets/", {
          headers: {
            Authorization: `Token ${token}`,
          },
        });
        setPets(response.data); // update pet list
      } catch (error) {
        console.error("Failed to load pets:", error);
      }
    };
  
    fetchPets();
  }, []);
  

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
                {/* <div className="my-pets-list-item">
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
                </div> */}

                {pets.map((pet) => (
                  <div className={`my-pets-list-item ${pet.type.toLowerCase()}`} key={pet.id}>
                    <img
                      src={`images/my-pet-${pet.type.toLowerCase()}.svg`}
                      className={`pet-image ${pet.type.toLowerCase()}`}
                    />
                    <div className="pet-name">{pet.name}</div>
                  </div>
                ))}

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
                <input
                  type="text"
                  className="pet-name-input"
                  placeholder="Pet name"
                  value={petName}
                  onChange={(e) => setPetName(e.target.value)}
                />

                {/* <div className="pet-name-input"> Pet Name </div> */}

                {/* Submit Button */}
                <button className="submit-button" onClick={handleSubmit}>
                  Submit
                </button>


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
import React, { useState } from 'react';
import "./MyPets.css";

const MyPets = () => {
    const [pets, setPets] = useState([]);
    const [selectedPet, setSelectedPet] = useState(null);
    const [petName, setPetName] = useState("");

    const handlePetSelection = (petType) => {
        setSelectedPet(petType);
    };

    const handleSubmit = () => {
        if (selectedPet && petName) {
            setPets([...pets, { type: selectedPet, name: petName }]);
            setSelectedPet(null);
            setPetName("");
        }
    };

    return (
        <div className='home-container'>
            <h1>My Pets</h1>
            <div className='pets-container'>
                {pets.map((pet, index) => (
                    <div className='pet-card' key={index}>
                        <img src={`/images/${pet.type.toLowerCase()}.png`} alt={pet.type} />
                        <p>{pet.name}</p>
                    </div>
                ))}
            </div>
            
            <h2>Add new Pet?</h2>
            <p>What is your pet?</p>
            <div className='pet-selection'>
                <div className={`pet-option dog ${selectedPet === 'Dog' ? 'selected' : ''}`} onClick={() => handlePetSelection('Dog')}>
                    <p>Dog</p>
                    <img src='/images/dog-icon.png' alt='Dog Icon' />
                </div>
                <div className={`pet-option cat ${selectedPet === 'Cat' ? 'selected' : ''}`} onClick={() => handlePetSelection('Cat')}>
                    <p>Cat</p>
                    <img src='/images/cat-icon.png' alt='Cat Icon' />
                </div>
            </div>
            <input 
                type='text' 
                placeholder='Pet name' 
                className='pet-name-input' 
                value={petName} 
                onChange={(e) => setPetName(e.target.value)} 
            />
            <button className='submit-btn' onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default MyPets;

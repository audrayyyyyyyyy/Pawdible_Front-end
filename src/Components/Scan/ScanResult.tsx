import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "./ScanResult.css";
import NavBar from '../NavBar/NavBar';
import { backendServerIP } from '../../globals';

const PET_TOXINS = {
  "xylitol": {
    pets: ["dogs"],
    info: "Xylitol is a potent stimulator of insulin release in dogs, leading to a rapid and potentially life-threatening drop in blood glucose levels, and has also been linked to liver failure."
  },
  "chocolate": {
    pets: ["dogs", "cats"],
    info: "Chocolate contains methylxanthines such as theobromine and caffeine, which are toxic to pets. Dark chocolate is more toxic than milk chocolate, especially to dogs."
  },
  "cocoa": {
    pets: ["dogs", "cats"],
    info: "Cocoa products, including dry cocoa powder and unsweetened baker’s chocolate, are rich in theobromine and caffeine, which are harmful to pets, especially dogs."
  },
  "onion": {
    pets: ["dogs", "cats"],
    info: "Onions contain organosulfoxides that can damage red blood cells, potentially causing hemolytic anemia in both dogs and cats."
  },
  "garlic": {
    pets: ["dogs", "cats"],
    info: "Garlic contains allicin and related compounds that may damage red blood cells, causing gastrointestinal upset and anemia, though it is less toxic than onions."
  },
  "grapes": {
    pets: ["dogs"],
    info: "Grapes can cause acute kidney failure in dogs, even in small amounts, whether raw, cooked, or in baked goods."
  },
  "raisins": {
    pets: ["dogs"],
    info: "Raisins are dried grapes and equally toxic to dogs, commonly linked to kidney failure after ingestion."
  },
  "sultanas": {
    pets: ["dogs"],
    info: "Sultanas, like raisins, are toxic to dogs and have been associated with renal failure even in small quantities."
  },
  "alcohol": {
    pets: ["dogs", "cats"],
    info: "Alcohol (ethanol) can cause vomiting, central nervous system depression, hypothermia, metabolic acidosis, and potentially coma in pets."
  },
  "caffeine": {
    pets: ["dogs", "cats"],
    info: "Caffeine can overstimulate the central nervous system, leading to restlessness, rapid breathing, heart palpitations, tremors, and seizures."
  },
  "macadamia": {
    pets: ["dogs"],
    info: "Macadamia nuts can cause vomiting, muscle tremors, weakness, and locomotor difficulties in dogs; the exact toxic mechanism is unknown."
  },
  "avocado": {
    pets: ["dogs", "cats", "birds", "rabbits", "horses", "cattle", "goats"],
    info: "Avocados contain the toxin persin, which can be harmful to many species including birds, rabbits, and large animals. All parts of the plant are potentially toxic."
  },
  "yeast dough": {
    pets: ["dogs", "cats"],
    info: "Uncooked yeast dough can expand in the stomach and produce ethanol, leading to bloat and alcohol poisoning."
  },
  "hops": {
    pets: ["dogs"],
    info: "Hops used in brewing can cause malignant hyperthermia in dogs, leading to vomiting, elevated heart rate, and potentially death."
  },
  "tea tree oil": {
    pets: ["dogs", "cats"],
    info: "Even small amounts of tea tree oil can cause poisoning in pets when ingested or absorbed through the skin, leading to tremors, weakness, and potentially coma."
  }
};

const ScanResult = () => {
    const location = useLocation();
    const { barcode, data, source } = location.state || {};
    const navigate = useNavigate();
    const [accordionOpen, setAccordionOpen] = useState(true);
  
    const ingredients = data.ingredients.toLowerCase().split(/[\n,]+/).map(i => i.trim());
  
    const toxicMatches = Object.keys(PET_TOXINS).filter(toxin =>
      ingredients.some(ingredient => ingredient.includes(toxin))
    );
  
    const highlightToxicIngredients = () => {
      let result = data.ingredients;
      for (const toxin of Object.keys(PET_TOXINS)) {
        const regex = new RegExp(`\\b(${toxin})\\b`, 'gi');
        result = result.replace(regex, match => `<span class="toxic-ingredient">${match.toUpperCase()}</span>`);
      }
      return result.toUpperCase();
    };
  
    return (
      <div className='scan-result-wrapper'>
        <div className="page-content">
          <div className='scan-result-page-header'>
            <img src={backendServerIP + data.frontPicture} alt="Front" style={{ width: '100%' }} />
          </div>
          <div className='scan-result-page-body'>
            <div className='scan-result-main-info'>
              <img className="scan-main-info-img" src={backendServerIP + data.frontPicture} alt="" />
              <div className="scan-main-info-details">
                <h2 className='scan-info-details-product-name'> {data.name} </h2>
                <p className='scan-info-details-manufacturer'> {data.manufacturer} </p>
                <p className='scan-info-details-num-grams'> {data.numGrams}g</p>
              </div>
            </div>
  
            <hr />
            <div className='scan-result-ingredients-container'>
              <h5 className='scan-result-ingredients-label'> Ingredients: </h5>
              <p className='scan-result-ingredients' dangerouslySetInnerHTML={{ __html: highlightToxicIngredients() }} />
            </div>
  
            {/* Toxin Results */}
            {toxicMatches.length > 0 ? (
              <div className='toxic-accordion'>
                <button className="accordion-toggle" onClick={() => setAccordionOpen(!accordionOpen)}>
                  ⚠ Toxic Ingredients Found ({toxicMatches.length}) {accordionOpen ? '▲' : '▼'}
                </button>
                {accordionOpen && (
                  <div className="accordion-content">
                    {toxicMatches.map((toxinKey, idx) => {
                      const toxinInfo = PET_TOXINS[toxinKey];
                      return (
                        <div key={idx} className="toxic-info-card">
                          <h4 className="toxin-name">{toxinKey.toUpperCase()}</h4>
                          <p><strong>Pets affected:</strong> {toxinInfo.pets.join(', ')}</p>
                          <p>{toxinInfo.info}</p>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            ) : (
              <div className="no-toxins-message">
                ✅ <strong>No toxic ingredients found for pets.</strong>
              </div>
            )}
  
            <button onClick={() => navigate('/')} className="scan-another">
              Scan Another
            </button>
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
    );
  };


export default ScanResult;

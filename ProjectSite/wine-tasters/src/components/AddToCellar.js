import React, { useState, useEffect, useRef } from 'react';
import '../CSS/AddToCellar.css';
import { collection, query, getDocs } from 'firebase/firestore';

const AddToCellar = ({ db }) => {
  const [wineArray, setWineArray] = useState([]);
  const [selectedWine, setSelectedWine] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);

  const fetchWines = async () => {
    const wineDB = collection(db, 'wine');
    const q = query(wineDB);
    const querySnapshot = await getDocs(q);
    const retrievedWines = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }));
    setWineArray(retrievedWines);
  };

  useEffect(() => {
    fetchWines();
  }, [db]);

  const handleWineSelection = (wine) => {
    setSelectedWine(wine);
    closeDropdown();
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const openDropdown = () => {
    if (!isOpen) {
      setIsOpen(true);
      document.addEventListener('click', handleOutsideClick);
    }
  };
  
  const closeDropdown = () => {
    if (isOpen) {
      setIsOpen(false);
      document.removeEventListener('click', handleOutsideClick);
    }
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      closeDropdown();
    }
  };

  const handleSubmit = () => {
    if (selectedWine) {
      // Perform the desired action using the selectedWine and db
      console.log('Adding wine to cellar:', selectedWine);
    } else {
      // Handle case when no wine is selected
      console.log('Please select a wine');
    }
  };

  return (
    <div className="wineSelect">
      {/* Render wine list using the fetched wineArray */}
      <div className="selection" ref={dropdownRef}>
        <div className="dropdown-header" onClick={toggleDropdown}>
          {selectedWine ? (
            <div className="selectedWine">{selectedWine.data.name}</div>
          ) : (
            <div className="placeholder">Select a wine</div>
          )}
        </div>
        <div className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
          {wineArray.map((wine) => (
            <div
              key={wine.id}
              onClick={() => handleWineSelection(wine)}
              className={`wineItem ${selectedWine?.id === wine.id ? 'selected' : ''}`}
            >
              {wine.data.name}
            </div>
          ))}
        </div>
      </div>
      <button className="addToCellarButton" onClick={handleSubmit} disabled={!selectedWine}>
        Add To Cellar
      </button>
    </div>
  );
};

export default AddToCellar;

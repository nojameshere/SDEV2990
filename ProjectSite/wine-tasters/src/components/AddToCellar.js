import React, { useState, useEffect, useRef } from 'react';
import '../CSS/AddToCellar.css';
import { collection, query, getDocs, addDoc } from 'firebase/firestore';

const AddToCellar = ({ db }) => {
  const [wineArray, setWineArray] = useState([]);
  const [selectedWine, setSelectedWine] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const cellarWineData = {
      wineDocRef: selectedWine.id,
      uID: localStorage.getItem('uID'),
    };

    try {
      // Add the wine data to the "cellar" collection in Firestore
      const docRef = await addDoc(collection(db, 'cellar'), cellarWineData);
      console.log('Cellar item added with ID:', docRef.id);

      // Close the component after successful submission
      setIsClosed(true);
    } catch (error) {
      console.error('Error adding wine:', error);
    }
  };

  useEffect(() => {
    fetchWines();
  }, [db]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const selectWine = (wine) => {
    setSelectedWine(wine);
    setIsOpen(false); // Close the dropdown after selecting a wine
  };

  const openDropdown = () => {
    setIsOpen(true);
  };

  if (isClosed) {
    return null; // Render nothing if the component is closed
  }

  return (
    <div className={`addWineSelect ${isOpen ? 'open' : ''}`}>
      {/* Render wine list using the fetched wineArray */}
      <div className="addWineSelection" ref={dropdownRef} onClick={openDropdown}>
        <div className="addWineDropdown-header">
          {selectedWine ? (
            <div className="addWineSelectedWine">{selectedWine.data.name}</div>
          ) : (
            <div className="addWinePlaceholder">Select a wine</div>
          )}
        </div>
        <div className="addWineDropdown-menu">
          {wineArray.map((wine) => (
            <div
              key={wine.id}
              className={`addWineItem ${selectedWine?.id === wine.id ? 'selected' : ''}`}
              onClick={() => selectWine(wine)}
            >
              {wine.data.name}
            </div>
          ))}
        </div>
      </div>
      <button className="addWineToCellarButton" onClick={handleSubmit} disabled={!selectedWine}>
        Add To Cellar
      </button>
    </div>
  );
};

export default AddToCellar;

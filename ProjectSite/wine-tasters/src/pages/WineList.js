import React, { useState, useEffect } from 'react';
import Rating from '../components/Rating.js';
import { FaPlus } from 'react-icons/fa';
import { FaWineBottle } from 'react-icons/fa';
import AddWine from '../components/AddWine.js';

const WineList = ({ data, db, onDataUpdate }) => {
  const [showAddWine, setShowAddWine] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (showAddWine && !event.target.closest('.addWineContent')) {
        setShowAddWine(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [showAddWine]);

  const handleAddWine = () => {
    setShowAddWine(true);
  };

  const handleCloseAddWine = () => {
    setShowAddWine(false);
    onDataUpdate(); // Invoke the callback function to trigger data fetching
  };

  return (
    <div className='content'>
      <div className='contentUpper'>
        <h1> </h1>
        {data.map((doc, index) => (
          <Rating key={index} prop={doc} />
        ))}
      </div>
      <div className='addWineButtonBox'>
        <a href='#' className='addWineButton' onClick={handleAddWine}>
          <FaWineBottle />
          <FaPlus />
        </a>
      </div>
      {showAddWine && <AddWine onClose={handleCloseAddWine} db={db} />} {/* Render the AddWine component when showAddWine is true */}
    </div>
  );
};

export default WineList;

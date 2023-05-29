import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import '../CSS/AddWine.css';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import PhotoSelector from './PhotoSelector';
var pictureIcon = '/img/picturePlaceholder.png';

const AddWine = ({ onClose, db }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    // const db = getFirestore();

    const name = document.getElementById('wineName').value;
    const type = document.getElementById('wineTypeDropdown').value;
    const year = document.getElementById('wineYear').value;
    const brand = document.getElementById('wineBrand').value;
    const desc = document.getElementById('wineDescription').value;
    
    let photoValue = selectedPhoto;
    if (selectedPhoto < 0 || selectedPhoto > 15 || selectedPhoto === null) {
        photoValue = 99;
    }

    const wineData = {
      name: name,
      type: type,
      year: year,
      brand: brand,
      desc: desc,
      photo: photoValue
    };

    try {
      // Add the wine data to the "wines" collection in Firestore
      const docRef = await addDoc(collection(db, 'wine'), wineData);
      console.log('Wine added with ID: ', docRef.id);

      // Close the AddWine component
      onClose();
    } catch (error) {
      console.error('Error adding wine: ', error);
    }
  };

  const handlePhotoSelect = (photoNumber) => {
    setSelectedPhoto(photoNumber);
    setIsSelectorOpen(false);
  };

  const handlePhotoSectionClick = () => {
    setIsSelectorOpen(true);
  };

  return (
    <div className='addWineContent'>
      <form onSubmit={handleSubmit} className='addForm'>
        <div className="photoSection" onClick={handlePhotoSectionClick}>
          {selectedPhoto !== null ? (
            <img src={`/img/Wine${selectedPhoto}.png`} className="addWinePhoto" alt="Wine" />
          ) : (
            <label>
              <img src={pictureIcon} className="addWinePhoto" alt="Wine" />
            </label>
          )}
        </div>
        {isSelectorOpen && (
          <PhotoSelector onPhotoSelect={handlePhotoSelect} onClose={() => setIsSelectorOpen(false)} />
        )}
        <label>
          <input type='text' placeholder='Wine Name' className='entryField' id='wineName' required />
        </label>
        <div className='wineYearType'>
          <label>
          <select className='wineTypeDropdown' id='wineTypeDropdown' defaultValue='' required>
            <option value='' disabled hidden>Wine Type</option>
              <option value='Red'>Red</option>
              <option value='White'>White</option>
              <option value='Rosé'>Rosé</option>
              <option value='Sparkling'>Sparkling</option>
              <option value='Dessert'>Dessert</option>
              <option value='Fortified'>Fortified</option>
              <option value='Other'>Other</option>
            </select>
          </label>
          <label>
            <input type='text' placeholder='Wine Year' className='entryField' id='wineYear' required />
          </label>
          <label>
            <input type='text' placeholder='Wine Brand' className='entryField' id='wineBrand' required />
          </label>
        </div>
        <label>
          <textarea placeholder='Wine Description' className='descBox' id='wineDescription'></textarea>
        </label>
        <button type='submit' className='newWineButton'>
          <FaPlus /> Add
        </button>
      </form>
    </div>
  );
};

export default AddWine;

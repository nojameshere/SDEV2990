import React, { useState } from 'react';
import '../CSS/PhotoSelector.css';

const PhotoSelector = ({ onPhotoSelect }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handlePhotoClick = (photoNumber) => {
    setSelectedPhoto(photoNumber);
    onPhotoSelect(photoNumber);
  };

  return (
    <div>
      <h2>Select a Wine Photo:</h2>
      <div className="photoGrid">
        {[...Array(16)].map((_, index) => (
          <img
            key={index}
            src={`/img/wine${index}.png`}
            alt='AltsAreSilly'
            className={selectedPhoto === index ? 'selected' : ''}
            onClick={() => handlePhotoClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoSelector;

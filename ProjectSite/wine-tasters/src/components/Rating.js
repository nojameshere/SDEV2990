import '../CSS/Rating.css';
import { FaPlus } from 'react-icons/fa';
import { FaWineBottle } from 'react-icons/fa';
import React, { useState, useRef, useEffect } from 'react';
import AddWineRating from './AddWineRating.js'
var pictureIcon = '/img/picturePlaceholder.png';

const Rating = ({ prop, db }) => {
  const [showAddWineRating, setShowAddWineRating] = useState(false);
  const addRatingRef = useRef(null);

  const handleAddRating = () => {
    setShowAddWineRating(true);
  };

  const handleOutsideClick = (event) => {
    if (addRatingRef.current && !addRatingRef.current.contains(event.target)) {
      setShowAddWineRating(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className='ratingCard'>
      <div className='leftRatingContent'>
        <div className='winePhotoBox'>
          <img
            src={`/img/Wine${prop.data.photo}.png`}
            alt={prop.data.photo !== null ? '' : pictureIcon}
            className='winePhotoRating'
          />
        </div>
      </div>
      <div className='wineTitle cardContent'>
        <div className='wineName'>
          <h1>{prop.data.name}</h1>
        </div>
        <div className='bottomWineTitle'>
          <div className='wineType'>
            <h2>{prop.data.type}</h2>
          </div>
          <div className='wineYear'>
            <h2>{prop.data.year}</h2>
          </div>
        </div>
      </div>
      <div className='wineInfo cardContent'>
        <div className='upperWineInfo'>
          <h2>{prop.data.desc}</h2>
        </div>
        <div className='lowerWineInfo'>
          <div className='wineRating'>
            <FaWineBottle className='bottleRating' />
            <FaWineBottle className='bottleRating' />
            <FaWineBottle className='bottleRating' />
            <FaWineBottle className='bottleRating' />
            <FaWineBottle className='bottleRating' />
          </div>
          <div className='wineTags'>
            <h5 className='wineTag'>Tag1</h5>
            <h5 className='wineTag'>Tag1</h5>
            <h5 className='wineTag'>Tag1</h5>
            <h5 className='wineTag'>Tag1</h5>
          </div>
        </div>
      </div>
      <div className='addRating' onClick={handleAddRating}>
        <FaPlus className='addIcon' />
      </div>
      {showAddWineRating && (
        <div ref={addRatingRef}>
          <AddWineRating db={db} docID={prop.id} wineName={prop.data.name} />
        </div>
      )}
    </div>
  );
};

export default Rating;

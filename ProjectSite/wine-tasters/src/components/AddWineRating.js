import '../CSS/AddWineRating.css';
import { FaWineBottle } from 'react-icons/fa';
import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';


const AddWineRating = ({ db, docID, wineName}) => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        // const db = getFirestore();
    
        const rating = document.getElementById('wineNumberRating').value;
        const desc = document.getElementById('ratingText').value;
        
    
        const ratingData = {
          wineRef: docID,
          rating: rating,
          description: desc
        };
    
        try {
          // Add the wine data to the "wines" collection in Firestore
          const docRef = await addDoc(collection(db, 'ratings'), ratingData);
          console.log('rating added with ID: ', docRef.id);
    

        } catch (error) {
          console.error('Error adding wine: ', error);
        }
      };
    return(
        <div className='addRatingContainer'>
            <form onSubmit={handleSubmit} className='addRatingForm'>
                <h1>Add rating for: {wineName}</h1>
                <label>
                    <select className='wineNumberRating' id='wineNumberRating' defaultValue='' required>
                        <option value='' disabled hidden>Wine Rating</option>
                        <option value='1'>🍷</option>
                        <option value='2'>🍷🍷</option>
                        <option value='3'>🍷🍷🍷</option>
                        <option value='4'>🍷🍷🍷🍷</option>
                        <option value='5'>🍷🍷🍷🍷🍷</option>
                    </select>
                </label>
                <label>
                    <textarea type='text' placeholder='Write your rating here' className='entryFieldRating' id='ratingText' required />
                </label>
                
                <button type='submit' className='addWineRatingButton'>Submit rating</button>
            </form>
        </div>
    )
}

export default AddWineRating;
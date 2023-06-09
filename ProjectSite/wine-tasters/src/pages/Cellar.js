import React, { useEffect, useState } from 'react';
import CellarCard from '../components/CellarCard.js';
import CellarCardAdd from '../components/CellarCardAdd.js';
import { collection, query, getDocs, where } from 'firebase/firestore';

const Cellar = ({ db }) => {
  const [cellarArray, setCellarArray] = useState([]);

  useEffect(() => {
    fetchCellar();
  }, []);

  const fetchCellar = async () => {
    const cellarQuery = query(
      collection(db, 'cellar'),
      where('uID', '==', localStorage.getItem('uID'))
    );
    const querySnapshot = await getDocs(cellarQuery);
    const retrievedCellarItems = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }));
    setCellarArray(retrievedCellarItems);
  };
  if(cellarArray != null){
    return (
        <div className='cellarGrid'>
          {cellarArray.map((doc, index) => (
            
            <CellarCard key={index} prop={doc} db={db} />
          ))}
          <CellarCardAdd db={db} />
        </div>
      );
  }
  return(
    <div className='cellarGrid'>
        <CellarCardAdd db={db} />
    </div>
  )
};

export default Cellar;

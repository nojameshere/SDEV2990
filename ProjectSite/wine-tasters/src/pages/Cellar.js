// import React, { useEffect, useState } from 'react';
// import CellarCard from '../components/CellarCard.js';
// import CellarCardAdd from '../components/CellarCardAdd.js';
// import { collection, query, getDocs, where } from 'firebase/firestore';

// const Cellar = ({ db }) => {
//   const [cellarArray, setCellarArray] = useState([]);

//   useEffect(() => {
//     fetchCellar();
//   }, []);

//   const fetchCellar = async () => {
//     const cellarQuery = query(
//       collection(db, 'cellar'),
//       where('uID', '==', localStorage.getItem('uID'))
//     );
//     const querySnapshot = await getDocs(cellarQuery);
//     const retrievedCellarItems = querySnapshot.docs.map((doc) => ({
//       id: doc.id,
//       data: doc.data(),
//     }));
//     setCellarArray(retrievedCellarItems);
//   };

//   return (
//     <div className='cellarGrid'>
//       {cellarArray.map((doc, index) => (
//         <CellarCard key={index} prop={doc} />
//       ))}
//       <CellarCardAdd db={db} />
//     </div>
//   );
// };

// export default Cellar;

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

  return (
    <div className='cellarGrid'>
      {cellarArray.map((doc, index) => (
        <CellarCard key={index} prop={doc} />
      ))}
      <CellarCardAdd db={db} />
    </div>
  );
};

export default Cellar;

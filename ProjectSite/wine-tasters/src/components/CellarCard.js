import '../CSS/CellarCard.css';
import { collection, query, getDoc, doc} from 'firebase/firestore';
import { useState, useEffect } from 'react';

var pictureIcon = '/img/picturePlaceholder.png';

const CellarCard = ({ prop, db }) => {
  const [wineData, setWineData] = useState(null);

  useEffect(() => {
    const fetchWine = async () => {
      const wineDocRef = doc(db, 'wine', prop.data.wineDocRef);
      const wineDocSnapshot = await getDoc(wineDocRef);
      if (wineDocSnapshot.exists()) {
        const wine = {
          id: wineDocRef,
          data: wineDocSnapshot.data(),
        };
        console.log(wine);
        setWineData(wine);
      } else {
        console.log('Wine not found.');
      }
    };

    fetchWine();
  }, [db, prop.data.wineDocRef]);

  return (
    <div className='cellarCard'>
      <div className='cardFrame'>
        <div className='photoFrame'>
          {wineData?.data && (
            <>
              <div className='wineName'>
                <p>{wineData.data.name}</p>
              </div>
              <img
                src={`/img/Wine${wineData.data.photo}.png`}
                alt={wineData.data.photo !== null ? '' : pictureIcon}
                className='cellarPhoto'
              />
              <div className='cellarLowerInfo'>
                <div className='wineType'>
                  <p>{wineData.data.type}</p>
                </div>
                <div className='wineYear'>
                  <p>{wineData.data.year}</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CellarCard;

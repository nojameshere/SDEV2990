import React, { useState } from 'react';
import '../CSS/CellarCard.css';
import { FaPlus } from 'react-icons/fa';
import AddToCellar from './AddToCellar';

const CellarCardAdd = ({ wineData, db }) => {
    const [showAddToCellar, setShowAddToCellar] = useState(false);

    const handleClick = () => {
        setShowAddToCellar(true);
    };

    return (
        <div className='cellarCard' onClick={handleClick}>
            <div className='cardFrame'>
                <div className='addIconFrame'>
                    <FaPlus className='addIcon' />
                </div>
            </div>
            {showAddToCellar && <AddToCellar wineData={wineData} db={db} />}
        </div>
    );
};

export default CellarCardAdd;

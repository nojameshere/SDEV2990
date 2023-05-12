import './CellarCard.css';
import { FaPlus } from 'react-icons/fa';


const CellarCard = (itemValue) => {
    return (
        <a href={itemValue} className='cellarCard'>
            <div className='cardFrame'>
                <div className='addIconFrame'>
                    <FaPlus className='addIcon' />
                </div>
                
            </div>
        </a>
    )

}

export default CellarCard;
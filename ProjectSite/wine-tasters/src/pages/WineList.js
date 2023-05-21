import Rating from '../components/Rating.js';
import { FaPlus } from 'react-icons/fa';
import { FaWineBottle } from 'react-icons/fa';

const WineList = ({data}) => {
    console.log(data)
    return (
        <div className='content'>
            <div className='contentUpper'>
                {data.map((doc, index) => (
                    <Rating key={index} prop={doc} />
                ))}
            </div>
            <div className='addWineButtonBox'>
                <a href='' className='addWineButton'>
                    <FaWineBottle />
                    <FaPlus />
                </a>
            </div>
        </div>
    )
}
export default WineList;
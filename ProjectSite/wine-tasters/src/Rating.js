import './Rating.css';
import { FaPlus } from 'react-icons/fa';
import { FaWineBottle } from 'react-icons/fa';
var pictureIcon = '/img/picturePlaceholder.png';
var winePhoto = '/img/tempWinePhoto.webp';


const Rating = () => {
    return (
        <div className='ratingCard'>
            <div className='leftRatingContent'>
                <div className='winePhoto'>
                    <img src={pictureIcon} alt={winePhoto} className='winePhoto' />
                </div>
            </div>
            <div className='wineTitle'>
                <div className='wineName'>
                    <h1>Temporary Wine Name</h1>
                </div>
                <div className='bottomWineTitle'>
                    <div className='wineType'>
                        <h2>Red</h2>
                    </div>
                    <div className='wineYear'>
                        <h2>1999</h2>
                    </div>
                </div>
            </div>
            <div className='wineInfo'>
                <div className='upperWineInfo'>
                    <h2>This is the description part of the wine.</h2>
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
            <div className='addRating'>
                <FaPlus className='addIcon' />
            </div>
        </div>
    )
    
}


export default Rating;
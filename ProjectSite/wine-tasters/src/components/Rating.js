import './Rating.css';
import { FaPlus } from 'react-icons/fa';
import { FaWineBottle } from 'react-icons/fa';
var pictureIcon = '/img/picturePlaceholder.png';
var winePhoto = '/img/tempWinePhoto.webp';


const Rating = ({prop}) => {
    console.log(prop);
    console.log('fuck');
    return (
        <div className='ratingCard'>
            <div className='leftRatingContent'>
                <div className='winePhotoBox'>
                    <img src={pictureIcon} alt={winePhoto} className='winePhotoRating' />
                </div>
            </div>
            <div className='wineTitle cardContent'>
                <div className='wineName'>
                    <h1>{prop.name}</h1>
                </div>
                <div className='bottomWineTitle'>
                    <div className='wineType'>
                        <h2>{prop.type}</h2>
                    </div>
                    <div className='wineYear'>
                        <h2>{prop.year}</h2>
                    </div>
                </div>
            </div>
            <div className='wineInfo cardContent'>
                <div className='upperWineInfo'>
                    <h2>{prop.desc}</h2>
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
            <a href='' className='addRating'>
                <FaPlus className='addIcon' />
            </a>
        </div>
    )
    
}


export default Rating;
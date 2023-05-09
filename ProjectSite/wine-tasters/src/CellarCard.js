import pictureIcon from './img/picturePlaceholder.png';
import winePhoto from './img/tempWinePhoto.webp';
import './CellarCard.css';

const CellarCard = (itemValue) => {
    return (
        <a href={itemValue} className='cellarCard'>
            <div className='cardFrame'>
                <div className='photoFrame'>
                    <image src={pictureIcon} alt='winePhoto' className='winePhoto' />
                </div>
                <div className='wineName'>
                    <p>Temporary Wine Name</p>
                </div>
            </div>
        </a>
    )

}

export default CellarCard;
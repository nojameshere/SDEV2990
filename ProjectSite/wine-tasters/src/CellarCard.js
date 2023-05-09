import './CellarCard.css';
var pictureIcon = '/img/picturePlaceholder.png';
var winePhoto = '/img/tempWinePhoto.webp';

const CellarCard = (itemValue) => {
    return (
        <a href={itemValue} className='cellarCard'>
            <div className='cardFrame'>
                <div className='photoFrame'>
                    <div className='wineName'>
                        <p>Temporary Wine Name</p>
                    </div>
                    <img src={pictureIcon} alt='winePhoto' className='winePhoto' />
                    <div className='cellarLowerInfo'>
                        <div className='wineType'>
                            <p>Red</p>
                        </div>
                        <div className='wineYear'>
                            <p>1999</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </a>
    )

}

export default CellarCard;
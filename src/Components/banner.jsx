import BannerImg from '../assets/Image source 1.png'

function Banner() {
    return (
            <div className="banner"> 
            <img className="banner-image" src={BannerImg} alt='Image Bannière' />
            <p>Chez vous, partout et ailleurs</p>
            </div>
    )

}

export default Banner 

//utiliser props pour <p> et image
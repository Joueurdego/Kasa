
import Banner from '../Components/banner.jsx';
import Gallery from '../Components/gallery.jsx';
import BannerImg from '../assets/Image source 1.png'


function Home() {

    return (
        <>
            <Banner image={BannerImg} text="Chez vous, partout et ailleurs" />
            <Gallery />
        </>
    );
}

export default Home


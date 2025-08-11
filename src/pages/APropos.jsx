import CollapseItem from '../Components/Collapsetem.jsx'
import TableauAPropos from '../data/infosAPropos.json'
import Banner from '../Components/banner.jsx';
import BannerImg from '../assets/Image source 2.png'

function Apropos() {
  return (
    <>
      <Banner image={BannerImg} />
      <div className='bodyAPropos'>
        {TableauAPropos.map(item => (
          <CollapseItem key={item.title} title={item.title} content={item.content} />
        ))}
      </div>
    </>
  );
}

export default Apropos




import CollapseItem from '../Components/Collapsetem.jsx'
import TableauAPropos from '../data/infosAPropos.json'

function Apropos() {
     return (
    <div>
      {TableauAPropos.map(item => (
        <CollapseItem key={item.title} title={item.title} content={item.content} />
      ))}
    </div>
  );
}

export default Apropos




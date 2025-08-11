import { Link } from 'react-router-dom';
import useProperties from "../hooks/useProperties";

function Gallery() {
  const {loading, error,data}= useProperties() 
    if (loading) return <span>Chargement en cours</span>
    if (error) return <span>erreur</span>
    if (!data || data.length === 0) return <span>Aucune donnée</span>
   return (
  <section className='gallery'>
    {data.map((item) => (
      <Link key={item.id} to={`/logement/${item.id}`}>
      
        <img src={item.cover} alt={item.title} />
        <p>{item.title}</p>
      
      </Link>
    ))}
  </section>
)
}


export default Gallery


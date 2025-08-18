import { useState } from "react";
import { useParams } from "react-router-dom";
import useLogement from "../hooks/useLogement";

function Carousel() {
  const { id } = useParams();
  const { loading, error, data } = useLogement(id);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (loading) return <span>Chargement en cours</span>;
  if (error) return <span>Erreur</span>;
  if (!data || !data.pictures || data.pictures.length === 0) {
    return <span>Aucune donnée</span>;
  }

  const total = data.pictures.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % total);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + total) % total);
  };

  return (
    <div className="carousel">
      {total > 1 && (
        <>
          <button className="btn prev" onClick={prevSlide}>
            &#10096;
          </button>
          <button className="btn next" onClick={nextSlide}>
            &#10097;
          </button>
        </>
      )}
      <ul
        className="carousel-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {data.pictures.map((image, index) => (
          <li key={index} className="slide">
            <img src={image} alt={`Image ${index + 1} de ${data.title}`} />
          </li>
        ))}
      </ul>

      <div className="counter">
        {currentIndex + 1} / {total}
      </div>
    </div>
  );
}

export default Carousel;
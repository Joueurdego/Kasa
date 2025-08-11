import React, { useState } from 'react';
import useLogement from '../hooks/useLogement'; // j’imagine que c’est ici que tu importes ton hook


function Carousel() {
  const { logement, loading, error } = useLogement(); // ici je suppose que ton hook renvoie un seul logement
  const [currentIndex, setCurrentIndex] = useState(0);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur lors du chargement des images</p>;
  if (!logement) return <p>Logement introuvable</p>;

  const images = logement.pictures;

  const prev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const next = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div style={{ width: '600px', margin: 'auto', textAlign: 'center' }}>
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
      />
      <div style={{ marginTop: 10 }}>
        <button onClick={prev} style={{ marginRight: 10 }}>Prev</button>
        <button onClick={next}>Next</button>
      </div>
      <p>{currentIndex + 1} / {images.length}</p>
    </div>
  );
}

export default Carousel;
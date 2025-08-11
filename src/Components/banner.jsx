function Banner({ image, text }) {
  return (
    <div className="banner">
      <img className="banner-image" src={image} alt="Image Bannière" />
      {text && <p>{text}</p>}
    </div>
  );
}

export default Banner;
// src/components/Gallery/Gallery.jsx
import React, { useState } from 'react';
import './Gallery.css';

const Gallery = ({
  images = [],
  width = '100%',
  height = '500px',
  radius = '8px',
  showThumbs = true
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="gallery" style={{ width, height }}>
      <div className="gallery-main-image" style={{ borderRadius: radius }}>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
        <button className="nav left" onClick={goToPrevious}>‹</button>
        <button className="nav right" onClick={goToNext}>›</button>
      </div>

      {showThumbs && (
        <div className="gallery-thumbnails">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToIndex(index)}
              alt={`Thumb ${index}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;

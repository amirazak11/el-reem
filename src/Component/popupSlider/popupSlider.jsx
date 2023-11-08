import React, { useState } from 'react';
import './Lightbox.css';
import { useTranslation } from 'react-i18next';
function Lightbox({allImages}) {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [openDiv, setOpenDiv] = useState(false); 
  const openLightbox = (index) => {
    setCurrentIndex(index);
    setOpenDiv(true);
  };

  const closeLightbox = () => {
    setCurrentIndex(null);
    setOpenDiv(false); 
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? allImages.length - 1 : prevIndex - 1
    );
  };
  const lightboxStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.568)',
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'center',
    alignItems:'center',
    display: openDiv ? 'flex' : 'none'
  };
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  return (
    <div>
      <div style={lightboxStyle} className={`lightbox-container ${currentIndex !== null && 'open'}`}>
      <i className="far fa-times-circle close-btn position-absolute top-0 pt-3 fs-3" onClick={closeLightbox}></i>

        <div className="lightbox d-flex  align-items-center position-relative mt-1 p-4 rounded ">
        <div className= {`position-absolute w-100  icons-i right-0 ${isArabic ? 'arabic-style-arrow-dir' : ''}`}>
          <i className="fas fa-chevron-circle-left prev" onClick={prevImage}></i>
          <i className="fas fa-chevron-circle-right next" onClick={nextImage}></i>
          </div>
          {currentIndex !== null && (
            <img
              className="lightbox-image"
              src={allImages[currentIndex]}
              alt={`Image ${currentIndex + 1}`}
            />
          )}
        </div>
      </div>
      <div className="container">


  
        <div className="gallery">
          {allImages.map((imageUrl, index) => (
<>
<figure className={`gallery__item gallery__item--${index+1}`} key={index}>
<img src={imageUrl} 
                  onClick={() => openLightbox(index)}
                  alt={`Image ${index + 1}`} className="gallery__img"/>
</figure>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Lightbox;

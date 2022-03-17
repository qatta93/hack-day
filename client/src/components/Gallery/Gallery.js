import React from 'react';
import './Gallery.css';

const Gallery = (gallery) => {
  return (
      <section  className='gallery'>
        <div className='gallery__img' style={{ backgroundImage: `url(${gallery.gallery})`}}></div>
      </section>
  )
}

export default Gallery;
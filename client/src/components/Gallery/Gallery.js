import React from 'react';
import './Gallery.css';

const Gallery = (gallery) => {
  return (
      <section  className='gallery'>
        <card className='gallery__img' style={{ backgroundImage: `url(${gallery.gallery})`}}></card>
      </section>
  )
}

export default Gallery;
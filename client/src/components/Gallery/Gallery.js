import React from 'react';

const Gallery = (gallery) => {
  return (
      <section className='gallery'>
        <img className='gallery__img' src={gallery.gallery} alt="pic" />
      </section>
  )
}

export default Gallery;
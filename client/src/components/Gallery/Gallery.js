import React from 'react';

const Gallery = (gallery) => {
  console.log(gallery.gallery)
  return (
      <section className='gallery'>
        <p>PIC GALLERY</p>
        <img src={gallery.gallery} alt="pic" />
        {/* <img 
      src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
      alt="new"
      /> */}
      
      </section>
  )
}

export default Gallery;
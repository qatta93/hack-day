import React from 'react';
import './Favorite.css';

const Favorite = ({favList, setFavList}) => {

const resetFavList = () => {
  setFavList([]);
}

  return (
      <section className='favorite'>
        <div className='favorite__wrapper'>
          <h1 className='favorite__title'>Your Favorite Destinations:</h1>
          {favList.map(fav => <h2 className='favorite__country' key={fav}>{fav}</h2>)}
          <button className='favorite__reset' onClick={resetFavList}></button>
        </div>
      </section>
  )
}

export default Favorite;
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Favorite.css';

const Favorite = ({favList, setFavList}) => {

const resetFavList = () => {
  setFavList([]);
}

  return (
      <section className='favorite'>
        <div className='favorite__wrapper'>
          <h1 className='favorite__title'>Your Favorite Destinations:</h1>
          {favList.map(fav => <h2 className='favorite__country' id={uuidv4()} key={fav}>{fav}</h2>)}
          <button className='favorite__reset' onClick={resetFavList}></button>
        </div>
      </section>
  )
}

export default Favorite;
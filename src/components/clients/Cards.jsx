import React from 'react';
import data from './data';
import './card.css';


const Cards = () => {
  return (
    <div className='logo-grid'>
        {data.map(({id, image}) => {
            return(
                <img src={image} alt="" />
            )
        })}
    </div>
  )
}

export default Cards
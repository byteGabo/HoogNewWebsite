import React from 'react';
import './clients.css';
import data from './data';

const Clients = () => {
  return (
    <section className="clients container section">
      <h2 className="section__title">Clientes</h2>
      <div className='clientes'>
      {data.map(({id, image, title}) => {
            return(
                <img src={image} alt={title} />
            )
        })}
        
      </div>
     
    </section>
  )
}

export default Clients

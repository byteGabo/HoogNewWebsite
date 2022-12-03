import React from 'react';
import Cards from './Cards';
import './clients.css';

const Clients = () => {
  return (
    <section className="clients container section">
      <h2 className="section__title">Clientes</h2>
      <div className='clients__container grid'>
        <Cards/>
      </div>
     
    </section>
  )
}

export default Clients

import React from 'react';
import './home.css'
import Logo from '../../assets/logo2.png'
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Logo} alt="Hoog's Logo" className="home__imge" />
        <h1 className='home__description'>Freelance Studio</h1>

        <HeaderSocials />

        <a href="#contact" className="btn">Contáctanos</a>

        <ScrollDown />
      </div>
    </section>
  )
}

export default Home
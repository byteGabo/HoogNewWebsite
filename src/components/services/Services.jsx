import React from 'react';
import './services.css';
import Img1 from '../../assets/service-1.svg';
import Img2 from '../../assets/service-2.svg';
import Img3 from '../../assets/service-3.svg';

const data = [
  {
    id:1,
    image: Img1,
    title: "Diseño de Redes Sociales",
    description:
    "Las redes sociales juegan un papel muy importante para tu negocio hoy en día, por ello es vital tenerlas activas e ir creando una comunidad, en Hoog creamos los mejores diseños para tus redes sociales",
  },
  {
    id:2,
    image: Img2,
    title: "Desarrollo Web",
    description:
    "Las tres letras que pueden cambiar el rumbo de tu marca, un www será tu mejor aliado para estar presente y lograr el objetivo de tu marca.",
  },
  {
    id:3,
    image: Img3,
    title: "Branding",
    description:
    "En Hoog creamos un estilo único para tu marca y generamos estrategias para lograr una marca profesional y exitosa dentro del mercado.",
  },
]

const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Servicios</h2>

      <div className="services__container grid">
        {data.map(({id, image, title, description}) => {
          return(
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />

              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Services
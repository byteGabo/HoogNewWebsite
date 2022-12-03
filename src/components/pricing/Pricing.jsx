import React from 'react';
import './pricing.css';
import Img1 from '../../assets/price-1.svg';
import Img2 from '../../assets/price-2.svg';
import Img3 from '../../assets/price-3.svg';

const Pricing = () => {
  return (
    <div className="pricing container section" id='pricing'>
      <h2 className="section__title">Planes</h2>

      <div className="pricing__container grid">
        <div className="price__item">
          <img src={Img1} alt="" className="pricing__img" />
          <h3 className="pricing__plan">Premium</h3>
          <p className="pricing__title">Hacemos crecer tus redes sociales, para generar mas interacción con el publico, calendarizacion de publicaciones y campañas pagadas.</p>
          <p className="pricing__support">Soporte de Lun-Vie</p>
          <h3 className="price">
            <em>Q</em> 1500 <span>al mes</span>
          </h3>

          <a href="" className="btn">Contratar</a>
        </div>

        <div className="price__item best">
          <span className='badge'>Recomendado</span>
          <img src={Img2} alt="" className="pricing__img" />
          <h3 className="pricing__plan">Emprendedor</h3>
          <p className="pricing__title">Una forma de empezar con tus redes sociales, *4 diseños de post e historias a la semana, para todas la redes que elijas, incluye calendarizacion y propuestas de crecimiento.</p>
          <p className="pricing__support">Soporte de Lun-Vie</p>
          <h3 className="price">
            <em>Q</em> 1000 <span>al mes</span>
          </h3>
          <a href="" className="btn">Contratar</a>
        </div>

        <div className="price__item">
          <img src={Img3} alt="" className="pricing__img" />
          <h3 className="pricing__plan">Ultimate</h3>
          <p className="pricing__title">Diseños ilimitados durante el mes, calendarización de contenido, servicio al cliente, rastreo de comentarios y chats para seguimientos de clientes, soporte de campañas pagadas.</p>
          <p className="pricing__support">Soporte 24/7</p>
          <h3 className="price">
            <em>Q</em> 2000 <span>al mes</span>
          </h3>
          <a href="" className="btn">Contratar</a>
        </div>
      </div>
    </div>
  )
}

export default Pricing
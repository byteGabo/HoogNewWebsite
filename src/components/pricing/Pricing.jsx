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
          <h3 className="pricing__plan">Basic</h3>
          <p className="pricing__title">A Simple option but powerful to manage your business</p>
          <p className="pricing__support">Email support</p>
          <h3 className="price">
            <em>Q</em> 1000 <span>al mes</span>
          </h3>

          <a href="" className="btn">Contratar</a>
        </div>

        <div className="price__item best">
          <span className='badge'>Recomendado</span>
          <img src={Img2} alt="" className="pricing__img" />
          <h3 className="pricing__plan">Premium</h3>
          <p className="pricing__title">Unlimited product including app integration and more features</p>
          <p className="pricing__support">Mon-Fri support</p>
          <h3 className="price">
            <em>Q</em> 1000 <span>al mes</span>
          </h3>
          <a href="" className="btn">Contratar</a>
        </div>

        <div className="price__item">
          <img src={Img3} alt="" className="pricing__img" />
          <h3 className="pricing__plan">Ultimate</h3>
          <p className="pricing__title">A wise option for large companies and individuals</p>
          <p className="pricing__support">24/7 support</p>
          <h3 className="price">
            <em>Q</em> 2500 <span>al mes</span>
          </h3>
          <a href="" className="btn">Contratar</a>
        </div>
      </div>
    </div>
  )
}

export default Pricing
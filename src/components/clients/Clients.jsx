import React from 'react';
import './clients.css';
import Img1 from '../../assets/bode.png';
import Img2 from '../../assets/circus.png';
import Img3 from '../../assets/gogreen.png';
import Img4 from '../../assets/pinche.png';
import Img5 from '../../assets/taquisimo.png';

//import Swiper core and required modules
import {Grid, Autoplay, Pagination} from 'swiper';

import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    id: 1,
    image: Img1,
    title: "La Bodeguita Xela",
    subtitle:"Social Media Post"
  },
  {
    id: 2,
    image: Img2,
    title: "CircusBar Xela",
    subtitle: "Branding"
  },
  {
    id: 1,
    image: Img3,
    title: "Go Green Xela",
    subtitle: "Social Media Post"

  },
  {
    id: 1,
    image: Img4,
    title: "El Pinche Xela",
    subtitle: "Social Media Post"
  },
  {
    id: 1,
    image: Img5,
    title: "Taquisimo",
    subtitle: "Branding"
  },
];

const Clients = () => {
  return (
    <section className="clients container section">
      <h2 className="section__title">Clientes</h2>

      <Swiper className="clients__container grid"
      //install swiper modules
      grabCursor={true}
      loop={true}
      centeredSlides={true}
      slidesPerView={3}
      spaceBetween={30}
      grid={{
        rows: 1,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Grid, Autoplay,Pagination]}>
        {data.map(({id,image,title,subtitle}) => {
          return(
            <SwiperSlide className="clients__item" key={id}>
            <div className="thumb">
              <img src={image} alt=""/>
            </div>
            <h3 className="clients__title">
              {title}
            </h3>
            <span className='clients__subtitle'>
              {subtitle}
            </span>
          </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Clients

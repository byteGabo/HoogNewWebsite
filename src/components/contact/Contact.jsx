import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="container section" id="contact">
      <h2 className="section__title">Contáctanos</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Hablemos!</h3>
          <p className="contact__details">
            Envíanos un correo. 👋
          </p>
        </div>

        <form action="" className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                placeholder="Inserte su nombre"
              />
            </div>

            <div className="contact__form-div">
              <input
                type="email"
                className="contact__form-input"
                placeholder="Inserte su correo"
              />
            </div>
          </div>

          <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                placeholder="Inserte su asunto"
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Inserte su mensaje"
              ></textarea>
            </div>

            <button className="btn">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

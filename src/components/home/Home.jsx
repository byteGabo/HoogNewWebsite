import React from "react";
import "./home.css";
import Logo from "../../assets/logo2.png";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          src={Logo}
          alt="Hoog's Logo"
          className="home__imge"
        />
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="home__description"
        >
          Freelance Studio
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <HeaderSocials />
        </motion.div>

        <motion.a
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          href="#contact"
          className="btn"
        >
          Contáctanos
        </motion.a>

        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;

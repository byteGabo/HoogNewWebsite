import React, {useState} from "react";
import "./sidebar.css";
import Logo from "../../assets/logo2.png";

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);

  
  const handleClick = () => {
    setToggle(!toggle)
  }
  
  return (
    <>
    <aside className={toggle ? "aside show-menu" : "aside"}>
      <a href="#home" className="nav__logo">
        <img src={Logo} alt="Hoog's logo" width={100}  height={100} />
      </a>

      <nav className="nav">
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link" onClick={handleClick} onMouseOver={(e) => e.target.setAttribute("title", 'Home')}>
                <i className="icon-home"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#services" className="nav__link" onClick={handleClick} onMouseOver={(e) => e.target.setAttribute("title", 'Servicios')}>
                <i className="icon-briefcase"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#work" className="nav__link" onClick={handleClick} onMouseOver={(e) => e.target.setAttribute("title", 'Proyectos')}>
                <i className="icon-layers"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#pricing" className="nav__link" onClick={handleClick} onMouseOver={(e) => e.target.setAttribute("title", 'Precios')}>
                <i className="icon-fire"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link" onClick={handleClick} onMouseOver={(e) => e.target.setAttribute("title", 'Conctacto')}>
                <i className="icon-bubble"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="nav__footer">
        <span className="copyright">&copy;hoog 2022-2023</span>
      </div>
    </aside>

    <div className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"} onClick={() =>  setToggle(!toggle)} >
    <i className="icon-menu"></i>
    </div>
      
    </>
  );
};

export default Sidebar;

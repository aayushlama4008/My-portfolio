import { images } from "../../constants";
import { useState } from "react";
import { motion } from "framer-motion";

import "./NavBar.scss";

const NavBar = () => {
  const links = ["Home", "About", "Work", "Skills", "Contact"];

  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <motion.div
        className="app__navbar-logo grid-center"
        whileInView={{ scale: [0, 1], opacity: [0, 1] }}
        transition={{ duration: 1 }}
      >
        <img src={images.logo} alt="logo" width={120} />
      </motion.div>
      <ul className="app__navbar-links grid-center">
        {links.map((item) => (
          <li key={`link-${item}`} className="app__navbar-li">
            <a href={`#${item}`} className="p-text ">
              {item}
            </a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu grid-center">
        <img
          src={images.hamburger}
          alt="hamburger-logo"
          width={20}
          onClick={() => setToggle(true)}
        />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <ul className="app__navbar--menu-list">
              {links.map((item) => (
                <li key={`${item}`}>
                  <a
                    href={`#${item}`}
                    className="p-text"
                    onClick={() => setToggle(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <img
              src={images.cross}
              alt="cross"
              width={40}
              onClick={() => setToggle(false)}
            />
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

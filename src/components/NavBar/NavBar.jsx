import { images } from "../../constants";

import "./NavBar.scss";

const NavBar = () => {
  const links = ["Home", "About", "Skills", "Work", "Contact"];
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo grid-center">
        <img src={images.logo} alt="logo" width={120} />
      </div>
      <ul className="app__navbar-links grid-center">
        {links.map((item) => (
          <li key={`link-${item}`} className="app__navbar-li">
            <a href={`#${item}`} className="p-text ">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;

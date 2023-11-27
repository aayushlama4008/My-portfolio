import { motion } from "framer-motion";
import { images } from "../../constants";
import "./Header.scss";

const Header = () => {
  return (
    <div className="app__header grid-center">
      <div className="app__header-text grid-center">
        <motion.div
          className="app__header-title app__borderbox "
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
        >
          <div className="app__header-title-text">
            <p className="p-text">Hi, I am </p>
            <h1>Aayush Lama</h1>
          </div>
        </motion.div>
        <motion.div
          className="app__header-main app__borderbox"
          whileInView={{ x: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
        >
          <p className="p-text">Web Developer & Designer</p>
        </motion.div>
        <motion.div
          className="app__header-description app__borderbox"
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
        >
          <p className="p-text">
            I like to craft solid and scalable{" "}
            <span className="blue-text">FRONTEND</span> products with great{" "}
            <span className="blue-text">USER EXPERIENCES.</span>
          </p>
        </motion.div>
      </div>
      <motion.div
        className="app__header-image"
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1 }}
      >
        <img src={images.luffy} alt="luffy" width={350} />
      </motion.div>
    </div>
  );
};

export default Header;

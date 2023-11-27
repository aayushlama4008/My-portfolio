import { images } from "../../constants";
import "./Footer.scss";
import { useState } from "react";

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const handleSubmit =(event)=>{
    event.preventdefault();
    

  } 
  return (
    <div className="app__footer grid-center">
      <h1 className="black-text">Contacts</h1>
      <div className="app__footer-contacts ">
        <div className="app__footer-email borderbox">
          <img src={images.contact1} alt="Email" width={40} />
          <a href="mailto:aayushlama4008@gmail.com">aayushlama4008@gmail.com</a>
        </div>
        <div className="app__footer-phone borderbox">
          <img src={images.contact2} alt="Email" width={40} />
          <a href="tel:+39 371 488 2020">+39 371 488 2020</a>
        </div>
        <div className="app__footer-social"></div>
      </div>

      <form className="app__footer-form" onSubmit={handleSubmit}>
        <label htmlFor="name">
          <input
            className="app__footer-input"
            type="text"
            id="name"
            name="name"
            placeholder="Write your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="email">
          <input
            className="app__footer-input"
            type="email"
            id="email"
            name="email"
            placeholder="Write your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="text">
          <textarea
            className="app__footer-input"
            type="text"
            id="text"
            name="text"
            placeholder="Write here"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </label>
        <br />
        <button type="submit" className="p-text">Send</button>
      </form>
      <div className="social"></div>
    </div>
  );
};

export default Footer;

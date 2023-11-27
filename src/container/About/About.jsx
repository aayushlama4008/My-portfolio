import {motion} from 'framer-motion'

import "./About.scss";
import images from '../../constants/images';

const About = () => {
  const abouts = [
    {
      title: "Web development",
      description: "I am web developer with a passion for creating beautiful and responsive websites.",
      image: images.object1
    },
    {
      title: "Web Design",
      description: "I am web designer with a passion for creating beautiful and responsive websites.",
      image:images.object2
    },
    {
      title: "Web development",
      description: "I can develop websites",
      image: images.object3
    }
  ];
  return (
    <div className="app__about ">
      <div className="app__about-quote grid-center">
        <h1 className="blue-text">
          Good Design <span className="black-text">Means</span> Good Bussiness.
        </h1>
      </div>
      <div className="app__about-me grid-center">
        {abouts.map((about,index)=>(
          <motion.div 
          key={index}
          whileInView={{opacity:1}}
          whileHover={{scale:1.1}}
          transition={{duration:0.5,type:'spring'}}
          className='app__about-me-box grid-center'
          >
            <img src={about.image} alt={about.title} width={150} />
            <h3 className='black-text'>{about.title}</h3>
            <p className='p-text' style={{fontSize:13}}>{about.description}</p>
            
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;

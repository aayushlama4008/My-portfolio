import { images } from "../../constants";
import "./Skills.scss";
import { motion } from "framer-motion";

const Skills = () => {
  const lang = [
    {
      imageUrl: images.skill1,
      name: "Html",
    },
    {
      imageUrl: images.skill2,
      name: "Css",
    },
    {
      imageUrl: images.skill3,
      name: "JavaScript",
    },
    {
      imageUrl: images.skill4,
      name: "React",
    },
    {
      imageUrl: images.skill5,
      name: "Git",
    },
  ];
  return (
    <div className="app__skills ">
      <div className="grid-center">
        <h1 className="blue-text app__skills-title ">
          Skills <span className="black-text">&</span> Experience
        </h1>
      </div>
      <div className="app__skills-details ">
        <div className="app__skills-lang ">
          {lang.map((skill, index) => (
            <motion.div
              className="app__skill-img grid-center"
              key={skill + index}
              whileInView={{ opacity: [0, 1], scale: [0, 1] }}
              transition={{ duration: 0.5 }}
            >
              <img src={skill.imageUrl} alt={skill.name} width={50} />
              <p className="p-text grid-center" style={{ fontSize: 13 }}>
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="app__skills-exp">
          <div className="app__skills-year">
            <h4 className="blue-text">2023 :</h4>
            <div className="app__skills-des">
              <h5>Boolean</h5>
              <p className="p-text" style={{ fontSize: 13 }}>
                Studying front-end course in Boolean.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

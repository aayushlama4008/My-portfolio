import { images } from "../../constants";
import { motion } from "framer-motion";

import "./Work.scss";

import { AiFillEye, AiFillGithub } from "react-icons/ai";

const Work = () => {
  const projects = [
    {
      title: "E-commerce",
      description: "A shopping website.",
      imgUrl: images.project1,
      projectLink: "",
    },
    {
      title: "Restuarant Project",
      description: "A modern website for the resturant.",
      imgUrl: images.project2,
      projectLink: "",
    },
    {
      title: "School project",
      description: "A website for school",
      imgUrl: images.project3,
      projectLink: "",
    },
  ];
  return (
    <div className="app__work ">
      <div className="app__work-title grid-center">
        <h1 className="black-text">
          My <span className="blue-text">Portfolio</span> section
        </h1>
      </div>
      <div className="app__work-projects grid-center">
        {projects.map((project, index) => (
          <motion.div
            key={project + index}
            className="app__work-project grid-center"
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <img src={project.imgUrl} alt={project.title} width={150} />
            <motion.div
              className="app__work-links grid-center"
              whileInView={{ opacity: 0 }}
              whileHover={{ opacity: [0, 1] }}
              transition={{ duration: 0.25 }}
            >
              <a href={project.projectLink} target="_blank">
                <AiFillEye></AiFillEye>
              </a>
              <a href={project.projectLink} target="_blank">
                <AiFillGithub></AiFillGithub>
              </a>
            </motion.div>
            <div className="app__work-description grid-center">
              <h3 className="black-text">{project.title}</h3>
              <p className="p-text" style={{ fontSize: 13 }}>
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Work;

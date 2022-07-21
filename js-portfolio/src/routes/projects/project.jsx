import React from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { getProjectById } from "../../content/projects";

const Project = () => {
  let { id } = useParams();
  let project = getProjectById(Number(id));

  if (!project) return <div>That project does not exist 😢</div>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <h1>{project.title}</h1>
      <img width={400} height={400} src={project.src} alt="" />
    </motion.div>
  );
};

export default Project;

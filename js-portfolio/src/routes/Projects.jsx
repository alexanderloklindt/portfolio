import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PROJECTS } from '../content/projects';

const WorkPage = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{ duration: 0.4 }}>
      <div style={{ padding: "0 24px" }}>
        <h2>Projects</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "24px",
          }}
        >
          {PROJECTS.map((project) => (
            <Link
              key={project.id}
              to={`/work/${project.id}`}
            >
              <img
                width={200}
                height={200}
                style={{
                  width: "100%",
                  aspectRatio: "1 / 1",
                  height: "auto",
                  borderRadius: "8px",
                }}
                src={project.src}
                alt={project.title}
              />
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default WorkPage;

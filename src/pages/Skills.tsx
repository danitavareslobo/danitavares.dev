import React from 'react';
import { motion } from 'framer-motion';
import { DEVELOPER_INFO } from '../utils/constants';
import './Skills.scss';

const Skills: React.FC = () => {
  return (
    <motion.div 
      className="page skills"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <motion.div 
          className="skills__content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h1 className="page__title">Habilidades</h1>
          <div className="skills__grid">
            {DEVELOPER_INFO.technologies.map((tech, index) => (
              <motion.div 
                key={tech}
                className="skills__item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <h3>{tech}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
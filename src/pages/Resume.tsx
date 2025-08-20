import React from 'react';
import { motion } from 'framer-motion';
import './Resume.scss';

const Resume: React.FC = () => {
  return (
    <motion.div 
      className="page resume"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <motion.div 
          className="resume__content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h1 className="page__title">Currículo</h1>
          <p className="page__description">
            Aqui você pode baixar meu currículo ou visualizar minhas experiências profissionais.
          </p>
          
          <motion.div 
            className="resume__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <motion.button 
              className="btn btn--primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Baixar PDF
            </motion.button>
            <motion.button 
              className="btn btn--outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Visualizar Online
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="resume__preview"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="resume__placeholder">
              <p>Prévia do Currículo</p>
              <small>Será implementado na próxima etapa</small>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Resume;
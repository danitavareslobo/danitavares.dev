import React from 'react';
import { motion } from 'framer-motion';
import './Work.scss';

const Work: React.FC = () => {
  return (
    <motion.div 
      className="page work"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <motion.div 
          className="work__content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h1 className="page__title">Trabalhos</h1>
          <p className="page__description">
            Aqui estão alguns dos meus projetos e trabalhos que desenvolvi.
            Esta seção será expandida na próxima etapa com projetos reais.
          </p>
          
          <div className="work__grid">
            <motion.div 
              className="work__item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="work__placeholder">
                <p>Projeto 1</p>
              </div>
              <h3>Em Breve</h3>
              <p>Detalhes dos projetos serão adicionados na próxima etapa.</p>
            </motion.div>
            
            <motion.div 
              className="work__item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="work__placeholder">
                <p>Projeto 2</p>
              </div>
              <h3>Em Breve</h3>
              <p>Detalhes dos projetos serão adicionados na próxima etapa.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Work;
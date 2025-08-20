import React from 'react';
import { motion } from 'framer-motion';
import './About.scss';

const About: React.FC = () => {
  return (
    <motion.div 
      className="page about"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <motion.div 
          className="about__content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h1 className="page__title">Sobre Mim</h1>
          <div className="about__grid">
            <motion.div 
              className="about__text"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <p>
                Sou uma desenvolvedora apaixonada por tecnologia e inovação, 
                com experiência em desenvolvimento full-stack usando tecnologias 
                modernas como React, TypeScript, C# e .NET.
              </p>
              <p>
                Minha jornada na programação começou com curiosidade e se 
                transformou em uma paixão pela criação de soluções digitais 
                que impactam positivamente a vida das pessoas.
              </p>
              <p>
                Estou sempre em busca de novos desafios e oportunidades 
                para crescer profissionalmente e contribuir com projetos 
                significativos.
              </p>
            </motion.div>
            
            <motion.div 
              className="about__image"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="about__image-placeholder">
                <p>Foto Profissional</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
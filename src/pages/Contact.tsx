import React from 'react';
import { motion } from 'framer-motion';
import { DEVELOPER_INFO } from '../utils/constants';
import './Contact.scss';

const Contact: React.FC = () => {
  return (
    <motion.div 
      className="page contact"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <motion.div 
          className="contact__content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h1 className="page__title">Contato</h1>
          <p className="page__description">
            Entre em contato comigo para discutir projetos, oportunidades ou apenas para trocar uma idéia!
          </p>
          
          <div className="contact__grid">
            <motion.div 
              className="contact__info"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="contact__item">
                <h3>E-mail</h3>
                <p>{DEVELOPER_INFO.email}</p>
              </div>
              
              <div className="contact__item">
                <h3>Telefone</h3>
                <p>{DEVELOPER_INFO.phone}</p>
              </div>
              
              <div className="contact__item">
                <h3>LinkedIn</h3>
                <a href={DEVELOPER_INFO.linkedin} target="_blank" rel="noopener noreferrer">
                  Ver Perfil
                </a>
              </div>
              
              <div className="contact__item">
                <h3>GitHub</h3>
                <a href={DEVELOPER_INFO.github} target="_blank" rel="noopener noreferrer">
                  Ver Repositórios
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              className="contact__form"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="contact__form-placeholder">
                <p>Formulário de Contato</p>
                <small>Será implementado na próxima etapa</small>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
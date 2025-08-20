import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { DEVELOPER_INFO } from '../../utils/constants';
import './SocialLinksFooter.scss';

const SocialLinksFooter: React.FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: DEVELOPER_INFO.github,
      color: '#333333'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: DEVELOPER_INFO.linkedin,
      color: '#0077b5'
    },
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      url: `https://wa.me/${DEVELOPER_INFO.phone.replace(/\D/g, '')}`,
      color: '#25d366'
    },
    {
      name: 'E-mail',
      icon: FaEnvelope,
      url: `mailto:${DEVELOPER_INFO.email}`,
      color: '#6366f1'
    }
  ];

  return (
    <motion.footer 
      className="social-footer"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.8 }}
    >
      <div className="social-footer__container">
        <motion.h3 
          className="social-footer__title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.6 }}
        >
          CONECTE-SE COMIGO
        </motion.h3>
        
        <div className="social-footer__links">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-footer__link"
              style={{ '--social-color': social.color } as React.CSSProperties}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.8 + index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="social-footer__link-content">
                <social.icon className="social-footer__icon" />
                <span className="social-footer__name">{social.name}</span>
              </div>
            </motion.a>
          ))}
        </div>
        
        <motion.div 
          className="social-footer__cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.6 }}
        >
          <motion.a
            href={`mailto:${DEVELOPER_INFO.email}`}
            className="social-footer__email-btn"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEnvelope />
            MANDE UM E-MAIL
          </motion.a>
        </motion.div>
        
        <motion.p 
          className="social-footer__copyright"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.6 }}
        >
          Feito com 💝 © Copyright 2025. Dani Tavares. Todos os direitos reservados.
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default SocialLinksFooter;
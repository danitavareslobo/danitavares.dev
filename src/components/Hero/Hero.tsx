import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { DEVELOPER_INFO } from '../../utils/constants';
import daniImage from '../../assets/dani.png';
import './Hero.scss';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = [
    'Desenvolvedora Full-Stack',
    'Especialista em .NET',
    'Criadora de Soluções Web',
    'Apaixonada por Tecnologia'
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, titles]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const socialLinks = [
    { icon: FaGithub, url: DEVELOPER_INFO.github, label: 'GitHub' },
    { icon: FaLinkedin, url: DEVELOPER_INFO.linkedin, label: 'LinkedIn' },
    { icon: FaWhatsapp, url: `https://wa.me/${DEVELOPER_INFO.phone.replace(/\D/g, '')}`, label: 'WhatsApp' },
    { icon: HiMail, url: `mailto:${DEVELOPER_INFO.email}`, label: 'E-mail' }
  ];

  return (
    <section className="hero">
      {/* Elementos geométricos animados */}
      <div className="hero__background">
        <motion.div 
          className="hero__shape hero__shape--circle"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="hero__shape hero__shape--triangle"
          animate={{
            rotate: -360,
            y: [0, -20, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="hero__shape hero__shape--square"
          animate={{
            rotate: 45,
            x: [0, 30, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="hero__container">
        <div className="hero__grid">
          {/* Coluna Esquerda - Conteúdo de Texto */}
          <motion.div 
            className="hero__content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
          {/* Saudação */}
          <motion.div 
            className="hero__greeting"
            variants={itemVariants}
          >
            Olá, eu sou
          </motion.div>

          {/* Nome */}
          <motion.h1 
            className="hero__name"
            variants={itemVariants}
          >
            Dani Tavares Lobo
          </motion.h1>

          {/* Título com efeito de digitação */}
          <motion.div 
            className="hero__title"
            variants={itemVariants}
          >
            <span className="hero__title-text">{displayText}</span>
            <span className="hero__cursor">|</span>
          </motion.div>

          {/* Descrição */}
          <motion.p 
            className="hero__description"
            variants={itemVariants}
          >
            Transformo ideias em soluções digitais elegantes e funcionais. 
            Especialista em desenvolvimento Full-Stack com foco em tecnologias 
            Microsoft e experiências de usuário excepcionais.
          </motion.p>


          {/* Links sociais */}
          <motion.div 
            className="hero__social"
            variants={itemVariants}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hero__social-link"
                whileHover={{ 
                  scale: 1.2, 
                  y: -3,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + index * 0.1 }}
              >
                <social.icon />
                <span className="hero__social-tooltip">{social.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Coluna Direita - Imagem */}
        <motion.div 
          className="hero__image-section"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div 
            className="hero__image-container"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img 
              src={daniImage} 
              alt="Dani Tavares Lobo"
              className="hero__image"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            />
            
            {/* Efeitos decorativos na imagem */}
            <motion.div 
              className="hero__image-glow"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      </div>
    </section>
  );
};

export default Hero;
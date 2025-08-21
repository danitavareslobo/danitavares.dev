import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCode, FaLaptopCode, FaServer, FaMobile } from 'react-icons/fa';
import daniImage from '../../assets/dani.jpg';
import './About.scss';

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const specialties = [
    {
      icon: FaCode,
      title: 'Frontend Development',
      description: 'Criação de interfaces modernas e responsivas com React, TypeScript e SCSS.',
      color: '#61dafb'
    },
    {
      icon: FaServer,
      title: 'Backend Development',
      description: 'Desenvolvimento de APIs robustas e escaláveis com .NET Core e C#.',
      color: '#512bd4'
    },
    {
      icon: FaLaptopCode,
      title: 'Full-Stack Solutions',
      description: 'Integração completa entre frontend e backend para soluções eficientes.',
      color: '#ff6b6b'
    },
    {
      icon: FaMobile,
      title: 'Responsive Design',
      description: 'Aplicações que funcionam perfeitamente em todos os dispositivos.',
      color: '#4ecdc4'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };


  return (
    <section className="about" ref={ref}>
      <div className="about__container">
        {/* Header da seção */}
        <motion.div
          className="about__header"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 className="about__title" variants={itemVariants}>
            Sobre Mim
          </motion.h2>
          <motion.p className="about__subtitle" variants={itemVariants}>
            Conheça um pouco mais sobre mim
          </motion.p>
        </motion.div>

        {/* Layout de duas colunas - Texto + Foto */}
        <div className="about__main-content">
          {/* Coluna esquerda - Texto */}
          <motion.div
            className="about__text-column"
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="about__intro">
              <h3>Olá! Eu sou a Daniele 👋</h3>
              <p>
                Sou uma desenvolvedora apaixonada por criar soluções digitais elegantes e funcionais. 
                Minha jornada na programação começou com a curiosidade de entender como as coisas funcionam 
                por trás das telas, e hoje transformo ideias em código.
              </p>
              <p>
                Especializada em desenvolvimento Full-Stack, trabalho principalmente com tecnologias 
                Microsoft (.NET, C#) no backend e React/TypeScript no frontend. Adoro o desafio de 
                criar aplicações que sejam não apenas funcionais, mas também intuitivas e bonitas.
              </p>
            </div>
          </motion.div>

          {/* Coluna direita - Imagem */}
          <motion.div
            className="about__image-column"
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="about__image-container">
              <img 
                src={daniImage} 
                alt="Dani Tavares Lobo" 
                className="about__image"
              />
            </div>
          </motion.div>
        </div>

        {/* Seção de Especialidades - Centralizada e Expandida */}
        <motion.div 
          className="about__specialties-section"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <h3>Minhas Especialidades</h3>
          <div className="specialties-grid">
            {specialties.map((specialty, index) => (
              <motion.div
                key={index}
                className="specialty-card"
                style={{ '--accent-color': specialty.color } as React.CSSProperties}
                initial={{ y: 50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.2 } 
                }}
              >
                <div className="specialty-card__icon">
                  <specialty.icon />
                </div>
                <h4 className="specialty-card__title">{specialty.title}</h4>
                <p className="specialty-card__description">{specialty.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
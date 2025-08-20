import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  SiSharp, 
  SiDotnet, 
  SiReact, 
  SiBlazor, 
  SiJavascript, 
  SiTypescript,
  SiGit
} from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';
import './Skills.scss';

interface Skill {
  name: string;
  icon: React.ComponentType;
  category: string;
  color: string;
  description: string;
}

const Skills: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skills: Skill[] = [
    {
      name: 'C#',
      icon: SiSharp,
      category: 'Backend',
      color: '#239120',
      description: 'Linguagem principal para desenvolvimento de APIs robustas'
    },
    {
      name: '.NET',
      icon: SiDotnet,
      category: 'Framework',
      color: '#512bd4',
      description: 'Framework para aplicações web e APIs escaláveis'
    },
    {
      name: 'React',
      icon: SiReact,
      category: 'Frontend',
      color: '#61dafb',
      description: 'Biblioteca para interfaces modernas e interativas'
    },
    {
      name: 'TypeScript',
      icon: SiTypescript,
      category: 'Language',
      color: '#3178c6',
      description: 'JavaScript tipado para projetos mais seguros'
    },
    {
      name: 'JavaScript',
      icon: SiJavascript,
      category: 'Language',
      color: '#f7df1e',
      description: 'Base fundamental para desenvolvimento web'
    },
    {
      name: 'Blazor',
      icon: SiBlazor,
      category: 'Framework',
      color: '#512bd4',
      description: 'Framework C# para aplicações web interativas'
    },
    {
      name: 'SQL Server',
      icon: FaDatabase,
      category: 'Database',
      color: '#cc2927',
      description: 'Banco de dados relacional para aplicações enterprise'
    },
    {
      name: 'Git',
      icon: SiGit,
      category: 'Tools',
      color: '#f05032',
      description: 'Controle de versão e colaboração em equipe'
    }
  ];


  return (
    <section className="skills" ref={ref}>
      <div className="skills__container">
        {/* Header da seção */}
        <motion.div
          className="skills__header"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="skills__title">Tecnologias</h2>
          <p className="skills__subtitle">
            Tecnologias que domino para criar soluções completas
          </p>
        </motion.div>

        {/* Grid de habilidades */}
        <div className="skills__grid">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              style={{ '--skill-color': skill.color } as React.CSSProperties}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ 
                y: -10,
                scale: 1.02
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Icon e Nome */}
              <div className="skill-card__header">
                <div className="skill-card__icon">
                  <skill.icon />
                </div>
                <h3 className="skill-card__name">{skill.name}</h3>
                <span className="skill-card__category">{skill.category}</span>
              </div>

              {/* Descrição */}
              <p className="skill-card__description">
                {skill.description}
              </p>


              {/* Efeito de brilho no hover */}
              <div className="skill-card__shine" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
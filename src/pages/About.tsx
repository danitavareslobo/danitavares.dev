import React from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/Layout/PageWrapper';
import About from '../components/About';

const AboutPage: React.FC = () => {
  return (
    <PageWrapper pageName="SOBRE">
      <motion.div 
        className="page about-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <About />
      </motion.div>
    </PageWrapper>
  );
};

export default AboutPage;
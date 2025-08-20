import React from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/Layout/PageWrapper';
import Hero from '../components/Hero';
import SocialLinksFooter from '../components/Hero/SocialLinksFooter';

const Home: React.FC = () => {
  return (
    <PageWrapper pageName="HOME">
      <motion.div 
        className="page home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <SocialLinksFooter />
      </motion.div>
    </PageWrapper>
  );
};

export default Home;
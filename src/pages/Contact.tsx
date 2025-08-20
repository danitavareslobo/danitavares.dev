import React from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/Layout/PageWrapper';
import Contact from '../components/Contact';

const ContactPage: React.FC = () => {
  return (
    <PageWrapper pageName="CONTATO">
      <motion.div 
        className="page contact-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Contact />
      </motion.div>
    </PageWrapper>
  );
};

export default ContactPage;
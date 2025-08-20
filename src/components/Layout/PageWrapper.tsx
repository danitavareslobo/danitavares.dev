import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageLoader from './PageLoader';

interface PageWrapperProps {
  children: React.ReactNode;
  pageName?: string;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children, pageName }) => {
  const [showLoader, setShowLoader] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoaderComplete = () => {
    setShowLoader(false);
    setTimeout(() => setShowContent(true), 200);
  };

  return (
    <>
      {showLoader && (
        <PageLoader onComplete={handleLoaderComplete} pageName={pageName} />
      )}
      
      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
};

export default PageWrapper;
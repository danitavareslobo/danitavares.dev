import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './PageLoader.scss';

interface PageLoaderProps {
  onComplete: () => void;
  pageName?: string;
}

const PageLoader: React.FC<PageLoaderProps> = ({ onComplete, pageName }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const name = "DANI TAVARES LOBO";
  const letters = name.split('');

  useEffect(() => {
    const letterInterval = setInterval(() => {
      setCurrentLetterIndex((prev) => {
        if (prev >= letters.length - 1) {
          clearInterval(letterInterval);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 500); 
          }, 800);
          return prev;
        }
        return prev + 1;
      });
    }, 150); 

    return () => clearInterval(letterInterval);
  }, [letters.length, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="page-loader__content">
            {/* Nome animado sendo preenchido */}
            <div className="page-loader__name">
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  className={`page-loader__letter ${
                    index <= currentLetterIndex ? 'filled' : ''
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: index <= currentLetterIndex ? 1 : 0.3,
                    y: 0,
                    scale: index === currentLetterIndex ? 1.1 : 1
                  }}
                  transition={{ 
                    duration: 0.3,
                    delay: index * 0.05
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </div>
            
            {/* Linha de progresso */}
            <motion.div 
              className="page-loader__progress"
              initial={{ width: 0 }}
              animate={{ width: `${((currentLetterIndex + 1) / letters.length) * 100}%` }}
              transition={{ duration: 0.2 }}
            />
            
            {/* Nome da página (opcional) */}
            {pageName && (
              <motion.p
                className="page-loader__page-name"
                initial={{ opacity: 0 }}
                animate={{ opacity: currentLetterIndex >= letters.length - 1 ? 1 : 0 }}
                transition={{ delay: 0.3 }}
              >
                {pageName}
              </motion.p>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
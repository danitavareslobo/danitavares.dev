import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout';
import Navbar from './components/Navigation/Navbar';
import { Home, About, Skills, Work, Resume, Contact } from './pages';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          {/* Navbar Superior Estilo Onyedika */}
          <Navbar />
          
          {/* Main Content */}
          <main className="main-content">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<About />} />
                <Route path="/habilidades" element={<Skills />} />
                <Route path="/experiencias" element={<Work />} />
                <Route path="/curriculo" element={<Resume />} />
                <Route path="/contato" element={<Contact />} />
              </Routes>
            </AnimatePresence>
          </main>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;

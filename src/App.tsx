import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout';
import { DEVELOPER_INFO } from './utils/constants';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <div className="container">
            <section style={{ padding: '100px 20px', textAlign: 'center' }}>
              <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>
                {DEVELOPER_INFO.name}
              </h1>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
                Desenvolvedor Full Stack
              </p>
              <p style={{ fontSize: '1rem', marginTop: '1rem', color: 'var(--text-tertiary)' }}>
                Especializado em {DEVELOPER_INFO.technologies.join(', ')}
              </p>
              <div style={{ marginTop: '2rem' }}>
                <p style={{ color: 'var(--text-secondary)' }}>
                  🌙 Teste o botão de tema no canto superior direito
                </p>
              </div>
            </section>
          </div>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;

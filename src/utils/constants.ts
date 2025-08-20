export const DEVELOPER_INFO = {
  name: 'Dani Tavares Lobo',
  email: 'danitavares.dev@gmail.com',
  phone: '+55 (47) 99635-6860',
  linkedin: 'https://www.linkedin.com/in/danitavareslobo/',
  github: 'https://github.com/danitavareslobo',
  technologies: ['C#', '.NET', 'React', 'Blazor', 'JavaScript', 'TypeScript']
};

export const NAVIGATION_ITEMS = [
  { id: 'home', label: 'Início', path: '/', icon: 'HiHome' },
  { id: 'about', label: 'Sobre', path: '/about', icon: 'HiUser' },
  { id: 'skills', label: 'Habilidades', path: '/skills', icon: 'HiCode' },
  { id: 'work', label: 'Trabalhos', path: '/work', icon: 'HiBriefcase' },
  { id: 'resume', label: 'Currículo', path: '/resume', icon: 'HiDocument' },
  { id: 'contact', label: 'Contato', path: '/contact', icon: 'HiMail' }
];

export const SOCIAL_LINKS = [
  { name: 'GitHub', url: DEVELOPER_INFO.github, icon: 'FaGithub' },
  { name: 'LinkedIn', url: DEVELOPER_INFO.linkedin, icon: 'FaLinkedin' },
  { name: 'WhatsApp', url: `https://wa.me/${DEVELOPER_INFO.phone.replace(/\D/g, '')}`, icon: 'FaWhatsapp' }
];

export const THEME_STORAGE_KEY = 'portfolio-theme';
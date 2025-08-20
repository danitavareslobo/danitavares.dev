import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FaEnvelope, 
  FaPhone, 
  FaLinkedin, 
  FaGithub, 
  FaWhatsapp,
  FaUser,
  FaPaperPlane,
  FaMapMarkerAlt,
  FaClock
} from 'react-icons/fa';
import { DEVELOPER_INFO } from '../../utils/constants';
import './Contact.scss';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactMethods = [
    {
      icon: FaEnvelope,
      label: 'E-mail',
      value: DEVELOPER_INFO.email,
      link: `mailto:${DEVELOPER_INFO.email}`,
      color: '#727171ff'
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      value: DEVELOPER_INFO.phone,
      link: `https://wa.me/${DEVELOPER_INFO.phone.replace(/\D/g, '')}`,
      color: '#25d366'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'danitavareslobo',
      link: DEVELOPER_INFO.linkedin,
      color: '#0077b5'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'danitavareslobo',
      link: DEVELOPER_INFO.github,
      color: '#727171ff'
    }
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Assunto é obrigatório';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Mensagem deve ter pelo menos 10 caracteres';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" ref={ref}>
      <div className="contact__container">
        {/* Header */}
        <motion.div
          className="contact__header"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="contact__title">Vamos Conversar?</h2>
          <p className="contact__subtitle">
            Entre em contato comigo para discutir projetos, oportunidades ou apenas para trocar ideias!
          </p>
        </motion.div>

        <div className="contact__content">
          {/* Métodos de Contato */}
          <motion.div
            className="contact__methods"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="contact__section-title">Entre em Contato</h3>
            
            <div className="contact__methods-grid">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.label}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-method"
                  style={{ '--method-color': method.color } as React.CSSProperties}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="contact-method__icon">
                    <method.icon />
                  </div>
                  <div className="contact-method__content">
                    <h4 className="contact-method__label">{method.label}</h4>
                    <p className="contact-method__value">{method.value}</p>
                    <small className="contact-method__description">{method.description}</small>
                  </div>
                </motion.a>
              ))}
            </div>

          </motion.div>

          {/* Formulário */}
          <motion.div
            className="contact__form-section"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="contact__section-title">Envie uma Mensagem</h3>
            
            {isSubmitted ? (
              <motion.div
                className="contact__success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="contact__success-icon">
                  <FaPaperPlane />
                </div>
                <h4>Mensagem Enviada!</h4>
                <p>Obrigada pelo contato! Responderei em breve.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="contact__success-button"
                >
                  Enviar Nova Mensagem
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="contact__form">
                <div className="contact__form-row">
                  <div className="contact__form-group">
                    <div className="contact__input-wrapper">
                      <FaUser className="contact__input-icon" />
                      <input
                        type="text"
                        name="name"
                        placeholder="Seu nome"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`contact__input ${errors.name ? 'contact__input--error' : ''}`}
                      />
                    </div>
                    {errors.name && <span className="contact__error">{errors.name}</span>}
                  </div>

                  <div className="contact__form-group">
                    <div className="contact__input-wrapper">
                      <FaEnvelope className="contact__input-icon" />
                      <input
                        type="email"
                        name="email"
                        placeholder="Seu e-mail"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`contact__input ${errors.email ? 'contact__input--error' : ''}`}
                      />
                    </div>
                    {errors.email && <span className="contact__error">{errors.email}</span>}
                  </div>
                </div>

                <div className="contact__form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Assunto"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`contact__input ${errors.subject ? 'contact__input--error' : ''}`}
                  />
                  {errors.subject && <span className="contact__error">{errors.subject}</span>}
                </div>

                <div className="contact__form-group">
                  <textarea
                    name="message"
                    placeholder="Sua mensagem..."
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`contact__input contact__textarea ${errors.message ? 'contact__input--error' : ''}`}
                  />
                  {errors.message && <span className="contact__error">{errors.message}</span>}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="contact__submit-button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="contact__loading-spinner" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Enviar Mensagem
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Info adicional - Centralizada */}
        <motion.div
          className="contact__additional-info"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="contact__info-item">
            <FaMapMarkerAlt className="contact__info-icon" />
            <span>Joinville, Santa Catarina, Brasil</span>
          </div>
          <div className="contact__info-item">
            <FaClock className="contact__info-icon" />
            <span>Disponível para projetos remotos</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
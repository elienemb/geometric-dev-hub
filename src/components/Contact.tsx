
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after a delay
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-24 section-padding relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Fale Comigo</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Gostou do meu trabalho e quer conversar sobre um projeto? Ou talvez tenha alguma dúvida? 
              Sinta-se à vontade para entrar em contato comigo através do formulário ou diretamente pelos 
              canais abaixo.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-portfolio-purple/10 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-portfolio-purple" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Email</h3>
                  <a href="mailto:contato@joaosilva.dev" className="text-gray-600 dark:text-gray-300 hover:text-portfolio-purple transition-colors">
                    contato@joaosilva.dev
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-portfolio-purple/10 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-portfolio-purple" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Telefone</h3>
                  <a href="tel:+5511987654321" className="text-gray-600 dark:text-gray-300 hover:text-portfolio-purple transition-colors">
                    +55 (11) 98765-4321
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-portfolio-purple/10 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-portfolio-purple" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Localização</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    São Paulo, SP - Brasil
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="font-medium text-lg mb-4">Horário de Disponibilidade</h3>
              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Segunda - Sexta:</span>
                  <span>09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sábado:</span>
                  <span>10:00 - 14:00</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-bold mb-6">Envie uma Mensagem</h3>
            
            {submitSuccess && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6" role="alert">
                <p className="font-medium">Mensagem enviada com sucesso!</p>
                <p className="text-sm">Obrigado pelo contato. Responderei o mais breve possível.</p>
              </div>
            )}
            
            {submitError && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6" role="alert">
                <p className="font-medium">Erro ao enviar mensagem!</p>
                <p className="text-sm">{submitError}</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Nome Completo <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-portfolio-purple focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-portfolio-purple focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="seu.email@exemplo.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Assunto <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-portfolio-purple focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="O assunto da sua mensagem"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Mensagem <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-portfolio-purple focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Descreva em detalhes como posso ajudar você"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn-primary w-full flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar Mensagem
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

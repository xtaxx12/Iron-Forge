import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-hero-pattern bg-cover bg-center bg-no-repeat bg-fixed">
      
      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-gym-black via-transparent to-black/40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 
          className="text-gym-accent font-bold tracking-[0.2em] uppercase mb-4 font-montserrat text-sm md:text-base opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.1s' }}
        >
          Bienvenido al templo
        </h2>
        <h1 
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 font-oswald uppercase tracking-tight leading-none drop-shadow-lg opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          Forja Tu <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gym-accent to-yellow-200">
            Mejor Versión
          </span>
        </h1>
        <p 
          className="mt-4 max-w-2xl mx-auto text-xl text-gray-300 mb-10 font-light font-roboto opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.5s' }}
        >
          Entrena sin límites en el gimnasio más completo de la ciudad. 
          Maquinaria de última generación, entrenadores expertos y un ambiente diseñado para ganar.
        </p>
        
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.7s' }}
        >
          <a
            href="#pricing"
            className="w-full sm:w-auto px-8 py-4 bg-gym-accent hover:bg-gym-accent-hover text-gym-black font-bold rounded-sm uppercase font-oswald tracking-widest transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(234,179,8,0.3)]"
          >
            Ver Planes
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 border-2 border-white hover:border-gym-accent hover:text-gym-accent text-white font-bold rounded-sm uppercase font-oswald tracking-widest transition-all backdrop-blur-sm bg-white/5"
          >
            Clase de Prueba
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50 opacity-0 animate-fade-in-up"
        style={{ animationDelay: '1.2s' }}
      >
        <a href="#features" className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest font-montserrat">Descubre más</span>
          <i className="fas fa-chevron-down text-xl"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gym-dark border-t border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & Social */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-6">
              <i className="fas fa-dumbbell text-gym-accent text-2xl"></i>
              <span className="font-oswald font-bold text-2xl text-white tracking-wider">
                IRON <span className="text-gym-accent">FORGE</span>
              </span>
            </a>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Dedicados a transformar vidas a través del fitness. 
              Únete a la comunidad más fuerte de la ciudad y supera tus límites.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-gym-accent hover:text-gym-black transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-gym-accent hover:text-gym-black transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-gym-accent hover:text-gym-black transition-colors">
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-oswald uppercase tracking-wider text-lg mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#hero" className="hover:text-gym-accent transition-colors">Inicio</a></li>
              <li><a href="#classes" className="hover:text-gym-accent transition-colors">Nuestras Clases</a></li>
              <li><a href="#pricing" className="hover:text-gym-accent transition-colors">Membresías</a></li>
              <li><a href="#trainers" className="hover:text-gym-accent transition-colors">Entrenadores</a></li>
              <li><a href="#" className="hover:text-gym-accent transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-oswald uppercase tracking-wider text-lg mb-6">Contacto</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt mt-1 text-gym-accent"></i>
                <span>Av. Siempre Viva 123, <br />Col. Centro, Ciudad Deportiva</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-phone text-gym-accent"></i>
                <span>+52 55 1234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-envelope text-gym-accent"></i>
                <span>info@ironforge.com</span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="h-48 bg-gray-800 rounded-sm overflow-hidden relative">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.536972740251!2d-99.133208!3d19.432608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f92c6861614b%3A0x67a32c3263158498!2sZ%C3%B3calo!5e0!3m2!1ses-419!2smx!4v1689000000000!5m2!1ses-419!2smx" 
               width="100%" 
               height="100%" 
               style={{border:0, filter: 'grayscale(1) invert(0.9) contrast(0.8)'}} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               title="Gym Location"
             ></iframe>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Iron Forge Fitness. Todos los derechos reservados. Diseño Demo.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
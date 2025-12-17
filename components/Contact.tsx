import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gym-black relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gym-accent/5 skew-x-12 hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          <div className="mb-12 lg:mb-0">
            <span className="inline-block py-1 px-3 bg-gym-accent text-gym-black font-bold uppercase text-xs tracking-wider mb-4 rounded-sm">
              Oferta Limitada
            </span>
            <h2 className="text-5xl font-black text-white font-oswald uppercase mb-6 leading-tight">
              Obtén Tu Pase de <br />
              <span className="text-gym-accent">3 Días Gratis</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 font-light">
              ¿No estás seguro? Ven y prueba nuestras instalaciones sin compromiso. 
              Vive la experiencia Iron Forge y decide por ti mismo.
            </p>
            
            <div className="flex items-center space-x-4 mb-2">
              <div className="w-12 h-12 bg-gray-800 flex items-center justify-center rounded-full text-gym-accent">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <p className="text-white font-bold font-oswald uppercase">Ubicación</p>
                <p className="text-gray-400 text-sm">Av. Siempre Viva 123, Ciudad Deportiva</p>
              </div>
            </div>
          </div>

          <div className="bg-gym-dark p-8 md:p-10 rounded-sm border border-gray-700 shadow-2xl">
            <h3 className="text-2xl font-bold text-white font-oswald uppercase mb-6 text-center">
              Reclama tu Pase
            </h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1 uppercase tracking-wider">Nombre Completo</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-gym-black border border-gray-700 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-gym-accent focus:ring-1 focus:ring-gym-accent transition-colors"
                  placeholder="Ej: Juan Pérez"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1 uppercase tracking-wider">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-gym-black border border-gray-700 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-gym-accent focus:ring-1 focus:ring-gym-accent transition-colors"
                  placeholder="juan@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-1 uppercase tracking-wider">Teléfono</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full bg-gym-black border border-gray-700 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-gym-accent focus:ring-1 focus:ring-gym-accent transition-colors"
                  placeholder="+52 55 1234 5678"
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-gym-accent text-gym-black font-bold text-lg py-4 rounded-sm uppercase font-oswald tracking-widest hover:bg-gym-accent-hover transition-colors shadow-lg"
              >
                Obtener Pase Gratis
              </button>
              
              <p className="text-xs text-center text-gray-500 mt-4">
                *Válido solo para nuevos usuarios. Sujeto a disponibilidad.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
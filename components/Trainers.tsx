import React from 'react';

const TrainerCard: React.FC<{ name: string; role: string; image: string }> = ({ name, role, image }) => (
  <div className="flex flex-col items-center text-center group">
    <div className="relative w-48 h-48 mb-6 overflow-hidden rounded-full border-4 border-gray-800 group-hover:border-gym-accent transition-colors duration-300">
      <img 
        src={image} 
        alt={name} 
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    <h3 className="text-xl font-bold text-white font-oswald uppercase tracking-wide">{name}</h3>
    <p className="text-gym-accent text-sm font-medium uppercase tracking-wider mb-3">{role}</p>
    <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
      <a href="#" className="text-gray-400 hover:text-white transition-colors"><i className="fab fa-instagram"></i></a>
      <a href="#" className="text-gray-400 hover:text-white transition-colors"><i className="fab fa-twitter"></i></a>
    </div>
  </div>
);

const Trainers: React.FC = () => {
  const trainers = [
    {
      name: "Alex 'The Rock' Mercer",
      role: "Head Coach & Musculación",
      image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=400&auto=format&fit=crop"
    },
    {
      name: "Sarah Conner",
      role: "Crossfit & Resistencia",
      image: "https://images.unsplash.com/photo-1611672585731-fa1060a80930?q=80&w=400&auto=format&fit=crop"
    },
    {
      name: "Marcus Aurelius",
      role: "Boxeo & Artes Marciales",
      image: "https://images.unsplash.com/photo-1597347343908-2937e7dcc560?q=80&w=400&auto=format&fit=crop"
    }
  ];

  return (
    <section id="trainers" className="py-20 bg-gym-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gym-accent font-bold tracking-widest uppercase font-montserrat text-sm">El Equipo</span>
          <h2 className="text-4xl font-black text-white mt-2 font-oswald uppercase">
            Entrena con los <span className="text-gym-accent">Mejores</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {trainers.map((trainer, index) => (
            <TrainerCard key={index} {...trainer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
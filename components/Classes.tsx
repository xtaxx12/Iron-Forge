import React from 'react';

const ClassCard: React.FC<{ image: string; title: string; time: string; intensity: string }> = ({ image, title, time, intensity }) => (
  <div className="group relative overflow-hidden rounded-sm h-80 cursor-pointer">
    <img 
      src={image} 
      alt={title} 
      loading="lazy"
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6">
      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <span className="inline-block px-2 py-1 bg-gym-accent text-gym-black text-xs font-bold uppercase tracking-wider mb-2">
          {intensity}
        </span>
        <h3 className="text-2xl font-bold text-white font-oswald uppercase mb-1">{title}</h3>
        <p className="text-gray-300 text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
          <i className="far fa-clock text-gym-accent"></i> {time}
        </p>
      </div>
    </div>
  </div>
);

const Classes: React.FC = () => {
  const classes = [
    {
      title: "Cross Training",
      image: "https://images.unsplash.com/photo-1517963879466-e1b54ebd99fc?q=80&w=600&auto=format&fit=crop",
      time: "45 Min",
      intensity: "Alta Intensidad"
    },
    {
      title: "Powerlifting",
      image: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=600&auto=format&fit=crop",
      time: "90 Min",
      intensity: "Fuerza Pura"
    },
    {
      title: "Boxeo",
      image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=600&auto=format&fit=crop",
      time: "60 Min",
      intensity: "Cardio & Técnica"
    },
    {
      title: "Yoga Flow",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600&auto=format&fit=crop",
      time: "60 Min",
      intensity: "Flexibilidad"
    }
  ];

  return (
    <section id="classes" className="py-20 bg-gym-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-gym-accent font-bold tracking-widest uppercase font-montserrat text-sm">Nuestras Disciplinas</span>
            <h2 className="text-4xl font-black text-white mt-2 font-oswald uppercase">
              Entrena a tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-gym-accent to-white">Manera</span>
            </h2>
          </div>
          <button className="hidden md:block text-white border-b-2 border-gym-accent pb-1 hover:text-gym-accent transition-colors font-oswald uppercase tracking-wider">
            Ver Horario Completo <i className="fas fa-arrow-right ml-2 text-sm"></i>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {classes.map((cls, index) => (
            <ClassCard key={index} {...cls} />
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <button className="text-white border-b-2 border-gym-accent pb-1 hover:text-gym-accent font-oswald uppercase tracking-wider">
            Ver Horario Completo <i className="fas fa-arrow-right ml-2 text-sm"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Classes;
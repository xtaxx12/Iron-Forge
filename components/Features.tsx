import React from 'react';

const FeatureCard: React.FC<{ icon: string; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-gym-dark p-8 rounded-sm border-b-4 border-transparent hover:border-gym-accent transition-all duration-300 hover:bg-gray-800 group">
    <div className="w-16 h-16 bg-gym-black rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-gray-700 group-hover:border-gym-accent">
      <i className={`fas ${icon} text-3xl text-gym-accent`}></i>
    </div>
    <h3 className="text-xl font-bold text-white mb-3 font-oswald uppercase tracking-wide">{title}</h3>
    <p className="text-gray-400 leading-relaxed text-sm">{description}</p>
  </div>
);

const Features: React.FC = () => {
  const features = [
    {
      icon: "fa-clock",
      title: "Acceso 24/7",
      description: "Tu entrenamiento no tiene horarios. Accede a nuestras instalaciones cualquier día a cualquier hora con tu llave digital."
    },
    {
      icon: "fa-dumbbell",
      title: "Equipo Premium",
      description: "Contamos con la última tecnología en maquinaria Hammer Strength y zonas de peso libre olímpico."
    },
    {
      icon: "fa-users",
      title: "Coaches Expertos",
      description: "Nuestros entrenadores certificados te guiarán paso a paso para maximizar tus resultados y evitar lesiones."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gym-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gym-accent font-bold tracking-widest uppercase font-montserrat text-sm">¿Por qué nosotros?</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2 font-oswald uppercase">
            Eleva tu <span className="text-gym-accent">Estándar</span>
          </h2>
          <div className="w-24 h-1 bg-gym-accent mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
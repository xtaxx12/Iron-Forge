import React from 'react';

const PricingCard: React.FC<{ 
  name: string; 
  price: string; 
  features: string[]; 
  isPopular?: boolean;
}> = ({ name, price, features, isPopular = false }) => (
  <div className={`relative flex flex-col p-8 bg-gym-dark rounded-sm border transition-all duration-300 group ${
    isPopular 
      ? 'border-gym-accent shadow-[0_0_30px_rgba(234,179,8,0.1)] scale-105 z-10 hover:scale-110 hover:shadow-[0_0_50px_rgba(234,179,8,0.3)]' 
      : 'border-gray-800 hover:border-gym-accent hover:scale-105 hover:shadow-[0_0_30px_rgba(234,179,8,0.15)]'
  }`}>
    {isPopular && (
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <span className="bg-gym-accent text-gym-black text-xs font-bold uppercase py-1 px-4 rounded-full tracking-widest shadow-lg">
          Más Popular
        </span>
      </div>
    )}
    
    <div className="mb-6">
      <h3 className={`text-xl font-bold font-oswald uppercase tracking-wider transition-colors ${isPopular ? 'text-gym-accent' : 'text-white group-hover:text-gym-accent'}`}>{name}</h3>
      <div className="mt-4 flex items-baseline">
        <span className="text-4xl font-black text-white font-oswald tracking-tight">{price}</span>
        <span className="ml-2 text-gray-400 font-medium">/mes</span>
      </div>
      <p className="mt-2 text-sm text-gray-400">Sin matrícula de inscripción</p>
    </div>

    <ul className="flex-1 space-y-4 mb-8">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-start">
          <i className={`fas fa-check mt-1 text-sm transition-colors ${isPopular ? 'text-gym-accent' : 'text-gray-500 group-hover:text-gym-accent'}`}></i>
          <span className="ml-3 text-gray-300 text-sm font-light">{feature}</span>
        </li>
      ))}
    </ul>

    <a 
      href="#contact" 
      className={`block w-full py-3 px-6 text-center font-bold uppercase tracking-widest font-oswald rounded-sm transition-all duration-300 ${
        isPopular 
          ? 'bg-gym-accent text-gym-black hover:bg-gym-accent-hover shadow-lg hover:shadow-gym-accent/50' 
          : 'bg-transparent border border-gray-600 text-white hover:border-gym-accent hover:text-gym-accent hover:bg-white/5'
      }`}
    >
      Elegir Plan
    </a>
  </div>
);

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-gym-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gym-accent font-bold tracking-widest uppercase font-montserrat text-sm">Membresías</span>
          <h2 className="text-4xl font-black text-white mt-2 font-oswald uppercase">
            Invierte en ti
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Planes flexibles diseñados para adaptarse a tus objetivos. Cancela cuando quieras.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto px-4">
          <PricingCard 
            name="Básico" 
            price="$29.99" 
            features={[
              "Acceso al área de pesas",
              "Acceso a zona cardiovascular",
              "Vestidores y duchas",
              "Acceso horario limitado (8am - 4pm)"
            ]} 
          />
          <PricingCard 
            name="Pro" 
            price="$49.99" 
            isPopular={true}
            features={[
              "Acceso ilimitado 24/7",
              "Todas las clases grupales incluidas",
              "Acceso a todas las sucursales",
              "1 sesión de PT al mes gratis",
              "Bebidas isotónicas ilimitadas"
            ]} 
          />
          <PricingCard 
            name="Elite" 
            price="$89.99" 
            features={[
              "Todo lo del plan Pro",
              "Acceso a zona VIP y Sauna",
              "Plan nutricional personalizado",
              "Toalla y servicio de lavandería",
              "Descuento en suplementos"
            ]} 
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
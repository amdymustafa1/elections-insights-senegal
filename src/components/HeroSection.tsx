import React from 'react';

export default function HeroSection() {
  const scrollToDashboard = () => {
    document.getElementById('dashboard')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative bg-gradient-to-br from-[#0A1628] via-[#1a2942] to-[#0f3d2c] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://d64gsuwffb70l.cloudfront.net/68fa37663934a50c9df62139_1761228709968_246243ec.webp" 
          alt="Senegal Electoral Map"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/30 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium">Plateforme SaaS d'Intelligence Électorale</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-green-400 via-yellow-300 to-red-400 bg-clip-text text-transparent">
              1SENEGAL
            </span>
          </h1>
          
          <p className="text-2xl lg:text-3xl font-semibold mb-4 text-gray-100">
            L'Intelligence Électorale au Service de la Démocratie
          </p>
          
          <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Compréhension approfondie, prédictive et éthique du paysage électoral sénégalais. 
            Données officielles, IA avancée et visualisations interactives pour tous les acteurs démocratiques.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToDashboard}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Explorer la Plateforme
            </button>
            <button className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200">
              Demander une Démo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

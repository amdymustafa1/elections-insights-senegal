import React from 'react';

export default function FeaturesGrid() {
  const features = [
    {
      title: 'Recensement Intelligent',
      description: 'Intégration automatique avec le registre CENA, détection des doublons par IA, alertes en temps réel.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68fa37663934a50c9df62139_1761228716779_1fdc21c2.webp',
      tags: ['IA', 'Temps Réel', 'CENA']
    },
    {
      title: 'Cartographie Électorale',
      description: 'Cartes interactives par région, heat maps de densité, filtres dynamiques multi-critères.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68fa37663934a50c9df62139_1761228712296_34c732a0.webp',
      tags: ['Interactif', '14 Régions', 'Heat Maps']
    },
    {
      title: 'Profilage IA Éthique',
      description: 'Segmentation démographique et comportementale, anonymisation complète, conformité légale.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68fa37663934a50c9df62139_1761228713329_1f7109fe.webp',
      tags: ['Éthique', 'Anonyme', 'Conforme']
    },
    {
      title: 'Sondages Intégrés',
      description: 'Création rapide, diffusion multi-canal (Web/SMS), analyse automatique, support multilingue.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68fa37663934a50c9df62139_1761228714920_5b9392f0.webp',
      tags: ['Multilingue', 'Mobile', 'SMS']
    },
    {
      title: 'Tableaux de Bord',
      description: 'Métriques en temps réel, 12+ widgets analytiques, export PDF/Excel, comparaisons historiques.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68fa37663934a50c9df62139_1761228710848_7eb642ef.webp',
      tags: ['Analytics', 'Export', 'Temps Réel']
    },
    {
      title: 'Module Prédictif',
      description: 'Simulations de scénarios, prévisions IA, recommandations stratégiques, apprentissage continu.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68fa37663934a50c9df62139_1761228715964_1433b545.webp',
      tags: ['IA', 'Prédictif', 'Scénarios']
    }
  ];

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Fonctionnalités Clés</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une suite complète d'outils pour comprendre et anticiper les dynamiques électorales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-green-500"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="flex flex-wrap gap-2">
                  {feature.tags.map((tag, i) => (
                    <span key={i} className="bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { Check, Star } from 'lucide-react';

export default function PricingSection() {
  const plans = [
    {
      name: 'Recherche',
      price: 'Gratuit',
      description: 'Pour chercheurs et étudiants',
      features: [
        'Accès aux données publiques',
        'Cartographie de base',
        'Rapports mensuels',
        'Support communautaire'
      ],
      cta: 'Commencer',
      highlighted: false
    },
    {
      name: 'Professionnel',
      price: '2,500,000 FCFA/mois',
      description: 'Pour partis politiques et ONG',
      features: [
        'Toutes les fonctionnalités Recherche',
        'Sondages illimités',
        'Profilage IA avancé',
        'Module prédictif',
        'Export de données',
        'Support prioritaire',
        'Formation incluse'
      ],
      cta: 'Essai 30 jours',
      highlighted: true
    },
    {
      name: 'Institutionnel',
      price: 'Sur devis',
      description: 'Pour institutions et gouvernements',
      features: [
        'Toutes les fonctionnalités Pro',
        'Intégration CENA complète',
        'API personnalisée',
        'Hébergement dédié',
        'Conformité renforcée',
        'Support 24/7',
        'SLA garanti',
        'Audit de sécurité'
      ],
      cta: 'Nous contacter',
      highlighted: false
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Tarification Transparente</h2>
          <p className="text-xl text-gray-600">Choisissez le plan adapté à vos besoins</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-green-500 to-green-600 text-white shadow-2xl scale-105 border-4 border-green-400'
                  : 'bg-white border-2 border-gray-200 hover:border-green-300 hover:shadow-xl'
              }`}
            >
              {plan.highlighted && (
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Star className="w-5 h-5 fill-yellow-300 text-yellow-300" />
                  <span className="font-bold text-sm uppercase tracking-wide">Plus Populaire</span>
                  <Star className="w-5 h-5 fill-yellow-300 text-yellow-300" />
                </div>
              )}

              <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>
              <p className={`mb-4 ${plan.highlighted ? 'text-green-100' : 'text-gray-600'}`}>
                {plan.description}
              </p>
              <div className={`text-3xl font-bold mb-6 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                {plan.price}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      plan.highlighted ? 'text-green-200' : 'text-green-500'
                    }`} />
                    <span className={plan.highlighted ? 'text-green-50' : 'text-gray-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                  plan.highlighted
                    ? 'bg-white text-green-600 hover:bg-green-50 shadow-lg'
                    : 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 shadow-md hover:shadow-lg'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Tous les plans incluent la conformité RGPD et Loi n°2008-12 • Paiement sécurisé • Annulation à tout moment
          </p>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { Shield, Lock, Award, CheckCircle, Database, Users } from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    {
      icon: Shield,
      title: 'RGPD Conforme',
      description: 'Protection des données personnelles garantie'
    },
    {
      icon: Lock,
      title: 'Chiffrement AES-256',
      description: 'Sécurité de niveau bancaire'
    },
    {
      icon: Award,
      title: 'Loi n°2008-12',
      description: 'Conforme à la législation sénégalaise'
    },
    {
      icon: CheckCircle,
      title: 'Audité & Certifié',
      description: 'Audits de sécurité réguliers'
    },
    {
      icon: Database,
      title: 'Hébergement Local',
      description: 'Données stockées au Sénégal'
    },
    {
      icon: Users,
      title: 'Éthique IA',
      description: 'Anonymisation et transparence'
    }
  ];

  return (
    <div className="bg-white py-16 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Sécurité & Conformité</h2>
          <p className="text-lg text-gray-600">
            Votre confiance est notre priorité absolue
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-3 shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{badge.title}</h3>
                <p className="text-xs text-gray-600">{badge.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 border border-green-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Certification & Transparence
              </h3>
              <p className="text-gray-700">
                1SENEGAL respecte les plus hauts standards de sécurité et de protection des données. 
                Nos processus sont audités régulièrement par des organismes indépendants.
              </p>
            </div>
            <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all whitespace-nowrap">
              Voir nos Certifications
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

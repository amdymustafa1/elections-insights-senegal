import React from 'react';
import { Users, MapPin, TrendingUp, Shield } from 'lucide-react';

export default function StatsOverview() {
  const stats = [
    { icon: Users, value: '7.3M+', label: 'Électeurs Enregistrés', color: 'text-green-500' },
    { icon: MapPin, value: '14', label: 'Régions Couvertes', color: 'text-yellow-500' },
    { icon: TrendingUp, value: '95%', label: 'Précision Prédictive', color: 'text-red-500' },
    { icon: Shield, value: '100%', label: 'Conformité RGPD', color: 'text-blue-500' }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <Icon className={`w-10 h-10 ${stat.color}`} />
                  <div className={`w-12 h-1 ${stat.color.replace('text', 'bg')} rounded-full`}></div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

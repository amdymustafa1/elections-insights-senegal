import React, { useState } from 'react';
import { BarChart3, PieChart, TrendingUp, Users, Calendar, Download } from 'lucide-react';

export default function DashboardPreview() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Vue d\'ensemble', icon: BarChart3 },
    { id: 'demographics', label: 'Démographie', icon: Users },
    { id: 'trends', label: 'Tendances', icon: TrendingUp },
    { id: 'predictions', label: 'Prédictions', icon: PieChart }
  ];

  return (
    <div id="dashboard" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Tableaux de Bord Analytiques</h2>
          <p className="text-xl text-gray-600">Visualisations en temps réel et insights actionnables</p>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
          <div className="bg-gradient-to-r from-[#0A1628] to-[#0f3d2c] p-6">
            <div className="flex flex-wrap gap-2 mb-4">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                      activeTab === tab.id
                        ? 'bg-white text-gray-900 shadow-lg'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
            <div className="flex justify-between items-center">
              <div className="text-white">
                <div className="text-sm opacity-80">Dernière mise à jour</div>
                <div className="flex items-center gap-2 font-medium">
                  <Calendar className="w-4 h-4" />
                  23 Octobre 2025, 14:10
                </div>
              </div>
              <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors">
                <Download className="w-4 h-4" />
                Exporter
              </button>
            </div>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
                <div className="text-green-700 text-sm font-medium mb-2">Participation Prévue</div>
                <div className="text-4xl font-bold text-green-900 mb-1">73.5%</div>
                <div className="text-sm text-green-600">↑ 2.3% vs 2019</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                <div className="text-blue-700 text-sm font-medium mb-2">Électeurs Actifs</div>
                <div className="text-4xl font-bold text-blue-900 mb-1">5.4M</div>
                <div className="text-sm text-blue-600">Sur 7.3M inscrits</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
                <div className="text-purple-700 text-sm font-medium mb-2">Confiance IA</div>
                <div className="text-4xl font-bold text-purple-900 mb-1">95.2%</div>
                <div className="text-sm text-purple-600">Précision modèle</div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4">Répartition par Âge</h4>
                <div className="space-y-3">
                  {[
                    { age: '18-25 ans', percent: 28, color: 'bg-green-500' },
                    { age: '26-35 ans', percent: 32, color: 'bg-yellow-500' },
                    { age: '36-50 ans', percent: 25, color: 'bg-red-500' },
                    { age: '51+ ans', percent: 15, color: 'bg-blue-500' }
                  ].map((item) => (
                    <div key={item.age}>
                      <div className="flex justify-between mb-1 text-sm">
                        <span className="text-gray-700 font-medium">{item.age}</span>
                        <span className="text-gray-900 font-bold">{item.percent}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className={`${item.color} h-2 rounded-full`} style={{width: `${item.percent}%`}}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4">Top 5 Régions - Participation</h4>
                <div className="space-y-3">
                  {[
                    { region: 'Fatick', rate: 76 },
                    { region: 'Diourbel', rate: 75 },
                    { region: 'Louga', rate: 74 },
                    { region: 'Kaolack', rate: 73 },
                    { region: 'Thiès', rate: 72 }
                  ].map((item, i) => (
                    <div key={item.region} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {i + 1}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">{item.region}</div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                          <div className="bg-green-500 h-2 rounded-full" style={{width: `${item.rate}%`}}></div>
                        </div>
                      </div>
                      <div className="font-bold text-gray-900">{item.rate}%</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';

export default function InteractiveMap() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const regions = [
    { name: 'Dakar', population: '3.7M', participation: '68%', color: 'bg-green-500' },
    { name: 'Thiès', population: '1.9M', participation: '72%', color: 'bg-yellow-500' },
    { name: 'Diourbel', population: '1.6M', participation: '75%', color: 'bg-red-500' },
    { name: 'Saint-Louis', population: '1.0M', participation: '70%', color: 'bg-blue-500' },
    { name: 'Kaolack', population: '960K', participation: '73%', color: 'bg-purple-500' },
    { name: 'Ziguinchor', population: '550K', participation: '65%', color: 'bg-pink-500' },
    { name: 'Tambacounda', population: '680K', participation: '69%', color: 'bg-orange-500' },
    { name: 'Kolda', population: '720K', participation: '71%', color: 'bg-teal-500' },
    { name: 'Louga', population: '870K', participation: '74%', color: 'bg-indigo-500' },
    { name: 'Fatick', population: '780K', participation: '76%', color: 'bg-cyan-500' },
    { name: 'Matam', population: '560K', participation: '68%', color: 'bg-lime-500' },
    { name: 'Kaffrine', population: '570K', participation: '72%', color: 'bg-amber-500' },
    { name: 'Kédougou', population: '150K', participation: '67%', color: 'bg-rose-500' },
    { name: 'Sédhiou', population: '450K', participation: '70%', color: 'bg-emerald-500' }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Cartographie Électorale Interactive</h2>
          <p className="text-xl text-gray-600">Explorez les 14 régions du Sénégal en temps réel</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Régions du Sénégal</h3>
            <div className="grid grid-cols-2 gap-3 max-h-96 overflow-y-auto">
              {regions.map((region) => (
                <button
                  key={region.name}
                  onClick={() => setSelectedRegion(region.name)}
                  className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                    selectedRegion === region.name
                      ? 'border-green-500 bg-green-50 shadow-lg'
                      : 'border-gray-200 hover:border-green-300 hover:shadow-md'
                  }`}
                >
                  <div className={`w-3 h-3 ${region.color} rounded-full mb-2`}></div>
                  <div className="font-semibold text-gray-900">{region.name}</div>
                  <div className="text-sm text-gray-600">{region.population}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8">
            {selectedRegion ? (
              <>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Détails - {selectedRegion}
                </h3>
                {regions.filter(r => r.name === selectedRegion).map((region) => (
                  <div key={region.name} className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 font-medium">Population Électorale</span>
                        <span className="font-bold text-gray-900">{region.population}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className={`${region.color} h-3 rounded-full`} style={{width: '75%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 font-medium">Taux de Participation</span>
                        <span className="font-bold text-gray-900">{region.participation}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-green-500 h-3 rounded-full" style={{width: region.participation}}></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-blue-700">245</div>
                        <div className="text-sm text-blue-600">Bureaux de Vote</div>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-green-700">18-35</div>
                        <div className="text-sm text-green-600">Âge Moyen</div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <div className="flex items-center justify-center h-full text-gray-400">
                <div className="text-center">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <p className="text-lg">Sélectionnez une région pour voir les détails</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

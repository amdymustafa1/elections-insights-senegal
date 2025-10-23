import React, { useState } from 'react';
import { Brain, Zap, Target, AlertCircle } from 'lucide-react';

export default function PredictiveAnalytics() {
  const [scenario, setScenario] = useState('base');
  const [participation, setParticipation] = useState(73);

  const scenarios = [
    { id: 'base', label: 'Scénario de Base', color: 'green' },
    { id: 'optimistic', label: 'Scénario Optimiste', color: 'blue' },
    { id: 'pessimistic', label: 'Scénario Pessimiste', color: 'red' }
  ];

  const predictions = {
    base: { turnout: 73, confidence: 95, winner: 'Coalition A', margin: 8.5 },
    optimistic: { turnout: 78, confidence: 88, winner: 'Coalition A', margin: 12.3 },
    pessimistic: { turnout: 68, confidence: 92, winner: 'Coalition A', margin: 4.2 }
  };

  const currentPrediction = predictions[scenario as keyof typeof predictions];

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Module Prédictif IA</h2>
          <p className="text-xl text-gray-600">Simulations de scénarios et recommandations stratégiques</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {scenarios.map((s) => (
            <button
              key={s.id}
              onClick={() => setScenario(s.id)}
              className={`p-6 rounded-xl border-2 transition-all duration-200 text-left ${
                scenario === s.id
                  ? `border-${s.color}-500 bg-${s.color}-50 shadow-lg`
                  : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
              }`}
            >
              <div className={`w-12 h-12 bg-${s.color}-500 rounded-full flex items-center justify-center mb-4`}>
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{s.label}</h3>
              <p className="text-sm text-gray-600">
                {s.id === 'base' && 'Conditions actuelles maintenues'}
                {s.id === 'optimistic' && 'Mobilisation accrue, alliances favorables'}
                {s.id === 'pessimistic' && 'Abstention élevée, contestation'}
              </p>
            </button>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-2xl p-8 border border-gray-200">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
              <Target className="w-8 h-8 text-green-600 mb-3" />
              <div className="text-sm text-green-700 font-medium mb-1">Participation Prévue</div>
              <div className="text-3xl font-bold text-green-900">{currentPrediction.turnout}%</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
              <Zap className="w-8 h-8 text-blue-600 mb-3" />
              <div className="text-sm text-blue-700 font-medium mb-1">Confiance IA</div>
              <div className="text-3xl font-bold text-blue-900">{currentPrediction.confidence}%</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
              <Brain className="w-8 h-8 text-purple-600 mb-3" />
              <div className="text-sm text-purple-700 font-medium mb-1">Vainqueur Prévu</div>
              <div className="text-xl font-bold text-purple-900">{currentPrediction.winner}</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl">
              <AlertCircle className="w-8 h-8 text-orange-600 mb-3" />
              <div className="text-sm text-orange-700 font-medium mb-1">Marge</div>
              <div className="text-3xl font-bold text-orange-900">{currentPrediction.margin}%</div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
            <h4 className="font-bold text-gray-900 mb-4">Ajuster les Paramètres</h4>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Taux de Participation: {participation}%
              </label>
              <input
                type="range"
                min="50"
                max="90"
                value={participation}
                onChange={(e) => setParticipation(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>50%</span>
                <span>90%</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
              <Brain className="w-5 h-5" />
              Recommandations Stratégiques
            </h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-blue-800">
                <span className="text-blue-500 font-bold">•</span>
                <span>Concentrer les efforts sur Dakar, Thiès et Diourbel (zones à fort impact)</span>
              </li>
              <li className="flex items-start gap-2 text-blue-800">
                <span className="text-blue-500 font-bold">•</span>
                <span>Mobiliser la tranche 18-35 ans via réseaux sociaux et SMS</span>
              </li>
              <li className="flex items-start gap-2 text-blue-800">
                <span className="text-blue-500 font-bold">•</span>
                <span>Renforcer le message sur l'emploi et l'éducation (priorités identifiées)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

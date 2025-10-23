import React, { useState } from 'react';
import { Plus, Send, Globe, Smartphone } from 'lucide-react';

export default function SurveyModule() {
  const [language, setLanguage] = useState('fr');
  const [surveyTitle, setSurveyTitle] = useState('');
  const [questions, setQuestions] = useState<string[]>(['']);

  const addQuestion = () => {
    setQuestions([...questions, '']);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Sondage "${surveyTitle}" créé avec succès! ${questions.length} questions en ${language === 'fr' ? 'Français' : language === 'wo' ? 'Wolof' : language === 'pu' ? 'Pulaar' : 'Sérère'}`);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Système de Sondages Intégré</h2>
          <p className="text-xl text-gray-600">Créez et diffusez des sondages multilingues en quelques clics</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Créer un Sondage</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Langue du Sondage
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { code: 'fr', label: 'Français' },
                    { code: 'wo', label: 'Wolof' },
                    { code: 'pu', label: 'Pulaar' },
                    { code: 'se', label: 'Sérère' }
                  ].map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => setLanguage(lang.code)}
                      className={`px-3 py-2 rounded-lg font-medium transition-all ${
                        language === lang.code
                          ? 'bg-green-500 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Titre du Sondage
                </label>
                <input
                  type="text"
                  value={surveyTitle}
                  onChange={(e) => setSurveyTitle(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Ex: Intentions de vote 2025"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Questions
                </label>
                <div className="space-y-3">
                  {questions.map((q, index) => (
                    <input
                      key={index}
                      type="text"
                      value={q}
                      onChange={(e) => {
                        const newQuestions = [...questions];
                        newQuestions[index] = e.target.value;
                        setQuestions(newQuestions);
                      }}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder={`Question ${index + 1}`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={addQuestion}
                  className="mt-3 flex items-center gap-2 text-green-600 hover:text-green-700 font-medium"
                >
                  <Plus className="w-4 h-4" />
                  Ajouter une question
                </button>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-6 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Créer et Diffuser
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Globe className="w-6 h-6 text-green-500" />
                Canaux de Diffusion
              </h3>
              <div className="space-y-3">
                {[
                  { channel: 'Web & Mobile', reach: '4.2M utilisateurs', active: true },
                  { channel: 'SMS', reach: '6.8M numéros', active: true },
                  { channel: 'Email', reach: '1.5M adresses', active: false },
                  { channel: 'WhatsApp', reach: '3.9M contacts', active: true }
                ].map((item) => (
                  <div key={item.channel} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-900">{item.channel}</div>
                      <div className="text-sm text-gray-600">{item.reach}</div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.active ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-600'
                    }`}>
                      {item.active ? 'Actif' : 'Inactif'}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Smartphone className="w-6 h-6 text-blue-500" />
                Sondages Récents
              </h3>
              <div className="space-y-3">
                {[
                  { title: 'Intentions de vote', responses: 12453, date: '20 Oct 2025' },
                  { title: 'Priorités citoyennes', responses: 8921, date: '18 Oct 2025' },
                  { title: 'Confiance institutions', responses: 15678, date: '15 Oct 2025' }
                ].map((survey) => (
                  <div key={survey.title} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                    <div className="font-medium text-gray-900">{survey.title}</div>
                    <div className="flex justify-between text-sm text-gray-600 mt-1">
                      <span>{survey.responses.toLocaleString()} réponses</span>
                      <span>{survey.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { ArrowRight, Mail, CheckCircle } from 'lucide-react';

export default function CTASection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#0A1628] via-[#1a2942] to-[#0f3d2c] py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Prêt à Transformer Votre Stratégie Électorale ?
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Rejoignez les institutions, partis politiques et chercheurs qui font confiance à 1SENEGAL 
          pour comprendre et anticiper les dynamiques électorales.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre.email@exemple.sn"
                  className="w-full pl-12 pr-4 py-4 rounded-lg border-2 border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Démo Gratuite
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </form>
        ) : (
          <div className="max-w-md mx-auto mb-8 bg-green-500/20 border border-green-400 rounded-lg p-6 flex items-center justify-center gap-3">
            <CheckCircle className="w-6 h-6 text-green-400" />
            <span className="text-white font-medium">
              Merci ! Nous vous contactons sous 24h.
            </span>
          </div>
        )}

        <div className="flex flex-wrap justify-center gap-8 text-gray-300">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span>Démo personnalisée</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span>Sans engagement</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span>Support dédié</span>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-sm">
            Utilisé par 15+ institutions • 50,000+ utilisateurs actifs • 95% de satisfaction client
          </p>
        </div>
      </div>
    </div>
  );
}

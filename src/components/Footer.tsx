import React from 'react';
import { Mail, Phone, MapPin, Shield, Lock, FileText } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0A1628] to-[#0f3d2c] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-400 via-yellow-300 to-red-400 bg-clip-text text-transparent">
              1SENEGAL
            </h3>
            <p className="text-gray-300 mb-4">
              Plateforme d'intelligence électorale éthique au service de la démocratie sénégalaise (Moustapha NDIAYE).
            </p>
            <div className="flex gap-2">
              <div className="w-8 h-8 bg-green-500 rounded"></div>
              <div className="w-8 h-8 bg-yellow-400 rounded"></div>
              <div className="w-8 h-8 bg-red-500 rounded"></div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Fonctionnalités</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-green-400 cursor-pointer transition-colors">Recensement Intelligent</li>
              <li className="hover:text-green-400 cursor-pointer transition-colors">Cartographie Électorale</li>
              <li className="hover:text-green-400 cursor-pointer transition-colors">Profilage IA Éthique</li>
              <li className="hover:text-green-400 cursor-pointer transition-colors">Système de Sondages</li>
              <li className="hover:text-green-400 cursor-pointer transition-colors">Tableaux de Bord</li>
              <li className="hover:text-green-400 cursor-pointer transition-colors">Module Prédictif</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Conformité & Sécurité</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2 hover:text-green-400 cursor-pointer transition-colors">
                <Shield className="w-4 h-4" />
                RGPD Conforme
              </li>
              <li className="flex items-center gap-2 hover:text-green-400 cursor-pointer transition-colors">
                <Lock className="w-4 h-4" />
                Loi n°2008-12
              </li>
              <li className="flex items-center gap-2 hover:text-green-400 cursor-pointer transition-colors">
                <FileText className="w-4 h-4" />
                Charte Éthique
              </li>
              <li className="hover:text-green-400 cursor-pointer transition-colors">Politique de Confidentialité</li>
              <li className="hover:text-green-400 cursor-pointer transition-colors">Conditions d'Utilisation</li>
              <li className="hover:text-green-400 cursor-pointer transition-colors">Audits de Sécurité</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <span>Dakar, Sénégal<br />Plateau, Avenue Léopold Sédar Senghor</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-green-400" />
                <span>+221 33 871 30 83</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-green-400" />
                <span>contact@1senegal.sn</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 1SENEGAL. Tous droits réservés. Plateforme développée avec ❤️ pour le Sénégal.
            </p>
            <div className="flex gap-4 text-sm text-gray-400">
              <span className="hover:text-green-400 cursor-pointer transition-colors">Français</span>
              <span className="hover:text-green-400 cursor-pointer transition-colors">Wolof</span>
              <span className="hover:text-green-400 cursor-pointer transition-colors">Pulaar</span>
              <span className="hover:text-green-400 cursor-pointer transition-colors">Sérère</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

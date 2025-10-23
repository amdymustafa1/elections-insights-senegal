import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('FR');

  const menuItems = [
    { label: 'Accueil', href: '#' },
    { label: 'Fonctionnalités', href: '#features' },
    { label: 'Cartographie', href: '#map' },
    { label: 'Dashboard', href: '#dashboard' },
    { label: 'Sondages', href: '#surveys' },
    { label: 'Contact', href: '#contact' }
  ];

  const languages = ['FR', 'WO', 'PU', 'SE'];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <div className="w-2 h-8 bg-green-500 rounded"></div>
              <div className="w-2 h-8 bg-yellow-400 rounded"></div>
              <div className="w-2 h-8 bg-red-500 rounded"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-green-600 via-yellow-500 to-red-500 bg-clip-text text-transparent">
              1SENEGAL
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setLanguage(languages[(languages.indexOf(language) + 1) % languages.length])}
                className="flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="font-medium">{language}</span>
              </button>
            </div>

            <button className="hidden md:block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-6 py-2 rounded-lg transition-all">
              Démo Gratuite
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-700"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-green-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button className="w-full mt-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold px-6 py-2 rounded-lg">
              Démo Gratuite
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

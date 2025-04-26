'use client';

import Link from "next/link";
import { Check, X, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/design-system";

export default function PricingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className={cn(
        "navbar fixed w-full top-0 z-50 transition-all duration-300",
        isScrolled ? "bg-[#1a2030] shadow-md py-3" : "bg-[#121826] py-4"
      )}>
        <div className="flex items-center justify-between w-full container mx-auto px-4 md:px-8">
          <Link href="/" className="text-2xl font-bold flex items-center gap-2 text-white">
            <span className="bg-gradient-to-br from-teal-400 via-emerald-500 to-cyan-600 text-white p-1.5 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300 hover:shadow-lg flex items-center justify-center relative overflow-hidden group">
              <span className="relative z-10">M</span>
              <span className="absolute inset-0 bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
            </span>
            MedPrep
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            <Link href="/" className="nav-link text-white hover:text-teal-400 transition-colors">Accueil</Link>
            <Link href="/features" className="nav-link text-white hover:text-teal-400 transition-colors">Fonctionnalités</Link>
            <Link href="/pricing" className="nav-link text-teal-400 hover:text-teal-300 transition-colors">Tarifs</Link>
            <Link href="/contact" className="nav-link text-white hover:text-teal-400 transition-colors">Contact</Link>
          </nav>
          
          <div className="flex gap-3 items-center">
            <Link 
              href="/login" 
              className="hidden sm:inline-flex font-medium text-sm text-white hover:text-teal-400 transition-colors"
            >
              Se connecter
            </Link>
            <Link 
              href="/register" 
              className="px-4 py-2 bg-gradient-to-r from-teal-400 to-cyan-600 text-white rounded-md hover:shadow-lg transition-all duration-200 shadow-sm font-medium text-sm transform hover:translate-y-[-2px]"
            >
              S'inscrire gratuitement
            </Link>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden flex items-center text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#1a2030] shadow-lg md:hidden z-40">
            <div className="flex flex-col p-4 space-y-3 text-white">
              <Link href="/" className="px-3 py-2 hover:bg-[#2a304a] rounded-md">Accueil</Link>
              <Link href="/features" className="px-3 py-2 hover:bg-[#2a304a] rounded-md">Fonctionnalités</Link>
              <Link href="/pricing" className="px-3 py-2 bg-[#2a304a] text-teal-400 rounded-md">Tarifs</Link>
              <Link href="/contact" className="px-3 py-2 hover:bg-[#2a304a] rounded-md">Contact</Link>
              <Link href="/login" className="px-3 py-2 bg-[#2a304a] text-teal-400 rounded-md font-medium">Se connecter</Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-white to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-3 px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">TARIFS</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Des formules adaptées à vos besoins</h1>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8 leading-relaxed">
              Choisissez le plan qui vous convient le mieux et commencez à améliorer vos résultats dès aujourd'hui.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-10 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md flex flex-col">
              <div className="p-8 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Plan Gratuit</h3>
                <p className="text-gray-600 mb-6">Pour commencer à explorer</p>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-gray-900">0 Dh</span>
                  <span className="text-gray-500 ml-2">/pour toujours</span>
                </div>
                <Link 
                  href="/register" 
                  className="block w-full text-center px-4 py-3 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition-colors font-medium"
                >
                  Commencer gratuitement
                </Link>
              </div>
              <div className="p-8 bg-gray-50 flex-grow">
                <h4 className="font-medium text-gray-900 mb-4">Inclus :</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-gray-700">Accès limité à la banque de questions</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-gray-700">Fonction de base du tableau de bord</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-gray-700">Suivi de progression basique</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-gray-500">Assistance IA limitée</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-gray-500">Statistiques détaillées</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-gray-500">Accès aux examens archivés</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="bg-white rounded-xl border border-indigo-200 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col relative">
              <div className="absolute top-0 right-0 bg-indigo-600 text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
                POPULAIRE
              </div>
              <div className="p-8 border-b border-gray-100 bg-gradient-to-br from-indigo-500 to-indigo-600 text-white">
                <h3 className="text-xl font-bold mb-2">Plan Premium</h3>
                <p className="text-indigo-100 mb-6">Pour des résultats optimaux</p>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold">100 Dh</span>
                  <span className="text-indigo-100 ml-2">/semestre</span>
                </div>
                <Link 
                  href="/register" 
                  className="block w-full text-center px-4 py-3 bg-white text-indigo-600 rounded-md hover:bg-indigo-50 transition-colors font-medium"
                >
                  Obtenir Premium
                </Link>
              </div>
              <div className="p-8 bg-white flex-grow">
                <h4 className="font-medium text-gray-900 mb-4">Tout ce qui est inclus dans le plan Gratuit, plus :</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-gray-700">Accès complet à la banque de questions</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-gray-700">Correction et explications détaillées</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-gray-700">Assistance IA pour les QROC</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-gray-700">Statistiques détaillées de performance</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-gray-700">Création de tests personnalisés</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-gray-700">Mode examen chronométré</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Annual Plan */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md flex flex-col">
              <div className="p-8 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Plan Annuel</h3>
                <p className="text-gray-600 mb-6">Pour un engagement sur l'année</p>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-gray-900">150 Dh</span>
                  <span className="text-gray-500 ml-2">/année</span>
                </div>
                <Link 
                  href="/register" 
                  className="block w-full text-center px-4 py-3 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition-colors font-medium"
                >
                  Obtenir le Plan Annuel
                </Link>
              </div>
              <div className="p-8 bg-gray-50 flex-grow">
                <h4 className="font-medium text-gray-900 mb-4">Tout ce qui est inclus dans Premium, plus :</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-gray-700">50% d'économie par rapport au plan semestriel</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-gray-700">Accès prioritaire aux nouvelles fonctionnalités</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-gray-700">Support prioritaire</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-gray-700">Webinaires exclusifs avec experts</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4 bg-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comparaison détaillée des fonctionnalités</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Découvrez quelle formule correspond le mieux à vos besoins et à votre budget.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-4 text-left text-gray-900 font-medium">Fonctionnalités</th>
                  <th className="px-6 py-4 text-center text-gray-900 font-medium">Gratuit</th>
                  <th className="px-6 py-4 text-center text-indigo-600 font-medium">Premium</th>
                  <th className="px-6 py-4 text-center text-gray-900 font-medium">Annuel</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-gray-800">Accès à la banque de questions</td>
                  <td className="px-6 py-4 text-center text-gray-800">Limité (100 questions)</td>
                  <td className="px-6 py-4 text-center text-indigo-600 font-medium">Complet</td>
                  <td className="px-6 py-4 text-center text-gray-800">Complet</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-800">Mode examen</td>
                  <td className="px-6 py-4 text-center text-gray-800">Basique</td>
                  <td className="px-6 py-4 text-center text-indigo-600 font-medium">Avancé</td>
                  <td className="px-6 py-4 text-center text-gray-800">Avancé</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-800">Statistiques de performance</td>
                  <td className="px-6 py-4 text-center text-gray-800">Basique</td>
                  <td className="px-6 py-4 text-center text-indigo-600 font-medium">Détaillées</td>
                  <td className="px-6 py-4 text-center text-gray-800">Détaillées</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-800">Assistance IA</td>
                  <td className="px-6 py-4 text-center">
                    <X className="h-5 w-5 text-gray-400 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-800">Correction QROC par IA</td>
                  <td className="px-6 py-4 text-center">
                    <X className="h-5 w-5 text-gray-400 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-800">Examens archivés</td>
                  <td className="px-6 py-4 text-center">
                    <X className="h-5 w-5 text-gray-400 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-800">Webinaires avec experts</td>
                  <td className="px-6 py-4 text-center">
                    <X className="h-5 w-5 text-gray-400 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <X className="h-5 w-5 text-gray-400 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-800">Support prioritaire</td>
                  <td className="px-6 py-4 text-center">
                    <X className="h-5 w-5 text-gray-400 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <X className="h-5 w-5 text-gray-400 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-800">Prix</td>
                  <td className="px-6 py-4 text-center text-gray-800">Gratuit</td>
                  <td className="px-6 py-4 text-center text-indigo-600 font-medium">100 Dh / semestre</td>
                  <td className="px-6 py-4 text-center text-gray-800">150 Dh / année</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-indigo-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à commencer votre préparation ?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Rejoignez des milliers d'étudiants en médecine qui utilisent MedPrep pour exceller dans leurs études.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/register" 
              className="px-8 py-4 bg-white text-indigo-600 rounded-md hover:bg-indigo-50 transition-all duration-300 shadow-xl font-medium text-lg"
            >
              Commencer gratuitement
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-4 border border-white text-white rounded-md hover:bg-indigo-700 transition-all duration-300 font-medium text-lg"
            >
              Contactez-nous
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
                <span className="bg-indigo-600 text-white p-1 rounded-md">M</span>
                MedPrep
              </div>
              <p className="text-gray-400 mb-4">
                La plateforme d'apprentissage pour les étudiants en médecine qui souhaitent réussir.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Accueil</Link></li>
                <li><Link href="/features" className="text-gray-400 hover:text-white transition-colors">Fonctionnalités</Link></li>
                <li><Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">Tarifs</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Légal</h3>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Politique de confidentialité</Link></li>
                <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Conditions d'utilisation</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">contact@medprep.ma</li>
                <li className="text-gray-400">+212 5XX-XXXXXX</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} MedPrep. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 
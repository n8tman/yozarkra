'use client';

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/design-system";

export default function FeaturesPage() {
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
            <Link href="/features" className="nav-link text-teal-400 hover:text-teal-300 transition-colors">Fonctionnalités</Link>
            <Link href="/pricing" className="nav-link text-white hover:text-teal-400 transition-colors">Tarifs</Link>
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
              <Link href="/features" className="px-3 py-2 bg-[#2a304a] text-teal-400 rounded-md">Fonctionnalités</Link>
              <Link href="/pricing" className="px-3 py-2 hover:bg-[#2a304a] rounded-md">Tarifs</Link>
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
            <div className="inline-block mb-3 px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">FONCTIONNALITÉS</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Tout ce dont vous avez besoin pour réussir</h1>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8 leading-relaxed">
              Découvrez les outils et fonctionnalités qui font de MedPrep la plateforme préférée des étudiants en médecine.
            </p>
          </div>
        </div>
      </section>

      {/* Banque de questions Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block mb-3 px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">BANQUE DE QUESTIONS</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Des milliers de questions pour s'entraîner</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Accédez à une vaste collection de QCM, QCU, QROC et Cas Cliniques classés par année, module, cours, etc. 
                Personnalisez vos entraînements selon vos besoins spécifiques.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="ml-3 text-gray-700">Plus de 10,000 questions couvrant tous les modules</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="ml-3 text-gray-700">Questions organisées par année, semestre et cours</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="ml-3 text-gray-700">Possibilité de créer des entraînements personnalisés</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="ml-3 text-gray-700">Mode examen pour simuler les conditions réelles</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-xl">
              <div className="bg-red-50 p-6 rounded-lg">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex justify-between items-center mb-3">
                      <div className="text-sm font-medium text-gray-500">QCM - Cardiologie</div>
                      <div className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">Module 3</div>
                    </div>
                    <p className="text-gray-800 font-medium mb-3">Parmi les signes suivants, lequel n'est pas caractéristique d'une insuffisance cardiaque gauche ?</p>
                    <div className="space-y-2">
                      <div className="flex items-center p-2 rounded-md hover:bg-gray-50">
                        <div className="h-4 w-4 border border-gray-300 rounded-full mr-3"></div>
                        <span className="text-gray-700">Dyspnée d'effort</span>
                      </div>
                      <div className="flex items-center p-2 rounded-md hover:bg-gray-50">
                        <div className="h-4 w-4 border border-gray-300 rounded-full mr-3"></div>
                        <span className="text-gray-700">Orthopnée</span>
                      </div>
                      <div className="flex items-center p-2 rounded-md bg-green-50 border border-green-200">
                        <div className="h-4 w-4 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                          <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium">Œdèmes des membres inférieurs</span>
                      </div>
                      <div className="flex items-center p-2 rounded-md hover:bg-gray-50">
                        <div className="h-4 w-4 border border-gray-300 rounded-full mr-3"></div>
                        <span className="text-gray-700">Crépitants pulmonaires</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <div className="h-28 flex flex-col justify-center items-center">
                        <div className="text-lg font-medium text-indigo-600">QCM</div>
                        <div className="text-4xl font-bold text-gray-800">7500+</div>
                        <div className="text-sm text-gray-500">Questions</div>
                      </div>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <div className="h-28 flex flex-col justify-center items-center">
                        <div className="text-lg font-medium text-green-600">QROC</div>
                        <div className="text-4xl font-bold text-gray-800">2500+</div>
                        <div className="text-sm text-gray-500">Questions</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Correction et suivi Section */}
      <section className="py-20 px-4 bg-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-white p-6 rounded-xl shadow-xl">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="mb-4">
                    <div className="bg-blue-600 h-2 w-3/4 rounded-full mb-1"></div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Score global</span>
                      <span className="font-medium text-blue-600">75%</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <div className="flex flex-col items-center">
                        <div className="text-4xl font-bold text-green-600">86%</div>
                        <div className="text-sm text-gray-600">Cardiologie</div>
                      </div>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <div className="flex flex-col items-center">
                        <div className="text-4xl font-bold text-red-600">62%</div>
                        <div className="text-sm text-gray-600">Pneumologie</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-sm font-medium text-gray-500 mb-3">Performance par module</div>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-700">Cardiologie</span>
                          <span className="font-medium text-green-600">86%</span>
                        </div>
                        <div className="bg-gray-200 h-2 rounded-full">
                          <div className="bg-green-500 h-2 w-[86%] rounded-full"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-700">Pneumologie</span>
                          <span className="font-medium text-red-600">62%</span>
                        </div>
                        <div className="bg-gray-200 h-2 rounded-full">
                          <div className="bg-red-500 h-2 w-[62%] rounded-full"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-700">Neurologie</span>
                          <span className="font-medium text-blue-600">78%</span>
                        </div>
                        <div className="bg-gray-200 h-2 rounded-full">
                          <div className="bg-blue-500 h-2 w-[78%] rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block mb-3 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">CORRECTION & SUIVI</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Suivez votre progression en détail</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Obtenez une correction immédiate de vos réponses et suivez vos performances détaillées pour identifier vos points forts et faibles.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="ml-3 text-gray-700">Statistiques détaillées par module et par cours</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="ml-3 text-gray-700">Identification des points faibles à améliorer</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="ml-3 text-gray-700">Visualisation de votre évolution dans le temps</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="ml-3 text-gray-700">Recommandations personnalisées pour s'améliorer</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* IA Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block mb-3 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">ASSISTANCE IA</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">L'intelligence artificielle à votre service</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Bénéficiez d'explications de réponses générées par IA et d'une aide à la correction pour les questions ouvertes (QROC).
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="ml-3 text-gray-700">Explications détaillées adaptées à votre niveau</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="ml-3 text-gray-700">Aide à la correction pour les questions ouvertes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="ml-3 text-gray-700">Suggestions de ressources complémentaires</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="ml-3 text-gray-700">Assistant d'étude intelligent</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-xl">
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="bg-white p-4 rounded-lg shadow-sm mb-4 border-l-4 border-green-500">
                  <div className="text-sm font-medium text-gray-500 mb-2">Question</div>
                  <p className="text-gray-800 font-medium mb-2">Expliquez les mécanismes physiopathologiques de l'insuffisance cardiaque.</p>
                  <div className="text-sm font-medium text-gray-500 mb-2">Votre réponse</div>
                  <p className="text-gray-800 mb-2">L'insuffisance cardiaque est causée par une incapacité du coeur à pomper suffisamment de sang. Elle est souvent due à une cardiopathie ischémique, hypertensive ou valvulaire.</p>
                  <div className="text-sm font-medium text-green-700 mb-2">Assistance IA</div>
                  <div className="bg-green-50 p-3 rounded-md border border-green-200 text-gray-700 text-sm">
                    <p className="mb-2">Votre réponse est correcte mais pourrait être enrichie. Voici les mécanismes complets :</p>
                    <ol className="list-decimal pl-5 space-y-1 mb-2">
                      <li>Diminution du débit cardiaque (fonction systolique)</li>
                      <li>Anomalies du remplissage ventriculaire (fonction diastolique)</li>
                      <li>Activation des systèmes neuro-hormonaux compensateurs (SNS, SRAA)</li>
                      <li>Remodelage ventriculaire progressif</li>
                    </ol>
                    <p>Ces mécanismes entraînent une congestion pulmonaire (IC gauche) ou systémique (IC droite).</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="h-28 flex flex-col justify-center items-center">
                      <div className="text-sm text-gray-500">Précision IA</div>
                      <div className="text-4xl font-bold text-green-600">95%</div>
                      <div className="text-xs text-gray-500">validée par experts</div>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="h-28 flex flex-col justify-center items-center">
                      <div className="text-sm text-gray-500">Satisfaction</div>
                      <div className="text-4xl font-bold text-green-600">92%</div>
                      <div className="text-xs text-gray-500">utilisateurs satisfaits</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-indigo-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à améliorer vos résultats ?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Rejoignez des milliers d'étudiants en médecine qui utilisent MedPrep pour exceller dans leurs études.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/register" 
              className="px-8 py-4 bg-white text-indigo-600 rounded-md hover:bg-indigo-50 transition-all duration-300 shadow-xl font-medium text-lg"
            >
              Commencer maintenant
            </Link>
            <Link 
              href="/pricing" 
              className="px-8 py-4 border border-white text-white rounded-md hover:bg-indigo-700 transition-all duration-300 font-medium text-lg"
            >
              Voir les tarifs
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
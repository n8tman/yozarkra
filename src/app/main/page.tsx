'use client';

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Star, MessageSquare, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect, useCallback, lazy, Suspense } from "react";
import { H1, H2, GradientText, P, Lead } from "@/components/ui/typography";
import { Section, SectionGrid, SectionDivider } from "@/components/ui/section";
import { Card, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/design-system";

// Improved throttle function with requestAnimationFrame for better performance
function throttle(callback: Function, delay: number) {
  let lastCall = 0;
  let requestId: number | null = null;
  
  return function (...args: any[]) {
    const now = Date.now();
    
    if (now - lastCall >= delay) {
      lastCall = now;
      
      if (requestId) {
        cancelAnimationFrame(requestId);
      }
      
      requestId = requestAnimationFrame(() => {
        callback(...args);
        requestId = null;
      });
    }
  };
}

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [animationReady, setAnimationReady] = useState(false);

  // Set animation ready after component is mounted
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationReady(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  // Optimized scroll handler using passive event listener and a higher throttle delay
  const handleScroll = useCallback(throttle(() => {
    setIsScrolled(window.scrollY > 10);
  }, 250), []);

  useEffect(() => {
    // Add passive flag to improve scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Preload critical resources
  useEffect(() => {
    // Preconnect to critical domains
    const links = [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' }
    ];
    
    links.forEach(linkProps => {
      const link = document.createElement('link');
      Object.entries(linkProps).forEach(([key, value]) => {
        if (value !== undefined) {
          // @ts-ignore
          link[key] = value;
        }
      });
      document.head.appendChild(link);
    });
    
    return () => {
      links.forEach(linkProps => {
        const selector = `link[rel="${linkProps.rel}"][href="${linkProps.href}"]`;
        document.head.querySelectorAll(selector).forEach(link => {
          document.head.removeChild(link);
        });
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-[#121826]">
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
              <Link href="/features" className="px-3 py-2 hover:bg-[#2a304a] rounded-md">Fonctionnalités</Link>
              <Link href="/pricing" className="px-3 py-2 hover:bg-[#2a304a] rounded-md">Tarifs</Link>
              <Link href="/contact" className="px-3 py-2 hover:bg-[#2a304a] rounded-md">Contact</Link>
              <Link href="/login" className="px-3 py-2 bg-[#2a304a] text-teal-400 rounded-md font-medium">Se connecter</Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section - Optimized for performance */}
      <section className="relative w-full min-h-screen pt-20 bg-gradient-to-r from-blue-950 to-[#121826] flex items-center will-change-scroll">
        {/* Background design elements - Optimized with contained compositing layer */}
        <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden pointer-events-none opacity-60">
          {/* Reduced size and complexity of blur effects */}
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-200/30 dark:bg-blue-400/10 rounded-full blur-2xl transform-gpu"></div>
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-100/30 dark:bg-blue-300/10 rounded-full blur-2xl transform-gpu"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="text-left text-white"
            style={{ willChange: "transform", transform: "translateZ(0)" }}
          >
            <div className="inline-block mb-4 px-4 py-2 bg-blue-500/20 text-cyan-300 rounded-full text-sm font-medium backdrop-blur-sm">
              Pour les étudiants en médecine 🩺
            </div>
          
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white relative">
                <div className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300 animate-gradient">Moins de travail</span>
                </div>
                <br />
                <div className="mt-2 md:mt-3 relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-300 animate-gradient">meilleurs résultats</span>
                  <div className="absolute -bottom-2 md:-bottom-3 left-0 w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full animate-pulse"></div>
                </div>
              </h1>
            </div>

            <style jsx global>{`
              @keyframes gradient {
                0% {
                  background-position: 0% 50%;
                }
                50% {
                  background-position: 100% 50%;
                }
                100% {
                  background-position: 0% 50%;
                }
              }
              
              .animate-gradient {
                background-size: 200% 200%;
                animation: gradient 4s ease infinite;
              }
              
              .animate-bounce-slow {
                animation: bounce 3s infinite ease-in-out;
              }
              
              @keyframes bounce {
                0%, 100% {
                  transform: translateY(0) rotate(var(--tw-rotate));
                }
                50% {
                  transform: translateY(-10px) rotate(var(--tw-rotate));
                }
              }
            `}</style>
          
            <p className="mb-8 max-w-xl text-cyan-100/90 text-lg">
              Notre plateforme éducative numérique innovante facilite votre préparation 
              aux examens, organise vos tâches scolaires et renforce l'interaction avec des outils spécialement conçus pour les futurs médecins.
            </p>
          
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link 
                href="#pricing" 
                className="flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-full hover:shadow-lg transition-all duration-200 shadow-md font-medium transform hover:translate-y-[-2px]"
              >
                Commencer maintenant
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/features" 
                className="flex items-center justify-center px-8 py-3.5 border border-teal-600/40 text-teal-300 rounded-full hover:bg-teal-900/20 transition-all duration-200 font-medium"
              >
                Découvrir les fonctionnalités
              </Link>
            </div>
            
            {/* Trustpilot-style rating - simplified for performance */}
            <div className="flex items-center gap-2 text-sm text-cyan-100/70">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-medium text-cyan-100">4.9/5</span> 
              <span>basé sur <span className="underline hover:text-cyan-300 transition-colors">312 avis</span></span>
            </div>
          </motion.div>
        
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="relative"
            style={{ willChange: "transform", transform: "translateZ(0)" }}
          >
            {/* Simplified Hero Image with minimal blur effects */}
            <div className="relative z-10 rounded-xl overflow-hidden shadow-xl transform-gpu">
              <div className="aspect-[4/3] bg-white/5 dark:bg-white/5 backdrop-blur-sm flex items-center justify-center border border-gray-200/30 dark:border-white/10 rounded-xl">
                <div className="w-[90%] h-[85%] bg-gray-100/50 dark:bg-white/10 rounded-xl flex items-center justify-center">
                  <div className="text-muted-foreground dark:text-white text-xl font-semibold flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gray-200/70 dark:bg-white/20 flex items-center justify-center">
                      <ArrowRight className="h-6 w-6" />
                    </div>
                    <span>Aperçu du Tableau de Bord</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Floating Chat Support - Lazy loaded */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-gradient-to-br from-teal-400 via-emerald-500 to-cyan-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group">
          <span className="absolute inset-0 bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
          <span className="relative z-10">
            <MessageSquare className="h-6 w-6" />
          </span>
        </button>
      </div>

      {/* Features Section */}
      <Section className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="inline-block mb-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
            >
              FONCTIONNALITÉS
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <H2 className="mb-4">
                <GradientText>Solutions pour exceller dans vos études</GradientText>
              </H2>
            </motion.div>
            
            <div className="w-24 h-1 bg-gradient-blue mx-auto my-3 rounded-full"></div>
            
            <P className="max-w-2xl mx-auto text-lg text-muted-foreground">
              Des formules adaptées à tous les besoins pour vous accompagner dans votre réussite.
            </P>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="h-full"
            >
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full overflow-hidden group relative rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-red-100/40 via-red-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out rounded-2xl"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <CardContent className="p-6 relative z-10">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <CardTitle className="text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    Banque de Questions Exhaustive
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    Accédez à plus de 15,000 questions classées par spécialité, année et difficulté, incluant QCM, QROC et Cas Cliniques avec explications détaillées.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -8 }}
              className="h-full"
            >
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full overflow-hidden group relative rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-blue-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out rounded-2xl"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <CardContent className="p-6 relative z-10">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m3 10H6a2 2 0 01-2-2V7a2 2 0 012-2h2.586a1 1 0 01.707.293l1.414 1.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l1.414-1.414a1 1 0 01.707-.293H18a2 2 0 012 2v10a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <CardTitle className="text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    Analyse de Performance Avancée
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    Suivez votre progression avec des tableaux de bord intelligents, identifiez vos points faibles et recevez des recommandations personnalisées pour optimiser vos révisions.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -8 }}
              className="h-full"
            >
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full overflow-hidden group relative rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-green-100/40 via-green-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out rounded-2xl"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <CardContent className="p-6 relative z-10">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <CardTitle className="text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    Assistant d'Étude IA
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    Bénéficiez d'explications personnalisées générées par IA, obtenez des clarifications instantanées et recevez de l'aide pour résoudre les cas cliniques complexes.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Feature 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              whileHover={{ y: -8 }}
              className="h-full"
            >
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full overflow-hidden group relative rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100/40 via-purple-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out rounded-2xl"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <CardContent className="p-6 relative z-10">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <CardTitle className="text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    Apprentissage Collaboratif
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    Rejoignez des groupes d'étude virtuels, partagez des notes et des questions, et organisez des sessions de révision avec d'autres étudiants en médecine du monde entier.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            {/* Feature 5 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              whileHover={{ y: -8 }}
              className="h-full"
            >
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full overflow-hidden group relative rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-100/40 via-amber-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out rounded-2xl"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <CardContent className="p-6 relative z-10">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <CardTitle className="text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    Planification Intelligente
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    Optimisez votre temps d'étude avec des calendriers personnalisés, des rappels intelligents et des sessions d'étude planifiées selon vos disponibilités et objectifs.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Feature 6 - New */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              whileHover={{ y: -8 }}
              className="h-full"
            >
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full overflow-hidden group relative rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/40 via-indigo-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out rounded-2xl"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-400 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <CardContent className="p-6 relative z-10">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-indigo-100 to-indigo-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <CardTitle className="text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    Accès Multi-Plateformes
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    Utilisez MedPrep sur tous vos appareils. Nos applications web, mobile et tablette se synchronisent pour vous offrir une expérience fluide où que vous soyez.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="mt-10 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="inline-block"
            >
              <Link
                href="/features"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-400 to-cyan-600 text-white rounded-md shadow-md hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300 font-medium"
              >
                Découvrir toutes les fonctionnalités
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Pricing Section */}
      <Section id="pricing" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white/90 to-purple-50/80 backdrop-blur-sm"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="inline-block mb-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium"
            >
              TARIFS
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <H2 className="mb-4">
                <GradientText>Choisissez votre plan</GradientText>
              </H2>
            </motion.div>
            
            <P className="max-w-2xl mx-auto text-lg text-muted-foreground">
              Des formules adaptées à chaque étudiant pour maximiser votre réussite académique.
            </P>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <Card className="bg-white shadow-sm hover:shadow-md transition-all duration-300 relative flex flex-col">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Plan Gratuit</h3>
                <p className="text-sm text-muted-foreground mb-4">Pour commencer à explorer</p>
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-bold">0 Dh</span>
                  <span className="text-muted-foreground ml-2">/pour toujours</span>
                </div>
                <Link 
                  href="/register" 
                  className="block w-full text-center px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors font-medium mb-6"
                >
                  Commencer gratuitement
                </Link>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-gray-600">Accès limité à la banque de questions</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-gray-600">Fonction de base du tableau de bord</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-gray-600">Suivi de progression basique</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 relative flex flex-col border-2 border-teal-500">
              <div className="absolute top-0 right-0 bg-teal-500 text-white px-3 py-1 text-sm font-medium rounded-bl-lg">
                POPULAIRE
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Plan Premium</h3>
                <p className="text-sm text-muted-foreground mb-4">Pour des résultats optimaux</p>
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-bold">100 Dh</span>
                  <span className="text-muted-foreground ml-2">/semestre</span>
                </div>
                <Link 
                  href="/register" 
                  className="block w-full text-center px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors font-medium mb-6"
                >
                  Obtenir Premium
                </Link>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-gray-600">Accès complet à la banque de questions</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-gray-600">Correction et explications détaillées</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-gray-600">Assistance IA pour les QROC</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-gray-600">Statistiques détaillées</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-gray-600">Mode examen chronométré</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Annual Plan */}
            <Card className="bg-white shadow-sm hover:shadow-md transition-all duration-300 relative flex flex-col">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Plan Annuel</h3>
                <p className="text-sm text-muted-foreground mb-4">Pour un engagement sur l'année</p>
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-bold">150 Dh</span>
                  <span className="text-muted-foreground ml-2">/année</span>
                </div>
                <Link 
                  href="/register" 
                  className="block w-full text-center px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors font-medium mb-6"
                >
                  Obtenir le Plan Annuel
                </Link>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-gray-600">Tout ce qui est inclus dans Premium</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-gray-600">50% d'économie par rapport au plan semestriel</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-gray-600">Accès prioritaire aux nouvelles fonctionnalités</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-gray-600">Support prioritaire</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50"></div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-100/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-t from-purple-100/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 lg:p-16 border border-gray-100">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block text-sm font-medium text-blue-600 mb-4">PRÊT À RÉUSSIR ?</span>
                <H2 className="mb-6">
                  <span className="text-gray-600">Commencez votre parcours vers</span>{" "}
                  <GradientText className="from-blue-600 to-blue-400">l'excellence médicale</GradientText>
                </H2>
                <P className="text-lg text-gray-600 mb-8">
                  Rejoignez plus de 15,000 étudiants en médecine qui ont amélioré leurs résultats grâce à MedPrep. 
                  Commencez gratuitement et découvrez comment nous pouvons vous aider à exceller dans vos études.
                </P>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="w-full sm:w-auto"
                  >
                    <Link 
                      href="/register" 
                      className="w-full sm:w-auto px-8 py-4 bg-gradient-blue text-white rounded-md shadow-md hover:shadow-lg transition-all duration-300 font-medium flex items-center justify-center gap-2 group"
                    >
                      Créer un compte gratuit
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="w-full sm:w-auto"
                  >
                    <Link 
                      href="/contact" 
                      className="w-full sm:w-auto px-8 py-4 bg-white border border-gray-300 text-blue-600 rounded-md hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 font-medium flex items-center justify-center gap-2"
                    >
                      Nous contacter
                    </Link>
                  </motion.div>
                </div>
                
                <p className="text-sm text-muted-foreground mt-6">
                  Aucune carte de crédit requise • Annulez à tout moment
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonials/Social Proof */}
      <Section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="inline-block mb-3 px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium"
          >
            TÉMOIGNAGES
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
              <H2 className="text-white mb-6">Nos utilisateurs témoignent</H2>
          </motion.div>
          
            <div className="w-24 h-1 bg-white/50 mx-auto mb-6 rounded-full"></div>
            
            <P className="max-w-2xl mx-auto text-lg text-white/80">
              Découvrez comment MedPrep a transformé l'expérience d'apprentissage pour les étudiants en médecine.
            </P>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="fill-amber-400 w-5 h-5" />
                    ))}
                  </div>
                  <P className="text-white/90 mb-6 italic leading-relaxed">
                    "MedPrep a complètement changé ma façon d'étudier. Les QCM sont pertinents, l'interface est intuitive et l'assistant IA m'a sauvé plusieurs fois lors de mes révisions. Je suis passé de résultats moyens à top 10% de ma promo."
                  </P>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-xl font-bold text-white ring-4 ring-white/10">
                      L
                    </div>
                    <div>
                      <p className="font-semibold text-white">Lucas Martin</p>
                      <p className="text-white/70 text-sm">4ème année, Paris</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

          {/* Testimonial 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="fill-amber-400 w-5 h-5" />
                    ))}
                  </div>
                  <P className="text-white/90 mb-6 italic leading-relaxed">
                    "En tant qu'externe, le temps est précieux. MedPrep m'a permis d'optimiser mes révisions et de cibler mes points faibles grâce à l'analyse de performance. La diversité des questions et la qualité des explications sont impressionnantes."
                  </P>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-xl font-bold text-white ring-4 ring-white/10">
                      S
                    </div>
                    <div>
                      <p className="font-semibold text-white">Sophie Dubois</p>
                      <p className="text-white/70 text-sm">Externe, Lyon</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

          {/* Testimonial 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="fill-amber-400 w-5 h-5" />
                    ))}
                  </div>
                  <P className="text-white/90 mb-6 italic leading-relaxed">
                    "Je recommande vivement MedPrep à tous les étudiants en médecine. La plateforme est riche en contenu, régulièrement mise à jour et les groupes d'étude collaboratifs m'ont permis de rencontrer des personnes incroyables avec qui réviser."
                  </P>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-xl font-bold text-white ring-4 ring-white/10">
                      T
                    </div>
                    <div>
                      <p className="font-semibold text-white">Thomas Leroux</p>
                      <p className="text-white/70 text-sm">3ème année, Bordeaux</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/testimonials" className="text-white/90 hover:text-white underline underline-offset-4 transition-colors">
              Voir tous les témoignages →
            </Link>
          </div>
        </div>
      </Section>

      {/* Stats Section - New Addition */}
      <Section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-muted to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-muted to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              <H2 className="mb-6">
                <GradientText>Approuvé par des milliers d'étudiants</GradientText>
              </H2>
            </motion.div>
            
            <P className="max-w-2xl mx-auto text-lg text-muted-foreground">
              MedPrep en quelques chiffres qui témoignent de notre impact sur la réussite des étudiants.
            </P>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Stat 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">15K+</div>
              <p className="text-muted-foreground">Étudiants actifs</p>
            </motion.div>
            
            {/* Stat 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">95%</div>
              <p className="text-muted-foreground">Taux de satisfaction</p>
            </motion.div>
            
            {/* Stat 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">87%</div>
              <p className="text-muted-foreground">Amélioration des résultats</p>
            </motion.div>
            
            {/* Stat 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">40+</div>
              <p className="text-muted-foreground">Facultés représentées</p>
            </motion.div>
          </div>
        </div>
      </Section>
      
      {/* FAQ Section */}
      <Section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
        <FAQSection />
      </Section>
      
      {/* Footer */}
      <footer className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 py-16">
            {/* Logo and description */}
            <div className="lg:col-span-2">
              <div className="text-2xl font-bold flex items-center gap-2 mb-4">
                <span className="bg-gradient-blue text-white p-1.5 rounded-md shadow-sm">M</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">MedPrep</span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                MedPrep est une plateforme éducative numérique conçue pour les étudiants en médecine, 
                offrant des outils d'apprentissage et d'évaluation de pointe.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Links */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Produit</h3>
              <ul className="space-y-3">
                <li><Link href="/features" className="text-muted-foreground hover:text-primary transition-colors">Fonctionnalités</Link></li>
                <li><Link href="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Tarifs</Link></li>
                <li><Link href="/testimonials" className="text-muted-foreground hover:text-primary transition-colors">Témoignages</Link></li>
                <li><Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Ressources</h3>
              <ul className="space-y-3">
                <li><Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
                <li><Link href="/guides" className="text-muted-foreground hover:text-primary transition-colors">Guides</Link></li>
                <li><Link href="/webinars" className="text-muted-foreground hover:text-primary transition-colors">Webinaires</Link></li>
                <li><Link href="/support" className="text-muted-foreground hover:text-primary transition-colors">Support</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Entreprise</h3>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">À propos</Link></li>
                <li><Link href="/careers" className="text-muted-foreground hover:text-primary transition-colors">Carrières</Link></li>
                <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
                <li><Link href="/partners" className="text-muted-foreground hover:text-primary transition-colors">Partenaires</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="py-6 border-t border-gray-200 md:flex md:items-center md:justify-between">
            <div className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} MedPrep. Tous droits réservés.
            </div>
            <div className="mt-4 md:mt-0 flex space-x-6 text-sm">
              <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Confidentialité</Link>
              <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">Conditions d'utilisation</Link>
              <Link href="/cookies" className="text-muted-foreground hover:text-primary transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-block mb-3 px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
          FAQ
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Questions fréquentes</h2>
        <p className="text-lg text-gray-600">
          Tout ce que vous devez savoir sur MedPrep. Vous ne trouvez pas la réponse que vous cherchez ?{' '}
          <Link href="/contact" className="text-indigo-600 hover:text-indigo-500 font-medium hover:underline">
            Contactez notre équipe support
          </Link>
          .
        </p>
      </div>

      <div className="space-y-3">
        {[
          {
            question: "Quels types de questions trouve-t-on sur la plateforme ?",
            answer: "Nous proposons une banque complète de Questions à Choix Multiples (QCM/QCU), de Questions à Réponse Ouverte Courte (QROC) et de Cas Cliniques, classés par année, module, cours, etc., spécifiquement pour les étudiants en médecine."
          },
          {
            question: "Quelle est la différence entre les plans Gratuit et Payant ?",
            answer: "Le plan Gratuit offre un accès limité (ex: un cours par module, organisateur de tâches basique) pour essayer la plateforme. Les plans Premium (100 Dh/semestre) et Annuel (150 Dh/an) débloquent toutes les questions, toutes les fonctionnalités, l'assistance IA complète (explications/correction) et le support prioritaire."
          },
          {
            question: "Comment ma progression est-elle suivie et classée ?",
            answer: "Vos scores et votre activité sont suivis en temps réel. Vous pouvez consulter vos statistiques personnelles détaillées et voir votre performance comparée aux autres utilisateurs dans notre système de classement (avec options de confidentialité)."
          },
          {
            question: "Comment les réponses sont-elles corrigées, notamment les questions ouvertes (QROC) ? Ai-je des explications ?",
            answer: "Les QCM sont corrigés instantanément. Les QROC sont analysées et corrigées par notre IA intégrée. Pour les utilisateurs premium, l'IA fournit également des explications détaillées pour les réponses afin d'approfondir votre compréhension."
          },
          {
            question: "La plateforme aide-t-elle à organiser mes études ?",
            answer: "Oui ! Nous incluons un Organisateur de Tâches intégré pour gérer vos tâches scolaires, définir des priorités, suivre vos progrès et recevoir des rappels."
          },
          {
            question: "Puis-je utiliser la plateforme sur mon téléphone ou ma tablette ?",
            answer: "Absolument. La plateforme est entièrement responsive et fonctionne parfaitement sur ordinateurs, smartphones et tablettes."
          },
          {
            question: "Comment trouver des examens ou des sujets spécifiques ?",
            answer: "Utilisez notre catalogue d'examens classés (par année, session, etc.) ou le moteur de recherche avancé avec des filtres par matière, difficulté, type de question, et plus encore."
          },
          {
            question: "Puis-je prendre des notes ou créer des quiz personnalisés ?",
            answer: "Oui. Vous pouvez ajouter des notes personnelles (texte/dessin) aux questions, créer des 'playlists' de questions spécifiques et construire vos propres quiz personnalisés pour une révision ciblée."
          },
          {
            question: "Comment puis-je payer mon abonnement ?",
            answer: "Les paiements sécurisés sont principalement gérés par carte bancaire via la plateforme CMI. Contactez le support si vous avez besoin d'informations sur d'autres méthodes de paiement."
          },
          {
            question: "Que faire si je trouve une erreur dans une question ?",
            answer: "Vous pouvez facilement signaler les erreurs potentielles directement depuis l'interface de la question. Vos retours sont précieux pour améliorer continuellement la qualité du contenu."
          }
        ].map((item, index) => (
          <div 
            key={index} 
            className={`bg-white rounded-lg border ${openIndex === index ? 'border-indigo-200 shadow-lg' : 'border-gray-200'} transition-all duration-200`}
          >
            <button 
              onClick={() => toggleQuestion(index)}
              className="w-full px-6 py-5 flex justify-between items-center text-left"
            >
              <h3 className={`text-lg font-medium ${openIndex === index ? 'text-indigo-600' : 'text-gray-900'} transition-colors duration-200`}>
                {item.question}
              </h3>
              <svg 
                className={`h-6 w-6 flex-none transition-transform duration-200 ${openIndex === index ? 'rotate-180 text-indigo-600' : 'text-gray-400'}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <motion.div
              initial={false}
              animate={{ 
                height: openIndex === index ? "auto" : 0,
                opacity: openIndex === index ? 1 : 0
              }}
              transition={{ 
                duration: 0.2,
                ease: "easeInOut"
              }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-5 text-gray-600">
                {item.answer}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
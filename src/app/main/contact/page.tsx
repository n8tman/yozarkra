'use client';

import Link from "next/link";
import { Mail, MapPin, Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/design-system";

// Add TypeScript interfaces
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

interface FormEvent extends React.FormEvent<HTMLFormElement> {
  target: HTMLFormElement;
}

interface InputEvent extends React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> {
  target: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
}

export default function ContactPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e: InputEvent) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Here you would normally handle the form submission to your backend
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    // Reset form after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  // Thank you component that shows after form submission
  const ThankYouMessage = () => (
    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100 text-center transform transition-all duration-500 ease-out animate-fade-in">
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center animate-scale-in">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-4 animate-slide-up">Merci pour votre message!</h2>
      <p className="text-gray-600 mb-8 animate-slide-up delay-100">
        Nous avons bien reçu votre demande et nous vous répondrons dans les plus brefs délais.
      </p>
      <button
        onClick={() => setFormSubmitted(false)}
        className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg font-medium text-sm animate-slide-up delay-200"
      >
        Envoyer un autre message
      </button>
    </div>
  );

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
            <Link href="/pricing" className="nav-link text-white hover:text-teal-400 transition-colors">Tarifs</Link>
            <Link href="/contact" className="nav-link text-teal-400 hover:text-teal-300 transition-colors">Contact</Link>
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
              <Link href="/contact" className="px-3 py-2 bg-[#2a304a] text-teal-400 rounded-md">Contact</Link>
              <Link href="/login" className="px-3 py-2 bg-[#2a304a] text-teal-400 rounded-md font-medium">Se connecter</Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section - using the original styles but with added top padding */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-white via-indigo-50/40 to-white relative overflow-hidden pt-32">
        <div className="absolute inset-0 bg-grid-indigo-500/[0.03] bg-[center_top_-1px] pointer-events-none" aria-hidden="true"></div>
        <div className="max-w-4xl mx-auto relative">
          <div className="text-center">
            <div className="inline-block mb-4 px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium tracking-wide shadow-sm">CONTACTEZ-NOUS</div>
            <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Nous sommes là <span className="text-indigo-600">pour vous aider</span>
            </h1>
            <p className="max-w-2xl mx-auto text-base text-gray-600 leading-relaxed">
              Vous avez des questions ou besoin d'assistance ? Notre équipe est disponible pour vous aider à tirer le meilleur parti de MedPrep.
            </p>
          </div>
        </div>
        <div className="hidden md:block absolute -bottom-8 left-1/2 transform -translate-x-1/2">
          <svg width="200" height="60" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-indigo-600/10">
            <path d="M0 30C0 13.4315 13.4315 0 30 0H170C186.569 0 200 13.4315 200 30C200 46.5685 186.569 60 170 60H30C13.4315 60 0 46.5685 0 30Z" fill="currentColor"/>
          </svg>
        </div>
      </section>

      {/* Contact Section - More Compact */}
      <section className="py-12 px-4 -mt-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form or Thank You Message */}
            {formSubmitted ? (
              <ThankYouMessage />
            ) : (
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-1.5 h-6 bg-indigo-600 rounded-full mr-3 inline-block"></span>
                  Envoyez-nous un message
                </h2>
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        Prénom
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="block w-full px-3 py-2.5 rounded-lg border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all text-gray-900 bg-white placeholder-gray-400"
                        placeholder="Votre prénom"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Nom
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="block w-full px-3 py-2.5 rounded-lg border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all text-gray-900 bg-white placeholder-gray-400"
                        placeholder="Votre nom"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="block w-full px-3 py-2.5 rounded-lg border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all text-gray-900 bg-white placeholder-gray-400"
                      placeholder="votre@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Sujet
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="block w-full px-3 py-2.5 rounded-lg border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all text-gray-900 bg-white"
                      required
                    >
                      <option value="" className="text-gray-500">Sélectionnez un sujet</option>
                      <option value="question" className="text-gray-900">Question générale</option>
                      <option value="support" className="text-gray-900">Support technique</option>
                      <option value="billing" className="text-gray-900">Facturation</option>
                      <option value="feedback" className="text-gray-900">Commentaires/Suggestions</option>
                      <option value="partnership" className="text-gray-900">Partenariat</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="block w-full px-3 py-2.5 rounded-lg border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all resize-none text-gray-900 bg-white placeholder-gray-400"
                      placeholder="Comment pouvons-nous vous aider ?"
                      required
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg hover:translate-y-[-2px] font-medium text-sm focus:ring-4 focus:ring-indigo-500/20"
                    >
                      Envoyer le message
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Contact Information - More Compact */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-indigo-50 to-white p-8 md:p-10 rounded-2xl border border-indigo-100 shadow-lg overflow-hidden relative">
                <div className="absolute right-0 top-0 w-32 h-32 bg-indigo-600/5 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute left-0 bottom-0 w-32 h-32 bg-indigo-600/5 rounded-full -ml-16 -mb-16"></div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-10 flex items-center relative z-10">
                  <span className="w-1.5 h-8 bg-indigo-600 rounded-full mr-3 inline-block"></span>
                  Nos coordonnées
                </h2>
                <div className="space-y-10 relative z-10">
                  <div className="flex items-start group">
                    <div className="flex-shrink-0">
                      <div className="p-3.5 bg-indigo-100 rounded-lg group-hover:bg-indigo-200 transition-colors duration-300 shadow-sm">
                        <MapPin className="h-6 w-6 text-indigo-600" />
                      </div>
                    </div>
                    <div className="ml-5">
                      <h3 className="text-lg font-medium text-gray-900">Adresse</h3>
                      <p className="mt-3 text-gray-600 leading-relaxed">
                        123 Boulevard Mohammed V<br />
                        Casablanca, 20000<br />
                        Maroc
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start group">
                    <div className="flex-shrink-0">
                      <div className="p-3.5 bg-indigo-100 rounded-lg group-hover:bg-indigo-200 transition-colors duration-300 shadow-sm">
                        <Mail className="h-6 w-6 text-indigo-600" />
                      </div>
                    </div>
                    <div className="ml-5">
                      <h3 className="text-lg font-medium text-gray-900">Email</h3>
                      <div className="mt-3 space-y-2">
                        <p className="text-gray-600">
                          <a href="mailto:contact@medprep.ma" className="text-indigo-600 hover:text-indigo-700 transition-colors hover:underline">
                            contact@medprep.ma
                          </a>
                        </p>
                        <p className="text-gray-600">
                          <a href="mailto:support@medprep.ma" className="text-indigo-600 hover:text-indigo-700 transition-colors hover:underline">
                            support@medprep.ma
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start group">
                    <div className="flex-shrink-0">
                      <div className="p-3.5 bg-indigo-100 rounded-lg group-hover:bg-indigo-200 transition-colors duration-300 shadow-sm">
                        <Phone className="h-6 w-6 text-indigo-600" />
                      </div>
                    </div>
                    <div className="ml-5">
                      <h3 className="text-lg font-medium text-gray-900">Téléphone</h3>
                      <div className="mt-3 space-y-2">
                        <p className="text-gray-600">+212 5XX-XXXXXX (Général)</p>
                        <p className="text-gray-600">+212 6XX-XXXXXX (Support)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-8 flex items-center">
                  <span className="w-1 h-6 bg-indigo-600 rounded-full mr-3 inline-block"></span>
                  Suivez-nous
                </h3>
                <div className="flex space-x-5">
                  <a
                    href="#"
                    className="h-12 w-12 flex items-center justify-center rounded-lg bg-[#1877F2] text-white hover:bg-[#1877F2]/90 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110"
                    aria-label="Facebook"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="h-12 w-12 flex items-center justify-center rounded-lg bg-[#1DA1F2] text-white hover:bg-[#1DA1F2]/90 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110"
                    aria-label="Twitter"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="h-12 w-12 flex items-center justify-center rounded-lg bg-[#E4405F] text-white hover:bg-[#E4405F]/90 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110"
                    aria-label="Instagram"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="h-12 w-12 flex items-center justify-center rounded-lg bg-[#0A66C2] text-white hover:bg-[#0A66C2]/90 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white h-[450px] rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            {/* Here you would integrate a map component, for now we're showing a placeholder */}
            <div className="w-full h-full flex items-center justify-center bg-gray-100">
              <div className="text-center">
                <div className="text-gray-500 text-lg font-medium">Carte interactive</div>
                <div className="text-gray-400 text-sm mt-2">Google Maps sera intégré ici</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 mt-20">
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
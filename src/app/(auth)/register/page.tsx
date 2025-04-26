'use client';

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Eye, EyeOff, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Register() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    year: "",
    password: "",
    confirmPassword: "",
    terms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormState(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log(formState);
  };

  // Custom input styles for reuse
  const inputClasses = "w-full px-3 py-2 text-base border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200";
  const selectClasses = "w-full px-3 py-2 text-base border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none bg-white text-gray-900";
  const labelClasses = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col">
      <div className="pt-2 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-2xl font-bold text-gray-900 p-2 hover:bg-white/10 rounded-lg transition-colors">
          <motion.span
            whileHover={{ rotate: 5 }}
            className="bg-blue-600 text-white p-1.5 rounded-md shadow-md"
          >
            M
          </motion.span>
          <span className="relative z-10">MedPrep</span>
        </Link>
      </div>
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="sm:mx-auto sm:w-full sm:max-w-xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="bg-white py-4 px-6 shadow-[0_8px_30px_-15px_rgba(0,0,0,0.2)] rounded-xl sm:px-8 border border-gray-100"
          >
            <div className="mb-3 text-center">
              <h1 className="text-2xl font-bold text-gray-900 mb-1">Créer un compte</h1>
              <p className="text-sm text-gray-500">
                Rejoignez MedPrep pour exceller dans vos études médicales
              </p>
            </div>
            
            <form className="space-y-3" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className={labelClasses}>
                    Prénom
                  </label>
                  <motion.div whileFocus={{ scale: 1.01 }}>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={formState.firstName}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="Votre prénom"
                    />
                  </motion.div>
                </div>
                
                <div>
                  <label htmlFor="lastName" className={labelClasses}>
                    Nom
                  </label>
                  <motion.div whileFocus={{ scale: 1.01 }}>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={formState.lastName}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="Votre nom"
                    />
                  </motion.div>
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className={labelClasses}>
                  Email
                </label>
                <motion.div whileFocus={{ scale: 1.01 }}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="votre.email@exemple.com"
                  />
                </motion.div>
              </div>
              
              <div>
                <label htmlFor="year" className={labelClasses}>
                  Année d'étude
                </label>
                <div className="relative">
                  <motion.div whileFocus={{ scale: 1.01 }}>
                    <select
                      id="year"
                      name="year"
                      required
                      value={formState.year}
                      onChange={handleChange}
                      className={selectClasses}
                    >
                      <option value="" disabled className="text-gray-400">Sélectionnez votre année</option>
                      <option value="1" className="text-gray-900">1ère année</option>
                      <option value="2" className="text-gray-900">2ème année</option>
                      <option value="3" className="text-gray-900">3ème année</option>
                      <option value="4" className="text-gray-900">4ème année</option>
                      <option value="5" className="text-gray-900">5ème année</option>
                      <option value="6" className="text-gray-900">6ème année</option>
                      <option value="internat" className="text-gray-900">Internat</option>
                    </select>
                  </motion.div>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
                    <ChevronDown size={16} />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="password" className={labelClasses}>
                    Mot de passe
                  </label>
                  <div className="relative">
                    <motion.div whileFocus={{ scale: 1.01 }}>
                      <input
                        id="password"
                        name="password"
                        type={passwordVisible ? "text" : "password"}
                        required
                        value={formState.password}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="8 caractères minimum"
                      />
                    </motion.div>
                    <button 
                      type="button"
                      onClick={() => setPasswordVisible(!passwordVisible)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      {passwordVisible ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                  <p className="mt-1 text-xs text-gray-500">
                    Min. 8 car., 1 maj., 1 chiffre
                  </p>
                </div>
                
                <div>
                  <label htmlFor="confirmPassword" className={labelClasses}>
                    Confirmer
                  </label>
                  <div className="relative">
                    <motion.div whileFocus={{ scale: 1.01 }}>
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={confirmPasswordVisible ? "text" : "password"}
                        required
                        value={formState.confirmPassword}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="Confirmez votre mot de passe"
                      />
                    </motion.div>
                    <button 
                      type="button"
                      onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      {confirmPasswordVisible ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="relative flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      required
                      checked={formState.terms}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="text-gray-700">
                      J'accepte les <Link href="/terms" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">conditions d'utilisation</Link> et la <Link href="/privacy" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">politique de confidentialité</Link>
                    </label>
                  </div>
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.01, boxShadow: "0 4px 15px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-md text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 text-base font-medium"
              >
                Créer mon compte
              </motion.button>
            </form>
            
            <div className="flex items-center my-4">
              <div className="flex-grow h-px bg-gray-200"></div>
              <span className="px-4 text-sm text-gray-500">ou</span>
              <div className="flex-grow h-px bg-gray-200"></div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.01, backgroundColor: "#f8fafc" }}
              whileTap={{ scale: 0.99 }}
              type="button"
              className="w-full inline-flex justify-center items-center py-2.5 px-4 border border-gray-200 rounded-lg shadow-sm bg-white text-base font-medium text-gray-700 hover:bg-gray-50 transition-all duration-200 mb-4"
            >
              <svg className="h-5 w-5 mr-3" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
              </svg>
              Continuer avec Google
            </motion.button>
            
            <div className="flex justify-between items-center text-sm mt-4">
              <Link href="/login" className="text-blue-600 hover:text-blue-800 font-medium hover:underline transition-colors">
                Déjà un compte? Se connecter
              </Link>
              
              <motion.div
                whileHover={{ x: -2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors">
                  <ArrowLeft size={16} />
                  Retour à l'accueil
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 
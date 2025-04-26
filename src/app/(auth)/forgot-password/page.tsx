'use client';

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function ForgotPassword() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center mb-6">
          <Link href="/" className="inline-flex items-center gap-2 text-2xl font-bold">
            <span className="bg-primary text-primary-foreground p-1 rounded-md">M</span>
            MedPrep
          </Link>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white py-8 px-6 shadow-xl rounded-xl sm:px-10 border border-gray-100"
        >
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Réinitialiser votre mot de passe</h1>
            <p className="text-sm text-muted-foreground">
              Entrez votre email pour recevoir un lien de réinitialisation
            </p>
          </div>
          
          <form className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="votre.email@exemple.com"
              />
            </div>
            
            <div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Envoyer le lien de réinitialisation
              </motion.button>
            </div>
          </form>
          
          <div className="mt-6 text-center text-sm">
            <p className="text-muted-foreground">
              Vous vous souvenez de votre mot de passe?{" "}
              <Link href="/login" className="text-primary hover:underline">
                Se connecter
              </Link>
            </p>
          </div>
          
          <div className="mt-6">
            <Link href="/" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
              <ArrowLeft size={16} />
              Retour à l'accueil
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 
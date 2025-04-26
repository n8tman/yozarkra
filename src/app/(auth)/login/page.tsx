"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // Direct navigation without authentication
    window.location.href = "/dashboard";
  };

  const handleSocialLogin = () => {
    // Direct navigation without authentication
    window.location.href = "/dashboard";
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Panel - Form */}
      <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center items-center">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link href="/" className="flex items-center justify-center gap-2 text-2xl font-bold text-indigo-600 mb-8">
              <span className="bg-indigo-600 text-white p-1 rounded-md">M</span>
              MedPrep
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Bienvenue</h1>
            <p className="text-gray-600">Connectez-vous à votre compte</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none"
                placeholder="nom@exemple.com"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Mot de passe
                </label>
                <Link 
                  href="/forgot-password" 
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Mot de passe oublié?
                </Link>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                className="block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                Se souvenir de moi
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md shadow-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Connexion en cours..." : "Se connecter"}
            </button>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Ou continuer avec</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={handleSocialLogin}
                className="flex justify-center items-center gap-2 py-2.5 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-gray-700 hover:bg-gray-50 text-sm font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                  <path fill="#4285F4" d="M21.35 11.1h-9.17v2.83h6.51c-.33 3.81-3.5 5.44-6.5 5.44C7.83 19.37 4 15.73 4 11c0-4.6 3.8-8.3 8.17-8.3 2.96 0 5 1.3 6.15 3.18H21c-1-2.82-4-6.88-8.83-6.88C5.75-1 1 4.15 1 11c0 6.7 4.86 12 11.17 12 6.15 0 10.32-4.27 10.32-10.44 0-.52-.04-1.04-.13-1.46z"/>
                </svg>
                Google
              </button>
              <button
                type="button"
                onClick={handleSocialLogin}
                className="flex justify-center items-center gap-2 py-2.5 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-gray-700 hover:bg-gray-50 text-sm font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                  <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </button>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-gray-600">
            Pas encore de compte?{" "}
            <Link href="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
              S'inscrire
            </Link>
          </p>
        </div>
      </div>
      
      {/* Right Panel - Image/Graphic */}
      <div className="hidden lg:block lg:w-1/2 bg-indigo-600 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-blue-700 opacity-90"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-12">
          <div className="max-w-md text-center">
            <h2 className="text-3xl font-bold mb-4">Préparez-vous efficacement avec MedPrep</h2>
            <p className="text-indigo-100 text-lg mb-8">
              Notre plateforme vous aide à organiser vos études, pratiquer avec des milliers de questions et suivre vos progrès.
            </p>
            <div className="flex justify-center space-x-4">
              <div className="bg-indigo-500/30 p-4 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold">10k+</div>
                <div className="text-indigo-200">Questions</div>
              </div>
              <div className="bg-indigo-500/30 p-4 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold">5k+</div>
                <div className="text-indigo-200">Étudiants</div>
              </div>
              <div className="bg-indigo-500/30 p-4 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold">95%</div>
                <div className="text-indigo-200">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
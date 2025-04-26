import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Mock data for Insuffisance rénale questions
const insuffisanceRenaleQuestions = [
  {
    id: 1,
    question: "Quels sont les signes cliniques précoces de l'insuffisance rénale aiguë?",
    type: "QCM",
    difficulty: "medium"
  },
  {
    id: 2,
    question: "Comment interpréter les résultats des tests de la fonction rénale?",
    type: "QCM",
    difficulty: "hard"
  },
  {
    id: 3,
    question: "Quelles sont les indications de la dialyse?",
    type: "QCM",
    difficulty: "medium"
  },
  {
    id: 4,
    question: "Comment distinguer une insuffisance rénale aiguë d'une insuffisance rénale chronique?",
    type: "QCM",
    difficulty: "hard"
  },
  {
    id: 5,
    question: "Quels sont les médicaments néphrotoxiques à éviter?",
    type: "QCM",
    difficulty: "easy"
  }
];

export default function InsuffisanceRenalePage() {
  // For demo purposes, we'll assume the user is authenticated
  // in a real application, you would implement proper auth checks
  
  return (
    <div className="container py-8">
      <div className="mb-8">
        <div className="flex items-center mb-2">
          <Link 
            href="/courses/medex"
            className="mr-4 p-2 rounded-full hover:bg-accent"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
          </Link>
          <h1 className="text-3xl font-bold">
            Insuffisance rénale aiguë et méthodes d'épuration
          </h1>
        </div>
        <div className="flex items-center text-muted-foreground">
          <span className="mr-2">Medex et Secourisme</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
          <span className="ml-2 font-medium">Insuffisance rénale aiguë</span>
        </div>
      </div>

      <div className="bg-card rounded-xl shadow-sm border border-border overflow-hidden mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-xl font-bold">49 Questions</h2>
            <p className="text-muted-foreground text-sm">Dernière mise à jour: il y a 3 semaines</p>
          </div>
          <div className="flex space-x-3 mt-4 sm:mt-0">
            <Button className="bg-pink-500 hover:bg-pink-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              Commencer
            </Button>
            <Button variant="outline">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
              </svg>
              Filtrer
            </Button>
          </div>
        </div>
        <div className="divide-y divide-border">
          {insuffisanceRenaleQuestions.map((q) => (
            <div key={q.id} className="p-6 hover:bg-accent/50">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-lg mb-1">{q.question}</h3>
                  <div className="flex items-center space-x-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                      {q.type}
                    </span>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      q.difficulty === 'easy' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100' :
                      q.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100' :
                      'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100'
                    }`}>
                      {q.difficulty}
                    </span>
                  </div>
                </div>
                <button className="text-muted-foreground hover:text-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 
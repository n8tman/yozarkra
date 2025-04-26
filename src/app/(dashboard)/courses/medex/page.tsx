import { redirect } from "next/navigation";
import Link from "next/link";

// Mock data for Medex topics
const medexTopics = [
  {
    id: "etats-de-choc",
    title: "Etats de choc",
    questionCount: 78,
    image: "/images/medical-equipment.jpg",
    progress: 0
  },
  {
    id: "insuffisance-renale",
    title: "Insuffisance rénale aiguë et méthodes d'épuration",
    questionCount: 49,
    image: "/images/medical-equipment.jpg",
    progress: 0
  },
  {
    id: "insuffisance-respiratoire",
    title: "Insuffisance respiratoire aiguë",
    questionCount: 75,
    image: "/images/medical-equipment.jpg",
    progress: 0
  },
  {
    id: "desordres-metaboliques",
    title: "Désordres métaboliques",
    questionCount: 33,
    image: "/images/medical-equipment.jpg",
    progress: 0
  },
  {
    id: "desordre-acido-basique",
    title: "Désordre acido-basique",
    questionCount: 55,
    image: "/images/medical-equipment.jpg",
    progress: 0
  },
  {
    id: "arret-cardiaque",
    title: "Arrêt cardiaque",
    questionCount: 8,
    image: "/images/medical-equipment.jpg",
    progress: 0
  }
];

export default function MedexCoursePage() {
  // For demo purposes, we'll assume the user is authenticated
  // in a real application, you would implement proper auth checks
  
  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">
          <span className="inline-block mr-2 text-pink-500">🚨</span>
          Medex et Secourisme
        </h1>
        <p className="text-muted-foreground">
          Renforcez vos connaissances en médecine d'urgence et secourisme
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {medexTopics.map((topic) => (
          <Link 
            key={topic.id}
            href={`/courses/medex/${topic.id}`}
            className="bg-card rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="bg-muted h-40 flex items-center justify-center">
              <span className="text-muted-foreground">Image de l'équipement médical</span>
            </div>
            <div className="p-5">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-semibold text-lg">{topic.title}</h3>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-muted-foreground mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-muted-foreground">{topic.questionCount} questions</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-muted h-2 w-24 rounded-full mr-2">
                    <div 
                      className="bg-pink-500 h-2 rounded-full" 
                      style={{ width: `${topic.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-muted-foreground">{topic.progress}%</span>
                </div>
                <span className="text-xs text-muted-foreground hover:text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 
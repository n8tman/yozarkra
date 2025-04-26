import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-[#121826] text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-medium mb-6">Page non trouvée</h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          Nous sommes désolés, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link 
          href="/" 
          className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary hover:bg-primary/90 text-white font-medium transition-colors"
        >
          Retourner à l'accueil
        </Link>
      </div>
    </div>
  );
} 
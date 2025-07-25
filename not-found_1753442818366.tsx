import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-md mx-auto text-center px-6">
        <div className="text-9xl font-bold text-primary mb-4">404</div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Página no encontrada
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Lo sentimos, la página que buscas no existe.
        </p>
        <Link 
          href="/" 
          className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors duration-200"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
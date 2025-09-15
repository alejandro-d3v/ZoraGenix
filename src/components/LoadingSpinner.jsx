import React from 'react';

const LoadingSpinner = ({ message = "Procesando...", progress = null }) => {
  return (
    <div className="card">
      <div className="flex flex-col items-center justify-center py-8 space-y-4">
        {/* Spinner principal */}
        <div className="relative">
          <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 bg-primary-600 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Mensaje de estado */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Generando tu imagen
          </h3>
          <p className="text-gray-600">
            {message}
          </p>
        </div>

        {/* Barra de progreso (opcional) */}
        {progress !== null && (
          <div className="w-full max-w-xs">
            <div className="bg-gray-200 rounded-full h-2">
              <div 
                className="bg-primary-600 h-2 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 mt-1 text-center">
              {Math.round(progress)}% completado
            </p>
          </div>
        )}

        {/* Puntos animados */}
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-primary-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-primary-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-primary-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>

        {/* Consejos mientras espera */}
        <div className="mt-6 p-4 bg-blue-50 rounded-lg max-w-md">
          <h4 className="text-sm font-medium text-blue-900 mb-2">
            💡 Mientras esperas...
          </h4>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• La IA está analizando tu solicitud</li>
            <li>• Imágenes complejas pueden tomar más tiempo</li>
            <li>• El resultado será de alta calidad</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
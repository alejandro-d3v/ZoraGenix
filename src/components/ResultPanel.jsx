import React, { useState } from 'react';

const ResultPanel = ({ generatedImage, onDownload, onClear }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (!generatedImage) {
    return null;
  }

  const handleFullscreen = () => {
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  const handleDownload = () => {
    const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, '-');
    const filename = `zoragenix-${timestamp}.png`;
    onDownload(filename);
  };

  return (
    <>
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Imagen Generada</h2>
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1 text-green-600">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium">Completado</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {/* Imagen generada */}
          <div className="relative group">
            <img
              src={generatedImage.url}
              alt="Imagen generada por IA"
              className="w-full h-auto max-h-96 object-contain bg-gray-50 rounded-lg border border-gray-200 cursor-pointer"
              onClick={handleFullscreen}
            />
            
            {/* Overlay con acciones */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
              <button
                onClick={handleFullscreen}
                className="bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-900 px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
                <span>Ver en pantalla completa</span>
              </button>
            </div>
          </div>

          {/* Acciones */}
          <div className="flex space-x-3">
            <button
              onClick={handleDownload}
              className="btn-primary flex-1"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Descargar Imagen
            </button>
            
            <button
              onClick={onClear}
              className="btn-secondary"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Limpiar
            </button>
          </div>

          {/* Información adicional */}
          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="text-sm font-medium text-green-900 mb-2">
              ✨ ¡Imagen generada exitosamente!
            </h3>
            <p className="text-sm text-green-800">
              Tu imagen ha sido creada usando inteligencia artificial. 
              Puedes descargarla o generar una nueva variación.
            </p>
          </div>
        </div>
      </div>

      {/* Modal de pantalla completa */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-full max-h-full">
            <img
              src={generatedImage.url}
              alt="Imagen generada por IA - Pantalla completa"
              className="max-w-full max-h-full object-contain"
            />
            
            {/* Botón cerrar */}
            <button
              onClick={closeFullscreen}
              className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Botón descargar en pantalla completa */}
            <button
              onClick={handleDownload}
              className="absolute bottom-4 right-4 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Descargar</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ResultPanel;
import React, { useState } from 'react';
import { Download, X, Maximize2, RotateCcw, Sparkles } from 'lucide-react';

/**
 * Componente para mostrar la comparación lado a lado entre imagen original y generada
 */
export const ImageComparison = ({
  originalImage,
  originalImagePreview,
  generatedImage,
  onDownload,
  onClearOriginal,
  onClearGenerated,
  isGenerating = false
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  const handleDownload = () => {
    if (generatedImage) {
      const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, '-');
      const filename = `zoragenix-${timestamp}.png`;
      onDownload(filename);
    }
  };

  const handleFullscreen = (imageType) => {
    setActiveImage(imageType);
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    setActiveImage(null);
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Comparación de Imágenes</h2>
                <p className="text-purple-100 text-sm">
                  {isGenerating ? 'Generando nueva imagen...' : 'Original vs Generada'}
                </p>
              </div>
            </div>
            
            {generatedImage && (
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 bg-green-500 bg-opacity-20 px-3 py-1 rounded-full">
                  <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                  <span className="text-green-100 text-sm font-medium">Completado</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Contenido principal */}
        <div className="p-6">
          {/* Grid de imágenes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Imagen Original */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  Imagen Original
                </h3>
                {originalImage && (
                  <button
                    onClick={onClearOriginal}
                    className="text-red-500 hover:text-red-700 p-1 rounded-lg hover:bg-red-50 transition-colors"
                    title="Eliminar imagen original"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {originalImage ? (
                <div className="space-y-4">
                  {/* Imagen */}
                  <div className="relative group">
                    <img
                      src={originalImagePreview}
                      alt="Imagen original"
                      className="w-full h-64 lg:h-80 object-contain bg-gray-50 rounded-lg border border-gray-200 cursor-pointer"
                      onClick={() => handleFullscreen('original')}
                    />
                    
                    {/* Overlay con acciones */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <button
                        onClick={() => handleFullscreen('original')}
                        className="bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-900 px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2"
                      >
                        <Maximize2 className="w-4 h-4" />
                        <span>Ver en grande</span>
                      </button>
                    </div>
                  </div>

                  {/* Información del archivo */}
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-blue-900 mb-2">Información del archivo</h4>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <span className="text-blue-700">Nombre:</span>
                        <p className="font-medium text-blue-900 truncate" title={originalImage.name}>
                          {originalImage.name}
                        </p>
                      </div>
                      <div>
                        <span className="text-blue-700">Tamaño:</span>
                        <p className="font-medium text-blue-900">
                          {formatFileSize(originalImage.size)}
                        </p>
                      </div>
                      <div>
                        <span className="text-blue-700">Tipo:</span>
                        <p className="font-medium text-blue-900">
                          {originalImage.mimeType}
                        </p>
                      </div>
                      <div>
                        <span className="text-blue-700">Estado:</span>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="font-medium text-green-700">Listo</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-64 lg:h-80 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-gray-500 text-sm">No hay imagen original</p>
                    <p className="text-gray-400 text-xs mt-1">Sube una imagen para comenzar</p>
                  </div>
                </div>
              )}
            </div>

            {/* Imagen Generada */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  Imagen Generada
                </h3>
                {generatedImage && (
                  <button
                    onClick={onClearGenerated}
                    className="text-red-500 hover:text-red-700 p-1 rounded-lg hover:bg-red-50 transition-colors"
                    title="Eliminar imagen generada"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {isGenerating ? (
                <div className="h-64 lg:h-80 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg border border-purple-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-purple-700 font-medium">Generando imagen...</p>
                    <p className="text-purple-600 text-sm mt-1">La IA está procesando tu solicitud</p>
                  </div>
                </div>
              ) : generatedImage ? (
                <div className="space-y-4">
                  {/* Imagen */}
                  <div className="relative group">
                    <img
                      src={generatedImage.url}
                      alt="Imagen generada por IA"
                      className="w-full h-64 lg:h-80 object-contain bg-gray-50 rounded-lg border border-gray-200 cursor-pointer"
                      onClick={() => handleFullscreen('generated')}
                    />
                    
                    {/* Overlay con acciones */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <button
                        onClick={() => handleFullscreen('generated')}
                        className="bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-900 px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2"
                      >
                        <Maximize2 className="w-4 h-4" />
                        <span>Ver en grande</span>
                      </button>
                    </div>
                  </div>

                  {/* Información de la generación */}
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-purple-900 mb-2">✨ Generada con IA</h4>
                    <p className="text-sm text-purple-800">
                      Imagen creada usando inteligencia artificial. 
                      Puedes descargarla o generar una nueva variación.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="h-64 lg:h-80 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Sparkles className="w-6 h-6 text-gray-400" />
                    </div>
                    <p className="text-gray-500 text-sm">No hay imagen generada</p>
                    <p className="text-gray-400 text-xs mt-1">Genera una imagen para ver el resultado</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Acciones principales */}
          {generatedImage && (
            <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <Download className="w-5 h-5" />
                Descargar Imagen
              </button>
              
              <button
                onClick={onClearGenerated}
                className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <RotateCcw className="w-5 h-5" />
                Generar Nueva
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Modal de pantalla completa */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-full max-h-full">
            <img
              src={activeImage === 'original' ? originalImagePreview : generatedImage?.url}
              alt={activeImage === 'original' ? 'Imagen original - Pantalla completa' : 'Imagen generada - Pantalla completa'}
              className="max-w-full max-h-full object-contain"
            />
            
            {/* Botón cerrar */}
            <button
              onClick={closeFullscreen}
              className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Botón descargar en pantalla completa (solo para imagen generada) */}
            {activeImage === 'generated' && generatedImage && (
              <button
                onClick={handleDownload}
                className="absolute bottom-4 right-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                <span>Descargar</span>
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

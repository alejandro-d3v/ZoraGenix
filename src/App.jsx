import React, { useState } from 'react';
import { useApiConnection } from './hooks/useApiConnection';
import { useImageUpload } from './hooks/useImageUpload';
import { useImageGeneration } from './hooks/useImageGeneration';

import ApiKeyInput from './components/ApiKeyInput';
import ImageUploader from './components/ImageUploader';
import ImagePreview from './components/ImagePreview';
import PromptInput from './components/PromptInput';
import LoadingSpinner from './components/LoadingSpinner';
import ResultPanel from './components/ResultPanel';
import MetadataPanel from './components/MetadataPanel';

function App() {
  const [activeTab, setActiveTab] = useState('generate');
  
  // Hooks personalizados
  const {
    apiKey,
    isConnected,
    isValidating,
    error: apiError,
    saveApiKey,
    clearApiKey
  } = useApiConnection();

  const {
    uploadedImage,
    imagePreview,
    isUploading,
    error: uploadError,
    handleImageUpload,
    clearImage,
    handleDrop,
    handleDragOver
  } = useImageUpload();

  const {
    isGenerating,
    generatedImage,
    metadata,
    error: generationError,
    generateImage,
    downloadImage,
    clearGeneration
  } = useImageGeneration();

  // Manejar generación de imagen
  const handleGenerate = async (prompt) => {
    await generateImage(apiKey, prompt, uploadedImage);
  };

  // Limpiar todo
  const handleClearAll = () => {
    clearImage();
    clearGeneration();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">ZoraGenix</h1>
                <p className="text-sm text-gray-500">Editor de Fotos con IA</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                v1.0.0
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs de navegación */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('generate')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'generate'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Generar / Editar
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'settings'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Configuración
              </button>
            </nav>
          </div>
        </div>

        {/* Contenido de las tabs */}
        {activeTab === 'settings' && (
          <div className="max-w-2xl">
            <ApiKeyInput
              apiKey={apiKey}
              isConnected={isConnected}
              isValidating={isValidating}
              error={apiError}
              onSaveApiKey={saveApiKey}
              onClearApiKey={clearApiKey}
            />
          </div>
        )}

        {activeTab === 'generate' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Columna izquierda - Controles */}
            <div className="lg:col-span-1 space-y-6">
              {/* Configuración de API (compacta) */}
              {!isConnected && (
                <div className="card">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-medium text-gray-900">API Key</h3>
                    <button
                      onClick={() => setActiveTab('settings')}
                      className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                    >
                      Configurar →
                    </button>
                  </div>
                  <div className="flex items-center space-x-2 text-red-600">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-sm">No configurada</span>
                  </div>
                </div>
              )}

              {/* Carga de imagen */}
              <ImageUploader
                onImageUpload={handleImageUpload}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                isUploading={isUploading}
                error={uploadError}
              />

              {/* Vista previa de imagen */}
              {uploadedImage && (
                <ImagePreview
                  image={uploadedImage}
                  imagePreview={imagePreview}
                  onClearImage={clearImage}
                />
              )}

              {/* Input de prompt */}
              <PromptInput
                onGenerate={handleGenerate}
                isGenerating={isGenerating}
                hasImage={!!uploadedImage}
                isConnected={isConnected}
              />

              {/* Botón limpiar todo */}
              {(uploadedImage || generatedImage) && (
                <button
                  onClick={handleClearAll}
                  className="btn-secondary w-full"
                  disabled={isGenerating}
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Limpiar Todo
                </button>
              )}
            </div>

            {/* Columna derecha - Resultados */}
            <div className="lg:col-span-2 space-y-6">
              {/* Estado de carga */}
              {isGenerating && (
                <LoadingSpinner message="La IA está procesando tu solicitud..." />
              )}

              {/* Error de generación */}
              {generationError && !isGenerating && (
                <div className="card">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-red-900">Error en la Generación</h3>
                      <p className="text-red-700">{generationError}</p>
                    </div>
                  </div>
                  <div className="bg-red-50 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-red-900 mb-2">Posibles soluciones:</h4>
                    <ul className="text-sm text-red-800 space-y-1">
                      <li>• Verifica que tu API Key sea válida</li>
                      <li>• Intenta con un prompt más simple</li>
                      <li>• Asegúrate de tener conexión a internet</li>
                      <li>• Revisa que la imagen no sea demasiado grande</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Panel de resultados */}
              {generatedImage && !isGenerating && (
                <ResultPanel
                  generatedImage={generatedImage}
                  onDownload={downloadImage}
                  onClear={clearGeneration}
                />
              )}

              {/* Panel de metadatos */}
              {metadata && !isGenerating && (
                <MetadataPanel metadata={metadata} />
              )}

              {/* Estado inicial */}
              {!isGenerating && !generatedImage && !generationError && (
                <div className="card text-center py-12">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    ¡Bienvenido a ZoraGenix!
                  </h3>
                  <p className="text-gray-600 mb-6 max-w-md mx-auto">
                    {isConnected 
                      ? "Carga una imagen para editarla o escribe un prompt para generar una nueva imagen con IA."
                      : "Configura tu API Key para comenzar a generar imágenes increíbles con inteligencia artificial."
                    }
                  </p>
                  {!isConnected && (
                    <button
                      onClick={() => setActiveTab('settings')}
                      className="btn-primary"
                    >
                      Configurar API Key
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              © 2024 ZoraGenix. Potenciado por Gemini 2.5 Flash Image Preview.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>Versión 1.0.0</span>
              <span>•</span>
              <a 
                href="https://ai.google.dev/gemini-api/docs/image-generation" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary-600"
              >
                Documentación API
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
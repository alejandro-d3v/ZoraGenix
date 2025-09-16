/* eslint-disable no-unused-vars */
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
import { PromptGallery } from './components/PromptGallery';
import { PromptEditor } from './components/PromptEditor';

function App() {
  const [activeTab, setActiveTab] = useState('generate');
  const [selectedPrompt, setSelectedPrompt] = useState('');
  const [selectedCase, setSelectedCase] = useState(null);

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
    setSelectedPrompt('');
    setSelectedCase(null);
  };

  // Manejar selección de prompt desde la galería
  const handlePromptSelect = (prompt) => {
    setSelectedPrompt(prompt);
    setActiveTab('generate'); // Cambiar a la pestaña de generación
  };

  // Manejar selección de caso desde la galería
  const handleCaseSelect = (caseItem) => {
    setSelectedCase(caseItem);
    setSelectedPrompt(caseItem.prompt);
    setActiveTab('generate'); // Cambiar a la pestaña de generación
  };

  // Manejar cambio de prompt en el editor
  const handlePromptChange = (newPrompt) => {
    setSelectedPrompt(newPrompt);
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
                <p className="text-sm text-gray-500">Editor de Fotos con IA v1.2</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {selectedCase && (
                <div className="text-sm text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                  Usando: {selectedCase.title}
                </div>
              )}
              <div className="text-sm text-gray-600">
                v1.2.0
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
                onClick={() => setActiveTab('prompts')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'prompts'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Exploración de Prompts
                <span className="ml-2 bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full text-xs font-medium">
                  Nuevo
                </span>
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

        {activeTab === 'prompts' && (
          <PromptGallery
            onPromptSelect={handlePromptSelect}
            onCaseSelect={handleCaseSelect}
          />
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

              {/* Editor de prompt */}
              {(selectedPrompt || selectedCase) && (
                <PromptEditor
                  initialPrompt={selectedPrompt}
                  selectedCase={selectedCase}
                  onPromptChange={handlePromptChange}
                  disabled={isGenerating}
                />
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
                initialPrompt={selectedPrompt}
                onPromptChange={setSelectedPrompt}
              />

              {/* Acciones rápidas */}
              <div className="flex gap-2">
                {!selectedPrompt && (
                  <button
                    onClick={() => setActiveTab('prompts')}
                    className="btn-secondary flex-1 text-sm"
                    disabled={isGenerating}
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    Explorar Prompts
                  </button>
                )}

                {/* Botón limpiar todo */}
                {(uploadedImage || generatedImage || selectedPrompt) && (
                  <button
                    onClick={handleClearAll}
                    className="btn-secondary flex-1 text-sm"
                    disabled={isGenerating}
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Limpiar Todo
                  </button>
                )}
              </div>
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
                    ¡Bienvenido a ZoraGenix v1.2!
                  </h3>
                  <p className="text-gray-600 mb-6 max-w-md mx-auto">
                    {selectedPrompt
                      ? 'Tienes un prompt seleccionado. Sube una imagen y genera tu creación.'
                      : 'Crea imágenes increíbles con IA. Sube una imagen, escribe un prompt o explora nuestra galería de prompts predefinidos.'
                    }
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    {!selectedPrompt && (
                      <button
                        onClick={() => setActiveTab('prompts')}
                        className="btn-primary"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        Explorar Prompts
                      </button>
                    )}
                    <button
                      onClick={() => setActiveTab('settings')}
                      className={selectedPrompt ? 'btn-primary' : 'btn-secondary'}
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {isConnected ? 'Configuración' : 'Configurar API Key'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;

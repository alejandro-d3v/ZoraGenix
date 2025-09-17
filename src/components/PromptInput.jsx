/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

const PromptInput = ({
  onGenerate,
  isGenerating,
  hasImage,
  isConnected,
  initialPrompt = '',
  onPromptChange
}) => {
  const [prompt, setPrompt] = useState(initialPrompt);
  const [charCount, setCharCount] = useState(initialPrompt.length);
  const maxChars = 2000;

  // Actualizar prompt cuando cambie el inicial
  useEffect(() => {
    setPrompt(initialPrompt);
    setCharCount(initialPrompt.length);
  }, [initialPrompt]);

  const handlePromptChange = (e) => {
    const value = e.target.value;
    if (value.length <= maxChars) {
      setPrompt(value);
      setCharCount(value.length);
      if (onPromptChange) {
        onPromptChange(value);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (prompt.trim() && !isGenerating && isConnected) {
      onGenerate(prompt.trim());
    }
  };

  const isDisabled = !isConnected || isGenerating || !prompt.trim();

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            {hasImage ? 'Editar Imagen' : 'Generar Imagen'}
          </h2>
          <p className="text-sm text-gray-500">
            {hasImage ? 'Describe los cambios que quieres hacer' : 'Describe lo que quieres crear'}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-3">
            Prompt de IA
          </label>
          <div className="relative">
            <textarea
              id="prompt"
              value={prompt}
              onChange={handlePromptChange}
              placeholder={hasImage
                ? "Ej: Cambia el fondo por un paisaje de montañas, mejora la iluminación, haz que se vea más profesional..."
                : "Ej: Un gato naranja con ojos verdes sentado en un sofá, estilo realista, iluminación suave..."
              }
              rows={5}
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none transition-all duration-200 disabled:bg-gray-50 disabled:text-gray-500"
              disabled={isGenerating}
            />
            <div className="absolute bottom-3 right-3 text-xs text-gray-400 bg-white px-2 py-1 rounded">
              {charCount}/{maxChars}
            </div>
          </div>
          
          {/* Sugerencias rápidas */}
          <div className="mt-3">
            <p className="text-xs text-gray-500 mb-2">Sugerencias rápidas:</p>
            <div className="flex flex-wrap gap-2">
              {hasImage ? (
                <>
                  <button
                    type="button"
                    onClick={() => setPrompt(prompt + ', mejora la iluminación')}
                    className="text-xs bg-purple-100 hover:bg-purple-200 text-purple-700 px-2 py-1 rounded-full transition-colors"
                    disabled={isGenerating}
                  >
                    + Iluminación
                  </button>
                  <button
                    type="button"
                    onClick={() => setPrompt(prompt + ', fondo profesional')}
                    className="text-xs bg-purple-100 hover:bg-purple-200 text-purple-700 px-2 py-1 rounded-full transition-colors"
                    disabled={isGenerating}
                  >
                    + Fondo
                  </button>
                  <button
                    type="button"
                    onClick={() => setPrompt(prompt + ', alta calidad')}
                    className="text-xs bg-purple-100 hover:bg-purple-200 text-purple-700 px-2 py-1 rounded-full transition-colors"
                    disabled={isGenerating}
                  >
                    + Calidad
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => setPrompt(prompt + ', estilo realista')}
                    className="text-xs bg-purple-100 hover:bg-purple-200 text-purple-700 px-2 py-1 rounded-full transition-colors"
                    disabled={isGenerating}
                  >
                    + Realista
                  </button>
                  <button
                    type="button"
                    onClick={() => setPrompt(prompt + ', alta resolución')}
                    className="text-xs bg-purple-100 hover:bg-purple-200 text-purple-700 px-2 py-1 rounded-full transition-colors"
                    disabled={isGenerating}
                  >
                    + HD
                  </button>
                  <button
                    type="button"
                    onClick={() => setPrompt(prompt + ', iluminación dramática')}
                    className="text-xs bg-purple-100 hover:bg-purple-200 text-purple-700 px-2 py-1 rounded-full transition-colors"
                    disabled={isGenerating}
                  >
                    + Dramático
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={isDisabled}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-gray-400 disabled:to-gray-500 text-white px-6 py-4 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:transform-none disabled:shadow-none"
        >
          {isGenerating ? (
            <div className="flex items-center justify-center space-x-3">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span className="text-lg">Generando imagen...</span>
            </div>
          ) : (
            <div className="flex items-center justify-center space-x-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-lg">{hasImage ? 'Editar Imagen' : 'Generar Imagen'}</span>
            </div>
          )}
        </button>

        {!isConnected && (
          <div className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-yellow-900">API Key requerida</p>
                <p className="text-sm text-yellow-800">
                  Configura tu API Key para comenzar a generar imágenes
                </p>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default PromptInput;

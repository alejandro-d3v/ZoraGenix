import React, { useState } from 'react';

const PromptInput = ({ onGenerate, isGenerating, hasImage, isConnected }) => {
  const [prompt, setPrompt] = useState('');
  const [charCount, setCharCount] = useState(0);
  const maxChars = 2000;

  const handlePromptChange = (e) => {
    const value = e.target.value;
    if (value.length <= maxChars) {
      setPrompt(value);
      setCharCount(value.length);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (prompt.trim() && !isGenerating && isConnected) {
      onGenerate(prompt.trim());
    }
  };

  const isDisabled = !isConnected || isGenerating || !prompt.trim();

  const examplePrompts = [
    "Convierte esta imagen en un estilo de pintura al óleo",
    "Cambia el fondo por un paisaje de montañas al atardecer",
    "Añade efectos de lluvia y atmósfera dramática",
    "Transforma la imagen en un estilo de cómic anime",
    "Mejora la iluminación y los colores de la imagen"
  ];

  const handleExampleClick = (example) => {
    setPrompt(example);
    setCharCount(example.length);
  };

  return (
    <div className="card">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        {hasImage ? 'Editar Imagen' : 'Generar Imagen'}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-2">
            Describe lo que quieres {hasImage ? 'cambiar o mejorar' : 'crear'}
          </label>
          <div className="relative">
            <textarea
              id="prompt"
              value={prompt}
              onChange={handlePromptChange}
              placeholder={hasImage 
                ? "Ej: Cambia el fondo por un paisaje de montañas, mejora la iluminación..."
                : "Ej: Un gato naranja con ojos verdes sentado en un sofá..."
              }
              rows={4}
              className="input-field resize-none"
              disabled={isGenerating}
            />
            <div className="absolute bottom-2 right-2 text-xs text-gray-500">
              {charCount}/{maxChars}
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={isDisabled}
          className="btn-primary w-full"
        >
          {isGenerating ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Generando...</span>
            </div>
          ) : (
            <div className="flex items-center justify-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>{hasImage ? 'Editar Imagen' : 'Generar Imagen'}</span>
            </div>
          )}
        </button>

        {!isConnected && (
          <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <p className="text-sm text-yellow-800">
                Configura tu API Key para comenzar a generar imágenes
              </p>
            </div>
          </div>
        )}
      </form>

      {/* Ejemplos de prompts */}
      {!isGenerating && (
        <div className="mt-6">
          <h3 className="text-sm font-medium text-gray-900 mb-3">
            {hasImage ? 'Ejemplos de edición:' : 'Ejemplos de prompts:'}
          </h3>
          <div className="space-y-2">
            {examplePrompts.map((example, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleExampleClick(example)}
                className="text-left w-full p-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                disabled={isGenerating}
              >
                "{example}"
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PromptInput;
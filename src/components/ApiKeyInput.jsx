import React, { useState } from 'react';

const ApiKeyInput = ({ apiKey, isConnected, isValidating, error, onSaveApiKey, onClearApiKey }) => {
  const [inputValue, setInputValue] = useState(apiKey);
  const [showKey, setShowKey] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSaveApiKey(inputValue);
  };

  const getStatusColor = () => {
    if (isValidating) return 'text-yellow-600';
    if (isConnected) return 'text-green-600';
    if (error) return 'text-red-600';
    return 'text-gray-500';
  };

  const getStatusText = () => {
    if (isValidating) return 'Validando...';
    if (isConnected) return 'Conectado';
    if (error) return error;
    return 'No conectado';
  };

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Configuración de API</h2>
        <div className={`flex items-center space-x-2 ${getStatusColor()}`}>
          <div className={`w-2 h-2 rounded-full ${
            isValidating ? 'bg-yellow-500 animate-pulse' :
            isConnected ? 'bg-green-500' :
            error ? 'bg-red-500' : 'bg-gray-400'
          }`}></div>
          <span className="text-sm font-medium">{getStatusText()}</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="apiKey" className="block text-sm font-medium text-gray-700 mb-2">
            Google AI Studio API Key
          </label>
          <div className="relative">
            <input
              id="apiKey"
              type={showKey ? 'text' : 'password'}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ingresa tu API Key de Google AI Studio"
              className="input-field pr-20"
              disabled={isValidating}
            />
            <div className="absolute inset-y-0 right-0 flex items-center space-x-1 pr-3">
              <button
                type="button"
                onClick={() => setShowKey(!showKey)}
                className="text-gray-400 hover:text-gray-600 p-1"
                disabled={isValidating}
              >
                {showKey ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
              {isConnected && (
                <button
                  type="button"
                  onClick={onClearApiKey}
                  className="text-red-400 hover:text-red-600 p-1"
                  title="Limpiar API Key"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="flex space-x-3">
          <button
            type="submit"
            disabled={isValidating || !inputValue.trim()}
            className="btn-primary flex-1"
          >
            {isValidating ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Validando...</span>
              </div>
            ) : (
              'Guardar API Key'
            )}
          </button>
        </div>
      </form>

      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
        <p className="text-sm text-blue-800">
          <strong>¿Necesitas una API Key?</strong> Obtén una gratis en{' '}
          <a 
            href="https://aistudio.google.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline hover:text-blue-900"
          >
            Google AI Studio
          </a>
        </p>
      </div>
    </div>
  );
};

export default ApiKeyInput;
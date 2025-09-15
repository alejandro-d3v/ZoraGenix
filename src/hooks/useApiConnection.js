import { useState, useEffect } from 'react';

export const useApiConnection = () => {
  const [apiKey, setApiKey] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [isValidating, setIsValidating] = useState(false);
  const [error, setError] = useState('');

  // Cargar API key desde localStorage al inicializar
  useEffect(() => {
    const savedApiKey = localStorage.getItem('zoragenix_api_key');
    if (savedApiKey) {
      setApiKey(savedApiKey);
      validateApiKey(savedApiKey);
    }
  }, []);

  const validateApiKey = async (key) => {
    if (!key || key.trim().length === 0) {
      setIsConnected(false);
      setError('API Key es requerida');
      return false;
    }

    setIsValidating(true);
    setError('');

    try {
      // Validación básica del formato de la API key
      if (!key.startsWith('AIza') || key.length < 30) {
        throw new Error('Formato de API Key inválido');
      }

      // Aquí podrías hacer una llamada de prueba a la API
      // Por ahora solo validamos el formato
      setIsConnected(true);
      setError('');
      return true;
    } catch (err) {
      setIsConnected(false);
      setError(err.message || 'Error validando API Key');
      return false;
    } finally {
      setIsValidating(false);
    }
  };

  const saveApiKey = async (key) => {
    const isValid = await validateApiKey(key);
    if (isValid) {
      setApiKey(key);
      localStorage.setItem('zoragenix_api_key', key);
    }
    return isValid;
  };

  const clearApiKey = () => {
    setApiKey('');
    setIsConnected(false);
    setError('');
    localStorage.removeItem('zoragenix_api_key');
  };

  return {
    apiKey,
    isConnected,
    isValidating,
    error,
    saveApiKey,
    clearApiKey,
    validateApiKey
  };
};
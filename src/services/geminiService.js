import { GoogleGenAI } from '@google/genai';

class GeminiService {
  constructor() {
    this.client = null;
    this.apiKey = null;
  }

  // Inicializar el cliente con la API key
  initialize(apiKey) {
    if (!apiKey) {
      throw new Error('API Key es requerida');
    }
    
    this.apiKey = apiKey;
    this.client = new GoogleGenAI({ apiKey });
  }

  // Verificar si el servicio está inicializado
  isInitialized() {
    return this.client !== null && this.apiKey !== null;
  }

  // Generar imagen desde texto
  async generateImageFromText(prompt) {
    if (!this.isInitialized()) {
      throw new Error('Servicio no inicializado. Llama a initialize() primero.');
    }

    if (!prompt || prompt.trim().length === 0) {
      throw new Error('El prompt es requerido');
    }

    try {
      const response = await this.client.models.generateContent({
        model: "gemini-2.5-flash-image-preview",
        contents: prompt.trim(),
      });

      return this.processResponse(response);
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Editar imagen con texto e imagen de entrada
  async editImageWithPrompt(prompt, imageData) {
    if (!this.isInitialized()) {
      throw new Error('Servicio no inicializado. Llama a initialize() primero.');
    }

    if (!prompt || prompt.trim().length === 0) {
      throw new Error('El prompt es requerido');
    }

    if (!imageData || !imageData.base64 || !imageData.mimeType) {
      throw new Error('Datos de imagen inválidos');
    }

    try {
      const contents = [
        { text: prompt.trim() },
        {
          inlineData: {
            mimeType: imageData.mimeType,
            data: imageData.base64,
          },
        },
      ];

      const response = await this.client.models.generateContent({
        model: "gemini-2.5-flash-image-preview",
        contents: contents,
      });

      return this.processResponse(response);
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Procesar la respuesta de la API
  processResponse(response) {
    if (!response || !response.candidates || response.candidates.length === 0) {
      throw new Error('Respuesta inválida de la API');
    }

    const candidate = response.candidates[0];
    if (!candidate.content || !candidate.content.parts) {
      throw new Error('Contenido de respuesta inválido');
    }

    let imageData = null;
    let textResponse = '';

    for (const part of candidate.content.parts) {
      if (part.text) {
        textResponse += part.text;
      } else if (part.inlineData) {
        imageData = part.inlineData.data;
      }
    }

    if (!imageData) {
      throw new Error('No se generó ninguna imagen en la respuesta');
    }

    return {
      imageData,
      textResponse: textResponse || null,
      rawResponse: response
    };
  }

  // Manejar errores de la API
  handleError(error) {
    console.error('Error en GeminiService:', error);

    // Errores específicos de la API
    if (error.status === 401) {
      return new Error('API Key inválida o expirada');
    }

    if (error.status === 403) {
      return new Error('Acceso denegado. Verifica tu API Key y permisos');
    }

    if (error.status === 429) {
      return new Error('Límite de solicitudes excedido. Intenta más tarde');
    }

    if (error.status === 500) {
      return new Error('Error interno del servidor. Intenta más tarde');
    }

    // Errores de red
    if (error.code === 'NETWORK_ERROR' || !navigator.onLine) {
      return new Error('Error de conexión. Verifica tu conexión a internet');
    }

    // Error genérico
    return new Error(error.message || 'Error desconocido al comunicarse con la API');
  }

  // Validar API Key (llamada de prueba)
  async validateApiKey(apiKey) {
    try {
      const testClient = new GoogleGenAI({ apiKey });
      
      // Hacer una llamada de prueba simple
      const response = await testClient.models.generateContent({
        model: "gemini-2.5-flash-image-preview",
        contents: "Test prompt for validation",
      });

      return { isValid: true, error: null };
    } catch (error) {
      return { 
        isValid: false, 
        error: this.handleError(error).message 
      };
    }
  }

  // Limpiar el cliente
  cleanup() {
    this.client = null;
    this.apiKey = null;
  }
}

// Exportar una instancia singleton
export const geminiService = new GeminiService();
export default geminiService;
import { useState } from 'react';
import { GoogleGenAI } from '@google/genai';

export const useImageGeneration = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState(null);
  const [metadata, setMetadata] = useState(null);
  const [error, setError] = useState('');

  const generateImage = async (apiKey, prompt, inputImage = null) => {
    if (!apiKey) {
      setError('API Key es requerida');
      return false;
    }

    if (!prompt || prompt.trim().length === 0) {
      setError('El prompt es requerido');
      return false;
    }

    setIsGenerating(true);
    setError('');
    setGeneratedImage(null);
    setMetadata(null);

    try {
      const ai = new GoogleGenAI({ apiKey });
      
      let contents;
      
      if (inputImage) {
        // Edición de imagen con texto e imagen de entrada
        contents = [
          { text: prompt },
          {
            inlineData: {
              mimeType: inputImage.mimeType,
              data: inputImage.base64,
            },
          },
        ];
      } else {
        // Generación de imagen solo con texto
        contents = prompt;
      }

      const startTime = Date.now();
      
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-image-preview",
        contents: contents,
      });

      const endTime = Date.now();
      const processingTime = endTime - startTime;

      // Procesar la respuesta
      let imageData = null;
      let textResponse = '';

      for (const part of response.candidates[0].content.parts) {
        if (part.text) {
          textResponse += part.text;
        } else if (part.inlineData) {
          imageData = part.inlineData.data;
        }
      }

      if (imageData) {
        // Crear URL para mostrar la imagen
        const imageBlob = new Blob([
          Uint8Array.from(atob(imageData), c => c.charCodeAt(0))
        ], { type: 'image/png' });
        
        const imageUrl = URL.createObjectURL(imageBlob);

        setGeneratedImage({
          base64: imageData,
          url: imageUrl,
          blob: imageBlob
        });

        // Guardar metadatos
        setMetadata({
          processingTime,
          timestamp: new Date().toISOString(),
          prompt: prompt,
          hasInputImage: !!inputImage,
          inputImageName: inputImage?.name || null,
          textResponse: textResponse || null,
          model: "gemini-2.5-flash-image-preview"
        });

        return true;
      } else {
        throw new Error('No se generó ninguna imagen en la respuesta');
      }

    } catch (err) {
      console.error('Error generando imagen:', err);
      setError(err.message || 'Error desconocido al generar la imagen');
      return false;
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadImage = (filename = 'zoragenix-generated-image.png') => {
    if (!generatedImage) return;

    const link = document.createElement('a');
    link.href = generatedImage.url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const clearGeneration = () => {
    if (generatedImage?.url) {
      URL.revokeObjectURL(generatedImage.url);
    }
    setGeneratedImage(null);
    setMetadata(null);
    setError('');
  };

  return {
    isGenerating,
    generatedImage,
    metadata,
    error,
    generateImage,
    downloadImage,
    clearGeneration
  };
};
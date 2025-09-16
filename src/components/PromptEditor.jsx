import { useState, useEffect } from 'react';
import { Edit3, Copy, RotateCcw, Sparkles, Info, CheckCircle } from 'lucide-react';

/**
 * Componente para editar prompts seleccionados o crear nuevos
 */
export const PromptEditor = ({ 
  initialPrompt = '', 
  selectedCase = null,
  onPromptChange,
  onPromptSave,
  disabled = false 
}) => {
  const [prompt, setPrompt] = useState(initialPrompt);
  const [originalPrompt, setOriginalPrompt] = useState(initialPrompt);
  const [isModified, setIsModified] = useState(false);
  const [showTips, setShowTips] = useState(false);
  const [copied, setCopied] = useState(false);

  // Actualizar prompt cuando cambie el inicial
  useEffect(() => {
    setPrompt(initialPrompt);
    setOriginalPrompt(initialPrompt);
    setIsModified(false);
  }, [initialPrompt]);

  // Detectar cambios
  useEffect(() => {
    setIsModified(prompt !== originalPrompt);
    if (onPromptChange) {
      onPromptChange(prompt);
    }
  }, [prompt, originalPrompt, onPromptChange]);

  // Manejar cambio de texto
  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  // Copiar al portapapeles
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Error copying to clipboard:', err);
    }
  };

  // Restaurar prompt original
  const resetPrompt = () => {
    setPrompt(originalPrompt);
  };

  // Guardar prompt
  const savePrompt = () => {
    if (onPromptSave) {
      onPromptSave(prompt);
    }
    setOriginalPrompt(prompt);
    setIsModified(false);
  };

  // Sugerencias de mejora
  const improvementTips = [
    "Sé específico con los detalles visuales (colores, texturas, iluminación)",
    "Menciona el estilo artístico deseado (realista, anime, pintura al óleo, etc.)",
    "Incluye información sobre la composición (primer plano, fondo, ángulo)",
    "Especifica la calidad deseada (alta resolución, detallado, profesional)",
    "Usa palabras clave para el ambiente (dramático, suave, vibrante, minimalista)"
  ];

  // Ejemplos de modificaciones comunes
  const commonModifications = [
    {
      label: "Cambiar estilo a anime",
      addition: ", estilo anime, colores vibrantes"
    },
    {
      label: "Hacer más realista",
      addition: ", fotorrealista, alta calidad, detalles precisos"
    },
    {
      label: "Ambiente dramático",
      addition: ", iluminación dramática, atmósfera intensa"
    },
    {
      label: "Estilo vintage",
      addition: ", estilo vintage, colores desaturados, textura antigua"
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Edit3 className="w-5 h-5 text-purple-600" />
          <h3 className="text-lg font-semibold text-gray-900">
            Editor de Prompt
          </h3>
          {isModified && (
            <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs font-medium">
              Modificado
            </span>
          )}
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowTips(!showTips)}
            className="text-gray-500 hover:text-gray-700 p-1 rounded"
            title="Mostrar consejos"
          >
            <Info className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Información del caso seleccionado */}
      {selectedCase && (
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-4">
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-purple-600 mt-0.5" />
            <div>
              <h4 className="font-medium text-purple-900 mb-1">
                Prompt basado en: {selectedCase.title}
              </h4>
              <p className="text-sm text-purple-700">
                Creado por @{selectedCase.author} • Caso #{selectedCase.number}
              </p>
              <div className="flex flex-wrap gap-1 mt-2">
                {selectedCase.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Editor de texto */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Prompt personalizado
        </label>
        <textarea
          value={prompt}
          onChange={handlePromptChange}
          disabled={disabled}
          placeholder="Escribe o modifica tu prompt aquí. Sé específico con los detalles que quieres ver en la imagen generada..."
          className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none disabled:bg-gray-50 disabled:text-gray-500"
        />
        <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
          <span>{prompt.length} caracteres</span>
          <div className="flex items-center gap-2">
            {prompt.length > 500 && (
              <span className="text-orange-600">Prompt muy largo</span>
            )}
            {prompt.length > 0 && prompt.length <= 500 && (
              <span className="text-green-600 flex items-center gap-1">
                <CheckCircle className="w-4 h-4" />
                Longitud óptima
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Modificaciones rápidas */}
      {prompt && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Modificaciones rápidas
          </label>
          <div className="flex flex-wrap gap-2">
            {commonModifications.map((mod, index) => (
              <button
                key={index}
                onClick={() => setPrompt(prev => prev + mod.addition)}
                disabled={disabled}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                + {mod.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Consejos */}
      {showTips && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
          <h4 className="font-medium text-blue-900 mb-2">
            💡 Consejos para mejores prompts
          </h4>
          <ul className="text-sm text-blue-800 space-y-1">
            {improvementTips.map((tip, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Acciones */}
      <div className="flex flex-wrap gap-3">
        <button
          onClick={copyToClipboard}
          disabled={!prompt || disabled}
          className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Copy className="w-4 h-4" />
          {copied ? 'Copiado!' : 'Copiar'}
        </button>

        {isModified && (
          <button
            onClick={resetPrompt}
            disabled={disabled}
            className="flex items-center gap-2 bg-orange-100 hover:bg-orange-200 text-orange-700 px-4 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <RotateCcw className="w-4 h-4" />
            Restaurar
          </button>
        )}

        {onPromptSave && (
          <button
            onClick={savePrompt}
            disabled={!prompt || !isModified || disabled}
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Sparkles className="w-4 h-4" />
            Guardar Prompt
          </button>
        )}
      </div>

      {/* Vista previa del prompt */}
      {prompt && (
        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Vista previa:</h4>
          <p className="text-sm text-gray-600 italic">
            "{prompt}"
          </p>
        </div>
      )}
    </div>
  );
};
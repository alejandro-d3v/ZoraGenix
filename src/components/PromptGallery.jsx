/* eslint-disable react/prop-types */
import { Tag, Image, Sparkles } from 'lucide-react';

import { usePromptSelection } from '../hooks/usePromptSelection';

/**
 * Componente principal para la galería de prompts predefinidos
 */
export const PromptGallery = ({ onPromptSelect, onCaseSelect }) => {
  const {
    cases,
    selectedCase,
    error,
    selectCase,
    clearSelection,
    handleSearch,
  } = usePromptSelection();

  // Manejar selección de caso
  const handleCaseSelect = (caseItem) => {
    selectCase(caseItem);
    if (onCaseSelect) {
      onCaseSelect(caseItem);
    }
    if (onPromptSelect) {
      onPromptSelect(caseItem.prompt_es);
    }
  };

  // Componente de tarjeta de caso
  const CaseCard = ({ caseItem }) => (
    <div
      className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 ${
        selectedCase?.id === caseItem.id ? 'ring-2 ring-purple-500' : ''
      }`}
      onClick={() => handleCaseSelect(caseItem)}
    >
      {/* Imagen de preview */}
      <div className="relative h-48 overflow-hidden rounded-t-xl">
        {caseItem.imagenes.length > 0 ? (
          <img
            src={caseItem.imagenes[0].input ?? caseItem.imagenes[0].output}
            alt={`Input for ${caseItem.name}`}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = '/placeholder-image.jpg';
            }}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
            <Image className="w-16 h-16 text-purple-300" />
          </div>
        )}

        {/* Número de caso */}
        <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded-full text-xs font-semibold">
          #{caseItem.id}
        </div>

        {/* Overlay con información adicional */}
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
          <div className="text-white text-center">
            <Sparkles className="w-8 h-8 mx-auto mb-2" />
            <p className="text-sm font-semibold">Ver Prompt</p>
          </div>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-4">
        {/* Título */}
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-sm">
          {caseItem.name}
        </h3>

        {/* Preview del prompt */}
        <p className="text-xs text-gray-600 line-clamp-2 mb-3">
          {caseItem.prompt_es.substring(0, 100)}...
        </p>
      </div>
    </div>
  );

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-red-500 mb-4">⚠️ {error}</div>
        <button
          onClick={() => window.location.reload()}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Reintentar
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Exploración de Prompts
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Descubre prompts increíbles creados por la comunidad. Selecciona uno para usarlo con tus propias imágenes.
        </p>
      </div>

      {/* Todos los casos */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Tag className="w-5 h-5 text-purple-500" />
          Todos los Prompts
        </h3>

        {cases.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-500 mb-4">No se encontraron prompts que coincidan con tu búsqueda</div>
            <button
              onClick={() => {
                handleSearch('');
              }}
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              Limpiar filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {cases.map(caseItem => (
              <CaseCard key={caseItem.id} caseItem={caseItem} />
            ))}
          </div>
        )}
      </div>

      {/* Modal de caso seleccionado */}
      {selectedCase && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{selectedCase.name}</h3>
                </div>
                <button
                  onClick={clearSelection}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>

              {/* Imágenes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="font-semibold mb-2">Imagen de Entrada</h4>
                  {selectedCase.imagenes.length > 0 ? (
                    <img
                      src={selectedCase.imagenes[0].input}
                      alt="Input"
                      className="w-full rounded-lg"
                    />
                  ) : (
                    <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500">Sin imagen de entrada</span>
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Resultado Esperado</h4>
                  {selectedCase.outputs.length > 0 ? (
                    <img
                      src={selectedCase.imagenes[0].output}
                      alt="Output"
                      className="w-full rounded-lg"
                    />
                  ) : (
                    <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500">Sin imagen de resultado</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Prompt */}
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Prompt</h4>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <pre className="whitespace-pre-wrap text-sm text-gray-700">
                    {selectedCase.prompt_es}
                  </pre>
                </div>
              </div>

              {/* Acciones */}
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    if (onPromptSelect) {
                      onPromptSelect(selectedCase.prompt);
                    }
                    clearSelection();
                  }}
                  className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors font-medium"
                >
                  Usar este Prompt
                </button>
                <button
                  onClick={clearSelection}
                  className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

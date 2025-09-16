/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { usePromptExploration } from '../hooks/usePromptExploration';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// Componente para mostrar una tarjeta de caso individual
const CaseCard = ({ caseItem, onSelect }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {/* Imagen de vista previa si existe */}
      {caseItem.outputs && caseItem.outputs.length > 0 && (
        <div className="h-48 bg-gray-200 overflow-hidden">
          <LazyLoadImage
            src={caseItem.outputs[0].path}
            alt={caseItem.title}
            className="w-full h-full object-cover"
            effect="blur"
            placeholder={<div className="w-full h-full bg-gray-300 animate-pulse"></div>}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
      )}

      <div className="p-4">
        {/* Título en español */}
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {caseItem.title}
        </h3>

        {/* Autor */}
        <p className="text-sm text-gray-600 mb-2">
          Por: <span className="font-medium">{caseItem.author}</span>
        </p>

        {/* Categoría */}
        <div className="mb-3">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
            {caseItem.category}
          </span>
        </div>

        {/* Vista previa del prompt en español */}
        <p className="text-sm text-gray-700 mb-3 line-clamp-3">
          {caseItem.prompt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {caseItem.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
          {caseItem.tags.length > 3 && (
            <span className="text-xs text-gray-500">
              +{caseItem.tags.length - 3} más
            </span>
          )}
        </div>

        {/* Información de imágenes */}
        <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
          <span>📥 {caseItem.inputs.length} entrada(s)</span>
          <span>📤 {caseItem.outputs.length} salida(s)</span>
        </div>

        {/* Botón de selección */}
        <button
          onClick={() => onSelect(caseItem)}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          Ver Detalles
        </button>
      </div>
    </div>
  );
};

// Componente de paginación
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="flex justify-center items-center space-x-2 mt-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-2 rounded-md bg-gray-200 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300"
      >
        Anterior
      </button>

      {getPageNumbers().map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === 'number' && onPageChange(page)}
          disabled={page === '...'}
          className={`px-3 py-2 rounded-md ${
            page === currentPage
              ? 'bg-blue-600 text-white'
              : page === '...'
              ? 'text-gray-400 cursor-default'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-2 rounded-md bg-gray-200 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300"
      >
        Siguiente
      </button>
    </div>
  );
};

// Componente principal de la galería
export const PaginatedPromptGallery = ({ onPromptSelect, onCaseSelect }) => {
  const {
    cases,
    loading,
    error,
    currentPage,
    totalPages,
    totalCases,
    searchQuery,
    selectedCategory,
    availableCategories,
    goToPage,
    handleSearch,
    handleCategoryFilter,
    clearFilters,
    selectCase,
    selectedCase,
    clearSelection,
    getStatsCallback
  } = usePromptExploration();

  const [viewMode, setViewMode] = useState('grid');
  const [stats, setStats] = useState(null);

  // Cargar estadísticas
  useEffect(() => {
    const statsData = getStatsCallback();
    setStats(statsData);
  }, [getStatsCallback]);

  // Manejar selección de caso
  const handleCaseSelect = (caseItem) => {
    selectCase(caseItem);
    if (onCaseSelect) {
      onCaseSelect(caseItem);
    }
    if (onPromptSelect) {
      onPromptSelect(caseItem.prompt); // Usar el prompt en español
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        <span className="ml-3 text-gray-600">Cargando prompts...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-red-600 mb-4">❌ Error al cargar los prompts</div>
        <p className="text-gray-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Encabezado con estadísticas */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Exploración de Prompts
        </h2>
        {stats && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-600">{stats.totalCases}</div>
              <div className="text-sm text-gray-600">Prompts Totales</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-green-600">{stats.totalCategories}</div>
              <div className="text-sm text-gray-600">Categorías</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-purple-600">{stats.totalAuthors}</div>
              <div className="text-sm text-gray-600">Autores</div>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-orange-600">{stats.casesWithOutputs}</div>
              <div className="text-sm text-gray-600">Con Ejemplos</div>
            </div>
          </div>
        )}
      </div>

      {/* Controles de búsqueda y filtros */}
      <div className="mb-6 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Búsqueda */}
          <div className="flex-1">
            <input
              type="text"
              placeholder="Buscar prompts por título, descripción, autor o tags..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Filtro por categoría */}
          <div className="md:w-64">
            <select
              value={selectedCategory}
              onChange={(e) => handleCategoryFilter(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Todas las categorías</option>
              {availableCategories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Modo de vista */}
          <div className="flex border border-gray-300 rounded-lg overflow-hidden">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}`}
            >
              🔲 Cuadrícula
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}`}
            >
              📋 Lista
            </button>
          </div>
        </div>

        {/* Botón para limpiar filtros */}
        {(searchQuery || selectedCategory) && (
          <div className="flex justify-between items-center">
            <button
              onClick={clearFilters}
              className="text-blue-600 hover:text-blue-800 text-sm"
            >
              🗑️ Limpiar filtros
            </button>
            <span className="text-sm text-gray-600">
              Mostrando {cases.length} de {totalCases} prompts
            </span>
          </div>
        )}
      </div>

      {/* Grid de casos */}
      {cases.length > 0 ? (
        <>
          <div className={`grid gap-6 ${
            viewMode === 'grid'
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
              : 'grid-cols-1'
          }`}>
            {cases.map(caseItem => (
              <CaseCard
                key={caseItem.id}
                caseItem={caseItem}
                onSelect={handleCaseSelect}
              />
            ))}
          </div>

          {/* Paginación */}
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={goToPage}
            />
          )}
        </>
      ) : (
        <div className="text-center py-12">
          <div className="text-gray-500 mb-4">🔍 No se encontraron prompts</div>
          <p className="text-gray-600">
            Intenta ajustar tus filtros de búsqueda o explora diferentes categorías.
          </p>
        </div>
      )}

      {/* Modal de detalles del caso */}
      {selectedCase && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Encabezado del modal */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {selectedCase.title}
                  </h3>
                  <p className="text-gray-600">
                    Por: <span className="font-medium">{selectedCase.author}</span>
                  </p>
                </div>
                <button
                  onClick={clearSelection}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ✕
                </button>
              </div>

              {/* Contenido del modal */}
              <div className="space-y-6">
                {/* Descripción */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Descripción:</h4>
                  <p className="text-gray-700">{selectedCase.description}</p>
                </div>

                {/* Prompt en español */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Prompt:</h4>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-800">{selectedCase.prompt}</p>
                  </div>
                </div>

                {/* Tags y categoría */}
                <div className="flex flex-wrap gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Categoría:</h4>
                    <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {selectedCase.category}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Tags:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCase.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Imágenes de ejemplo */}
                {(selectedCase.inputs.length > 0 || selectedCase.outputs.length > 0) && (
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-4">Ejemplos:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedCase.inputs.length > 0 && (
                        <div>
                          <h5 className="text-sm font-medium text-gray-600 mb-2">Imágenes de entrada:</h5>
                          <div className="space-y-2">
                            {selectedCase.inputs.map((input, index) => (
                              <LazyLoadImage
                                key={index}
                                src={input.path}
                                alt={`Entrada ${index + 1}`}
                                className="w-full h-48 object-cover rounded-lg"
                                effect="blur"
                                placeholder={<div className="w-full h-48 bg-gray-300 animate-pulse rounded-lg"></div>}
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      )}

                      {selectedCase.outputs.length > 0 && (
                        <div>
                          <h5 className="text-sm font-medium text-gray-600 mb-2">Imágenes de salida:</h5>
                          <div className="space-y-2">
                            {selectedCase.outputs.map((output, index) => (
                              <LazyLoadImage
                                key={index}
                                src={output.path}
                                alt={`Salida ${index + 1}`}
                                className="w-full h-48 object-cover rounded-lg"
                                effect="blur"
                                placeholder={<div className="w-full h-48 bg-gray-300 animate-pulse rounded-lg"></div>}
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Acciones */}
                <div className="flex gap-4 pt-4 border-t">
                  <button
                    onClick={() => {
                      if (onPromptSelect) {
                        onPromptSelect(selectedCase.prompt); // Usar prompt en español
                      }
                      clearSelection();
                    }}
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    🚀 Usar este Prompt
                  </button>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(selectedCase.prompt);
                      // Aquí podrías agregar una notificación de "copiado"
                    }}
                    className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    📋 Copiar Prompt
                  </button>
                  <button
                    onClick={clearSelection}
                    className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

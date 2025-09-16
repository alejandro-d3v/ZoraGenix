import { useState, useEffect } from 'react';
import { usePromptSelection } from '../hooks/usePromptSelection';
import { Search, Filter, Star, User, Tag, Image, Sparkles, AlertCircle } from 'lucide-react';

/**
 * Componente principal para la galería de prompts predefinidos
 */
export const PromptGallery = ({ onPromptSelect, onCaseSelect }) => {
  const {
    cases,
    selectedCase,
    loading,
    error,
    searchQuery,
    selectedTag,
    availableTags,
    selectCase,
    clearSelection,
    handleSearch,
    handleTagFilter,
    getFeaturedCases,
    getStatsCallback
  } = usePromptSelection();

  const [showFeatured, setShowFeatured] = useState(true);
  const [featuredCases, setFeaturedCases] = useState([]);

  const stats = getStatsCallback();

  // Cargar casos destacados
  useEffect(() => {
    if (!loading && cases.length > 0) {
      setFeaturedCases(getFeaturedCases(6));
    }
  }, [loading, cases, getFeaturedCases]);

  // Manejar selección de caso
  const handleCaseSelect = (caseItem) => {
    selectCase(caseItem);
    if (onCaseSelect) {
      onCaseSelect(caseItem);
    }
    if (onPromptSelect) {
      onPromptSelect(caseItem.prompt);
    }
  };

  // Componente de tarjeta de caso
  const CaseCard = ({ caseItem, featured = false }) => (
    <div 
      className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 ${
        selectedCase?.id === caseItem.id ? 'ring-2 ring-purple-500' : ''
      } ${featured ? 'border-2 border-yellow-200' : ''}`}
      onClick={() => handleCaseSelect(caseItem)}
    >
      {/* Imagen de preview */}
      <div className="relative h-48 overflow-hidden rounded-t-xl">
        {caseItem.inputs.length > 0 ? (
          <img 
            src={caseItem.inputs[0].url} 
            alt={`Input for ${caseItem.title}`}
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
        
        {/* Badge de destacado */}
        {featured && (
          <div className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
            <Star className="w-3 h-3" />
            Destacado
          </div>
        )}

        {/* Número de caso */}
        <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded-full text-xs font-semibold">
          #{caseItem.number}
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
          {caseItem.title}
        </h3>

        {/* Autor */}
        <div className="flex items-center gap-2 mb-3">
          <User className="w-4 h-4 text-gray-400" />
          <span className="text-xs text-gray-600">@{caseItem.author}</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {caseItem.tags.slice(0, 2).map((tag, index) => (
            <span 
              key={index}
              className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
          {caseItem.tags.length > 2 && (
            <span className="text-xs text-gray-500">+{caseItem.tags.length - 2}</span>
          )}
        </div>

        {/* Preview del prompt */}
        <p className="text-xs text-gray-600 line-clamp-2 mb-3">
          {caseItem.prompt.substring(0, 100)}...
        </p>

        {/* Estadísticas */}
        <div className="flex justify-between items-center text-xs text-gray-500">
          <span>{caseItem.inputs.length} entrada{caseItem.inputs.length !== 1 ? 's' : ''}</span>
          <span>{caseItem.outputs.length} resultado{caseItem.outputs.length !== 1 ? 's' : ''}</span>
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
        <span className="ml-3 text-gray-600">Cargando prompts predefinidos...</span>
      </div>
    );
  }

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

        {/* Estadísticas */}
        <div className="mt-4 max-w-2xl mx-auto">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center justify-center gap-2 text-blue-800">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-medium">
                {stats.totalCases} prompts profesionales • {stats.totalCategories} categorías • {stats.totalAuthors} autores
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Estadísticas */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg p-4 text-center shadow-sm">
          <div className="text-2xl font-bold text-purple-600">{stats.totalCases}</div>
          <div className="text-sm text-gray-600">Prompts Totales</div>
        </div>
        <div className="bg-white rounded-lg p-4 text-center shadow-sm">
          <div className="text-2xl font-bold text-blue-600">{stats.filteredCases}</div>
          <div className="text-sm text-gray-600">Mostrados</div>
        </div>
        <div className="bg-white rounded-lg p-4 text-center shadow-sm">
          <div className="text-2xl font-bold text-green-600">{stats.totalTags}</div>
          <div className="text-sm text-gray-600">Categorías</div>
        </div>
        <div className="bg-white rounded-lg p-4 text-center shadow-sm">
          <div className="text-2xl font-bold text-orange-600">{featuredCases.length}</div>
          <div className="text-sm text-gray-600">Destacados</div>
        </div>
      </div>

      {/* Controles de búsqueda y filtros */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Búsqueda */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar prompts, autores o palabras clave..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          {/* Filtro por categoría */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={selectedTag}
              onChange={(e) => handleTagFilter(e.target.value)}
              className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none bg-white min-w-[150px]"
            >
              {availableTags.map(tag => (
                <option key={tag} value={tag}>
                  {tag === 'all' ? 'Todas las categorías' : tag}
                </option>
              ))}
            </select>
          </div>

          {/* Toggle destacados */}
          <button
            onClick={() => setShowFeatured(!showFeatured)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              showFeatured
                ? 'bg-yellow-100 text-yellow-800 border border-yellow-300'
                : 'bg-gray-100 text-gray-600 border border-gray-300'
            }`}
          >
            <Star className="w-4 h-4 inline mr-2" />
            Destacados
          </button>
        </div>
      </div>

      {/* Casos destacados */}
      {showFeatured && featuredCases.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500" />
            Prompts Destacados
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCases.map(caseItem => (
              <CaseCard key={caseItem.id} caseItem={caseItem} featured={true} />
            ))}
          </div>
        </div>
      )}

      {/* Todos los casos */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Tag className="w-5 h-5 text-purple-500" />
          Todos los Prompts
          <span className="text-sm font-normal text-gray-500">
            ({stats.filteredCases} de {stats.totalCases})
          </span>
        </h3>

        {cases.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-500 mb-4">No se encontraron prompts que coincidan con tu búsqueda</div>
            <button
              onClick={() => {
                handleSearch('');
                handleTagFilter('all');
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
                  <h3 className="text-xl font-bold text-gray-900">{selectedCase.title}</h3>
                  <p className="text-gray-600">por @{selectedCase.author}</p>
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
                  {selectedCase.inputs.length > 0 ? (
                    <img 
                      src={selectedCase.inputs[0].url} 
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
                      src={selectedCase.outputs[0].url} 
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
                    {selectedCase.prompt}
                  </pre>
                </div>
              </div>

              {/* Tags */}
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Categorías</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCase.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
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
import { useState, useEffect, useCallback } from 'react';
import { allPromptCases } from '../utils/allPromptCases.js';

/**
 * Hook para manejar la selección y gestión de prompts predefinidos
 */
export const usePromptSelection = () => {
  const [cases, setCases] = useState([]);
  const [filteredCases, setFilteredCases] = useState([]);
  const [selectedCase, setSelectedCase] = useState(null);
  const [selectedPrompt, setSelectedPrompt] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Inicializar datos
  useEffect(() => {
    const initData = async () => {
      try {
        setLoading(true);

        // Usar los datos de allPromptCases directamente
        setCases(allPromptCases);
        setFilteredCases(allPromptCases);

        setError(null);
      } catch (err) {
        console.error('Error initializing data:', err);
        setError('Error al cargar los prompts');
      } finally {
        setLoading(false);
      }
    };

    initData();
  }, []);

  // Filtrar casos cuando cambian los filtros
  useEffect(() => {
    let filtered = [...allPromptCases];

    // Filtrar por búsqueda
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(caseItem =>
        caseItem.name.toLowerCase().includes(query) ||
        caseItem.prompt.toLowerCase().includes(query) ||
        caseItem.prompt_es.toLowerCase().includes(query)
      );
    }

    setFilteredCases(filtered);
  }, [searchQuery, selectedCategory, selectedTag]);

  // Funciones de búsqueda y filtrado
  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
  }, []);

  const handleTagFilter = useCallback((tag) => {
    setSelectedTag(tag);
  }, []);

  const handleCategoryFilter = useCallback((category) => {
    setSelectedCategory(category);
  }, []);

  const clearFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedTag('all');
    setSelectedCategory('all');
  }, []);

  // Funciones de selección
  const selectCase = useCallback((caseItem) => {
    setSelectedCase(caseItem);
    setSelectedPrompt(caseItem.prompt_es); // Usar el prompt en español
  }, []);

  const clearSelection = useCallback(() => {
    setSelectedCase(null);
    setSelectedPrompt('');
  }, []);

  const updatePrompt = useCallback((newPrompt) => {
    setSelectedPrompt(newPrompt);
  }, []);

  return {
    // Datos
    cases: filteredCases,
    allCases: cases,
    selectedCase,
    selectedPrompt,

    // Estados
    loading,
    error,
    searchQuery,
    selectedTag,
    selectedCategory,

    // Funciones de filtrado
    handleSearch,
    handleTagFilter,
    handleCategoryFilter,
    clearFilters,

    // Funciones de selección
    selectCase,
    clearSelection,
    updatePrompt,

    // Información adicional
    totalCases: cases.length,
    filteredCount: filteredCases.length
  };
};

import { useState, useEffect, useCallback } from 'react';
import { 
  allPromptCases,
  getPaginatedCases, 
  searchCases, 
  filterByCategory, 
  getAllCategories, 
  getCaseById, 
  getStats 
} from '../utils/allPromptCases.js';

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
  const [availableTags, setAvailableTags] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [availableCategories, setAvailableCategories] = useState([]);

  // Inicializar datos
  useEffect(() => {
    const initData = async () => {
      try {
        setLoading(true);
        
        // Usar los datos de allPromptCases directamente
        setCases(allPromptCases);
        setFilteredCases(allPromptCases);
        
        // Obtener todas las categorías
        const categories = getAllCategories();
        setAvailableCategories(['all', ...categories]);
        
        // Obtener todos los tags únicos
        const allTags = new Set();
        allPromptCases.forEach(caseItem => {
          caseItem.tags.forEach(tag => allTags.add(tag));
        });
        setAvailableTags(['all', ...Array.from(allTags).sort()]);
        
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
        caseItem.title.toLowerCase().includes(query) ||
        caseItem.prompt.toLowerCase().includes(query) ||
        caseItem.author.toLowerCase().includes(query) ||
        caseItem.tags.some(tag => tag.toLowerCase().includes(query)) ||
        caseItem.category.toLowerCase().includes(query)
      );
    }

    // Filtrar por categoría
    if (selectedCategory && selectedCategory !== 'all') {
      filtered = filtered.filter(caseItem => caseItem.category === selectedCategory);
    }

    // Filtrar por tag
    if (selectedTag && selectedTag !== 'all') {
      filtered = filtered.filter(caseItem => caseItem.tags.includes(selectedTag));
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
    setSelectedPrompt(caseItem.prompt); // Usar el prompt en español
  }, []);

  const clearSelection = useCallback(() => {
    setSelectedCase(null);
    setSelectedPrompt('');
  }, []);

  const updatePrompt = useCallback((newPrompt) => {
    setSelectedPrompt(newPrompt);
  }, []);

  // Funciones de utilidad
  const getCaseByIdCallback = useCallback((id) => {
    return getCaseById(id);
  }, []);

  const getFeaturedCases = useCallback((count = 6) => {
    // Obtener casos aleatorios como destacados
    const shuffled = [...allPromptCases].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }, []);

  const getCasesByTag = useCallback((tag) => {
    if (tag === 'all') return allPromptCases;
    return allPromptCases.filter(caseItem => caseItem.tags.includes(tag));
  }, []);

  const getCasesByCategory = useCallback((category) => {
    if (category === 'all') return allPromptCases;
    return allPromptCases.filter(caseItem => caseItem.category === category);
  }, []);

  const getStatsCallback = useCallback(() => {
    return getStats();
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
    availableTags,
    availableCategories,
    
    // Funciones de filtrado
    handleSearch,
    handleTagFilter,
    handleCategoryFilter,
    clearFilters,
    
    // Funciones de selección
    selectCase,
    clearSelection,
    updatePrompt,
    
    // Funciones de utilidad
    getCaseByIdCallback,
    getFeaturedCases,
    getCasesByTag,
    getCasesByCategory,
    getStatsCallback,
    
    // Información adicional
    totalCases: cases.length,
    filteredCount: filteredCases.length
  };
};
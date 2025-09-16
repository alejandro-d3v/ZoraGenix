import { useState, useEffect, useCallback } from 'react';
import { 
  getPaginatedCases, 
  searchCases, 
  filterByCategory, 
  getAllCategories, 
  getCaseById, 
  getStats 
} from '../utils/allPromptCases.js';

/**
 * Hook para manejar la exploración paginada de prompts
 */
export const usePromptExploration = () => {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Estados de paginación
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCases, setTotalCases] = useState(0);
  const [itemsPerPage] = useState(8);
  
  // Estados de filtros
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [availableCategories, setAvailableCategories] = useState([]);
  
  // Estados de selección
  const [selectedCase, setSelectedCase] = useState(null);
  const [selectedPrompt, setSelectedPrompt] = useState('');

  // Inicializar categorías
  useEffect(() => {
    try {
      const categories = getAllCategories();
      setAvailableCategories(['all', ...categories]);
      setError(null);
    } catch (err) {
      console.error('Error loading categories:', err);
      setError('Error al cargar las categorías');
    }
  }, []);

  // Cargar casos basado en filtros y paginación
  useEffect(() => {
    const loadCases = async () => {
      try {
        setLoading(true);
        let result;

        if (searchQuery.trim()) {
          // Búsqueda por texto
          result = searchCases(searchQuery, currentPage, itemsPerPage);
        } else if (selectedCategory !== 'all') {
          // Filtro por categoría
          result = filterByCategory(selectedCategory, currentPage, itemsPerPage);
        } else {
          // Paginación normal
          result = getPaginatedCases(currentPage, itemsPerPage);
        }

        setCases(result.cases);
        setTotalPages(result.totalPages);
        setTotalCases(result.totalCases);
        setError(null);
      } catch (err) {
        console.error('Error loading cases:', err);
        setError('Error al cargar los casos');
        setCases([]);
      } finally {
        setLoading(false);
      }
    };

    loadCases();
  }, [currentPage, searchQuery, selectedCategory, itemsPerPage]);

  // Funciones de navegación
  const goToPage = useCallback((page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  }, [totalPages]);

  const goToNextPage = useCallback(() => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  }, [currentPage, totalPages]);

  const goToPrevPage = useCallback(() => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  }, [currentPage]);

  const goToFirstPage = useCallback(() => {
    setCurrentPage(1);
  }, []);

  const goToLastPage = useCallback(() => {
    setCurrentPage(totalPages);
  }, [totalPages]);

  // Funciones de búsqueda y filtros
  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
    setCurrentPage(1); // Resetear a primera página
  }, []);

  const handleCategoryFilter = useCallback((category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Resetear a primera página
  }, []);

  const clearFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedCategory('all');
    setCurrentPage(1);
  }, []);

  // Funciones de selección
  const selectCase = useCallback((caseItem) => {
    setSelectedCase(caseItem);
    setSelectedPrompt(caseItem.prompt);
  }, []);

  const clearSelection = useCallback(() => {
    setSelectedCase(null);
    setSelectedPrompt('');
  }, []);

  const updatePrompt = useCallback((newPrompt) => {
    setSelectedPrompt(newPrompt);
  }, []);

  // Obtener caso por ID
  const getCaseByIdCallback = useCallback((id) => {
    return getCaseById(id);
  }, []);

  // Obtener estadísticas
  const getStatsCallback = useCallback(() => {
    const stats = getStats();
    return {
      ...stats,
      currentPage,
      totalPages,
      totalCases,
      filteredCases: cases.length,
      hasFilters: searchQuery.trim() !== '' || selectedCategory !== 'all',
      hasNextPage: currentPage < totalPages,
      hasPrevPage: currentPage > 1
    };
  }, [currentPage, totalPages, totalCases, cases.length, searchQuery, selectedCategory]);

  // Obtener rango de páginas para mostrar
  const getPageRange = useCallback(() => {
    const delta = 2; // Número de páginas a mostrar a cada lado de la actual
    const range = [];
    const rangeWithDots = [];

    for (let i = Math.max(2, currentPage - delta); 
         i <= Math.min(totalPages - 1, currentPage + delta); 
         i++) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages);
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots.filter((item, index, arr) => arr.indexOf(item) === index);
  }, [currentPage, totalPages]);

  return {
    // Estados principales
    cases,
    loading,
    error,
    
    // Paginación
    currentPage,
    totalPages,
    totalCases,
    itemsPerPage,
    
    // Filtros
    searchQuery,
    selectedCategory,
    availableCategories,
    
    // Selección
    selectedCase,
    selectedPrompt,
    
    // Funciones de navegación
    goToPage,
    goToNextPage,
    goToPrevPage,
    goToFirstPage,
    goToLastPage,
    getPageRange,
    
    // Funciones de filtros
    handleSearch,
    handleCategoryFilter,
    clearFilters,
    
    // Funciones de selección
    selectCase,
    clearSelection,
    updatePrompt,
    
    // Utilidades
    getCaseById: getCaseByIdCallback,
    getStats: getStatsCallback
  };
};
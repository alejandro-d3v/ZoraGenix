import prompts from '../data/prompts.json';

export const allPromptCases = [ ...prompts ];

// Función para obtener casos paginados
export const getPaginatedCases = (page = 1, itemsPerPage = 8) => {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return {
    cases: allPromptCases.slice(startIndex, endIndex),
    totalCases: allPromptCases.length,
    totalPages: Math.ceil(allPromptCases.length / itemsPerPage),
    currentPage: page,
    hasNextPage: endIndex < allPromptCases.length,
    hasPrevPage: page > 1
  };
};

// Función para buscar casos
export const searchCases = (query, page = 1, itemsPerPage = 8) => {
  const lowerQuery = query.toLowerCase();
  const filteredCases = allPromptCases.filter(caseItem =>
    caseItem.name.toLowerCase().includes(lowerQuery) ||
    caseItem.prompt.toLowerCase().includes(lowerQuery) ||
    caseItem.prompt_es.toLowerCase().includes(lowerQuery)
  );

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return {
    cases: filteredCases.slice(startIndex, endIndex),
    totalCases: filteredCases.length,
    totalPages: Math.ceil(filteredCases.length / itemsPerPage),
    currentPage: page,
    hasNextPage: endIndex < filteredCases.length,
    hasPrevPage: page > 1,
    query
  };
};

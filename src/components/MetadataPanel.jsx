import React from 'react';

const MetadataPanel = ({ metadata }) => {
  if (!metadata) {
    return null;
  }

  const formatTime = (ms) => {
    if (ms < 1000) return `${ms}ms`;
    return `${(ms / 1000).toFixed(1)}s`;
  };

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="card">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Información de Generación</h2>
      
      <div className="space-y-4">
        {/* Estadísticas principales */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium text-blue-900">Tiempo de Procesamiento</span>
            </div>
            <p className="text-2xl font-bold text-blue-600">
              {formatTime(metadata.processingTime)}
            </p>
          </div>

          <div className="bg-green-50 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium text-green-900">Estado</span>
            </div>
            <p className="text-lg font-semibold text-green-600">
              Completado
            </p>
          </div>
        </div>

        {/* Detalles de la generación */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-900 mb-3">Detalles de la Generación</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-start">
              <span className="text-sm text-gray-600">Modelo:</span>
              <span className="text-sm font-medium text-gray-900 text-right">
                {metadata.model}
              </span>
            </div>
            
            <div className="flex justify-between items-start">
              <span className="text-sm text-gray-600">Fecha y Hora:</span>
              <span className="text-sm font-medium text-gray-900 text-right">
                {formatDate(metadata.timestamp)}
              </span>
            </div>
            
            <div className="flex justify-between items-start">
              <span className="text-sm text-gray-600">Tipo de Generación:</span>
              <span className="text-sm font-medium text-gray-900 text-right">
                {metadata.hasInputImage ? 'Edición de Imagen' : 'Generación desde Texto'}
              </span>
            </div>

            {metadata.inputImageName && (
              <div className="flex justify-between items-start">
                <span className="text-sm text-gray-600">Imagen Original:</span>
                <span className="text-sm font-medium text-gray-900 text-right truncate max-w-xs" title={metadata.inputImageName}>
                  {metadata.inputImageName}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Prompt utilizado */}
        <div className="bg-purple-50 rounded-lg p-4">
          <h3 className="text-sm font-medium text-purple-900 mb-2">Prompt Utilizado</h3>
          <p className="text-sm text-purple-800 bg-white rounded p-3 border border-purple-200">
            "{metadata.prompt}"
          </p>
        </div>

        {/* Respuesta de texto (si existe) */}
        {metadata.textResponse && (
          <div className="bg-yellow-50 rounded-lg p-4">
            <h3 className="text-sm font-medium text-yellow-900 mb-2">Respuesta del Modelo</h3>
            <p className="text-sm text-yellow-800 bg-white rounded p-3 border border-yellow-200">
              {metadata.textResponse}
            </p>
          </div>
        )}

        {/* Consejos y recomendaciones */}
        <div className="bg-indigo-50 rounded-lg p-4">
          <h3 className="text-sm font-medium text-indigo-900 mb-2">💡 Consejos para Mejorar</h3>
          <ul className="text-sm text-indigo-800 space-y-1">
            <li>• Sé más específico en tus prompts para mejores resultados</li>
            <li>• Experimenta con diferentes estilos artísticos</li>
            <li>• Las imágenes de alta resolución dan mejores resultados</li>
            {metadata.processingTime > 10000 && (
              <li>• Prompts más simples se procesan más rápido</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MetadataPanel;
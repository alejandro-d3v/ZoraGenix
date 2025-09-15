import React from 'react';

const ImagePreview = ({ image, imagePreview, onClearImage }) => {
  if (!image || !imagePreview) {
    return null;
  }

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Imagen Cargada</h2>
        <button
          onClick={onClearImage}
          className="text-red-500 hover:text-red-700 p-2 rounded-lg hover:bg-red-50 transition-colors"
          title="Eliminar imagen"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>

      <div className="space-y-4">
        {/* Vista previa de la imagen */}
        <div className="relative">
          <img
            src={imagePreview}
            alt="Vista previa"
            className="w-full h-64 object-contain bg-gray-50 rounded-lg border border-gray-200"
          />
          <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
            Vista previa
          </div>
        </div>

        {/* Información del archivo */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-900 mb-3">Información del archivo</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-600">Nombre:</span>
              <p className="font-medium text-gray-900 truncate" title={image.name}>
                {image.name}
              </p>
            </div>
            <div>
              <span className="text-gray-600">Tamaño:</span>
              <p className="font-medium text-gray-900">
                {formatFileSize(image.size)}
              </p>
            </div>
            <div>
              <span className="text-gray-600">Tipo:</span>
              <p className="font-medium text-gray-900">
                {image.mimeType}
              </p>
            </div>
            <div>
              <span className="text-gray-600">Estado:</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="font-medium text-green-700">Listo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Acciones adicionales */}
        <div className="flex space-x-3">
          <button
            onClick={onClearImage}
            className="btn-secondary flex-1"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Cambiar Imagen
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImagePreview;
import React, { useRef } from 'react';

const ImageUploader = ({ 
  onImageUpload, 
  onDrop, 
  onDragOver, 
  isUploading, 
  error 
}) => {
  const fileInputRef = useRef(null);

  const handleFileSelect = async (e) => {
    const file = e.target.files[0];
    if (file) {
      await onImageUpload(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.currentTarget.classList.add('drag-over');
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove('drag-over');
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove('drag-over');
    onDrop(e);
  };

  return (
    <div className="card">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Cargar Imagen</h2>
      
      <div
        className="drag-area cursor-pointer"
        onClick={handleClick}
        onDrop={handleDrop}
        onDragOver={onDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/jpeg,image/jpg,image/png,image/webp"
          onChange={handleFileSelect}
          className="hidden"
          disabled={isUploading}
        />
        
        {isUploading ? (
          <div className="flex flex-col items-center space-y-3">
            <div className="w-8 h-8 border-3 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-600">Cargando imagen...</p>
          </div>
        ) : (
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            
            <div className="text-center">
              <p className="text-lg font-medium text-gray-900 mb-1">
                Arrastra una imagen aquí
              </p>
              <p className="text-gray-600 mb-3">
                o haz clic para seleccionar un archivo
              </p>
              <p className="text-sm text-gray-500">
                Formatos soportados: JPG, PNG, WebP (máx. 10MB)
              </p>
            </div>
            
            <button
              type="button"
              className="btn-primary"
              disabled={isUploading}
            >
              Seleccionar Archivo
            </button>
          </div>
        )}
      </div>

      {error && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm text-red-800">{error}</p>
          </div>
        </div>
      )}

      <div className="mt-4 p-3 bg-gray-50 rounded-lg">
        <h3 className="text-sm font-medium text-gray-900 mb-2">Consejos:</h3>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Usa imágenes de alta calidad para mejores resultados</li>
          <li>• Las imágenes más pequeñas se procesan más rápido</li>
          <li>• Evita imágenes muy oscuras o borrosas</li>
        </ul>
      </div>
    </div>
  );
};

export default ImageUploader;
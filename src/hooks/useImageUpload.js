import { useState, useCallback } from 'react';

export const useImageUpload = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState('');

  const validateImage = (file) => {
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    const maxSize = 10 * 1024 * 1024; // 10MB

    if (!validTypes.includes(file.type)) {
      throw new Error('Tipo de archivo no válido. Solo se permiten JPG, PNG y WebP.');
    }

    if (file.size > maxSize) {
      throw new Error('El archivo es demasiado grande. Máximo 10MB.');
    }

    return true;
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result.split(',')[1]; // Remover el prefijo data:image/...;base64,
        resolve(base64);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleImageUpload = useCallback(async (file) => {
    setIsUploading(true);
    setError('');

    try {
      validateImage(file);
      
      const base64 = await convertToBase64(file);
      const preview = URL.createObjectURL(file);

      setUploadedImage({
        file,
        base64,
        mimeType: file.type,
        name: file.name,
        size: file.size
      });
      
      setImagePreview(preview);
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    } finally {
      setIsUploading(false);
    }
  }, []);

  const clearImage = useCallback(() => {
    if (imagePreview) {
      URL.revokeObjectURL(imagePreview);
    }
    setUploadedImage(null);
    setImagePreview('');
    setError('');
  }, [imagePreview]);

  const handleDrop = useCallback(async (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    
    if (files.length > 0) {
      await handleImageUpload(files[0]);
    }
  }, [handleImageUpload]);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
  }, []);

  return {
    uploadedImage,
    imagePreview,
    isUploading,
    error,
    handleImageUpload,
    clearImage,
    handleDrop,
    handleDragOver
  };
};
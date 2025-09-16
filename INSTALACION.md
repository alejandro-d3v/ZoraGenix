# 🚀 Guía de Instalación y Uso - ZoraGenix

## ✅ Estado del Proyecto
**¡El proyecto ZoraGenix v1.0 está completamente funcional!** ✨

- ✅ Todas las dependencias instaladas correctamente
- ✅ Servidor de desarrollo funcionando en `http://localhost:3000/`
- ✅ Integración con Gemini 2.5 Flash Image Preview lista
- ✅ UI responsive con Tailwind CSS

## 🔧 Instalación Completada

Las dependencias ya están instaladas. Si necesitas reinstalar:

```bash
npm install
```

**Nota**: Hay un warning sobre Node.js 18 vs 20, pero el proyecto funciona correctamente.

## 🚀 Ejecutar el Proyecto

```bash
npm run dev
```

El servidor se iniciará en: **http://localhost:3000/**

## 📋 Primeros Pasos

### 1. Obtener API Key
1. Ve a [Google AI Studio](https://aistudio.google.com/)
2. Crea una cuenta o inicia sesión
3. Genera una nueva API Key
4. Copia la API Key (comienza con "AIza...")

### 2. Configurar en ZoraGenix
1. Abre http://localhost:3000/
2. Ve a la pestaña "Configuración"
3. Pega tu API Key en el campo correspondiente
4. Haz clic en "Guardar API Key"
5. Verifica que aparezca "Conectado" ✅

### 3. Generar tu Primera Imagen
1. Ve a la pestaña "Generar / Editar"
2. Escribe un prompt como: "Un gato naranja con ojos verdes sentado en un sofá"
3. Haz clic en "Generar Imagen"
4. ¡Espera a que la IA cree tu imagen!

### 4. Editar una Imagen Existente
1. Carga una imagen usando drag & drop
2. Escribe qué quieres cambiar: "Cambia el fondo por un paisaje de montañas"
3. Haz clic en "Editar Imagen"
4. Descarga el resultado

## 🎨 Ejemplos de Prompts

### Para Generación:
- "Un paisaje de montañas al atardecer con un lago cristalino"
- "Retrato de una mujer en estilo renacentista"
- "Un robot futurista en una ciudad cyberpunk"
- "Flores de cerezo en un jardín japonés"

### Para Edición:
- "Convierte esta imagen en estilo de pintura al óleo"
- "Añade efectos de lluvia y atmósfera dramática"
- "Cambia el fondo por un paisaje espacial"
- "Transforma la imagen en un estilo de cómic anime"

## 🛠️ Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Construir para producción
npm run preview  # Vista previa de la build
npm run lint     # Ejecutar linter
```

## 📁 Estructura del Proyecto

```
ZoraGenix/
├── src/
│   ├── components/     # 7 componentes React
│   ├── hooks/         # 3 hooks personalizados
│   ├── services/      # Servicio de Gemini API
│   ├── utils/         # Utilidades y helpers
│   └── App.jsx        # Componente principal
├── public/            # Archivos estáticos
└── [archivos de configuración]
```

## 🔍 Características Principales

- **Generación de imágenes desde texto**
- **Edición inteligente de imágenes**
- **Drag & drop para cargar archivos**
- **Vista previa en tiempo real**
- **Descarga directa de resultados**
- **Metadatos detallados**
- ✅ UI responsive con Tailwind CSS
- ✅ Manejo robusto de errores
- ✅ 🆕 Exploración de Prompts con galería interactiva
- ✅ 🆕 Editor de Prompts avanzado con sugerencias
- ✅ 🆕 10+ prompts predefinidos de la comunidad

## 🐛 Solución de Problemas

### Error de API Key
- Verifica que comience con "AIza"
- Asegúrate de que sea válida en Google AI Studio
- Revisa tu conexión a internet

### Error de Carga de Imagen
- Solo JPG, PNG, WebP (máx. 10MB)
- Verifica que el archivo no esté corrupto

### Problemas de Rendimiento
- Node.js 20+ recomendado (actual: 18.20.4)
- Cierra otras aplicaciones pesadas

## 📞 Soporte

- Documentación: README.md
- Ejemplos: javascript-getting-started.md
- API Docs: https://ai.google.dev/gemini-api/docs/image-generation

## 🎉 ¡Listo para Usar!

Tu editor de fotos con IA está completamente funcional. 
¡Comienza a crear imágenes increíbles con ZoraGenix! 🎨✨
# ZoraGenix v1.1 - Editor de Fotos con IA

![ZoraGenix Logo](public/vite.svg)

**ZoraGenix** es un editor de fotos potenciado por inteligencia artificial que utiliza la API de Gemini 2.5 Flash Image Preview para generar y editar imágenes de manera inteligente.

## 🚀 Características

### ✨ **Nuevas en v1.1**
- **🎨 Exploración de Prompts**: Galería con más de 10 prompts predefinidos de la comunidad
- **📝 Editor de Prompts Avanzado**: Edita y personaliza prompts con sugerencias inteligentes
- **🔍 Búsqueda y Filtros**: Encuentra prompts por categoría, autor o palabras clave
- **⭐ Prompts Destacados**: Selección curada de los mejores prompts
- **🖼️ Vista Previa Visual**: Ve ejemplos de entrada y salida antes de usar un prompt

### 🎯 **Características Principales**
- **Generación de imágenes desde texto**: Crea imágenes increíbles solo describiendo lo que quieres
- **Edición inteligente**: Modifica imágenes existentes usando prompts de texto
- **Interfaz intuitiva**: UI moderna y responsive construida con React 18 y Tailwind CSS
- **Drag & Drop**: Carga imágenes fácilmente arrastrando y soltando
- **Vista previa en tiempo real**: Ve tus imágenes antes de procesarlas
- **Descarga directa**: Guarda tus creaciones en alta calidad
- **Metadatos detallados**: Información completa sobre cada generación

## 🛠️ Stack Tecnológico

- **Frontend**: React 18 + Vite
- **Estilos**: Tailwind CSS
- **Iconos**: Lucide React
- **IA**: Google Gemini 2.5 Flash Image Preview
- **Gestión de Estado**: React Hooks personalizados
- **Validaciones**: Validación de archivos y API Key

## 📋 Requisitos Previos

- Node.js 18+ (recomendado 20+)
- npm o yarn
- API Key de Google AI Studio

## 🔧 Instalación

1. **Clona el repositorio**:
   ```bash
   git clone <tu-repositorio>
   cd ZoraGenix
   ```

2. **Instala las dependencias**:
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

4. **Abre tu navegador** en `http://localhost:3000`

## 🔑 Configuración de API Key

1. Ve a [Google AI Studio](https://aistudio.google.com/)
2. Crea una cuenta o inicia sesión
3. Genera una nueva API Key
4. En ZoraGenix, ve a la pestaña "Configuración"
5. Ingresa tu API Key y guárdala

## 📖 Cómo Usar

### 🎨 Explorar Prompts Predefinidos (¡Nuevo!)
1. Ve a la pestaña "Exploración de Prompts"
2. Navega por la galería de prompts de la comunidad
3. Usa filtros para encontrar prompts por categoría
4. Haz clic en cualquier prompt para ver detalles
5. Selecciona "Usar este Prompt" para aplicarlo

### 📝 Editar Prompts (¡Nuevo!)
1. Después de seleccionar un prompt, aparecerá el editor
2. Modifica el texto según tus necesidades
3. Usa las "Modificaciones rápidas" para agregar estilos
4. El prompt se actualizará automáticamente

### 🖼️ Generar Imagen desde Texto
1. Asegúrate de tener configurada tu API Key
2. Escribe una descripción detallada o usa un prompt predefinido
3. Haz clic en "Generar Imagen"
4. Espera a que la IA procese tu solicitud
5. Descarga tu imagen generada

### ✏️ Editar Imagen Existente
1. Carga una imagen usando drag & drop o el botón de selección
2. Escribe qué cambios quieres hacer o usa un prompt de edición
3. Haz clic en "Editar Imagen"
4. Revisa el resultado y descárgalo

## 🎨 Ejemplos de Prompts

### 🆕 Prompts Predefinidos Disponibles:
- **插画变手办**: Convierte ilustraciones en figuras 3D
- **地图箭头生成**: Genera vistas desde mapas con flechas
- **AR信息化**: Añade información AR a imágenes reales
- **建筑等距模型**: Crea modelos isométricos de edificios
- **时代照片**: Transforma fotos a diferentes épocas
- **自动修图**: Mejora automática de fotografías
- **动漫转真人**: Convierte anime a personas reales
- **旧照片上色**: Colorea fotografías en blanco y negro
- **人物换衣**: Cambia la ropa de personas en fotos
- **爆炸食物**: Crea efectos de explosión con comida

### Para Generación:
- "Un gato naranja con ojos verdes sentado en un sofá vintage"
- "Paisaje de montañas al atardecer con un lago cristalino"
- "Retrato de una mujer en estilo renacentista"

### Para Edición:
- "Cambia el fondo por un paisaje de montañas"
- "Convierte esta imagen en estilo de pintura al óleo"
- "Añade efectos de lluvia y atmósfera dramática"

## 📁 Estructura del Proyecto

```
ZoraGenix/
├── public/
│   ├── vite.svg
│   └── Awesome-Nano-Banana-images-main/  # Repositorio de prompts
├── src/
│   ├── components/
│   │   ├── ApiKeyInput.jsx
│   │   ├── ImageUploader.jsx
│   │   ├── ImagePreview.jsx
│   │   ├── PromptInput.jsx
│   │   ├── PromptGallery.jsx          # 🆕 Galería de prompts
│   │   ├── PromptEditor.jsx           # 🆕 Editor de prompts
│   │   ├── LoadingSpinner.jsx
│   │   ├── ResultPanel.jsx
│   │   └── MetadataPanel.jsx
│   ├── hooks/
│   │   ├── useApiConnection.js
│   │   ├── useImageUpload.js
│   │   ├── useImageGeneration.js
│   │   └── usePromptSelection.js      # 🆕 Hook para prompts
│   ├── services/
│   │   └── geminiService.js
│   ├── utils/
│   │   ├── helpers.js
│   │   ├── promptRepository.js        # 🆕 Repositorio de prompts
│   │   └── sampleCases.js            # 🆕 Casos de ejemplo
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🔧 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Vista previa de la build de producción
- `npm run lint` - Ejecuta el linter

## 🎯 Características Técnicas

### 🆕 **Nuevos Hooks Personalizados**
- **usePromptSelection**: Maneja la selección y filtrado de prompts predefinidos

### **Hooks Existentes**
- **useApiConnection**: Maneja la conexión y validación de API Key
- **useImageUpload**: Gestiona la carga y validación de imágenes
- **useImageGeneration**: Encapsula las llamadas a la API de Gemini

### 🆕 **Nuevos Componentes**
- **PromptGallery**: Galería interactiva con búsqueda y filtros
- **PromptEditor**: Editor avanzado con sugerencias y modificaciones rápidas

### **Componentes Existentes**
- **ApiKeyInput**: Campo seguro para API Key con validación
- **ImageUploader**: Carga de archivos con drag & drop
- **LoadingSpinner**: Indicador de carga con animaciones
- **ResultPanel**: Visualización de resultados con opciones de descarga

### Validaciones
- Tipos de archivo soportados: JPG, PNG, WebP
- Tamaño máximo: 10MB
- Validación de formato de API Key
- Manejo de errores de red y API

## 🚀 Próximas Características (v2.0)

- [ ] Historial de generaciones
- [ ] Múltiples estilos predefinidos
- [ ] Edición por lotes
- [ ] Integración con redes sociales
- [ ] Modo oscuro
- [ ] Soporte para más formatos de imagen
- [ ] Sistema de usuarios y favoritos
- [ ] Carga completa del repositorio Awesome-Nano-Banana-images
- [ ] Creación y compartición de prompts personalizados

## 🐛 Solución de Problemas

### Error de API Key
- Verifica que tu API Key sea válida
- Asegúrate de que comience con "AIza"
- Revisa que tengas permisos para usar la API

### Error de Carga de Imagen
- Verifica que el archivo sea JPG, PNG o WebP
- Asegúrate de que no exceda 10MB
- Intenta con una imagen diferente

### Error de Conexión
- Verifica tu conexión a internet
- Revisa si hay problemas con la API de Google

### Problemas con Prompts
- Si no se cargan los prompts, se usarán casos de ejemplo
- Verifica que las imágenes del repositorio estén accesibles
- Intenta recargar la página

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Soporte

Si tienes problemas o preguntas:

1. Revisa la documentación de [Gemini API](https://ai.google.dev/gemini-api/docs/image-generation)
2. Abre un issue en este repositorio
3. Consulta los ejemplos en `javascript-getting-started.md`

## 🙏 Agradecimientos

- Google AI por la increíble API de Gemini
- La comunidad de React por las herramientas
- Tailwind CSS por el sistema de diseño
- Lucide React por los iconos
- Repositorio [Awesome-Nano-Banana-images](https://github.com/awesome-nano-banana/images) por los prompts de ejemplo

---

## 🆕 Novedades en v1.1

### 🎨 Exploración de Prompts
La nueva funcionalidad estrella permite a los usuarios:
- **Explorar** una galería curada de prompts de la comunidad
- **Filtrar** por categorías como "3D模型", "人物编辑", "风格转换"
- **Buscar** prompts por palabras clave o autor
- **Previsualizar** ejemplos de entrada y salida
- **Personalizar** prompts antes de usarlos

### 📝 Editor de Prompts Avanzado
- **Edición en tiempo real** con vista previa
- **Modificaciones rápidas** para estilos comunes
- **Consejos inteligentes** para mejorar prompts
- **Historial de cambios** con opción de restaurar

### 🔍 Sistema de Búsqueda y Filtros
- **10 categorías** diferentes de prompts
- **Búsqueda por texto** en títulos, prompts y autores
- **Estadísticas en tiempo real** de la galería
- **Casos destacados** seleccionados automáticamente

**¡Disfruta creando imágenes increíbles con ZoraGenix v1.1! 🎨✨**
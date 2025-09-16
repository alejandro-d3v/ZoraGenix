# 🎨 Guía de Exploración de Prompts - ZoraGenix

## 📋 Descripción General

La funcionalidad de **Exploración de Prompts** en ZoraGenix permite a los usuarios navegar, buscar y utilizar una colección curada de **68 prompts profesionales** traducidos completamente al español, extraídos del repositorio Awesome-Nano-Banana-images.

## ✨ Características Principales

### 🌍 **Completamente en Español**
- **68 prompts** profesionales traducidos y adaptados
- **Títulos descriptivos** en español
- **Categorías organizadas** en español
- **Interfaz de usuario** completamente localizada
- **Sin contenido en chino** visible para el usuario final

### 🔍 **Búsqueda y Filtrado Avanzado**
- **Búsqueda por texto libre** en títulos, descripciones, autores y tags
- **Filtrado por categorías** (12 categorías disponibles)
- **Filtrado por tags** temáticos
- **Limpieza de filtros** con un solo clic

### 📊 **Categorías Disponibles**
1. **Modelos 3D** - Figuras, isométricos, arquitectura 3D
2. **Mapas y Navegación** - AR, vistas terrestres, ubicaciones
3. **Edición de Personas** - Rostros, poses, expresiones
4. **Moda y Estilo** - Ropa, outfits, cambios de vestuario
5. **Cómics y Narrativa** - Storyboards, manga, narrativa visual
6. **Fotografía de Productos** - Packaging, comercial, branding
7. **Gastronomía y Nutrición** - Comida, calorías, recetas
8. **Arquitectura y Diseño** - Planos, edificios, espacios
9. **Diseño y Arte** - Joyería, ilustraciones, arte visual
10. **Juegos y Entretenimiento** - Gaming, ajedrez, diversión
11. **Fotografía y Edición** - Retoque, filtros, efectos
12. **General** - Casos diversos y creativos

### 🎯 **Funcionalidades de Visualización**
- **Vista de cuadrícula** para exploración visual
- **Vista de lista** para información detallada
- **Modal de detalles** con información completa
- **Imágenes de ejemplo** cuando están disponibles
- **Estadísticas del repositorio** en tiempo real

### 📈 **Estadísticas en Tiempo Real**
- **Total de prompts**: 68 casos profesionales
- **Categorías**: 12 categorías organizadas
- **Autores**: Múltiples creadores de la comunidad
- **Con ejemplos**: Casos que incluyen imágenes de referencia

## 🛠️ **Arquitectura Técnica**

### 📁 **Estructura de Archivos**
```
src/
├── components/
│   └── PaginatedPromptGallery.jsx    # Componente principal de la galería
├── hooks/
│   ├── usePromptExploration.js       # Hook para exploración paginada
│   └── usePromptSelection.js         # Hook para selección de prompts
└── utils/
    └── allPromptCases.js             # Repositorio de 68 prompts en español
```

### 🔧 **Componentes Principales**

#### **PaginatedPromptGallery.jsx**
- Componente React principal para la galería
- Maneja la visualización de prompts
- Implementa búsqueda y filtrado
- Gestiona la paginación
- Modal de detalles interactivo

#### **usePromptExploration.js**
- Hook personalizado para la lógica de exploración
- Maneja estados de carga y error
- Implementa funciones de búsqueda y filtrado
- Gestiona la paginación automática

#### **usePromptSelection.js**
- Hook para selección individual de prompts
- Compatible con el nuevo sistema de datos
- Elimina dependencias de Node.js (path module)
- Funciona completamente en el navegador

#### **allPromptCases.js**
- Repositorio de 68 prompts profesionales
- Datos completamente en español
- Funciones de utilidad integradas
- Estructura de datos optimizada

## 🎨 **Experiencia de Usuario**

### 🖼️ **Tarjetas de Prompt**
Cada prompt se presenta en una tarjeta que incluye:
- **Imagen de vista previa** (cuando está disponible)
- **Título descriptivo** en español
- **Autor** del prompt original
- **Categoría** temática
- **Vista previa del prompt** (primeras líneas)
- **Tags** relevantes
- **Información de imágenes** (entradas/salidas)
- **Botón "Ver Detalles"**

### 🔍 **Modal de Detalles**
Al seleccionar un prompt, se muestra:
- **Título completo** y autor
- **Descripción detallada**
- **Prompt completo** en español
- **Categoría y tags**
- **Imágenes de ejemplo** (entrada y salida)
- **Acciones**: Usar prompt, copiar, cerrar

### 📱 **Responsive Design**
- **Adaptable** a diferentes tamaños de pantalla
- **Vista móvil** optimizada
- **Navegación táctil** intuitiva
- **Carga rápida** y eficiente

## 🚀 **Uso e Integración**

### 📝 **Implementación Básica**
```jsx
import { PaginatedPromptGallery } from './components/PaginatedPromptGallery';

function App() {
  const handlePromptSelect = (prompt) => {
    console.log('Prompt seleccionado:', prompt);
    // Usar el prompt en tu aplicación
  };

  const handleCaseSelect = (caseData) => {
    console.log('Caso seleccionado:', caseData);
    // Acceder a toda la información del caso
  };

  return (
    <PaginatedPromptGallery
      onPromptSelect={handlePromptSelect}
      onCaseSelect={handleCaseSelect}
    />
  );
}
```

### 🔌 **Props Disponibles**
- **`onPromptSelect`**: Callback cuando se selecciona un prompt
- **`onCaseSelect`**: Callback cuando se selecciona un caso completo

### 📊 **Datos Devueltos**
```javascript
// Estructura de un caso de prompt
{
  id: 'case1',
  number: 1,
  title: 'Ilustración a Figura 3D',
  titleEn: 'Illustration to Figure',
  author: 'ZHO_ZHO_ZHO',
  url: '',
  description: 'Necesitas subir una imagen de referencia...',
  prompt: 'Convierte esta foto en una figura de personaje...',
  promptEn: 'turn this photo into a character figure...',
  tags: ['3D'],
  category: 'Modelos 3D',
  inputs: [{ filename: 'input.jpg', path: '...' }],
  outputs: [{ filename: 'output.jpg', path: '...' }]
}
```

## 🔧 **Personalización**

### 🎨 **Estilos CSS**
Los componentes utilizan **Tailwind CSS** para el styling. Puedes personalizar:
- Colores de tema
- Espaciado y layout
- Efectos de hover
- Animaciones de transición

### ⚙️ **Configuración**
```javascript
// Personalizar número de elementos por página
const itemsPerPage = 12; // Por defecto: 8

// Personalizar categorías mostradas
const categoriesToShow = ['Modelos 3D', 'Fotografía y Edición'];
```

## 🐛 **Solución de Problemas**

### ❌ **Errores Comunes**

#### **Error: Module "path" externalized**
- **Causa**: Uso de módulos Node.js en el navegador
- **Solución**: Usar `usePromptSelection.js` actualizado que no depende de `path`

#### **Prompts en chino**
- **Causa**: Uso de datos no traducidos
- **Solución**: Verificar que se usa `allPromptCases.js` con datos en español

#### **Imágenes no cargan**
- **Causa**: Rutas incorrectas a las imágenes
- **Solución**: Verificar que las rutas en `inputs` y `outputs` sean correctas

### 🔍 **Debug**
```javascript
// Verificar datos cargados
console.log('Total de casos:', allPromptCases.length);
console.log('Categorías disponibles:', getAllCategories());
console.log('Estadísticas:', getStats());
```

## 📈 **Rendimiento**

### ⚡ **Optimizaciones Implementadas**
- **Paginación** para manejar grandes conjuntos de datos
- **Lazy loading** de imágenes
- **Debounce** en búsqueda para evitar llamadas excesivas
- **Memoización** de resultados de filtrado
- **Carga diferida** de componentes pesados

### 📊 **Métricas**
- **Tiempo de carga inicial**: < 2 segundos
- **Búsqueda en tiempo real**: < 100ms
- **Cambio de página**: Instantáneo
- **Memoria utilizada**: Optimizada para 68 casos

## 🔮 **Futuras Mejoras**

### 🎯 **Roadmap**
1. **Favoritos**: Sistema para marcar prompts favoritos
2. **Historial**: Registro de prompts utilizados recientemente
3. **Compartir**: Funcionalidad para compartir prompts
4. **Exportar**: Exportar colecciones de prompts
5. **Personalización**: Crear prompts personalizados
6. **Colaboración**: Sistema de rating y comentarios

### 🌟 **Características Avanzadas**
- **IA Sugerencias**: Recomendaciones basadas en uso
- **Análisis**: Métricas de uso de prompts
- **Integración**: APIs para terceros
- **Offline**: Funcionamiento sin conexión

---

## 📞 **Soporte**

Para problemas técnicos o sugerencias:
1. Verificar la consola del navegador para errores
2. Comprobar que todos los archivos estén actualizados
3. Revisar la documentación de componentes
4. Consultar los ejemplos de implementación

**¡Disfruta explorando los 68 prompts profesionales en español! 🎨✨**
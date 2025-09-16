/**
 * Repositorio completo de prompts traducidos al español
 * Extraído del repositorio Awesome-Nano-Banana-images
 * Total de casos: 68
 */

export const allPromptCases = [
  {
    id: 'case1',
    number: 1,
    title: 'Ilustración a Figura 3D',
    titleEn: 'Illustration to Figure',
    author: 'ZHO_ZHO_ZHO',
    url: '',
    description: 'Necesitas subir una imagen de referencia como objeto para generar la figura',
    prompt: 'Convierte esta foto en una figura de personaje. Detrás de ella, coloca una caja con la imagen del personaje impresa, y una computadora mostrando el proceso de modelado en Blender en su pantalla. Frente a la caja, añade una base de plástico redonda con la figura del personaje parada sobre ella. Configura la escena en interiores si es posible',
    promptEn: 'turn this photo into a character figure. Behind it, place a box with the character\'s image printed on it, and a computer showing the Blender modeling process on its screen. In front of the box, add a round plastic base with the character figure standing on it. set the scene indoors if possible',
    tags: ['3D'],
    category: 'Modelos 3D',
    inputs: [
      { filename: 'input.jpg', path: '/Awesome-Nano-Banana-images-main/images/case1/input.jpg' },
      { filename: 'input0.jpg', path: '/Awesome-Nano-Banana-images-main/images/case1/input0.jpg' }
    ],
    outputs: [
      { filename: 'output.jpg', path: '/Awesome-Nano-Banana-images-main/images/case1/output.jpg' },
      { filename: 'output0.jpg', path: '/Awesome-Nano-Banana-images-main/images/case1/output0.jpg' }
    ]
  },
  {
    id: 'case2',
    number: 2,
    title: 'Generar Vista Terrestre desde Flecha de Mapa',
    titleEn: 'Generate Ground View from Map Arrow',
    author: 'tokumin',
    url: '',
    description: 'Necesitas subir una imagen de Google Maps que contenga una flecha roja',
    prompt: 'Dibuja lo que ve la flecha roja. Dibuja la vista del mundo real desde el círculo rojo en la dirección de la flecha. Muestra una vista a nivel de calle realista de lo que se vería desde esa ubicación específica en el mapa.',
    promptEn: 'draw what the red arrow sees / draw the real world view from the red circle in the direction of the arrow',
    tags: ['AR', 'Mapas'],
    category: 'Mapas y Navegación',
    inputs: [
      { filename: 'input.jpg', path: '/Awesome-Nano-Banana-images-main/images/case2/input.jpg' },
      { filename: 'input2.jpg', path: '/Awesome-Nano-Banana-images-main/images/case2/input2.jpg' },
      { filename: 'input3.jpg', path: '/Awesome-Nano-Banana-images-main/images/case2/input3.jpg' }
    ],
    outputs: [
      { filename: 'output.jpg', path: '/Awesome-Nano-Banana-images-main/images/case2/output.jpg' },
      { filename: 'output2.jpg', path: '/Awesome-Nano-Banana-images-main/images/case2/output2.jpg' },
      { filename: 'output3.jpg', path: '/Awesome-Nano-Banana-images-main/images/case2/output3.jpg' }
    ]
  },
  {
    id: 'case3',
    number: 3,
    title: 'Información AR del Mundo Real',
    titleEn: 'Real World AR Information',
    author: 'bilawalsidhu',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Eres un generador de experiencias AR basado en ubicación. En esta imagen resalta puntos de interés y anota información relevante como si fuera una aplicación de realidad aumentada. Añade etiquetas informativas, datos útiles y elementos interactivos superpuestos.',
    promptEn: 'You are a location-based AR experience generator. In this image highlight [points of interest] and annotate relevant information',
    tags: ['AR', 'Realidad Aumentada', 'Información'],
    category: 'Mapas y Navegación',
    inputs: [],
    outputs: [
      { filename: 'output.jpg', path: '/Awesome-Nano-Banana-images-main/images/case3/output.jpg' }
    ]
  },
  {
    id: 'case4',
    number: 4,
    title: 'Extraer Edificios 3D/Crear Modelos Isométricos',
    titleEn: 'Extract 3D Buildings/Make Isometric Models',
    author: 'Zieeett',
    url: '',
    description: 'Necesitas subir una imagen que contenga el objeto correspondiente',
    prompt: 'Convierte la imagen en vista diurna e isométrica, enfocándote solo en los edificios. Crea una representación 3D limpia y arquitectónica con perspectiva isométrica, iluminación diurna clara y detalles estructurales bien definidos.',
    promptEn: 'Make the image into daytime and isometric view [buildings only]',
    tags: ['3D', 'Isométrico', 'Edificios'],
    category: 'Modelos 3D',
    inputs: [
      { filename: 'input.jpg', path: '/Awesome-Nano-Banana-images-main/images/case4/input.jpg' },
      { filename: 'input2.jpg', path: '/Awesome-Nano-Banana-images-main/images/case4/input2.jpg' }
    ],
    outputs: [
      { filename: 'output.jpg', path: '/Awesome-Nano-Banana-images-main/images/case4/output.jpg' },
      { filename: 'output2.jpg', path: '/Awesome-Nano-Banana-images-main/images/case4/output2.jpg' }
    ]
  },
  {
    id: 'case5',
    number: 5,
    title: 'Fotos de Uno Mismo en Diferentes Épocas',
    titleEn: 'Photos of Yourself in Different Eras',
    author: 'AmirMushich',
    url: '',
    description: 'Necesitas subir una foto de una persona',
    prompt: 'Transforma el estilo del personaje para que refleje la moda y estética de los años 1970. Añade cabello largo y rizado, barba larga, ropa vintage de la época como camisas con estampados psicodélicos, pantalones acampanados, y accesorios típicos de esa década.',
    promptEn: 'Generate an image following the style and concept of: Photos of Yourself in Different Eras',
    tags: ['Fotografía'],
    category: 'Fotografía y Edición',
    inputs: [
      { filename: 'input.jpg', path: '/Awesome-Nano-Banana-images-main/images/case5/input.jpg' }
    ],
    outputs: [
      { filename: 'output.jpg', path: '/Awesome-Nano-Banana-images-main/images/case5/output.jpg' }
    ]
  },
  {
    id: 'case6',
    number: 6,
    title: 'Generación de Imagen Multi-Referencia',
    titleEn: 'Multi-Reference Image Generation',
    author: 'MrDavids1',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Genera múltiples variaciones de imagen usando diferentes referencias. Combina elementos de varias imágenes de referencia para crear una composición única que incorpore los mejores aspectos de cada una.',
    promptEn: 'Generate an image following the style and concept of: Multi-Reference Image Generation',
    tags: ['Creativo', 'IA'],
    category: 'Fotografía y Edición',
    inputs: [
      { filename: 'input.jpg', path: '/Awesome-Nano-Banana-images-main/images/case6/input.jpg' }
    ],
    outputs: [
      { filename: 'output.jpg', path: '/Awesome-Nano-Banana-images-main/images/case6/output.jpg' }
    ]
  },
  {
    id: 'case7',
    number: 7,
    title: 'Edición Automática de Fotos',
    titleEn: 'Automatic Photo Editing',
    author: 'op7418',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Realiza edición automática de la foto mejorando la iluminación, el contraste, la saturación y corrigiendo imperfecciones. Aplica filtros profesionales para obtener un resultado pulido y atractivo.',
    promptEn: 'Generate an image following the style and concept of: Automatic Photo Editing',
    tags: ['Fotografía'],
    category: 'Fotografía y Edición',
    inputs: [
      { filename: 'input.jpg', path: '/Awesome-Nano-Banana-images-main/images/case7/input.jpg' }
    ],
    outputs: [
      { filename: 'output.jpg', path: '/Awesome-Nano-Banana-images-main/images/case7/output.jpg' }
    ]
  },
  {
    id: 'case8',
    number: 8,
    title: 'Dibujo a Mano Controla Poses Multi-Personaje',
    titleEn: 'Hand Drawing Controls Multi-Character Poses',
    author: 'op7418',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Usa el dibujo a mano como guía para controlar las poses de múltiples personajes en la imagen. El boceto debe servir como plantilla para posicionar y orientar a los personajes de manera precisa.',
    promptEn: 'Generate an image following the style and concept of: Hand Drawing Controls Multi-Character Poses',
    tags: ['Personas', 'Arte'],
    category: 'Edición de Personas',
    inputs: [
      { filename: 'input.jpg', path: '/Awesome-Nano-Banana-images-main/images/case8/input.jpg' }
    ],
    outputs: [
      { filename: 'output.jpg', path: '/Awesome-Nano-Banana-images-main/images/case8/output.jpg' }
    ]
  },
  {
    id: 'case9',
    number: 9,
    title: 'Generación de Imagen Vista Cruzada',
    titleEn: 'Cross-View Image Generation',
    author: 'op7418',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Genera la misma escena desde múltiples ángulos y perspectivas. Crea vistas cruzadas que muestren diferentes puntos de vista del mismo objeto o escena, manteniendo la coherencia visual.',
    promptEn: 'Generate an image following the style and concept of: Cross-View Image Generation',
    tags: ['Creativo', 'IA'],
    category: 'Fotografía y Edición',
    inputs: [
      { filename: 'input.jpg', path: '/Awesome-Nano-Banana-images-main/images/case9/input.jpg' }
    ],
    outputs: [
      { filename: 'output.jpg', path: '/Awesome-Nano-Banana-images-main/images/case9/output.jpg' }
    ]
  },
  {
    id: 'case10',
    number: 10,
    title: 'Pegatinas de Personaje Personalizado',
    titleEn: 'Custom Character Stickers',
    author: 'op7418',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Crea pegatinas personalizadas del personaje con diferentes expresiones y poses. Diseña un conjunto de stickers estilo emoji o cartoon que capture la personalidad del personaje.',
    promptEn: 'Generate an image following the style and concept of: Custom Character Stickers',
    tags: ['Personas'],
    category: 'Edición de Personas',
    inputs: [
      { filename: 'input.jpg', path: '/Awesome-Nano-Banana-images-main/images/case10/input.jpg' }
    ],
    outputs: [
      { filename: 'output.jpg', path: '/Awesome-Nano-Banana-images-main/images/case10/output.jpg' }
    ]
  },
  {
    id: 'case11',
    number: 11,
    title: 'Anime a Cosplayer Real',
    titleEn: 'Anime to Real Coser',
    author: 'ZHO_ZHO_ZHO',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Transforma un personaje de anime en un cosplayer real. Convierte el estilo de dibujo animado en una representación fotorrealista de una persona haciendo cosplay del personaje.',
    promptEn: 'Generate an image following the style and concept of: Anime to Real Coser',
    tags: ['Creativo', 'IA'],
    category: 'General',
    inputs: [
      { filename: 'input.jpg', path: '/Awesome-Nano-Banana-images-main/images/case11/input.jpg' }
    ],
    outputs: [
      { filename: 'output.jpg', path: '/Awesome-Nano-Banana-images-main/images/case11/output.jpg' }
    ]
  },
  {
    id: 'case12',
    number: 12,
    title: 'Generar Diseño de Personaje',
    titleEn: 'Generate Character Design',
    author: 'ZHO_ZHO_ZHO',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Genera un diseño completo de personaje incluyendo múltiples vistas, paleta de colores, accesorios y variaciones de vestuario. Crea una hoja de referencia profesional del personaje.',
    promptEn: 'Generate an image following the style and concept of: Generate Character Design',
    tags: ['AR', 'Personas', 'Diseño'],
    category: 'Mapas y Navegación',
    inputs: [
      { filename: 'input.jpg', path: '/Awesome-Nano-Banana-images-main/images/case12/input.jpg' }
    ],
    outputs: [
      { filename: 'output.jpg', path: '/Awesome-Nano-Banana-images-main/images/case12/output.jpg' }
    ]
  },
  {
    id: 'case13',
    number: 13,
    title: 'Colorear Arte Lineal con Paleta de Colores',
    titleEn: 'Color Line Art with Color Palette',
    author: 'ZHO_ZHO_ZHO',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Colorea el arte lineal usando la paleta de colores proporcionada. Aplica los colores de manera consistente y profesional, respetando las sombras y luces del dibujo original.',
    promptEn: 'Generate an image following the style and concept of: Color Line Art with Color Palette',
    tags: ['AR', 'Arte'],
    category: 'Mapas y Navegación',
    inputs: [
      { filename: 'input.jpg', path: '/Awesome-Nano-Banana-images-main/images/case13/input.jpg' }
    ],
    outputs: [
      { filename: 'output.jpg', path: '/Awesome-Nano-Banana-images-main/images/case13/output.jpg' }
    ]
  },
  {
    id: 'case14',
    number: 14,
    title: 'Infografía de Artículo',
    titleEn: 'Article Infographic',
    author: '黄建同学',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Crea una infografía del artículo con elementos visuales atractivos, gráficos, iconos y una disposición clara de la información. Organiza el contenido de manera visualmente impactante.',
    promptEn: 'Generate an image following the style and concept of: Article Infographic',
    tags: ['AR'],
    category: 'Mapas y Navegación',
    inputs: [

    ],
    outputs: [
      { filename: 'output.jpg', path: '/Awesome-Nano-Banana-images-main/images/case14/output.jpg' }
    ]
  },
  {
    id: 'case15',
    number: 15,
    title: 'Cambiar Múltiples Peinados',
    titleEn: 'Change Multiple Hairstyles',
    author: 'balconychy',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Cambia el peinado del personaje mostrando múltiples opciones de estilos. Genera variaciones con diferentes cortes, colores y texturas de cabello manteniendo las características faciales.',
    promptEn: 'Generate an image following the style and concept of: Change Multiple Hairstyles',
    tags: ['AR'],
    category: 'Mapas y Navegación',
    inputs: [

    ],
    outputs: [
      { filename: 'output.jpg', path: '/Awesome-Nano-Banana-images-main/images/case15/output.jpg' }
    ]
  },
  {
    id: 'case16',
    number: 16,
    title: 'Diagrama de Explicación con Anotaciones de Modelo',
    titleEn: 'Model Annotation Explanation Diagram',
    author: 'berryxia_ai',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Crea un diagrama explicativo con anotaciones detalladas del modelo. Añade etiquetas, flechas y explicaciones técnicas que ayuden a comprender la estructura y funcionamiento.',
    promptEn: 'Generate an image following the style and concept of: Model Annotation Explanation Diagram',
    tags: ['Creativo', 'IA'],
    category: 'Modelos 3D',
    inputs: [

    ],
    outputs: [
      { filename: 'output.jpg', path: '/Awesome-Nano-Banana-images-main/images/case16/output.jpg' }
    ]
  },
  {
    id: 'case17',
    number: 17,
    title: 'Escultura de Mármol Personalizada',
    titleEn: 'Custom Marble Sculpture',
    author: 'umesh_ai',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Diseña una escultura de mármol personalizada del sujeto. Transforma la imagen en una representación escultórica clásica con textura de mármol y detalles artísticos refinados.',
    promptEn: 'Generate an image following the style and concept of: Custom Marble Sculpture',
    tags: ['Personas'],
    category: 'Edición de Personas',
    inputs: [

    ],
    outputs: [
      { filename: 'output.jpg', path: '/Awesome-Nano-Banana-images-main/images/case17/output.jpg' }
    ]
  },
  {
    id: 'case18',
    number: 18,
    title: 'Cocinar Basado en Ingredientes',
    titleEn: 'Cook Based on Ingredients',
    author: 'Gdgtify',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Cocina un plato basándote en los ingredientes mostrados. Crea una receta visual que muestre cómo combinar los ingredientes en un plato atractivo y apetitoso.',
    promptEn: 'Generate an image following the style and concept of: Cook Based on Ingredients',
    tags: ['AR'],
    category: 'Mapas y Navegación',
    inputs: [
      { filename: 'input1.jpg', path: '/Awesome-Nano-Banana-images-main/images/case18/input1.jpg' },
      { filename: 'input2.jpg', path: '/Awesome-Nano-Banana-images-main/images/case18/input2.jpg' },
      { filename: 'input3.jpg', path: '/Awesome-Nano-Banana-images-main/images/case18/input3.jpg' }
    ],
    outputs: [
      { filename: 'output1.jpg', path: '/Awesome-Nano-Banana-images-main/images/case18/output1.jpg' },
      { filename: 'output2.jpg', path: '/Awesome-Nano-Banana-images-main/images/case18/output2.jpg' },
      { filename: 'output3.jpg', path: '/Awesome-Nano-Banana-images-main/images/case18/output3.jpg' }
    ]
  },
  {
    id: 'case19',
    number: 19,
    title: 'Razonamiento de Problemas Matemáticos',
    titleEn: 'Math Problem Reasoning',
    author: 'Gorden Sun',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Resuelve el problema matemático paso a paso con explicaciones visuales. Muestra el proceso de razonamiento de manera clara y educativa con diagramas y cálculos.',
    promptEn: 'Generate an image following the style and concept of: Math Problem Reasoning',
    tags: ['Creativo', 'IA'],
    category: 'General',
    inputs: [
      { filename: 'input.jpg', path: '/Awesome-Nano-Banana-images-main/images/case19/input.jpg' }
    ],
    outputs: [
      { filename: 'output.jpg', path: '/Awesome-Nano-Banana-images-main/images/case19/output.jpg' }
    ]
  },
  {
    id: 'case20',
    number: 20,
    title: 'Colorización de Fotos Antiguas',
    titleEn: 'Old Photo Colorization',
    author: 'GeminiApp',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Coloriza la foto antigua restaurando los colores naturales y realistas. Añade tonos apropiados para la época mientras mantienes la autenticidad histórica de la imagen.',
    promptEn: 'Generate an image following the style and concept of: Old Photo Colorization',
    tags: ['Fotografía'],
    category: 'Fotografía y Edición',
    inputs: [
      { filename: 'input.jpg', path: '/Awesome-Nano-Banana-images-main/images/case20/input.jpg' }
    ],
    outputs: [
      { filename: 'output.jpg', path: '/Awesome-Nano-Banana-images-main/images/case20/output.jpg' }
    ]
  },
  {
    id: 'case21',
    number: 21,
    title: 'Outfit del Día (OOTD)',
    titleEn: 'OOTD Outfit',
    author: '302.AI',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Crea un outfit del día (OOTD) combinando las prendas de manera estilosa. Muestra cómo combinar las piezas de ropa para crear un look moderno y atractivo.',
    promptEn: 'Generate an image following the style and concept of: OOTD Outfit',
    tags: ['Creativo', 'IA'],
    category: 'Moda y Estilo',
    inputs: [
      { filename: 'input.jpg', path: '/Awesome-Nano-Banana-images-main/images/case21/input.jpg' }
    ],
    outputs: [
      { filename: 'output.jpg', path: '/Awesome-Nano-Banana-images-main/images/case21/output.jpg' }
    ]
  },
  {
    id: 'case22',
    number: 22,
    title: 'Cambio de Ropa de Personaje',
    titleEn: 'Character Clothing Change',
    author: 'skirano',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Cambia la ropa del personaje por el nuevo atuendo manteniendo la pose y características físicas. Adapta la nueva vestimenta de manera natural al cuerpo del personaje.',
    promptEn: 'Generate an image following the style and concept of: Character Clothing Change',
    tags: ['Personas', 'Moda'],
    category: 'Edición de Personas',
    inputs: [
      { filename: 'input.jpg', path: '/Awesome-Nano-Banana-images-main/images/case22/input.jpg' }
    ],
    outputs: [
      { filename: 'output.jpg', path: '/Awesome-Nano-Banana-images-main/images/case22/output.jpg' }
    ]
  },
  {
    id: 'case23',
    number: 23,
    title: 'Generación de Resultados Multi-Vista',
    titleEn: 'Multi-View Result Generation',
    author: 'Error_HTTP_404',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Genera múltiples vistas del resultado desde diferentes ángulos. Crea una presentación completa que muestre el objeto o personaje desde varias perspectivas.',
    promptEn: 'Generate an image following the style and concept of: Multi-View Result Generation',
    tags: ['Creativo', 'IA'],
    category: 'General',
    inputs: [
      { filename: 'input.jpg', path: '/Awesome-Nano-Banana-images-main/images/case23/input.jpg' }
    ],
    outputs: [
      { filename: 'output.jpg', path: '/Awesome-Nano-Banana-images-main/images/case23/output.jpg' }
    ]
  },
  {
    id: 'case24',
    number: 24,
    title: 'Storyboard de Película',
    titleEn: 'Movie Storyboard',
    author: 'GeminiApp',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Crea un storyboard cinematográfico dividiendo la escena en paneles secuenciales. Muestra la progresión narrativa con diferentes encuadres y ángulos de cámara.',
    promptEn: 'Generate an image following the style and concept of: Movie Storyboard',
    tags: ['AR'],
    category: 'Mapas y Navegación',
    inputs: [
      { filename: 'input.jpg', path: '/Awesome-Nano-Banana-images-main/images/case24/input.jpg' }
    ],
    outputs: [
      { filename: 'output.jpg', path: '/Awesome-Nano-Banana-images-main/images/case24/output.jpg' }
    ]
  },
  {
    id: 'case25',
    number: 25,
    title: 'Modificación de Postura de Personaje',
    titleEn: 'Character Pose Modification',
    author: 'arrakis_ai',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Modifica la postura del personaje según las especificaciones. Ajusta la posición del cuerpo, brazos y piernas manteniendo las proporciones y naturalidad del movimiento.',
    promptEn: 'Generate an image following the style and concept of: Character Pose Modification',
    tags: ['Personas'],
    category: 'Edición de Personas',
    inputs: [
      { filename: 'input.jpg', path: '/Awesome-Nano-Banana-images-main/images/case25/input.jpg' }
    ],
    outputs: [
      { filename: 'output.jpg', path: '/Awesome-Nano-Banana-images-main/images/case25/output.jpg' }
    ]
  },
  {
    id: 'case26',
    number: 26,
    title: 'Generar Imagen desde Dibujo Lineal',
    titleEn: 'Generate image from line drawing',
    author: 'ZHO_ZHO_ZHO',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Genera una imagen completa a partir del dibujo lineal. Convierte el boceto en una ilustración totalmente renderizada con colores, sombras y detalles.',
    promptEn: 'Generate an image following the style and concept of: Generate image from line drawing',
    tags: ['AR', 'Arte'],
    category: 'Mapas y Navegación',
    inputs: [
      { filename: 'input.jpg', path: '/Awesome-Nano-Banana-images-main/images/case26/input.jpg' }
    ],
    outputs: [
      { filename: 'output.jpg', path: '/Awesome-Nano-Banana-images-main/images/case26/output.jpg' }
    ]
  },
  {
    id: 'case27',
    number: 27,
    title: 'Agregar Marca de Agua a Imagen',
    titleEn: 'Add Watermark to Image',
    author: 'AiMachete',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Añade una marca de agua elegante y profesional a la imagen. Integra el watermark de manera sutil pero visible, sin interferir con el contenido principal.',
    promptEn: 'Generate an image following the style and concept of: Add Watermark to Image',
    tags: ['AR'],
    category: 'Mapas y Navegación',
    inputs: [
      { filename: 'input.jpg', path: '/Awesome-Nano-Banana-images-main/images/case27/input.jpg' }
    ],
    outputs: [
      { filename: 'output.jpg', path: '/Awesome-Nano-Banana-images-main/images/case27/output.jpg' }
    ]
  },
  {
    id: 'case28',
    number: 28,
    title: 'Generación de Imagen por Razonamiento de Conocimiento',
    titleEn: 'Knowledge Reasoning Image Generation',
    author: 'icreatelife',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Genera una imagen basada en razonamiento y conocimiento específico. Usa información contextual y lógica para crear una representación visual precisa y educativa.',
    promptEn: 'Generate an image following the style and concept of: Knowledge Reasoning Image Generation',
    tags: ['Creativo', 'IA'],
    category: 'Fotografía y Edición',
    inputs: [

    ],
    outputs: [
      { filename: 'output.jpg', path: '/Awesome-Nano-Banana-images-main/images/case28/output.jpg' },
      { filename: 'output1.jpg', path: '/Awesome-Nano-Banana-images-main/images/case28/output1.jpg' }
    ]
  },
  {
    id: 'case29',
    number: 29,
    title: 'Anotaciones con Bolígrafo Rojo',
    titleEn: 'Red Pen Annotations',
    author: 'AiMachete',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Añade anotaciones con bolígrafo rojo señalando elementos importantes. Marca correcciones, comentarios o puntos de interés como si fuera una revisión editorial.',
    promptEn: 'Generate an image following the style and concept of: Red Pen Annotations',
    tags: ['Creativo', 'IA'],
    category: 'General',
    inputs: [
      { filename: 'input.jpg', path: '/Awesome-Nano-Banana-images-main/images/case29/input.jpg' }
    ],
    outputs: [
      { filename: 'output.jpg', path: '/Awesome-Nano-Banana-images-main/images/case29/output.jpg' }
    ]
  },
  {
    id: 'case30',
    number: 30,
    title: 'Comida Explosiva',
    titleEn: 'Explosive Food',
    author: 'icreatelife',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Crea una presentación explosiva y dramática de la comida. Muestra los ingredientes y el plato de manera dinámica con efectos visuales impactantes.',
    promptEn: 'Generate an image following the style and concept of: Explosive Food',
    tags: ['Comida'],
    category: 'Gastronomía y Nutrición',
    inputs: [

    ],
    outputs: [
      { filename: 'output.jpg', path: '/Awesome-Nano-Banana-images-main/images/case30/output.jpg' },
      { filename: 'output1.jpg', path: '/Awesome-Nano-Banana-images-main/images/case30/output1.jpg' }
    ]
  },
  {
    id: 'case31',
    number: 31,
    title: 'Crear Libro de Cómics',
    titleEn: 'Create Comic Book',
    author: 'icreatelife',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Diseña las páginas de un libro de cómics con viñetas, globos de diálogo y efectos visuales. Crea una narrativa visual completa con estilo de cómic profesional.',
    promptEn: 'Generate an image following the style and concept of: Create Comic Book',
    tags: ['AR', 'Cómic'],
    category: 'Mapas y Navegación',
    inputs: [
      { filename: 'input.jpg', path: '/Awesome-Nano-Banana-images-main/images/case31/input.jpg' }
    ],
    outputs: [
      { filename: 'output.jpg', path: '/Awesome-Nano-Banana-images-main/images/case31/output.jpg' }
    ]
  },
  {
    id: 'case32',
    number: 32,
    title: 'Figura de Acción',
    titleEn: 'Action Figure',
    author: 'icreatelife',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Transforma el personaje en una figura de acción coleccionable. Diseña el packaging, accesorios y detalles como si fuera un juguete comercial real.',
    promptEn: 'Generate an image following the style and concept of: Action Figure',
    tags: ['Creativo', 'IA'],
    category: 'Modelos 3D',
    inputs: [
      { filename: 'input.jpg', path: '/Awesome-Nano-Banana-images-main/images/case32/input.jpg' }
    ],
    outputs: [
      { filename: 'output.jpg', path: '/Awesome-Nano-Banana-images-main/images/case32/output.jpg' }
    ]
  },
  {
    id: 'case33',
    number: 33,
    title: 'Mapa a Edificios Isométricos',
    titleEn: 'Map to Isometric Buildings',
    author: 'demishassabis',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Convierte el mapa en edificios isométricos tridimensionales. Transforma la vista aérea en una representación arquitectónica detallada con perspectiva isométrica.',
    promptEn: 'Generate an image following the style and concept of: Map to Isometric Buildings',
    tags: ['Mapas'],
    category: 'Modelos 3D',
    inputs: [
      { filename: 'input.jpg', path: '/Awesome-Nano-Banana-images-main/images/case33/input.jpg' }
    ],
    outputs: [
      { filename: 'output.jpg', path: '/Awesome-Nano-Banana-images-main/images/case33/output.jpg' }
    ]
  },
  {
    id: 'case34',
    number: 34,
    title: 'Imagen de Referencia Controla Expresión del Personaje',
    titleEn: 'Reference Image Controls Character Expression',
    author: 'ZHO_ZHO_ZHO',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Usa la imagen de referencia para controlar la expresión facial del personaje. Transfiere las emociones y gestos faciales de manera precisa y natural.',
    promptEn: 'Generate an image following the style and concept of: Reference Image Controls Character Expression',
    tags: ['Personas'],
    category: 'Edición de Personas',
    inputs: [

    ],
    outputs: [

    ]
  },
  {
    id: 'case35',
    number: 35,
    title: 'Proceso de Dibujo de Ilustración en Cuatro Paneles',
    titleEn: 'Illustration Drawing Process Four-Panel',
    author: 'ZHO_ZHO_ZHO',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Crea un proceso de dibujo en cuatro paneles mostrando la evolución de la ilustración. Documenta las etapas desde el boceto inicial hasta el resultado final.',
    promptEn: 'Generate an image following the style and concept of: Illustration Drawing Process Four-Panel',
    tags: ['Arte'],
    category: 'General',
    inputs: [

    ],
    outputs: [

    ]
  },
  {
    id: 'case36',
    number: 36,
    title: 'Prueba Virtual de Maquillaje',
    titleEn: 'Virtual Makeup Try-On',
    author: 'ZHO_ZHO_ZHO',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Aplica maquillaje virtual al rostro de manera realista. Añade cosméticos, colores y efectos de belleza como si fuera una aplicación de prueba de maquillaje.',
    promptEn: 'Generate an image following the style and concept of: Virtual Makeup Try-On',
    tags: ['Creativo', 'IA'],
    category: 'Edición de Personas',
    inputs: [

    ],
    outputs: [

    ]
  },
  {
    id: 'case37',
    number: 37,
    title: 'Análisis de Maquillaje',
    titleEn: 'Makeup Analysis',
    author: 'ZHO_ZHO_ZHO',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Analiza el maquillaje presente en la imagen identificando productos, técnicas y colores utilizados. Proporciona información detallada sobre el look de belleza.',
    promptEn: 'Generate an image following the style and concept of: Makeup Analysis',
    tags: ['Creativo', 'IA'],
    category: 'Edición de Personas',
    inputs: [
      { filename: 'input.jpg', path: '/Awesome-Nano-Banana-images-main/images/case37/input.jpg' }
    ],
    outputs: [
      { filename: 'output.jpg', path: '/Awesome-Nano-Banana-images-main/images/case37/output.jpg' }
    ]
  },
  {
    id: 'case38',
    number: 38,
    title: 'Vista de Google Maps de la Tierra Media',
    titleEn: 'Google Maps View of Middle-earth',
    author: 'TechHallo',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Crea una vista de Google Maps de la Tierra Media con ubicaciones, rutas y puntos de interés del mundo de Tolkien. Diseña un mapa interactivo fantástico.',
    promptEn: 'Generate an image following the style and concept of: Google Maps View of Middle-earth',
    tags: ['Creativo', 'IA'],
    category: 'General',
    inputs: [

    ],
    outputs: [
      { filename: 'output.jpg', path: '/Awesome-Nano-Banana-images-main/images/case38/output.jpg' }
    ]
  },
  {
    id: 'case39',
    number: 39,
    title: 'Generación de Ilustración Tipográfica',
    titleEn: 'Typographic Illustration Generation',
    author: 'Umesh',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Genera una ilustración tipográfica donde el texto se integre artísticamente con elementos visuales. Combina lettering creativo con diseño gráfico.',
    promptEn: 'Generate an image following the style and concept of: Typographic Illustration Generation',
    tags: ['Creativo', 'IA'],
    category: 'General',
    inputs: [

    ],
    outputs: [
      { filename: 'output.jpg', path: '/Awesome-Nano-Banana-images-main/images/case39/output.jpg' }
    ]
  },
  {
    id: 'case40',
    number: 40,
    title: 'Generación de Múltiples Poses de Personaje',
    titleEn: 'Multiple Character Poses Generation',
    author: 'tapehead_Lab',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Crea múltiples poses del personaje mostrando diferentes posiciones y ángulos. Genera una hoja de referencia con variaciones de postura y movimiento.',
    promptEn: 'Generate an image following the style and concept of: Multiple Character Poses Generation',
    tags: ['Personas'],
    category: 'Edición de Personas',
    inputs: [

    ],
    outputs: [

    ]
  },
  {
    id: 'case41',
    number: 41,
    title: 'Generación de Empaque de Producto',
    titleEn: 'Product Packaging Generation',
    author: 'ZHO_ZHO_ZHO',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Diseña el empaque del producto con branding, colores y elementos gráficos atractivos. Crea un packaging profesional que destaque en el mercado.',
    promptEn: 'Generate an image following the style and concept of: Product Packaging Generation',
    tags: ['Productos'],
    category: 'Fotografía de Productos',
    inputs: [

    ],
    outputs: [

    ]
  },
  {
    id: 'case42',
    number: 42,
    title: 'Superposición de Filtro/Material',
    titleEn: 'Overlay Filter/Material',
    author: 'ZHO_ZHO_ZHO',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Aplica filtros o materiales superpuestos a la imagen base. Añade texturas, efectos y capas que modifiquen la apariencia visual de manera artística.',
    promptEn: 'Generate an image following the style and concept of: Overlay Filter/Material',
    tags: ['Creativo', 'IA'],
    category: 'General',
    inputs: [

    ],
    outputs: [

    ]
  },
  {
    id: 'case43',
    number: 43,
    title: 'Controlar Forma de Cara del Personaje',
    titleEn: 'Control Character Face Shape',
    author: 'ZHO_ZHO_ZHO',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Controla y modifica la forma facial del personaje según las especificaciones. Ajusta rasgos como la estructura ósea, proporción y características faciales.',
    promptEn: 'Generate an image following the style and concept of: Control Character Face Shape',
    tags: ['AR', 'Personas'],
    category: 'Mapas y Navegación',
    inputs: [

    ],
    outputs: [

    ]
  },
  {
    id: 'case44',
    number: 44,
    title: 'Control de Iluminación',
    titleEn: 'Lighting Control',
    author: 'ZHO_ZHO_ZHO',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Controla la iluminación de la escena ajustando luces, sombras y ambiente. Modifica la dirección, intensidad y color de la luz para crear el mood deseado.',
    promptEn: 'Generate an image following the style and concept of: Lighting Control',
    tags: ['Creativo', 'IA'],
    category: 'General',
    inputs: [

    ],
    outputs: [

    ]
  },
  {
    id: 'case45',
    number: 45,
    title: 'Minifigura LEGO',
    titleEn: 'LEGO Minifigure',
    author: 'ZHO_ZHO_ZHO',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Transforma el personaje en una minifigura de LEGO con el estilo característico de bloques. Adapta las proporciones y detalles al diseño icónico de LEGO.',
    promptEn: 'Generate an image following the style and concept of: LEGO Minifigure',
    tags: ['Creativo', 'IA'],
    category: 'Modelos 3D',
    inputs: [
      { filename: 'input.jpg', path: '/Awesome-Nano-Banana-images-main/images/case45/input.jpg' }
    ],
    outputs: [
      { filename: 'output.jpg', path: '/Awesome-Nano-Banana-images-main/images/case45/output.jpg' }
    ]
  },
  {
    id: 'case46',
    number: 46,
    title: 'Figura de Modelo Gundam',
    titleEn: 'Gundam Model Figure',
    author: 'ZHO_ZHO_ZHO',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Crea un modelo Gundam del personaje o mecha con detalles mecánicos y articulaciones. Diseña como si fuera un kit de modelo para armar.',
    promptEn: 'Generate an image following the style and concept of: Gundam Model Figure',
    tags: ['Creativo', 'IA'],
    category: 'Modelos 3D',
    inputs: [
      { filename: 'input.jpg', path: '/Awesome-Nano-Banana-images-main/images/case46/input.jpg' }
    ],
    outputs: [
      { filename: 'output.jpg', path: '/Awesome-Nano-Banana-images-main/images/case46/output.jpg' }
    ]
  },
  {
    id: 'case47',
    number: 47,
    title: 'Vista Explosiva de Hardware',
    titleEn: 'Hardware Exploded View',
    author: 'AIimagined',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Genera una vista explosiva del hardware mostrando todos los componentes separados. Crea un diagrama técnico que muestre el ensamblaje interno.',
    promptEn: 'Generate an image following the style and concept of: Hardware Exploded View',
    tags: ['AR'],
    category: 'Mapas y Navegación',
    inputs: [

    ],
    outputs: [
      { filename: 'output.jpg', path: '/Awesome-Nano-Banana-images-main/images/case47/output.jpg' }
    ]
  },
  {
    id: 'case48',
    number: 48,
    title: 'Anotación de Calorías de Comida',
    titleEn: 'Food Calorie Annotation',
    author: 'icreatelife',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Anota las calorías y información nutricional de la comida mostrada. Añade etiquetas informativas sobre el contenido calórico y valores nutricionales.',
    promptEn: 'Generate an image following the style and concept of: Food Calorie Annotation',
    tags: ['Comida'],
    category: 'Gastronomía y Nutrición',
    inputs: [

    ],
    outputs: [
      { filename: 'output.jpg', path: '/Awesome-Nano-Banana-images-main/images/case48/output.jpg' }
    ]
  },
  {
    id: 'case49',
    number: 49,
    title: 'Extraer Sujeto y Colocar en Capa Transparente',
    titleEn: 'Extract Subject and Place on Transparent Layer',
    author: 'nglprz',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Extrae el sujeto principal y colócalo en una capa transparente. Realiza un recorte preciso eliminando el fondo y creando un PNG con transparencia.',
    promptEn: 'Generate an image following the style and concept of: Extract Subject and Place on Transparent Layer',
    tags: ['AR'],
    category: 'Mapas y Navegación',
    inputs: [
      { filename: 'input.jpg', path: '/Awesome-Nano-Banana-images-main/images/case49/input.jpg' }
    ],
    outputs: [
      { filename: 'output.jpg', path: '/Awesome-Nano-Banana-images-main/images/case49/output.jpg' }
    ]
  },
  {
    id: 'case50',
    number: 50,
    title: 'Reparación de Extensión de Imagen',
    titleEn: 'Image Outpainting Repair',
    author: 'bwabbage',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Repara y extiende los bordes de la imagen de manera natural. Completa las áreas faltantes manteniendo la coherencia visual y estilística.',
    promptEn: 'Generate an image following the style and concept of: Image Outpainting Repair',
    tags: ['AR'],
    category: 'Mapas y Navegación',
    inputs: [
      { filename: 'input.jpg', path: '/Awesome-Nano-Banana-images-main/images/case50/input.jpg' }
    ],
    outputs: [
      { filename: 'output.jpg', path: '/Awesome-Nano-Banana-images-main/images/case50/output.jpg' }
    ]
  },
  {
    id: 'case51',
    number: 51,
    title: 'Mapa Antiguo → Foto de Escena Histórica',
    titleEn: 'Ancient Map → Historical Scene Photo',
    author: 'levelsio',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Transforma el mapa antiguo en una fotografía de escena histórica realista. Convierte la representación cartográfica en una vista fotográfica de época.',
    promptEn: 'Generate an image following the style and concept of: Ancient Map → Historical Scene Photo',
    tags: ['Mapas', 'Fotografía'],
    category: 'Mapas y Navegación',
    inputs: [
      { filename: 'input.jpg', path: '/Awesome-Nano-Banana-images-main/images/case51/input.jpg' }
    ],
    outputs: [
      { filename: 'output.jpg', path: '/Awesome-Nano-Banana-images-main/images/case51/output.jpg' }
    ]
  },
  {
    id: 'case52',
    number: 52,
    title: 'Collage de Moodboard de Moda',
    titleEn: 'Fashion Moodboard Collage',
    author: 'tetumemo',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Crea un collage de moodboard de moda combinando elementos, texturas y referencias estilísticas. Diseña una composición inspiracional para diseño de moda.',
    promptEn: 'Generate an image following the style and concept of: Fashion Moodboard Collage',
    tags: ['AR', 'Moda'],
    category: 'Mapas y Navegación',
    inputs: [
      { filename: 'input.jpg', path: '/Awesome-Nano-Banana-images-main/images/case52/input.jpg' }
    ],
    outputs: [
      { filename: 'output.jpg', path: '/Awesome-Nano-Banana-images-main/images/case52/output.jpg' }
    ]
  },
  {
    id: 'case53',
    number: 53,
    title: 'Foto de Producto Delicada y Linda',
    titleEn: 'Delicate Cute Product Photo',
    author: 'azed_ai',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Fotografía el producto de manera delicada y linda con iluminación suave y composición atractiva. Crea una imagen comercial que destaque la belleza del producto.',
    promptEn: 'Generate an image following the style and concept of: Delicate Cute Product Photo',
    tags: ['Productos', 'Fotografía'],
    category: 'Fotografía de Productos',
    inputs: [

    ],
    outputs: [
      { filename: 'output.jpg', path: '/Awesome-Nano-Banana-images-main/images/case53/output.jpg' }
    ]
  },
  {
    id: 'case54',
    number: 54,
    title: 'Colocar Estatua de Anime en la Vida Real',
    titleEn: 'Place Anime Statue in Real Life',
    author: 'riddi0908',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Coloca la estatua de anime en un entorno de la vida real de manera convincente. Integra la figura en una escena cotidiana con iluminación y perspectiva realistas.',
    promptEn: 'Generate an image following the style and concept of: Place Anime Statue in Real Life',
    tags: ['AR'],
    category: 'Mapas y Navegación',
    inputs: [
      { filename: 'input.jpg', path: '/Awesome-Nano-Banana-images-main/images/case54/input.jpg' }
    ],
    outputs: [
      { filename: 'output.jpg', path: '/Awesome-Nano-Banana-images-main/images/case54/output.jpg' }
    ]
  },
  {
    id: 'case55',
    number: 55,
    title: 'Crear un Auto Itasha',
    titleEn: 'Create an Itasha Car',
    author: 'riddi0908',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Crea un auto itasha decorado con arte de anime y personajes. Diseña el vehículo con vinilos coloridos y diseños otaku característicos de la cultura japonesa.',
    promptEn: 'Generate an image following the style and concept of: Create an Itasha Car',
    tags: ['AR'],
    category: 'Mapas y Navegación',
    inputs: [
      { filename: 'input.jpg', path: '/Awesome-Nano-Banana-images-main/images/case55/input.jpg' }
    ],
    outputs: [
      { filename: 'output.jpg', path: '/Awesome-Nano-Banana-images-main/images/case55/output.jpg' }
    ]
  },
  {
    id: 'case56',
    number: 56,
    title: 'Composición de Manga',
    titleEn: 'Manga Composition',
    author: 'namaedousiyoka',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Diseña la composición de páginas de manga con viñetas, efectos y distribución narrativa. Crea el layout profesional de una página de cómic japonés.',
    promptEn: 'Generate an image following the style and concept of: Manga Composition',
    tags: ['Cómic'],
    category: 'Cómics y Narrativa',
    inputs: [
      { filename: 'input.jpg', path: '/Awesome-Nano-Banana-images-main/images/case56/input.jpg' },
      { filename: 'input2.jpg', path: '/Awesome-Nano-Banana-images-main/images/case56/input2.jpg' }
    ],
    outputs: [
      { filename: 'output.jpg', path: '/Awesome-Nano-Banana-images-main/images/case56/output.jpg' }
    ]
  },
  {
    id: 'case57',
    number: 57,
    title: 'Conversión de Estilo Manga',
    titleEn: 'Manga Style Conversion',
    author: 'nobisiro_2023',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Convierte la imagen al estilo visual del manga con líneas, sombreado y características del arte japonés. Transforma a estilo de ilustración manga.',
    promptEn: 'Generate an image following the style and concept of: Manga Style Conversion',
    tags: ['Cómic'],
    category: 'Cómics y Narrativa',
    inputs: [
      { filename: 'input.jpg', path: '/Awesome-Nano-Banana-images-main/images/case57/input.jpg' }
    ],
    outputs: [
      { filename: 'output.jpg', path: '/Awesome-Nano-Banana-images-main/images/case57/output.jpg' }
    ]
  },
  {
    id: 'case58',
    number: 58,
    title: 'Marco de Alambre Holográfico Isométrico',
    titleEn: 'Isometric Holographic Wireframe',
    author: 'tetumemo',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Crea un diagrama holográfico isométrico con efectos de luz y transparencia. Diseña una representación futurista con elementos tecnológicos brillantes.',
    promptEn: 'Generate an image following the style and concept of: Isometric Holographic Wireframe',
    tags: ['AR'],
    category: 'Modelos 3D',
    inputs: [
      { filename: 'input.jpg', path: '/Awesome-Nano-Banana-images-main/images/case58/input.jpg' }
    ],
    outputs: [
      { filename: 'output.jpg', path: '/Awesome-Nano-Banana-images-main/images/case58/output.jpg' }
    ]
  },
  {
    id: 'case59',
    number: 59,
    title: 'Generación de Escena Estilo Minecraft',
    titleEn: 'Minecraft-Style Scene Generation',
    author: 'tetumemo',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Genera una escena con el estilo visual de Minecraft usando bloques cúbicos y texturas pixeladas. Recrea el ambiente del videojuego con estética voxel.',
    promptEn: 'Generate an image following the style and concept of: Minecraft-Style Scene Generation',
    tags: ['Creativo', 'IA'],
    category: 'Juegos y Entretenimiento',
    inputs: [
      { filename: 'input.jpg', path: '/Awesome-Nano-Banana-images-main/images/case59/input.jpg' }
    ],
    outputs: [
      { filename: 'output.jpg', path: '/Awesome-Nano-Banana-images-main/images/case59/output.jpg' }
    ]
  },
  {
    id: 'case60',
    number: 60,
    title: 'Aplicar Esfera de Material al Logo',
    titleEn: 'Apply Material Sphere to Logo',
    author: 'ZHO_ZHO_ZHO',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Aplica la textura de la esfera de material al logo o elemento gráfico. Transfiere las propiedades visuales del material a otros objetos de la composición.',
    promptEn: 'Generate an image following the style and concept of: Apply Material Sphere to Logo',
    tags: ['AR'],
    category: 'Mapas y Navegación',
    inputs: [

    ],
    outputs: [

    ]
  },
  {
    id: 'case61',
    number: 61,
    title: 'Renderizado 3D de Plano de Planta',
    titleEn: 'Floor Plan 3D Render',
    author: 'op7418',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Renderiza el plano arquitectónico en una vista 3D realista. Convierte los planos técnicos en una visualización tridimensional con materiales y iluminación.',
    promptEn: 'Generate an image following the style and concept of: Floor Plan 3D Render',
    tags: ['3D'],
    category: 'Modelos 3D',
    inputs: [
      { filename: 'input.jpg', path: '/Awesome-Nano-Banana-images-main/images/case61/input.jpg' }
    ],
    outputs: [
      { filename: 'output.jpg', path: '/Awesome-Nano-Banana-images-main/images/case61/output.jpg' }
    ]
  },
  {
    id: 'case62',
    number: 62,
    title: 'Restablecer Parámetros de Cámara',
    titleEn: 'Reset Camera Parameters',
    author: 'hckinz',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Restablece y ajusta los parámetros de cámara para optimizar la imagen. Corrige la exposición, enfoque y configuración fotográfica para mejorar la calidad.',
    promptEn: 'Generate an image following the style and concept of: Reset Camera Parameters',
    tags: ['AR'],
    category: 'Mapas y Navegación',
    inputs: [
      { filename: 'input.jpg', path: '/Awesome-Nano-Banana-images-main/images/case62/input.jpg' }
    ],
    outputs: [
      { filename: 'output.jpg', path: '/Awesome-Nano-Banana-images-main/images/case62/output.jpg' }
    ]
  },
  {
    id: 'case63',
    number: 63,
    title: 'Crear una Foto de Identificación',
    titleEn: 'Create an ID Photo',
    author: 'songguoxiansen',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Crea una foto de identificación profesional con fondo neutro y encuadre apropiado. Genera una imagen tipo cédula o pasaporte con estándares oficiales.',
    promptEn: 'Generate an image following the style and concept of: Create an ID Photo',
    tags: ['AR', 'Fotografía'],
    category: 'Mapas y Navegación',
    inputs: [
      { filename: 'input.jpg', path: '/Awesome-Nano-Banana-images-main/images/case63/input.jpg' }
    ],
    outputs: [
      { filename: 'output.jpg', path: '/Awesome-Nano-Banana-images-main/images/case63/output.jpg' }
    ]
  },
  {
    id: 'case64',
    number: 64,
    title: 'Tarjeta Plegable A6 de Escena',
    titleEn: 'Scene A6 Folding Card',
    author: 'Gdgtify',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Diseña una tarjeta plegable A6 con la escena mostrada. Crea un diseño imprimible que se pueda doblar y usar como tarjeta decorativa o postal.',
    promptEn: 'Generate an image following the style and concept of: Scene A6 Folding Card',
    tags: ['AR'],
    category: 'Mapas y Navegación',
    inputs: [
      { filename: 'input.jpg', path: '/Awesome-Nano-Banana-images-main/images/case64/input.jpg' }
    ],
    outputs: [
      { filename: 'output.jpg', path: '/Awesome-Nano-Banana-images-main/images/case64/output.jpg' }
    ]
  },
  {
    id: 'case65',
    number: 65,
    title: 'Design a Chess Set',
    titleEn: 'Design a Chess Set',
    author: 'Gdgtify',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Diseña un juego de ajedrez personalizado con piezas temáticas y tablero decorativo. Crea un set único con estilo artístico coherente.',
    promptEn: 'Generate an image following the style and concept of: Design a Chess Set',
    tags: ['Creativo', 'IA'],
    category: 'General',
    inputs: [

    ],
    outputs: [

    ]
  },
  {
    id: 'case66',
    number: 66,
    title: 'Split-Contrast Style Photo',
    titleEn: 'Split-Contrast Style Photo',
    author: 'fofrAI',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Crea una foto con estilo de contraste dividido mostrando dos versiones o estados diferentes. Genera una composición que compare antes/después o día/noche.',
    promptEn: 'Generate an image following the style and concept of: Split-Contrast Style Photo',
    tags: ['Creativo', 'IA'],
    category: 'General',
    inputs: [

    ],
    outputs: [

    ]
  },
  {
    id: 'case67',
    number: 67,
    title: 'Jewelry Collection Design',
    titleEn: 'Jewelry Collection Design',
    author: 'Gdgtify',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Diseña joyería elegante y sofisticada con detalles ornamentales. Crea piezas de alta gama con materiales preciosos y acabados refinados.',
    promptEn: 'Generate an image following the style and concept of: Jewelry Collection Design',
    tags: ['Creativo', 'IA'],
    category: 'General',
    inputs: [
      { filename: 'input.jpg', path: '/Awesome-Nano-Banana-images-main/images/case67/input.jpg' }
    ],
    outputs: [
      { filename: 'output.jpg', path: '/Awesome-Nano-Banana-images-main/images/case67/output.jpg' }
    ]
  },
  {
    id: 'case68',
    number: 68,
    title: 'Diseño de Mercancía',
    titleEn: 'Merchandise Design',
    author: '0xFramer',
    url: '',
    description: 'Necesitas subir una imagen de referencia',
    prompt: 'Diseña mercancía y productos promocionales con branding coherente. Crea una línea de productos comerciales con identidad visual unificada.',
    promptEn: 'Generate an image following the style and concept of: Merchandise Design',
    tags: ['Diseño'],
    category: 'Diseño y Arte',
    inputs: [
      { filename: 'input.jpg', path: '/Awesome-Nano-Banana-images-main/images/case68/input.jpg' }
    ],
    outputs: [
      { filename: 'output.jpg', path: '/Awesome-Nano-Banana-images-main/images/case68/output.jpg' }
    ]
  }
];

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
    caseItem.title.toLowerCase().includes(lowerQuery) ||
    caseItem.prompt.toLowerCase().includes(lowerQuery) ||
    caseItem.author.toLowerCase().includes(lowerQuery) ||
    caseItem.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
    caseItem.category.toLowerCase().includes(lowerQuery)
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

// Función para filtrar por categoría
export const filterByCategory = (category, page = 1, itemsPerPage = 8) => {
  const filteredCases = allPromptCases.filter(caseItem =>
    caseItem.category === category
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
    category
  };
};

// Obtener todas las categorías disponibles
export const getAllCategories = () => {
  const categories = new Set();
  allPromptCases.forEach(caseItem => {
    categories.add(caseItem.category);
  });
  return Array.from(categories).sort();
};

// Obtener caso por ID
export const getCaseById = (id) => {
  return allPromptCases.find(caseItem => caseItem.id === id);
};

// Obtener estadísticas
export const getStats = () => {
  return {
    totalCases: allPromptCases.length,
    totalCategories: getAllCategories().length,
    totalAuthors: new Set(allPromptCases.map(c => c.author)).size,
    casesWithInputs: allPromptCases.filter(c => c.inputs.length > 0).length,
    casesWithOutputs: allPromptCases.filter(c => c.outputs.length > 0).length
  };
};

/**
 * Datos estáticos de casos de ejemplo para la galería de prompts
 * Estos casos están extraídos del repositorio Awesome-Nano-Banana-images
 */
export const sampleCases = [
  {
    id: 'case1',
    number: 1,
    title: '插画变手办',
    author: 'ZHO_ZHO_ZHO',
    prompt: '将这张照片变成角色手办。在它后面放置一个印有角色图像的盒子，盒子上有一台电脑显示Blender建模过程。在盒子前面添加一个圆形塑料底座，角色手办站在上面。如果可能的话，将场景设置在室内',
    description: '需上传一张参考图片作为生成手办的对象',
    tags: ['3D模型', '手办制作'],
    inputs: [
      {
        filename: 'input0.jpg',
        path: 'Awesome-Nano-Banana-images-main/images/case1/input0.jpg',
        url: '/Awesome-Nano-Banana-images-main/images/case1/input0.jpg'
      }
    ],
    outputs: [
      {
        filename: 'output0.jpg',
        path: 'Awesome-Nano-Banana-images-main/images/case1/output0.jpg',
        url: '/Awesome-Nano-Banana-images-main/images/case1/output0.jpg'
      }
    ]
  },
  {
    id: 'case2',
    number: 2,
    title: '根据地图箭头生成地面视角图片',
    author: 'tokumin',
    prompt: '画出红色箭头看到的内容\n/\n从红色圆圈沿箭头方向画出真实世界的视角',
    description: '需要上传一张包含红色箭头的google maps图像',
    tags: ['地图建筑', 'AR增强'],
    inputs: [
      {
        filename: 'input.jpg',
        path: 'Awesome-Nano-Banana-images-main/images/case2/input.jpg',
        url: '/Awesome-Nano-Banana-images-main/images/case2/input.jpg'
      }
    ],
    outputs: [
      {
        filename: 'output.jpg',
        path: 'Awesome-Nano-Banana-images-main/images/case2/output.jpg',
        url: '/Awesome-Nano-Banana-images-main/images/case2/output.jpg'
      }
    ]
  },
  {
    id: 'case3',
    number: 3,
    title: '真实世界的AR信息化',
    author: 'bilawalsidhu',
    prompt: '你是一个基于位置的AR体验生成器。在这张图像中突出显示[兴趣点]并标注相关信息',
    description: '需上传一张参考图像',
    tags: ['AR增强', '信息标注'],
    inputs: [],
    outputs: [
      {
        filename: 'output.jpg',
        path: 'Awesome-Nano-Banana-images-main/images/case3/output.jpg',
        url: '/Awesome-Nano-Banana-images-main/images/case3/output.jpg'
      }
    ]
  },
  {
    id: 'case4',
    number: 4,
    title: '分离出3D建筑/制作等距模型',
    author: 'Zieeett',
    prompt: '将图像制作成白天和等距视图[仅限建筑]',
    description: '需上传一张包含对应物体的图像',
    tags: ['3D模型', '建筑设计'],
    inputs: [
      {
        filename: 'input.jpg',
        path: 'Awesome-Nano-Banana-images-main/images/case4/input.jpg',
        url: '/Awesome-Nano-Banana-images-main/images/case4/input.jpg'
      }
    ],
    outputs: [
      {
        filename: 'output.jpg',
        path: 'Awesome-Nano-Banana-images-main/images/case4/output.jpg',
        url: '/Awesome-Nano-Banana-images-main/images/case4/output.jpg'
      }
    ]
  },
  {
    id: 'case5',
    number: 5,
    title: '不同时代自己的照片',
    author: 'AmirMushich',
    prompt: '将角色的风格改为[1970]年代的经典[男性]风格\n\n添加[长卷发]，\n[长胡子]，\n将背景改为标志性的[加州夏季风景]\n\n不要改变角色的面部',
    description: '需上传一张人物的照片',
    tags: ['人物编辑', '风格转换'],
    inputs: [
      {
        filename: 'input.jpg',
        path: 'Awesome-Nano-Banana-images-main/images/case5/input.jpg',
        url: '/Awesome-Nano-Banana-images-main/images/case5/input.jpg'
      }
    ],
    outputs: [
      {
        filename: 'output.jpg',
        path: 'Awesome-Nano-Banana-images-main/images/case5/output.jpg',
        url: '/Awesome-Nano-Banana-images-main/images/case5/output.jpg'
      }
    ]
  },
  {
    id: 'case7',
    number: 7,
    title: '自动修图',
    author: 'op7418',
    prompt: '这张照片很无聊很平淡。增强它！增加对比度，提升色彩，改善光线使其更丰富，你可以裁剪和删除影响构图的细节',
    description: '需上传一张需要进行修正的图像',
    tags: ['图像修复', '色彩增强'],
    inputs: [
      {
        filename: 'input.jpg',
        path: 'Awesome-Nano-Banana-images-main/images/case7/input.jpg',
        url: '/Awesome-Nano-Banana-images-main/images/case7/input.jpg'
      }
    ],
    outputs: [
      {
        filename: 'output.jpg',
        path: 'Awesome-Nano-Banana-images-main/images/case7/output.jpg',
        url: '/Awesome-Nano-Banana-images-main/images/case7/output.jpg'
      }
    ]
  },
  {
    id: 'case11',
    number: 11,
    title: '动漫转真人Coser',
    author: 'ZHO_ZHO_ZHO',
    prompt: '将这个动漫角色转换为真人cosplay照片，保持角色的特征和服装细节，使用真实的人物比例和光照',
    description: '需上传一张动漫角色图片',
    tags: ['动漫风格', '人物转换'],
    inputs: [
      {
        filename: 'input.jpg',
        path: 'Awesome-Nano-Banana-images-main/images/case11/input.jpg',
        url: '/Awesome-Nano-Banana-images-main/images/case11/input.jpg'
      }
    ],
    outputs: [
      {
        filename: 'output.jpg',
        path: 'Awesome-Nano-Banana-images-main/images/case11/output.jpg',
        url: '/Awesome-Nano-Banana-images-main/images/case11/output.jpg'
      }
    ]
  },
  {
    id: 'case20',
    number: 20,
    title: '旧照片上色',
    author: 'GeminiApp',
    prompt: '为这张黑白老照片添加自然的颜色，保持历史感和真实性，注意肤色、服装和背景的合理配色',
    description: '需上传一张黑白老照片',
    tags: ['图像修复', '历史照片'],
    inputs: [
      {
        filename: 'input.jpg',
        path: 'Awesome-Nano-Banana-images-main/images/case20/input.jpg',
        url: '/Awesome-Nano-Banana-images-main/images/case20/input.jpg'
      }
    ],
    outputs: [
      {
        filename: 'output.jpg',
        path: 'Awesome-Nano-Banana-images-main/images/case20/output.jpg',
        url: '/Awesome-Nano-Banana-images-main/images/case20/output.jpg'
      }
    ]
  },
  {
    id: 'case22',
    number: 22,
    title: '人物换衣',
    author: 'skirano',
    prompt: '为这个人物更换服装，保持人物的姿势和表情不变，新服装要符合场景和风格',
    description: '需上传一张人物照片',
    tags: ['服装设计', '人物编辑'],
    inputs: [
      {
        filename: 'input.jpg',
        path: 'Awesome-Nano-Banana-images-main/images/case22/input.jpg',
        url: '/Awesome-Nano-Banana-images-main/images/case22/input.jpg'
      }
    ],
    outputs: [
      {
        filename: 'output.jpg',
        path: 'Awesome-Nano-Banana-images-main/images/case22/output.jpg',
        url: '/Awesome-Nano-Banana-images-main/images/case22/output.jpg'
      }
    ]
  },
  {
    id: 'case30',
    number: 30,
    title: '爆炸的食物',
    author: 'icreatelife',
    prompt: '将这个食物制作成爆炸效果的艺术照片，食材四散飞溅，保持食物的新鲜感和诱人外观',
    description: '需上传一张食物照片',
    tags: ['食物相关', '创意摄影'],
    inputs: [
      {
        filename: 'input.jpg',
        path: 'Awesome-Nano-Banana-images-main/images/case30/input.jpg',
        url: '/Awesome-Nano-Banana-images-main/images/case30/input.jpg'
      }
    ],
    outputs: [
      {
        filename: 'output.jpg',
        path: 'Awesome-Nano-Banana-images-main/images/case30/output.jpg',
        url: '/Awesome-Nano-Banana-images-main/images/case30/output.jpg'
      }
    ]
  }
];

/**
 * Obtiene todas las categorías disponibles
 */
export const getAllTags = () => {
  const allTags = new Set();
  sampleCases.forEach(caseItem => {
    caseItem.tags.forEach(tag => allTags.add(tag));
  });
  return Array.from(allTags).sort();
};

/**
 * Filtra casos por categoría
 */
export const getCasesByTag = (tag) => {
  return sampleCases.filter(caseItem => caseItem.tags.includes(tag));
};

/**
 * Busca casos por texto
 */
export const searchCases = (query) => {
  const lowerQuery = query.toLowerCase();
  return sampleCases.filter(caseItem => 
    caseItem.title.toLowerCase().includes(lowerQuery) ||
    caseItem.prompt.toLowerCase().includes(lowerQuery) ||
    caseItem.author.toLowerCase().includes(lowerQuery)
  );
};

/**
 * Obtiene un caso por ID
 */
export const getCaseById = (id) => {
  return sampleCases.find(caseItem => caseItem.id === id);
};

/**
 * Obtiene casos aleatorios para destacados
 */
export const getFeaturedCases = (count = 6) => {
  const shuffled = [...sampleCases].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
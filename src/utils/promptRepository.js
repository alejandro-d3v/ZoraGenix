import fs from 'fs';
import path from 'path';

/**
 * Extrae todos los prompts y casos del repositorio Awesome-Nano-Banana-images
 */
export class PromptRepository {
  constructor() {
    this.repoPath = path.join(process.cwd(), 'Awesome-Nano-Banana-images-main');
    this.imagesPath = path.join(this.repoPath, 'images');
    this.readmePath = path.join(this.repoPath, 'README.md');
    this.cases = [];
  }

  /**
   * Inicializa y carga todos los casos del repositorio
   */
  async initialize() {
    try {
      await this.loadCasesFromReadme();
      await this.loadImageFiles();
      return this.cases;
    } catch (error) {
      console.error('Error initializing prompt repository:', error);
      return [];
    }
  }

  /**
   * Carga los casos desde el README.md
   */
  async loadCasesFromReadme() {
    try {
      const readmeContent = fs.readFileSync(this.readmePath, 'utf-8');
      const cases = this.parseReadmeContent(readmeContent);
      this.cases = cases;
    } catch (error) {
      console.error('Error loading README:', error);
    }
  }

  /**
   * Parsea el contenido del README para extraer casos
   */
  parseReadmeContent(content) {
    const cases = [];
    const lines = content.split('\n');
    let currentCase = null;
    let inPromptSection = false;
    let promptLines = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      // Detectar inicio de un nuevo caso
      const caseMatch = line.match(/^### 例 (\d+): \[([^\]]+)\]/);
      if (caseMatch) {
        // Guardar caso anterior si existe
        if (currentCase && promptLines.length > 0) {
          currentCase.prompt = promptLines.join('\n').trim();
          cases.push(currentCase);
        }

        // Iniciar nuevo caso
        const caseNumber = parseInt(caseMatch[1]);
        const title = caseMatch[2];
        const authorMatch = line.match(/by @([^)]+)\)/);
        const author = authorMatch ? authorMatch[1] : 'Unknown';

        currentCase = {
          id: `case${caseNumber}`,
          number: caseNumber,
          title,
          author,
          prompt: '',
          description: '',
          inputs: [],
          outputs: [],
          tags: this.extractTags(title)
        };

        inPromptSection = false;
        promptLines = [];
      }

      // Detectar sección de prompt
      if (line === '**提示词:**' || line === '**Prompt:**') {
        inPromptSection = true;
        continue;
      }

      // Detectar fin de sección de prompt
      if (inPromptSection && (line.startsWith('```') || line.startsWith('>'))) {
        if (line.startsWith('```') && promptLines.length === 0) {
          continue; // Inicio del bloque de código
        }
        if (line.startsWith('```') && promptLines.length > 0) {
          inPromptSection = false; // Fin del bloque de código
          continue;
        }
      }

      // Recopilar líneas del prompt
      if (inPromptSection && line && !line.startsWith('```')) {
        promptLines.push(line);
      }

      // Detectar descripción de entrada
      if (line.startsWith('**输入:**') && currentCase) {
        currentCase.description = line.replace('**输入:**', '').trim();
      }
    }

    // Agregar último caso si existe
    if (currentCase && promptLines.length > 0) {
      currentCase.prompt = promptLines.join('\n').trim();
      cases.push(currentCase);
    }

    return cases;
  }

  /**
   * Carga los archivos de imagen para cada caso
   */
  async loadImageFiles() {
    for (const caseItem of this.cases) {
      const casePath = path.join(this.imagesPath, caseItem.id);
      
      if (fs.existsSync(casePath)) {
        const files = fs.readdirSync(casePath);
        
        caseItem.inputs = files
          .filter(file => file.startsWith('input'))
          .map(file => ({
            filename: file,
            path: `Awesome-Nano-Banana-images-main/images/${caseItem.id}/${file}`,
            url: `/Awesome-Nano-Banana-images-main/images/${caseItem.id}/${file}`
          }));

        caseItem.outputs = files
          .filter(file => file.startsWith('output'))
          .map(file => ({
            filename: file,
            path: `Awesome-Nano-Banana-images-main/images/${caseItem.id}/${file}`,
            url: `/Awesome-Nano-Banana-images-main/images/${caseItem.id}/${file}`
          }));
      }
    }
  }

  /**
   * Extrae tags del título para categorización
   */
  extractTags(title) {
    const tags = [];
    const lowerTitle = title.toLowerCase();

    // Categorías principales
    if (lowerTitle.includes('手办') || lowerTitle.includes('模型')) tags.push('3D模型');
    if (lowerTitle.includes('地图') || lowerTitle.includes('建筑')) tags.push('地图建筑');
    if (lowerTitle.includes('人物') || lowerTitle.includes('角色')) tags.push('人物编辑');
    if (lowerTitle.includes('风格') || lowerTitle.includes('转换')) tags.push('风格转换');
    if (lowerTitle.includes('修图') || lowerTitle.includes('修复')) tags.push('图像修复');
    if (lowerTitle.includes('漫画') || lowerTitle.includes('动漫')) tags.push('动漫风格');
    if (lowerTitle.includes('服装') || lowerTitle.includes('穿搭')) tags.push('服装设计');
    if (lowerTitle.includes('食物') || lowerTitle.includes('菜')) tags.push('食物相关');
    if (lowerTitle.includes('ar') || lowerTitle.includes('信息')) tags.push('AR增强');

    return tags.length > 0 ? tags : ['其他'];
  }

  /**
   * Obtiene casos por categoría
   */
  getCasesByTag(tag) {
    return this.cases.filter(caseItem => caseItem.tags.includes(tag));
  }

  /**
   * Busca casos por texto
   */
  searchCases(query) {
    const lowerQuery = query.toLowerCase();
    return this.cases.filter(caseItem => 
      caseItem.title.toLowerCase().includes(lowerQuery) ||
      caseItem.prompt.toLowerCase().includes(lowerQuery) ||
      caseItem.author.toLowerCase().includes(lowerQuery)
    );
  }

  /**
   * Obtiene todas las categorías disponibles
   */
  getAllTags() {
    const allTags = new Set();
    this.cases.forEach(caseItem => {
      caseItem.tags.forEach(tag => allTags.add(tag));
    });
    return Array.from(allTags).sort();
  }

  /**
   * Obtiene un caso específico por ID
   */
  getCaseById(id) {
    return this.cases.find(caseItem => caseItem.id === id);
  }

  /**
   * Obtiene casos aleatorios para destacados
   */
  getFeaturedCases(count = 6) {
    const shuffled = [...this.cases].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
}
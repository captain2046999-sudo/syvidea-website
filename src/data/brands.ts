// Syvidea AI Workstation Series
// All models share the AMD Strix Halo / AI Max+ 395 platform
// Differences exist in chassis, I/O details, dimensions, wireless, thermals,
// BIOS, packaging, warranty, and supply batches

export const brands = [
  {
    name: 'Syvidea S1 Base',
    slug: 's1-base',
    region: '',
    summary: 'A value-priced local AI workstation with 128GB unified memory, designed for cost-sensitive developers, hobbyists, and those entering local AI.',
    positioning: 'Value option for budget-conscious users and new entrants',
    highlights: [
      'Affordable entry point to local AI',
      '128GB LPDDR5X unified memory',
      '2TB NVMe SSD standard',
      'Solid performance for 70B models',
      'Reliable active cooling',
    ],
    note: 'S1 Base offers the essential features for local AI at an accessible price point.',
    images: {
      front: '/images/Syvidea S1 Base-front.jpg',
      side: '/images/Syvidea S1 Base-side.jpg',
      ports: '/images/Syvidea S1 Base-ports.jpg',
    },
  },
  {
    name: 'Syvidea S1 Pro',
    slug: 's1-pro',
    region: '',
    summary: 'The flagship local AI workstation optimized for mainstream AI builders. Built on the AMD Strix Halo platform with 128GB unified memory for reliable, daily LLM and RAG workloads.',
    positioning: 'The recommended choice for most AI builders',
    highlights: [
      'AMD Ryzen AI Max+ 395 platform',
      '128GB LPDDR5X unified memory',
      '2TB NVMe SSD standard',
      'Optimized for sustained workloads',
      'Quiet and reliable operation',
      'Best balance of performance and value',
    ],
    note: 'S1 Pro is our most popular configuration with proven reliability for daily AI development.',
    images: {
      front: '/images/Syvidea S1 Pro-front.jpg',
      side: '/images/Syvidea S1 Pro-side.jpg',
      ports: '/images/Syvidea S1 Pro-ports.jpg',
    },
  },
  {
    name: 'Syvidea S1 Max',
    slug: 's1-max',
    region: '',
    summary: 'An enterprise-grade local AI workstation designed for professional teams and creators. Built on the AMD Strix Halo platform with premium build quality for long-term reliability.',
    positioning: 'Enterprise-grade for professional teams and future scalability',
    highlights: [
      'Premium enterprise-grade build quality',
      'AMD Ryzen AI Max+ 395 platform',
      '128GB LPDDR5X unified memory',
      '2TB NVMe SSD standard',
      'Advanced I/O and expandability',
      'Professional-grade warranty support',
    ],
    note: 'S1 Max is engineered for enterprise reliability and future-proof AI workloads.',
    images: null,
  },
];

export const useCases = [
  {
    title: 'Local LLM Development',
    description: 'Run 70B-class quantized models locally with sufficient unified memory for context and experimentation.',
    models: ['Llama 3.3 70B', 'Qwen2 72B', 'Mistral Large', 'Phi-3.5'],
    recommended: 'Syvidea S1 Pro',
    imagePrompt: 'Professional software developer working on AI model development with code editor showing LLM code, dark theme, tech workspace, multiple monitors with model architecture diagrams',
  },
  {
    title: 'Private RAG Systems',
    description: 'Keep documents, prompts, and knowledge bases on hardware you control. No data leaves your environment by default.',
    models: ['Open WebUI', 'Private knowledge bases', 'Vector DB workflows'],
    recommended: 'Syvidea S1 Pro',
    imagePrompt: 'Enterprise knowledge management system dashboard with document search interface, secure data visualization, private server environment, dark cyberpunk UI',
  },
  {
    title: 'AI Agents & Coding Agents',
    description: 'Run tool-using agents, local coding agents, and long-running automation tasks on a dedicated local machine.',
    models: ['OpenHands', 'Local coding agents', 'Tool-using agents'],
    recommended: 'Syvidea S1 Base',
    imagePrompt: 'AI coding assistant interface with terminal showing automated code generation, agent workflow visualization, developer workspace, futuristic UI design',
  },
  {
    title: 'Multimodal AI Workflows',
    description: 'Image generation, voice models, and vision workflows with sufficient memory for multiple concurrent tools.',
    models: ['Flux', 'SDXL', 'CosyVoice', 'GPT-SoVITS', 'Qwen-VL'],
    recommended: 'Syvidea S1 Base',
    imagePrompt: 'Creative AI workspace with image generation results, video editing tools, voice synthesis interface, colorful visual output, modern dark theme',
  },
  {
    title: 'Homelab & Personal AI Server',
    description: 'A compact local AI server for always-available personal AI infrastructure without recurring cloud GPU bills.',
    models: ['Multi-tool AI stacks', 'Local model management', 'Private experiments'],
    recommended: 'Syvidea S1 Max',
    imagePrompt: 'Compact home server setup with mini PC tower, network cables, glowing LED indicators, tech enthusiast workspace, dark room ambient lighting',
  },
  {
    title: 'Small Team AI Workspace',
    description: 'A shared local AI workstation for small teams running RAG, internal tools, and workflow experiments together.',
    models: ['Team RAG', 'Internal demos', 'Workflow validation'],
    recommended: 'Syvidea S1 Max',
    imagePrompt: 'Small team collaborative workspace with multiple developers around AI workstation, project planning board, modern office environment, tech startup vibe',
  },
];

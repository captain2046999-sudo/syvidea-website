// Partner brands sourced by Syvidea
// All three brands share the AMD Strix Halo / AI Max+ 395 platform
// Differences exist in chassis, I/O details, dimensions, wireless, thermals,
// BIOS, packaging, warranty, and supply batches

export const brands = [
  {
    name: 'BOSGAME',
    slug: 'bosgame',
    region: '',
    summary: 'A compact local AI workstation built around the AMD Strix Halo platform with 128GB unified memory and dual PCIe 4.0 SSD slots.',
    positioning: 'Compact, well-rounded option for developers and homelab users',
    highlights: [
      'Compact desktop chassis',
      '128GB LPDDR5X unified memory',
      'Dual M.2 PCIe 4.0 SSD slots',
      'USB4 / high-speed I/O',
      'Active cooling design',
    ],
    note: 'BOSGAME-specific chassis, port layout, and supply batches apply.',
    images: {
      front: '/images/bosgame-front.jpg',
      side: '/images/bosgame-side.jpg',
      ports: '/images/bosgame-ports.jpg',
    },
  },
  {
    name: 'PELAND',
    slug: 'peland',
    region: '',
    summary: 'A local AI workstation built on the AMD Strix Halo platform with 128GB unified memory, designed for sustained local LLM and RAG workloads.',
    positioning: 'Sustained-workload option for AI builders',
    highlights: [
      'AMD Ryzen AI Max+ 395 platform',
      '128GB LPDDR5X unified memory',
      '2TB SSD configuration',
      'Multi-display support',
      'Quiet operation focus',
    ],
    note: 'PELAND-specific BIOS tuning, thermals, and warranty terms apply.',
    images: {
      front: '/images/peland-front.jpg',
      side: '/images/peland-side.jpg',
      ports: '/images/peland-ports.jpg',
    },
  },
  {
    name: 'BITPC',
    slug: 'bitpc',
    region: '',
    summary: 'A compact AMD Strix Halo local AI workstation with 128GB unified memory, positioned for developers, creators, and small AI teams.',
    positioning: 'Developer-focused compact AI workstation',
    highlights: [
      'Compact developer-friendly form factor',
      'AMD Strix Halo platform',
      '128GB unified memory',
      'Modern high-speed I/O',
      'Brand-specific chassis and port layout',
    ],
    note: 'BITPC-specific chassis, accessories, and packaging configuration apply.',
    images: null,
  },
];

// Use cases supported by the shared platform
export const useCases = [
  {
    title: 'Local LLM Development',
    description: 'Run 70B-class quantized models locally with sufficient unified memory for context and experimentation.',
    models: ['Llama 3.3 70B', 'Qwen2 72B', 'Mistral Large', 'Phi-3.5'],
    recommended: 'PELAND',
    imagePrompt: 'Professional software developer working on AI model development with code editor showing LLM code, dark theme, tech workspace, multiple monitors with model architecture diagrams',
  },
  {
    title: 'Private RAG Systems',
    description: 'Keep documents, prompts, and knowledge bases on hardware you control. No data leaves your environment by default.',
    models: ['Open WebUI', 'Private knowledge bases', 'Vector DB workflows'],
    recommended: 'PELAND',
    imagePrompt: 'Enterprise knowledge management system dashboard with document search interface, secure data visualization, private server environment, dark cyberpunk UI',
  },
  {
    title: 'AI Agents & Coding Agents',
    description: 'Run tool-using agents, local coding agents, and long-running automation tasks on a dedicated local machine.',
    models: ['OpenHands', 'Local coding agents', 'Tool-using agents'],
    recommended: 'BOSGAME',
    imagePrompt: 'AI coding assistant interface with terminal showing automated code generation, agent workflow visualization, developer workspace, futuristic UI design',
  },
  {
    title: 'Multimodal AI Workflows',
    description: 'Image generation, voice models, and vision workflows with sufficient memory for multiple concurrent tools.',
    models: ['Flux', 'SDXL', 'CosyVoice', 'GPT-SoVITS', 'Qwen-VL'],
    recommended: 'BOSGAME',
    imagePrompt: 'Creative AI workspace with image generation results, video editing tools, voice synthesis interface, colorful visual output, modern dark theme',
  },
  {
    title: 'Homelab & Personal AI Server',
    description: 'A compact local AI server for always-available personal AI infrastructure without recurring cloud GPU bills.',
    models: ['Multi-tool AI stacks', 'Local model management', 'Private experiments'],
    recommended: 'BITPC',
    imagePrompt: 'Compact home server setup with mini PC tower, network cables, glowing LED indicators, tech enthusiast workspace, dark room ambient lighting',
  },
  {
    title: 'Small Team AI Workspace',
    description: 'A shared local AI workstation for small teams running RAG, internal tools, and workflow experiments together.',
    models: ['Team RAG', 'Internal demos', 'Workflow validation'],
    recommended: 'BITPC',
    imagePrompt: 'Small team collaborative workspace with multiple developers around AI workstation, project planning board, modern office environment, tech startup vibe',
  },
];

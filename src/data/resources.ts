export const resources = [
  {
    category: 'Guides',
    slug: 'guides',
    title: 'Selection Guides',
    description: 'Step-by-step guides to help you decide whether the AMD Strix Halo / AI Max+ 395 platform is right for your AI workflow, and how to choose between partner brands.',
    items: [
      {
        title: 'Is 128GB unified memory right for your AI workload?',
        excerpt: 'A practical guide to understanding when 128GB unified memory matters and when it does not.',
      },
      {
        title: 'Strix Halo vs RTX workstation: which one fits?',
        excerpt: 'A positioning comparison to help you decide between unified memory local AI and dedicated CUDA GPUs.',
      },
      {
        title: 'How to compare Bosgame, PELAND, and bitpc',
        excerpt: 'Where the three partner brands differ in chassis, I/O, thermals, BIOS, warranty, and supply.',
      },
    ],
  },
  {
    category: 'Setup',
    slug: 'setup',
    title: 'Setup & Configuration',
    description: 'Local AI environment setup guides for Ollama, Open WebUI, ComfyUI, and other tools.',
    items: [
      {
        title: 'Installing Ollama on the shared platform',
        excerpt: 'Step-by-step Ollama installation and basic local model deployment.',
      },
      {
        title: 'Setting up Open WebUI for private RAG',
        excerpt: 'Configure Open WebUI to interact with your local models and private knowledge base.',
      },
      {
        title: 'ComfyUI and local image generation',
        excerpt: 'Run ComfyUI workflows with Flux and SDXL on the shared platform.',
      },
    ],
  },
  {
    category: 'Troubleshooting',
    slug: 'troubleshooting',
    title: 'Troubleshooting',
    description: 'Common issues, fixes, and platform-specific notes.',
    items: [
      {
        title: 'Memory and context length limits',
        excerpt: 'How to estimate and manage memory headroom for large models and long context.',
      },
      {
        title: 'Driver and firmware notes',
        excerpt: 'Known driver / firmware notes and recommended versions.',
      },
    ],
  },
  {
    category: 'Drivers',
    slug: 'drivers',
    title: 'Drivers & Downloads',
    description: 'Official driver and download entry points for the shared AMD Strix Halo platform and partner brands.',
    items: [
      { title: 'AMD Ryzen AI Max drivers', excerpt: 'Official AMD driver package entry point.' },
      { title: 'Radeon 8060S graphics drivers', excerpt: 'AMD Adrenalin / integrated GPU drivers.' },
      { title: 'Partner brand firmware & BIOS notes', excerpt: 'Brand-specific firmware / BIOS entry points (Bosgame, PELAND, bitpc).' },
    ],
  },
];

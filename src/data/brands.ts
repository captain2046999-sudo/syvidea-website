// Partner brands sourced by Syvidea
// All three brands share the AMD Strix Halo / AI Max+ 395 platform
// Differences exist in chassis, I/O details, dimensions, wireless, thermals,
// BIOS, packaging, warranty, and supply batches

export const brands = [
  {
    name: 'BOSGAME',
    slug: 'bosgame',
    region: 'Partner brand — global sourcing',
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
  },
  {
    name: 'PELAND',
    slug: 'peland',
    region: 'Partner brand — global sourcing',
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
  },
  {
    name: 'BITPC',
    slug: 'bitpc',
    region: 'Partner brand — global sourcing',
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
  },
];

// Use cases supported by the shared platform
export const useCases = [
  {
    title: 'Local LLM Development',
    description: 'Run 70B-class quantized models locally with sufficient unified memory for context and experimentation.',
    models: ['Qwen3 32B', 'Qwen3 70B (quantized)', 'DeepSeek-style reasoning', 'Llama 3.x variants'],
  },
  {
    title: 'Private RAG Systems',
    description: 'Keep documents, prompts, and knowledge bases on hardware you control. No data leaves your environment by default.',
    models: ['Open WebUI', 'Private knowledge bases', 'Vector DB workflows'],
  },
  {
    title: 'AI Agents & Coding Agents',
    description: 'Run tool-using agents, local coding agents, and long-running automation tasks on a dedicated local machine.',
    models: ['OpenHands', 'Local coding agents', 'Tool-using agents'],
  },
  {
    title: 'Multimodal AI Workflows',
    description: 'Image generation, voice models, and vision workflows with sufficient memory for multiple concurrent tools.',
    models: ['Flux', 'SDXL', 'CosyVoice', 'GPT-SoVITS', 'Qwen-VL'],
  },
  {
    title: 'Homelab & Personal AI Server',
    description: 'A compact local AI server for always-available personal AI infrastructure without recurring cloud GPU bills.',
    models: ['Multi-tool AI stacks', 'Local model management', 'Private experiments'],
  },
  {
    title: 'Small Team AI Workspace',
    description: 'A shared local AI workstation for small teams running RAG, internal tools, and workflow experiments together.',
    models: ['Team RAG', 'Internal demos', 'Workflow validation'],
  },
];

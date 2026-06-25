// Shared AMD Strix Halo / AI Max+ 395 Platform Specifications
// All three partner brands (Bosgame, PELAND, bitpc) use this shared platform
// Brand-specific differences are in chassis, I/O details, dimensions, wireless,
// thermals, BIOS, packaging, warranty, and supply batches

export const sharedPlatform = {
  name: 'AMD Strix Halo Local AI Workstation Platform',
  shortName: 'AMD Strix Halo Platform',
  slug: 'amd-strix-halo-platform',
  tagline: 'A compact 1L-class local AI workstation platform built around AMD Strix Halo, high-bandwidth LPDDR5X memory, dual PCIe 4.0 SSD slots and modern high-speed I/O.',
  positioning: 'Shared platform specification across all curated partner workstation options',
  processor: {
    name: 'AMD Ryzen AI Max+ 395',
    architecture: 'Zen 5',
    cores: '16 cores / 32 threads',
    boost: 'Up to 5.1 GHz',
    npu: 'AMD XDNA 2 NPU (50 TOPS)',
    aiPerformance: 'Up to 126 TOPS total AI performance',
  },
  memory: {
    type: 'LPDDR5X',
    capacity: '128GB Unified Memory',
    bandwidth: '256-bit memory interface',
    benefit: 'Large unified memory pool for LLMs, RAG, agents, and multimodal AI',
  },
  storage: {
    slots: '2× M.2 PCIe 4.0 SSD slots',
    capacity: '2TB SSD (typical configuration)',
    expansion: 'Supports additional NVMe storage for datasets and model weights',
  },
  graphics: {
    integrated: 'AMD Radeon 8060S Graphics',
    architecture: 'RDNA 3.5',
    benefit: 'Integrated GPU with large memory access for local AI inference',
  },
  connectivity: {
    usb4: 'USB4 / Thunderbolt-class high-speed ports',
    networking: '2.5G Ethernet + WiFi 6/6E',
    display: 'Multiple display outputs',
    wireless: 'Bluetooth 5.x',
  },
  formFactor: {
    class: '1L-class compact workstation',
    benefit: 'Compact footprint suitable for desk-side or homelab deployment',
  },
  powerAndCooling: {
    cooling: 'Active cooling with brand-specific thermal design',
    power: 'External or integrated power supply depending on brand',
  },
};

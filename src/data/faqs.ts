export const faqs = [
  {
    category: 'Platform',
    items: [
      {
        q: 'What is the shared platform behind the workstations you source?',
        a: 'All curated partner workstations are built on the AMD Strix Halo platform, featuring the AMD Ryzen AI Max+ 395 processor, 128GB LPDDR5X unified memory (256-bit interface), 2TB SSD, and integrated Radeon 8060S graphics. Brand-specific differences exist in chassis, I/O details, dimensions, wireless modules, thermals, BIOS, packaging, and warranty.',
      },
      {
        q: 'Are the three S1 Series models the same machine?',
        a: 'They share the same core AMD Strix Halo / AI Max+ 395 platform specifications, but they are not identical units. Differences may include the chassis design, port layout, dimensions, wireless modules, cooling solution, BIOS tuning, packaging, warranty terms, and supply batches. Syvidea helps you compare these options based on your actual AI workflow.',
      },
      {
        q: 'Who actually manufactures these workstations?',
        a: 'The workstations are produced by trusted hardware partners. Syvidea curates and configures these systems exclusively for local AI applications, helping you choose the right option, get a quote, and coordinate delivery.',
      },
    ],
  },
  {
    category: 'Use Cases',
    items: [
      {
        q: 'Can it run 70B-class models locally?',
        a: 'Yes. The 128GB unified memory and 256-bit memory interface are designed to support 70B-class quantized model workflows. Final support depends on model version, quantization, context length, and software stack. Validated configurations will be shared before final purchase decisions.',
      },
      {
        q: 'Can I run private RAG systems?',
        a: 'Yes. Private RAG is a core use case. Documents, prompts, and knowledge bases can stay on hardware you control by default, with no per-generation cloud costs and no data uploaded to third-party services.',
      },
      {
        q: 'Can I run AI agents and coding agents locally?',
        a: 'Yes. Local coding agents, tool-using agents, and long-running automation tasks are core validation targets. The exact supported setups depend on the final software stack and model validation results.',
      },
      {
        q: 'Does it support image generation (Flux, SDXL)?',
        a: 'Yes, image generation is a supported workflow. However, this platform is not positioned as the fastest image-generation machine against dedicated NVIDIA GPU workstations. If your only goal is maximum Flux or SDXL speed in CUDA / TensorRT, an RTX 5090 workstation may be a better fit.',
      },
      {
        q: 'Does it support voice models?',
        a: 'Voice workflows such as CosyVoice and GPT-SoVITS are planned for validation. Final recommended workflows depend on test results, model versions, and the software stack selected.',
      },
    ],
  },
  {
    category: 'Sourcing & Ordering',
    items: [
      {
        q: 'Why is there no Add to Cart or Buy Now button?',
        a: 'The product price is over USD 3,000, and direct full-payment online checkout creates a high trust barrier. Syvidea uses a quote-based ordering flow: you submit a request, we confirm configuration, availability, and a price quote, then arrange payment via a payment link or deposit.',
      },
      {
        q: 'How do I order?',
        a: 'Go to the Contact page or any Request Quote CTA, fill in the Tally form with your use case, destination, and preferred brand, and we will reply with a confirmed quote. The form is the official way to start an order.',
      },
      {
        q: 'Do you ship internationally?',
        a: 'Yes. Syvidea serves customers globally. Shipping options, lead times, and any applicable duties/taxes are confirmed in the quote.',
      },
      {
        q: 'How long does delivery take?',
        a: 'Delivery time depends on the partner brand, configuration, and supply batch. Once your quote is confirmed, we will provide an estimated delivery window.',
      },
      {
        q: 'Why not buy from Amazon or OEM brands?',
        a: 'Because configuration consistency across workloads is not guaranteed. Syvidea curates and validates specific configurations that are optimized for local AI workloads, ensuring you get a system that actually works for your use case.',
      },
      {
        q: 'Why not cloud GPU instead?',
        a: 'Cloud introduces recurring cost and data transfer constraints. Local AI workstations provide predictable upfront costs, no per-token charges, and complete data privacy for sensitive workloads.',
      },
      {
        q: 'Why three models instead of one?',
        a: 'They optimize for different workload profiles on the same architecture. S1 Base for value-focused users, S1 Pro for mainstream AI builders, and S1 Max for enterprise deployments — giving you choice based on your specific needs.',
      },
    ],
  },
  {
    category: 'Not a fit',
    items: [
      {
        q: 'Who should NOT buy this?',
        a: 'This is probably not the right fit if you only want a cheap office Mini PC, a gaming PC, or the fastest CUDA image-generation box. It is also not the right fit for users who want direct full-payment online checkout without any communication, or for users who expect an out-of-the-box "AI magic box" with no setup.',
      },
      {
        q: 'Is this good for large-scale model training?',
        a: 'No. The shared platform is designed for local inference, RAG, agents, and multi-tool AI workflows — not for large-scale model training. If you need RTX 4090 / 5090-class CUDA training performance, a dedicated NVIDIA workstation is a better fit.',
      },
    ],
  },
];

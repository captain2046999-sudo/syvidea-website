"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

declare global {
  interface Window {
    trackEvent: (eventName: string, data?: Record<string, unknown>) => void;
  }
}

interface RecommendationResult {
  recommended: string;
  reason: string;
  alternative: string;
  fit: 'strong' | 'good' | 'fair';
}

const useCases = [
  { value: '', label: 'Select your use case' },
  { value: 'llm-dev', label: 'Local LLM Development' },
  { value: 'rag', label: 'Private RAG Systems' },
  { value: 'agent', label: 'AI Agents & Coding Agents' },
  { value: 'multimodal', label: 'Multimodal AI Workflows' },
  { value: 'homelab', label: 'Homelab / Personal AI' },
  { value: 'team', label: 'Small Team AI Workspace' },
];

const modelSizes = [
  { value: '', label: 'Select model size' },
  { value: '7b-13b', label: '7B / 13B' },
  { value: '34b', label: '34B' },
  { value: '70b+', label: '70B+' },
];

const memoryOptions = [
  { value: '', label: 'Select memory requirement' },
  { value: '32gb', label: '32GB' },
  { value: '64gb', label: '64GB' },
  { value: '128gb', label: '128GB' },
];

const budgetRanges = [
  { value: '', label: 'Select budget range' },
  { value: 'under-2000', label: '< $2000' },
  { value: '2000-3000', label: '$2000–$3000' },
  { value: '3000-5000', label: '$3000–$5000' },
  { value: '5000+', label: '$5000+' },
];

const urgencyLevels = [
  { value: '', label: 'What is your urgency level?' },
  { value: 'exploring', label: 'Just exploring' },
  { value: 'planning', label: 'Planning purchase' },
  { value: 'ready', label: 'Ready to buy' },
];

const recommend = (formData: {
  useCase: string;
  modelSize: string;
  memory: string;
  budget: string;
}): RecommendationResult => {
  const { useCase, modelSize, memory, budget } = formData;
  
  if (!useCase) {
    return {
      recommended: 'Not enough info',
      reason: 'Please select your use case first.',
      alternative: 'Go back and select a use case.',
      fit: 'fair',
    };
  }

  if (useCase === 'llm-dev' || useCase === 'rag') {
    if (modelSize === '70b+' || memory === '128gb') {
      return {
        recommended: 'PELAND',
        reason: 'PELAND is optimized for sustained LLM / RAG workloads and memory-heavy tasks. It handles large model inference with better thermal management.',
        alternative: 'BOSGAME for lighter development workflows.',
        fit: 'strong',
      };
    }
    return {
      recommended: 'PELAND',
      reason: 'PELAND excels at LLM development and RAG systems with balanced memory allocation and workload optimization.',
      alternative: 'BITPC for compact homelab deployments.',
      fit: 'good',
    };
  }

  if (useCase === 'agent' || useCase === 'multimodal') {
    if (modelSize === '70b+' || budget === '3000-5000' || budget === '5000+') {
      return {
        recommended: 'BOSGAME',
        reason: 'BOSGAME is best for developers building AI agents and coding workflows. It offers better I/O for development tools and multi-tasking.',
        alternative: 'PELAND for memory-intensive agent workloads.',
        fit: 'strong',
      };
    }
    return {
      recommended: 'BOSGAME',
      reason: 'BOSGAME is optimized for AI agent development and multimodal workflows with flexible configuration options.',
      alternative: 'BITPC for budget-friendly development setups.',
      fit: 'good',
    };
  }

  if (useCase === 'homelab') {
    if (budget === 'under-2000' || budget === '2000-3000') {
      return {
        recommended: 'BITPC',
        reason: 'BITPC offers the most compact form factor and budget-friendly options for personal AI and homelab setups.',
        alternative: 'PELAND for larger model support.',
        fit: 'strong',
      };
    }
    return {
      recommended: 'BITPC',
      reason: 'BITPC is designed for compact deployment, making it ideal for homelab and personal AI server use.',
      alternative: 'BOSGAME if you need more development features.',
      fit: 'good',
    };
  }

  if (useCase === 'team') {
    if (memory === '128gb' || budget === '3000-5000') {
      return {
        recommended: 'PELAND',
        reason: 'PELAND provides the best balance for team deployments with good memory capacity and thermal design for shared use.',
        alternative: 'BOSGAME for developer-focused teams.',
        fit: 'strong',
      };
    }
    if (budget === 'under-2000' || budget === '2000-3000') {
      return {
        recommended: 'BITPC',
        reason: 'BITPC offers cost-effective solutions for small team AI workspaces with compact deployment.',
        alternative: 'PELAND for larger team requirements.',
        fit: 'good',
      };
    }
    return {
      recommended: 'PELAND',
      reason: 'PELAND is well-suited for team AI workspaces with balanced performance and scalability.',
      alternative: 'BITPC for smaller teams on tighter budgets.',
      fit: 'good',
    };
  }

  return {
    recommended: 'BOSGAME / PELAND',
    reason: 'Based on your inputs, multiple options could work. Consider your specific workload needs.',
    alternative: 'Use the comparison page to decide.',
    fit: 'fair',
  };
};

export function RecommendationEngine() {
  const [showResult, setShowResult] = useState(false);
  const [formData, setFormData] = useState({
    useCase: '',
    modelSize: '',
    memory: '',
    budget: '',
    urgency: '',
  });
  const [result, setResult] = useState<RecommendationResult | null>(null);

  useEffect(() => {
    if (formData.urgency === 'ready') {
      window.trackEvent('recommendation_urgent', { action: 'direct_to_quote', useCase: formData.useCase });
      window.location.href = '/request-quote';
    }
  }, [formData.urgency]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.urgency === 'ready') {
      return;
    }
    const recommendation = recommend(formData);
    setResult(recommendation);
    setShowResult(true);
    window.trackEvent('recommendation_result', {
      recommended: recommendation.recommended,
      useCase: formData.useCase,
      modelSize: formData.modelSize,
      memory: formData.memory,
      budget: formData.budget,
      urgency: formData.urgency,
    });
  };

  const handleReset = () => {
    setFormData({ useCase: '', modelSize: '', memory: '', budget: '', urgency: '' });
    setShowResult(false);
    setResult(null);
  };

  const getBrandColor = (brand: string) => {
    if (brand.includes('PELAND')) return 'text-neon-cyan';
    if (brand.includes('BOSGAME')) return 'text-neon-purple';
    if (brand.includes('BITPC')) return 'text-neon-orange';
    return 'text-slate-400';
  };

  const getFitColor = (fit: string) => {
    switch (fit) {
      case 'strong': return 'text-neon-green';
      case 'good': return 'text-neon-cyan';
      default: return 'text-neon-yellow';
    }
  };

  return (
    <div className="mx-auto max-w-2xl">
      <AnimatePresence mode="wait">
        {showResult && result ? (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="card border-neon-purple/30 bg-dark-900/50"
          >
            <div className="text-center">
              <div className={`text-sm font-semibold uppercase tracking-wider ${getFitColor(result.fit)} mb-2`}>
                {result.fit === 'strong' ? 'Strong match' : result.fit === 'good' ? 'Good match' : 'Fair match'}
              </div>
              <h3 className="text-3xl font-bold text-white">
                Recommended: <span className={getBrandColor(result.recommended)}>{result.recommended}</span>
              </h3>
            </div>

            <div className="mt-6 space-y-4">
              <div className="p-4 rounded-lg bg-dark-800/50">
                <div className="text-sm font-medium text-neon-purple mb-1">Why this match works</div>
                <p className="text-slate-300">{result.reason}</p>
              </div>

              <div className="p-4 rounded-lg bg-dark-800/50">
                <div className="text-sm font-medium text-neon-cyan mb-1">Alternative option</div>
                <p className="text-slate-300">{result.alternative}</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a href="/request-quote" className="btn-primary">
                Request quote for {result.recommended}
              </a>
              <button onClick={handleReset} className="btn-secondary">
                Try again
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            onSubmit={handleSubmit}
            className="card bg-white/5 border border-white/10"
          >
            <div className="p-6 space-y-5">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Use Case <span className="text-neon-orange">*</span>
                </label>
                <select
                  value={formData.useCase}
                  onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all appearance-none cursor-pointer"
                >
                  {useCases.map((option) => (
                    <option key={option.value} value={option.value} className="bg-[#0f0f23] text-white">
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Model size</label>
                  <select
                    value={formData.modelSize}
                    onChange={(e) => setFormData({ ...formData, modelSize: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all appearance-none cursor-pointer"
                  >
                    {modelSizes.map((option) => (
                      <option key={option.value} value={option.value} className="bg-[#0f0f23] text-white">
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">Memory requirement</label>
                  <select
                    value={formData.memory}
                    onChange={(e) => setFormData({ ...formData, memory: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all appearance-none cursor-pointer"
                  >
                    {memoryOptions.map((option) => (
                      <option key={option.value} value={option.value} className="bg-[#0f0f23] text-white">
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">Budget range</label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all appearance-none cursor-pointer"
                >
                  {budgetRanges.map((option) => (
                    <option key={option.value} value={option.value} className="bg-[#0f0f23] text-white">
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Urgency level <span className="text-neon-orange">*</span>
                </label>
                <select
                  value={formData.urgency}
                  onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all appearance-none cursor-pointer"
                >
                  {urgencyLevels.map((option) => (
                    <option key={option.value} value={option.value} className="bg-[#0f0f23] text-white">
                      {option.label}
                    </option>
                  ))}
                </select>
                <p className="mt-2 text-xs text-white/50">
                  Selecting "Ready to buy" will skip the recommendation and take you directly to request a quote.
                </p>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 btn-primary hover:shadow-lg hover:shadow-neon-purple/30"
              >
                {formData.urgency === 'ready' ? 'Go to request quote' : 'Get recommendation'}
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
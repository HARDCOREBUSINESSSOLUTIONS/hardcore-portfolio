
import React from 'react';
import { Bot, Zap, Layout, Palette, Shield, Cpu, Camera, Bike, PenTool, Database, Globe, Layers, Server, Code, Workflow, Terminal } from 'lucide-react';
import { Project, Capability } from './types';

export const BRAND_NAME = "JOSH ELY";
export const DESCRIPTOR = "SIGNAL EMERGING FROM CHAOS.";
export const NEON_CYAN = "#00FFFF";
export const NEON_RED = "#FF0033"; // Matching the cyborg eye glow
export const SUBJECT_IMAGE_URL = "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1200"; // Placeholder URL - replace with local path if needed

export const CAPABILITIES: Capability[] = [
  {
    id: 'cap1',
    slug: 'agent-systems',
    title: 'AGENT SYSTEMS',
    tagline: 'Multi-agent orchestration and tool-using systems.',
    bullets: ['Manager/Router architectures', 'Realtime voice sessions', 'Semantic search & RAG', 'Conversation state machines'],
    icon: 'Bot'
  },
  {
    id: 'cap2',
    slug: 'automation-crm',
    title: 'AUTOMATION & CRM',
    tagline: 'Multi-brand pipelines and structured data ingestion.',
    bullets: ['n8n / Zapier integration', 'Capture → Enrich → Store', 'Structured content packs', 'Brand DNA tokens'],
    icon: 'Workflow'
  },
  {
    id: 'cap3',
    slug: 'infra-delivery',
    title: 'INFRA & DELIVERY',
    tagline: 'Docker-first deployment and VPS reliability.',
    bullets: ['Containerized stacks', 'Reverse proxy design', 'Database stability', 'CI/CD automation'],
    icon: 'Server'
  },
  {
    id: 'cap4',
    slug: 'creative-ai',
    title: 'CREATIVE AI',
    tagline: 'Applied generative models for visual systems.',
    bullets: ['Image generation routing', 'Brand-aligned output packs', 'Prompt engineering', 'Component templates'],
    icon: 'Palette'
  }
];

export const TECH_STACK = {
  frontend: ['React', 'Next.js', 'Tailwind CSS', 'shadcn/ui', 'Three.js'],
  backend: ['Python (FastAPI)', 'OpenAI Agent SDK', 'Node.js'],
  data: ['Supabase', 'Airtable', 'PostgreSQL', 'Vector DB'],
  infra: ['Docker', 'Docker Compose', 'Hostinger VPS', 'n8n'],
  media: ['ElevenLabs', 'Whisper', 'Flux', 'Ideogram', 'D-ID']
};

export const PROCESS_STEPS = [
  { id: 1, title: 'BLUEPRINT', desc: 'Architecture + Data Model + Docs Pack' },
  { id: 2, title: 'SCAFFOLD', desc: 'Repo Structure + Environments + Docker' },
  { id: 3, title: 'BUILD MVP', desc: 'Core Flow Execution' },
  { id: 4, title: 'INTEGRATE', desc: 'DB + Automation + External APIs' },
  { id: 5, title: 'HARDEN', desc: 'Logging + Retries + Auth Stability' },
  { id: 6, title: 'SCALE', desc: 'Multi-tenant + Multi-brand Templates' }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    slug: 'hardcore-agents-hub',
    title: 'HardcoreAgents.io',
    category: 'Platform Hub',
    year: '2024',
    coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
    description: 'Central hub for agent UI + APIs across all Hardcore brands and client deployments. Designed for voice-first agent experiences.',
    techStack: ['Next.js', 'Agent SDK', 'Supabase', 'VPS'],
    link: 'https://hardcoreagents.io',
    status: 'production',
    proofTags: ['Central Hub', 'API Ready'],
    clientType: 'in_house'
  },
  {
    id: 'p2',
    slug: 'tattoo-buddy',
    title: 'Tattoo Buddy Suite',
    category: 'Agent Product',
    year: '2024',
    coverImage: 'https://images.unsplash.com/photo-1590208603417-48f805a468e8?auto=format&fit=crop&q=80&w=1200',
    description: 'Multi-agent tattoo design + analysis suite. Extracts intent, generates designs, and saves structured profile data.',
    techStack: ['FastAPI', 'Supabase', 'Flux', 'Vision API'],
    status: 'live',
    proofTags: ['Multi-Agent', 'Image Gen'],
    clientType: 'in_house'
  },
  {
    id: 'p3',
    slug: 'hardcore-ops-agent',
    title: 'Ops Agent',
    category: 'Internal Platform',
    year: '2024',
    coverImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200',
    description: 'Voice-driven operations agent coordinating automation, content, CRM sync, and workflow execution.',
    techStack: ['Realtime Voice', 'n8n', 'Agent SDK'],
    status: 'production',
    proofTags: ['Internal Ops', 'Voice First'],
    clientType: 'in_house'
  },
  {
    id: 'p4',
    slug: 'brand-os',
    title: 'Brand Operating System',
    category: 'SaaS',
    year: '2024',
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200',
    description: 'Manage multiple client brands with structured Brand DNA, tokens, assets, prompts, and repeatable content generation.',
    techStack: ['Next.js', 'PostgreSQL', 'S3'],
    status: 'production',
    proofTags: ['Multi-Tenant', 'Design Tokens'],
    clientType: 'in_house'
  },
  {
    id: 'p5',
    slug: 'hardcore-app-factory',
    title: 'App Factory',
    category: 'System Blueprint',
    year: '2024',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=1200',
    description: 'Repeatable template to spin up branded agent apps quickly: UI + API + DB + deployment.',
    techStack: ['Docker', 'Next.js', 'VPS', 'CI/CD'],
    status: 'production',
    proofTags: ['Scalable', 'Infra'],
    clientType: 'in_house'
  }
];

export const MASTER_INVENTORY = [
  { name: 'HardcoreAgents.io', type: 'Platform Hub', status: 'In Progress', brand: 'Hardcore Agents' },
  { name: 'Hardcore Ops Agent', type: 'Agent System', status: 'In Progress', brand: 'Hardcore Ops' },
  { name: 'Tattoo Buddy', type: 'Agent Product', status: 'In Progress', brand: 'Hardcore Tattoo' },
  { name: 'Tattoo Manager Orchestrator', type: 'Agent Orchestration', status: 'In Progress', brand: 'Hardcore Tattoo' },
  { name: 'ProfileBuilderAgent', type: 'Agent Module', status: 'In Progress', brand: 'Hardcore Tattoo' },
  { name: 'Analyze Tattoo Agent', type: 'Agent Module', status: 'In Progress', brand: 'Hardcore Tattoo' },
  { name: 'Realtime Avatar Sessions', type: 'Realtime System', status: 'Blueprint', brand: 'Hardcore Agents' },
  { name: 'Master CRM Blueprint', type: 'System Design', status: 'In Progress', brand: 'Hardcore CRM' },
  { name: 'YouTube Content Pipelines', type: 'Automation', status: 'Planned', brand: 'Hardcore Studios' },
  { name: 'Brand System SaaS', type: 'SaaS Concept', status: 'In Progress', brand: 'Hardcore AAA' },
  { name: 'Hardcore App Factory', type: 'Blueprint', status: 'In Progress', brand: 'Hardcore' },
  { name: 'Mooney’s BBQ App', type: 'Client App', status: 'In Progress', brand: 'Client' },
  { name: 'Prohibition Prophets System', type: 'Brand/Automation', status: 'In Progress', brand: 'Client' },
  { name: 'Elvis Artifact Directory', type: 'Archive System', status: 'Concept', brand: 'R&D' },
  { name: 'Marilyn Monroe Archive', type: 'Archive System', status: 'Concept', brand: 'R&D' }
];

export const GALLERY_ITEMS = [
  { id: 'g1', url: 'https://images.unsplash.com/photo-1512418490979-92798ccc1380?auto=format&fit=crop&q=80&w=800', category: 'TATTOO', label: 'ANATOMICAL_FLOW_01' },
  { id: 'g2', url: 'https://images.unsplash.com/photo-1563299071-789648937965?auto=format&fit=crop&q=80&w=800', category: 'MEDIA', label: 'BMX_STREET_NIGHT' },
  { id: 'g3', url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800', category: 'SYSTEM', label: 'HW_STATION_DEBUG' },
  { id: 'g4', url: 'https://images.unsplash.com/photo-1515462277126-2dd0c162007a?auto=format&fit=crop&q=80&w=800', category: 'TATTOO', label: 'CYBERPUNK_SLEEVE' },
];

export const HARDWARE_LAB = [
  { id: 'h1', title: 'COMPUTE_UNIT', desc: 'RYZEN_9 / RTX_4090 / 128GB_ECC', icon: <Cpu size={20} /> },
  { id: 'h2', title: 'OPTICS_STATION', desc: 'SONY_A7SIII / 35MM_GM / 10-BIT', icon: <Camera size={20} /> },
  { id: 'h3', title: 'NEURAL_INPUT', desc: 'SPLIT_MECHANICAL / WACOM_PRO', icon: <PenTool size={20} /> },
  { id: 'h4', title: 'GRID_CONTROL', desc: 'TRIPLE_4K_OLED / 120HZ_REFRESH', icon: <Layout size={20} /> },
];

export const getIcon = (name: string, className?: string) => {
  switch (name) {
    case 'Bot': return <Bot className={className} />;
    case 'Zap': return <Zap className={className} />;
    case 'Layout': return <Layout className={className} />;
    case 'Palette': return <Palette className={className} />;
    case 'Database': return <Database className={className} />;
    case 'Globe': return <Globe className={className} />;
    case 'Layers': return <Layers className={className} />;
    case 'Server': return <Server className={className} />;
    case 'Code': return <Code className={className} />;
    case 'Workflow': return <Workflow className={className} />;
    case 'Terminal': return <Terminal className={className} />;
    default: return <Zap className={className} />;
  }
};

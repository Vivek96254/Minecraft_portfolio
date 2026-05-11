import {
  BookIcon,
  PickaxeIcon,
  PaintingIcon,
  ChestIcon,
  EnderIcon,
  CompassIcon,
} from '../components/icons/MinecraftIcons';

export const GITHUB_USERNAME = 'Vivek96254';

export const RESUME_URL = import.meta.env.VITE_RESUME_URL || null;

export const SOCIAL_LINKS = {
  github: `https://github.com/${GITHUB_USERNAME}`,
  linkedin: 'https://linkedin.com/in/vivekvinay96254',
  email: 'vivekvinay96254@gmail.com',
};

export const NAV_LINKS = [
  { name: 'Home', href: '#hero' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

// Top two hero-featured projects — shown as full detailed cards
export const FEATURED_PROJECTS = [
  {
    id: 'fraud-lens',
    name: 'Fraud Lens',
    description:
      'Enterprise transaction risk analytics engine built in Go. Hybrid pipeline: Redis Streams for real-time scoring (~45ms p50) and optional Kafka CDC for analytics. Combines a configurable rule engine, behavioral z-score analysis, and pluggable ML scoring with backtesting and A/B experiment support.',
    features: [
      'Hybrid Redis Streams + Kafka CDC pipeline',
      'Rule engine + behavioral + ML hybrid scoring',
      'Sub-100ms fast path for low-risk transactions',
      'Backtesting and A/B experiment framework',
      'Rate limiting, JWT auth, immutable audit trail',
    ],
    tech: ['Go', 'PostgreSQL', 'Redis Streams', 'Kafka', 'Docker', 'JWT'],
    github: `https://github.com/${GITHUB_USERNAME}/Fraud_Lens`,
    live: null,
  },
  {
    id: 'chess',
    name: 'Real-time Chess Multiplayer',
    description:
      'Production-grade multiplayer chess platform. WebSocket-driven game sync, server-side move validation, spectator mode built on an event-bus architecture, and JWT session management.',
    features: [
      'Live game rooms via WebSockets',
      'Server-side move validation',
      'Spectator mode with observer pattern',
      'Public & private match lobbies',
      'JWT auth & session management',
    ],
    tech: ['React', 'Node.js', 'WebSockets', 'PostgreSQL', 'Redis', 'JWT'],
    github: `https://github.com/${GITHUB_USERNAME}/chess-app`,
    live: null,
  },
];

// Additional highlighted projects — shown as compact cards
export const OTHER_PROJECTS = [
  {
    id: 'context-forge',
    name: 'Context Forge',
    description:
      'Enterprise knowledge assistant with RAG (hybrid vector + BM25), RBAC, chunk-level citations, query rewriting, and observability. TypeScript + Python full-stack.',
    tech: ['TypeScript', 'Python', 'PostgreSQL', 'Redis', 'Docker', 'Celery'],
    github: `https://github.com/${GITHUB_USERNAME}/Context_Forge`,
    live: null,
  },
  {
    id: 'repo-pilot',
    name: 'Repo Pilot',
    description:
      'AI-native CLI agent for autonomous codebase understanding. Custom PLAN→EXECUTE→VERIFY→REFLECT loop with durable SQLite memory, typed tool registry, and multi-provider LLM support.',
    tech: ['Python', 'SQLite', 'OpenAI', 'Anthropic', 'Docker', 'Typer'],
    github: `https://github.com/${GITHUB_USERNAME}/Repo_Pilot`,
    live: null,
  },
  {
    id: 'quickmart',
    name: 'QuickMart',
    description:
      'Production-grade quick-commerce platform (Blinkit-style). NestJS REST API, Next.js web, React Native mobile app, real-time Socket.IO order tracking, Stripe + Razorpay payments.',
    tech: ['NestJS', 'Next.js', 'React Native', 'PostgreSQL', 'Redis', 'Stripe'],
    github: `https://github.com/${GITHUB_USERNAME}/Quick_Commerce_Store_App`,
    live: null,
  },
  {
    id: 'portfolio',
    name: 'This Portfolio',
    description:
      'Minecraft-themed developer portfolio with React 19, live GitHub API integration, pixel-art CSS component library, scroll-spy navigation, and Framer Motion animations.',
    tech: ['React 19', 'Vite 7', 'Tailwind CSS', 'Framer Motion'],
    github: `https://github.com/${GITHUB_USERNAME}/minecraft-portfolio`,
    live: null,
  },
];

// Repo names to pin to the top of the GitHub grid (in order)
export const PINNED_REPOS = [
  'Fraud_Lens',
  'chess-app',
  'Context_Forge',
  'Repo_Pilot',
  'Quick_Commerce_Store_App',
];

export const SKILL_CATEGORIES = [
  {
    name: 'Languages',
    iconComponent: BookIcon,
    color: 'mc-gold',
    skills: ['TypeScript', 'JavaScript', 'Go', 'Python', 'SQL'],
  },
  {
    name: 'Backend',
    iconComponent: PickaxeIcon,
    color: 'mc-grass',
    skills: ['Node.js', 'NestJS', 'Express', 'REST APIs', 'GraphQL', 'WebSockets'],
  },
  {
    name: 'Frontend',
    iconComponent: PaintingIcon,
    color: 'mc-diamond',
    skills: ['React', 'Next.js', 'React Native', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    name: 'Databases',
    iconComponent: ChestIcon,
    color: 'mc-oak',
    skills: ['PostgreSQL', 'Redis', 'MongoDB', 'SQLite', 'Prisma'],
  },
  {
    name: 'Infrastructure',
    iconComponent: EnderIcon,
    color: 'mc-obsidian',
    skills: ['Docker', 'Kubernetes', 'Kafka', 'Redis Streams', 'nginx'],
  },
  {
    name: 'Cloud & DevOps',
    iconComponent: CompassIcon,
    color: 'mc-lapis',
    skills: ['AWS', 'GitHub Actions', 'CI/CD', 'Render', 'Linux'],
  },
];

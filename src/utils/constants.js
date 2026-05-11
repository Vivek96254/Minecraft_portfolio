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
    id: 'quickmart',
    name: 'QuickMart',
    description:
      'Production-grade quick-commerce platform (Blinkit-style). NestJS REST API, Next.js 14 web app, React Native + Expo mobile app, real-time Socket.IO order tracking, and Stripe + Razorpay payment processing.',
    features: [
      'NestJS layered API with Prisma + PostgreSQL',
      'React Native + Expo mobile app (iOS & Android)',
      'Real-time order tracking via Socket.IO',
      'Stripe & Razorpay payment + webhook handling',
      'JWT auth with refresh tokens, RBAC, rate limiting',
    ],
    tech: ['NestJS', 'Next.js', 'React Native', 'PostgreSQL', 'Redis', 'Stripe'],
    github: `https://github.com/${GITHUB_USERNAME}/Quick_Commerce_Store_App`,
    live: null,
  },
  {
    id: 'repo-pilot',
    name: 'Repo Pilot',
    description:
      'AI-native CLI agent for autonomous codebase understanding. Implements a custom PLAN→EXECUTE→VERIFY→REFLECT loop — no LangChain, no abstractions. Durable SQLite memory, typed tool registry, and multi-provider LLM support (OpenAI, Anthropic, Cerebras).',
    features: [
      'Custom agentic loop: Plan → Execute → Verify → Reflect',
      'Typed tool registry (read, write, search, run terminal)',
      'Durable SQLite memory across sessions',
      'Static architecture detection + LLM summarisation',
      'Multi-provider: OpenAI · Anthropic · Cerebras',
    ],
    tech: ['Python', 'SQLite', 'OpenAI', 'Anthropic', 'Docker', 'Typer'],
    github: `https://github.com/${GITHUB_USERNAME}/Repo_Pilot`,
    live: null,
  },
];

// Additional highlighted projects — shown as compact cards
export const OTHER_PROJECTS = [
  {
    id: 'fraud-lens',
    name: 'Fraud Lens',
    description:
      'Enterprise transaction risk engine in Go. Hybrid Redis Streams + Kafka CDC pipeline, rule engine + behavioral z-score + ML scoring, backtesting, and A/B experiments.',
    tech: ['Go', 'PostgreSQL', 'Redis Streams', 'Kafka', 'Docker', 'JWT'],
    github: `https://github.com/${GITHUB_USERNAME}/Fraud_Lens`,
    live: null,
  },
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
    id: 'chess',
    name: 'Chess Multiplayer',
    description:
      'Real-time multiplayer chess with WebSocket game sync, server-side move validation, spectator mode, and JWT session management.',
    tech: ['React', 'Node.js', 'WebSockets', 'PostgreSQL', 'Redis', 'JWT'],
    github: `https://github.com/${GITHUB_USERNAME}/chess-app`,
    live: null,
  },
  {
    id: 'portfolio',
    name: 'This Portfolio',
    description:
      'Minecraft-themed developer portfolio with React 19, pixel-art CSS component library, scroll-spy navigation, and Framer Motion animations.',
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

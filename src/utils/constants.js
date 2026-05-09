// Skills data with Minecraft-style categories
export const SKILLS = [
  { name: 'Backend', icon: 'pickaxe', color: 'mc-stone' },
  { name: 'Real-time Systems', icon: 'redstone', color: 'mc-redstone' },
  { name: 'WebSockets', icon: 'compass', color: 'mc-diamond' },
  { name: 'Databases', icon: 'chest', color: 'mc-oak' },
  { name: 'Auth & Security', icon: 'shield', color: 'mc-gold' },
  { name: 'Frontend UI', icon: 'painting', color: 'mc-lapis' },
  { name: 'Node.js', icon: 'grass', color: 'mc-grass' },
  { name: 'React', icon: 'diamond', color: 'mc-diamond' },
  { name: 'TypeScript', icon: 'book', color: 'mc-lapis' },
  { name: 'PostgreSQL', icon: 'emerald', color: 'mc-emerald' },
  { name: 'Redis', icon: 'redstone', color: 'mc-redstone' },
  { name: 'Docker', icon: 'ender', color: 'mc-obsidian' },
];

// Featured project - Chess App
export const FEATURED_PROJECT = {
  name: 'Real-time Chess Multiplayer',
  description: 'A full-featured multiplayer chess platform with real-time gameplay, spectator mode, and secure authentication.',
  features: [
    'Live game rooms',
    'Public & Private matches',
    'Spectator mode (USP)',
    'JWT Authentication',
    'WebSocket real-time sync',
  ],
  tech: ['React', 'Node.js', 'WebSockets', 'PostgreSQL', 'JWT'],
  github: 'https://github.com/Vivek96254/chess-app', // Update with actual repo
  live: null, // Add live URL if available
};

// Social links
export const SOCIAL_LINKS = {
  github: 'https://github.com/Vivek96254', // Update with your GitHub
  linkedin: 'https://linkedin.com/in/vivekvinay96254', // Update with your LinkedIn
  email: 'vivekvinay96254@gmail.com', // Update with your email
};

// Navigation links
export const NAV_LINKS = [
  { name: 'Home', href: '#hero' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

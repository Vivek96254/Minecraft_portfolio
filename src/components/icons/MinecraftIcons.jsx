import React from 'react';

// Pixel-art style icons inspired by Minecraft items
// Each icon is an SVG with pixelated aesthetic

export const PickaxeIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ imageRendering: 'pixelated' }}>
    <rect x="2" y="2" width="2" height="2" fill="#7B7B7B"/>
    <rect x="4" y="2" width="2" height="2" fill="#9E9E9E"/>
    <rect x="6" y="2" width="2" height="2" fill="#7B7B7B"/>
    <rect x="4" y="4" width="2" height="2" fill="#7B7B7B"/>
    <rect x="6" y="6" width="2" height="2" fill="#8B6914"/>
    <rect x="8" y="8" width="2" height="2" fill="#8B6914"/>
    <rect x="10" y="10" width="2" height="2" fill="#8B6914"/>
    <rect x="12" y="12" width="2" height="2" fill="#8B6914"/>
  </svg>
);

export const RedstoneIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ imageRendering: 'pixelated' }}>
    <rect x="6" y="2" width="4" height="2" fill="#F54040"/>
    <rect x="4" y="4" width="2" height="2" fill="#F54040"/>
    <rect x="10" y="4" width="2" height="2" fill="#F54040"/>
    <rect x="6" y="6" width="4" height="4" fill="#FF6B6B"/>
    <rect x="4" y="10" width="2" height="2" fill="#F54040"/>
    <rect x="10" y="10" width="2" height="2" fill="#F54040"/>
    <rect x="6" y="12" width="4" height="2" fill="#F54040"/>
  </svg>
);

export const DiamondIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ imageRendering: 'pixelated' }}>
    <rect x="6" y="2" width="4" height="2" fill="#4AEDD9"/>
    <rect x="4" y="4" width="2" height="2" fill="#4AEDD9"/>
    <rect x="6" y="4" width="4" height="2" fill="#7FF5E8"/>
    <rect x="10" y="4" width="2" height="2" fill="#4AEDD9"/>
    <rect x="2" y="6" width="2" height="2" fill="#4AEDD9"/>
    <rect x="4" y="6" width="8" height="2" fill="#7FF5E8"/>
    <rect x="12" y="6" width="2" height="2" fill="#4AEDD9"/>
    <rect x="4" y="8" width="2" height="2" fill="#4AEDD9"/>
    <rect x="6" y="8" width="4" height="2" fill="#4AEDD9"/>
    <rect x="10" y="8" width="2" height="2" fill="#4AEDD9"/>
    <rect x="6" y="10" width="4" height="2" fill="#3BBFB3"/>
  </svg>
);

export const ChestIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ imageRendering: 'pixelated' }}>
    <rect x="2" y="4" width="12" height="2" fill="#8B6914"/>
    <rect x="2" y="6" width="2" height="6" fill="#6B5210"/>
    <rect x="12" y="6" width="2" height="6" fill="#6B5210"/>
    <rect x="4" y="6" width="8" height="6" fill="#B8945F"/>
    <rect x="6" y="8" width="4" height="2" fill="#2A2A2A"/>
    <rect x="2" y="12" width="12" height="2" fill="#6B5210"/>
  </svg>
);

export const ShieldIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ imageRendering: 'pixelated' }}>
    <rect x="4" y="2" width="8" height="2" fill="#FCDC00"/>
    <rect x="2" y="4" width="2" height="4" fill="#FCDC00"/>
    <rect x="12" y="4" width="2" height="4" fill="#FCDC00"/>
    <rect x="4" y="4" width="8" height="6" fill="#FFE940"/>
    <rect x="4" y="10" width="8" height="2" fill="#FCDC00"/>
    <rect x="6" y="12" width="4" height="2" fill="#FCDC00"/>
  </svg>
);

export const CompassIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ imageRendering: 'pixelated' }}>
    <rect x="4" y="2" width="8" height="2" fill="#B8B8B8"/>
    <rect x="2" y="4" width="2" height="8" fill="#B8B8B8"/>
    <rect x="12" y="4" width="2" height="8" fill="#B8B8B8"/>
    <rect x="4" y="4" width="8" height="8" fill="#E8E8E8"/>
    <rect x="7" y="4" width="2" height="4" fill="#F54040"/>
    <rect x="7" y="8" width="2" height="4" fill="#4A4A4A"/>
    <rect x="4" y="12" width="8" height="2" fill="#B8B8B8"/>
  </svg>
);

export const BookIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ imageRendering: 'pixelated' }}>
    <rect x="3" y="2" width="10" height="2" fill="#8B4513"/>
    <rect x="3" y="4" width="2" height="10" fill="#8B4513"/>
    <rect x="5" y="4" width="8" height="10" fill="#F5F5DC"/>
    <rect x="6" y="6" width="6" height="1" fill="#333"/>
    <rect x="6" y="8" width="5" height="1" fill="#333"/>
    <rect x="6" y="10" width="6" height="1" fill="#333"/>
    <rect x="3" y="12" width="10" height="2" fill="#8B4513"/>
  </svg>
);

export const EmeraldIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ imageRendering: 'pixelated' }}>
    <rect x="6" y="2" width="4" height="2" fill="#41F384"/>
    <rect x="4" y="4" width="2" height="2" fill="#41F384"/>
    <rect x="6" y="4" width="4" height="2" fill="#6BF5A0"/>
    <rect x="10" y="4" width="2" height="2" fill="#41F384"/>
    <rect x="4" y="6" width="8" height="4" fill="#6BF5A0"/>
    <rect x="4" y="10" width="2" height="2" fill="#41F384"/>
    <rect x="10" y="10" width="2" height="2" fill="#41F384"/>
    <rect x="6" y="10" width="4" height="2" fill="#41F384"/>
    <rect x="6" y="12" width="4" height="2" fill="#2BC66A"/>
  </svg>
);

export const GrassIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ imageRendering: 'pixelated' }}>
    <rect x="0" y="0" width="16" height="4" fill="#5D9B47"/>
    <rect x="0" y="2" width="2" height="2" fill="#7BC45F"/>
    <rect x="6" y="2" width="2" height="2" fill="#7BC45F"/>
    <rect x="12" y="2" width="2" height="2" fill="#7BC45F"/>
    <rect x="0" y="4" width="16" height="12" fill="#8B6914"/>
    <rect x="2" y="6" width="2" height="2" fill="#6B5210"/>
    <rect x="8" y="8" width="2" height="2" fill="#6B5210"/>
    <rect x="12" y="10" width="2" height="2" fill="#6B5210"/>
  </svg>
);

export const EnderIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ imageRendering: 'pixelated' }}>
    <rect x="2" y="4" width="12" height="8" fill="#14121C"/>
    <rect x="4" y="2" width="8" height="2" fill="#14121C"/>
    <rect x="4" y="12" width="8" height="2" fill="#14121C"/>
    <rect x="4" y="6" width="2" height="2" fill="#AA00AA"/>
    <rect x="10" y="6" width="2" height="2" fill="#AA00AA"/>
    <rect x="6" y="8" width="4" height="2" fill="#5A005A"/>
  </svg>
);

export const PaintingIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ imageRendering: 'pixelated' }}>
    <rect x="1" y="2" width="14" height="12" fill="#8B6914"/>
    <rect x="2" y="3" width="12" height="10" fill="#345EC3"/>
    <rect x="3" y="8" width="10" height="4" fill="#5D9B47"/>
    <rect x="4" y="6" width="3" height="4" fill="#8B6914"/>
    <rect x="5" y="4" width="2" height="2" fill="#7BC45F"/>
    <rect x="10" y="5" width="2" height="2" fill="#FCDC00"/>
  </svg>
);

export const SwordIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ imageRendering: 'pixelated' }}>
    <rect x="12" y="1" width="2" height="2" fill="#7B7B7B"/>
    <rect x="10" y="3" width="2" height="2" fill="#9E9E9E"/>
    <rect x="8" y="5" width="2" height="2" fill="#9E9E9E"/>
    <rect x="6" y="7" width="2" height="2" fill="#9E9E9E"/>
    <rect x="4" y="9" width="2" height="2" fill="#8B6914"/>
    <rect x="2" y="11" width="2" height="2" fill="#8B6914"/>
    <rect x="2" y="9" width="2" height="2" fill="#6B5210"/>
    <rect x="4" y="11" width="2" height="2" fill="#6B5210"/>
  </svg>
);

export const HeartIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ imageRendering: 'pixelated' }}>
    <rect x="2" y="4" width="4" height="2" fill="#F54040"/>
    <rect x="10" y="4" width="4" height="2" fill="#F54040"/>
    <rect x="1" y="6" width="6" height="2" fill="#F54040"/>
    <rect x="9" y="6" width="6" height="2" fill="#F54040"/>
    <rect x="1" y="8" width="14" height="2" fill="#F54040"/>
    <rect x="2" y="10" width="12" height="2" fill="#F54040"/>
    <rect x="4" y="12" width="8" height="2" fill="#F54040"/>
    <rect x="6" y="14" width="4" height="1" fill="#F54040"/>
  </svg>
);

// Icon mapping for easy access
export const iconMap = {
  pickaxe: PickaxeIcon,
  redstone: RedstoneIcon,
  diamond: DiamondIcon,
  chest: ChestIcon,
  shield: ShieldIcon,
  compass: CompassIcon,
  book: BookIcon,
  emerald: EmeraldIcon,
  grass: GrassIcon,
  ender: EnderIcon,
  painting: PaintingIcon,
  sword: SwordIcon,
  heart: HeartIcon,
};

export const getIcon = (name) => iconMap[name] || DiamondIcon;

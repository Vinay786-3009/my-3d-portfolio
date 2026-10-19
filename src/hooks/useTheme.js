import { useState, useEffect } from 'react';

export const THEMES = [
  {
    id: 'emerald',
    name: 'Cyber Mint & Emerald',
    primary: '#00F5D4',
    secondary: '#10B981',
    glow: 'rgba(0, 245, 212, 0.4)',
    bg: '#0F0F12',
    card: '#1C1C22'
  },
  {
    id: 'violet',
    name: 'Electric Violet & Magenta',
    primary: '#A855F7',
    secondary: '#EC4899',
    glow: 'rgba(168, 85, 247, 0.4)',
    bg: '#0F0E17',
    card: '#1B1829'
  },
  {
    id: 'cyan',
    name: 'Quantum Cyan & Azure',
    primary: '#06B6D4',
    secondary: '#3B82F6',
    glow: 'rgba(6, 182, 212, 0.4)',
    bg: '#0B111A',
    card: '#151F2E'
  },
  {
    id: 'amber',
    name: 'Sunset Amber & Coral',
    primary: '#F59E0B',
    secondary: '#FB923C',
    glow: 'rgba(245, 158, 11, 0.4)',
    bg: '#14110E',
    card: '#241D17'
  }
];

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('bv_portfolio_theme') || 'emerald';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('bv_portfolio_theme', theme);
  }, [theme]);

  const changeTheme = (newThemeId) => {
    setTheme(newThemeId);
  };

  return { theme, changeTheme, themes: THEMES };
}

"use client"
import { useTheme } from 'next-themes';
import React, { FC, useEffect, useState } from 'react';
import { SunIcon, MoonStarIcon } from 'lucide-react';

const ThemeSwitcher: FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Função para alternar entre os temas light e dark
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Determina qual ícone mostrar
  const ThemeIcon = theme === 'light' ? MoonStarIcon : SunIcon;

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted && (
    <button onClick={toggleTheme} aria-label="Toggle Theme" className="p-2">
      <ThemeIcon className="w-6 h-6" />
    </button>
  );
};

export default ThemeSwitcher;

'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from './theme-provider';
import { cn } from '../lib/utils';

const iconClasses = 'h-5 w-5';

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        'flex items-center gap-2 rounded-full border border-gray-200/70 dark:border-gray-800/70 px-3 py-2 text-sm font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:bg-gray-900/80 bg-white/80 backdrop-blur',
        className
      )}
      aria-label="Toggle color mode"
    >
      {theme === 'light' ? <Moon className={iconClasses} /> : <Sun className={iconClasses} />}
      <span className="hidden sm:inline">{theme === 'light' ? 'Dark mode' : 'Light mode'}</span>
    </button>
  );
}

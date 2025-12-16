'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { siteContent } from '../content/site';
import { ThemeToggle } from './theme-toggle';
import { cn } from '../lib/utils';

const sections = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' }
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onResize = () => setOpen(false);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [open]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full backdrop-blur transition-shadow',
        scrolled ? 'shadow-sm border-b border-gray-200/60 dark:border-gray-800/60 bg-white/80 dark:bg-gray-950/80' : 'bg-white/70 dark:bg-gray-950/70'
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="#home" className="flex items-center gap-3 font-semibold tracking-tight">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
            {siteContent.name.charAt(0)}
          </div>
          <div className="hidden sm:block">
            <p className="text-sm text-gray-500 dark:text-gray-400">{siteContent.headline}</p>
            <p>{siteContent.name}</p>
          </div>
          <span className="sm:hidden">{siteContent.name}</span>
        </Link>
        <nav className="flex items-center gap-3">
          <div className="hidden items-center gap-6 text-sm font-medium md:flex">
            {sections.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="text-gray-600 transition hover:text-primary dark:text-gray-300 dark:hover:text-white"
              >
                {section.label}
              </Link>
            ))}
          </div>
          <ThemeToggle className="hidden md:flex" />
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200/70 dark:border-gray-800/70 md:hidden"
            aria-label="Toggle navigation menu"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>
      {open && (
        <div className="border-t border-gray-200/70 bg-white/95 px-4 pb-4 dark:border-gray-800/70 dark:bg-gray-950/95 md:hidden">
          <div className="flex flex-col gap-3 py-2 text-sm font-medium">
            {sections.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-gray-700 transition hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-900"
              >
                {section.label}
              </Link>
            ))}
            <ThemeToggle className="w-full justify-center" />
          </div>
        </div>
      )}
    </header>
  );
}

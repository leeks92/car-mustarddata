'use client';

import Link from 'next/link';
import { useState } from 'react';

const navItems = [
  { href: '/계산기/자동차세', label: '자동차세' },
  { href: '/계산기/취등록세', label: '취등록세' },
  { href: '/계산기/할부금', label: '할부금' },
  { href: '/계산기/유류비', label: '유류비' },
  { href: '/계산기/감가상각', label: '감가상각' },
  { href: '/계산기/과태료', label: '과태료' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-amber-600 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-lg md:text-xl font-bold hover:opacity-90 shrink-0"
          >
            🚗 자동차 계산기
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-4 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:underline underline-offset-4"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-1"
            aria-label="메뉴 열기"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-amber-500 grid grid-cols-3 gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-center py-2 px-3 rounded-lg bg-amber-500/30 hover:bg-amber-500/50 text-sm"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

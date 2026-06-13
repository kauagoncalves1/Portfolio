'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [dark, setDark] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    const newDark = !dark
    setDark(newDark)
    if (newDark) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
    }
  }

  const links = [
    { href: '#sobre', label: 'Sobre' },
    { href: '#habilidades', label: 'Habilidades' },
    { href: '#projetos', label: 'Projetos' },
    { href: '#contato', label: 'Contato' },
  ]

  return (
    <header
      style={{ backgroundColor: scrolled ? 'var(--color-bg-navbar)' : 'transparent', borderColor: 'var(--color-border)' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'border-b shadow-lg' : ''}`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-display font-bold text-xl text-teal-400">Kaua Goncalves</a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm text-slate-400 hover:text-teal-400 transition-colors">{link.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <button onClick={toggleTheme} className="hidden md:flex w-9 h-9 rounded-lg border border-slate-700 items-center justify-center text-slate-400 hover:text-teal-400 transition-all duration-200">
            {dark ? '☀️' : '🌙'}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden w-9 h-9 flex items-center justify-center text-slate-400 text-xl">
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="md:hidden border-t px-6 py-3" style={{ backgroundColor: 'var(--color-bg-navbar)', borderColor: 'var(--color-border)' }}>
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuOpen(false)} className="block py-2 text-slate-300 hover:text-teal-400 transition-colors font-medium">{link.label}</a>
              </li>
            ))}
            <li className="mt-1 pt-2 border-t" style={{ borderColor: 'var(--color-border)' }}>
              <button onClick={toggleTheme} className="flex items-center gap-2 py-2 px-4 rounded-lg bg-teal-400/10 text-teal-400 font-medium text-sm w-full">
                {dark ? '☀️ Tema claro' : '🌙 Tema escuro'}
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
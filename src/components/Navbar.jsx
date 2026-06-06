'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [dark, setDark] = useState(true)

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

  return (
    <header
      style={{ backgroundColor: scrolled ? 'var(--color-bg-navbar)' : 'transparent', borderColor: 'var(--color-border)' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'border-b shadow-lg' : ''}`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-display font-bold text-xl text-teal-400">
          Kaua Goncalves
        </a>
        <ul className="flex items-center gap-8">
          <li><a href="#sobre" className="text-sm text-slate-400 hover:text-teal-400 transition-colors">Sobre</a></li>
          <li><a href="#habilidades" className="text-sm text-slate-400 hover:text-teal-400 transition-colors">Habilidades</a></li>
          <li><a href="#projetos" className="text-sm text-slate-400 hover:text-teal-400 transition-colors">Projetos</a></li>
          <li><a href="#contato" className="text-sm text-slate-400 hover:text-teal-400 transition-colors">Contato</a></li>
        </ul>
        <button onClick={toggleTheme} className="w-9 h-9 rounded-lg border border-[#1C1F2E] flex items-center justify-center text-slate-400 hover:text-teal-400 transition-all duration-200">
          {dark ? '☀️' : '🌙'}
        </button>
      </nav>
    </header>
  )
}
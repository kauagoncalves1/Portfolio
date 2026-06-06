export default function Footer() {
  return (
    <footer className="py-8 border-t" style={{ backgroundColor: 'var(--color-bg-navbar)', borderColor: 'var(--color-border)' }}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display font-bold text-teal-400 text-lg">KG.</span>
        <p className="text-slate-500 text-sm">
          Desenvolvido por Kauã Goncalves
        </p>
        <div className="flex gap-6">
          <a href="https://github.com/kauagoncalves1" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-teal-400 transition-colors text-sm">GitHub</a>
          <a href="https://www.linkedin.com/in/kaua-gon%C3%A7alves" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-teal-400 transition-colors text-sm">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
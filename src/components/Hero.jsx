import ScrollReveal from './ScrollReveal'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
      <div className="max-w-6xl mx-auto px-6">

        <ScrollReveal delay={0}>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 bg-teal-400 rounded-full" />
            <span className="text-teal-400 text-sm font-medium tracking-wider uppercase">
              Disponível para projetos
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h1 className="font-display font-extrabold text-6xl md:text-8xl text-white mb-4 leading-none">
            Kauã<br />
            <span className="text-teal-400">Goncalves</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-slate-400 text-xl mb-10 max-w-xl leading-relaxed">
            Desenvolvedor full-stack focado em React, Next.js e Node.js.
            Criando soluções completas para freelancers e empresas.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="flex gap-4">
            <a href="#projetos" className="px-6 py-3 rounded-xl bg-teal-400 text-[#0A0B0F] font-semibold hover:bg-teal-300 transition-colors">Ver projetos</a>
            <a href="#contato" className="px-6 py-3 rounded-xl border border-slate-700 text-slate-300 font-semibold hover:border-teal-400 hover:text-teal-400 transition-colors">Contato</a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
import ScrollReveal from './ScrollReveal'

export default function Contact() {
  return (
    <section id="contato" className="py-24" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
      <div className="max-w-6xl mx-auto px-6">

        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-teal-400 text-sm font-medium tracking-wider uppercase mb-3 block">
              Contato
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
              Vamos trabalhar juntos?
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Estou disponível para projetos freelancer e oportunidades de emprego. Me chama!
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:kaua.goncalves0603@gmail.com" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-teal-400 text-[#0A0B0F] font-semibold text-center hover:bg-teal-300 transition-colors duration-200">
              Enviar e-mail
            </a>
            <a href="https://wa.me/5521986129519" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 rounded-xl border text-slate-300 font-semibold text-center hover:text-teal-400 transition-colors duration-200" style={{ borderColor: 'var(--color-border)' }}>
              WhatsApp
            </a>
            <a href="https://www.linkedin.com/in/kaua-gon%C3%A7alves" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 rounded-xl border text-slate-300 font-semibold text-center hover:text-teal-400 transition-colors duration-200" style={{ borderColor: 'var(--color-border)' }}>
              LinkedIn
            </a>
            <a href="https://github.com/kauagoncalves1" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 rounded-xl border text-slate-300 font-semibold text-center hover:text-teal-400 transition-colors duration-200" style={{ borderColor: 'var(--color-border)' }}>
              GitHub
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
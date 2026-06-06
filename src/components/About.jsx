import ScrollReveal from './ScrollReveal'

export default function About() {
  return (
    <section id="sobre" className="py-24" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Lado esquerdo - texto */}
          <div>
            <ScrollReveal>
              <span className="text-teal-400 text-sm font-medium tracking-wider uppercase mb-3 block">
                Sobre mim
              </span>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6 leading-tight">
                Construindo com propósito e precisão
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="space-y-4 text-slate-400 leading-relaxed">
                 <p>
                    Sou o Kauã, estudante de <strong className="text-slate-300">Análise e Desenvolvimento de Sistemas</strong>.
                   Comecei pelo front-end e hoje entrego aplicações completas com Next.js, React e Node.js.
                </p>
                 <p>
                    Trabalho com <strong className="text-slate-300">desenvolvimento freelancer</strong>, criando sites e sistemas
                    para pequenas empresas. Meu foco é unir design limpo com código eficiente.
                </p>
                <p>
                    Busco oportunidades para crescer como <strong className="text-slate-300">desenvolvedor full-stack</strong> e
                    continuar evoluindo minhas habilidades na prática.
                </p>
                </div>
            </ScrollReveal>
          </div>

          {/* Lado direito - card estilo terminal */}
          <ScrollReveal delay={200}>
            <div className="bg-[#111318] border border-[#1C1F2E] rounded-xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-[#0D1117] border-b border-[#1C1F2E]">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-slate-600 text-xs font-mono">sobre.js</span>
              </div>
              <div className="p-5 font-mono text-sm leading-relaxed">
                <p className="text-slate-500">{'// Sobre mim em código'}</p>
                <p className="text-purple-400 mt-2">
                  <span className="text-blue-400">const</span>{' '}
                  <span className="text-teal-400">kaua</span> = {'{'}
                </p>
                <p className="text-slate-300 ml-4">nome: <span className="text-amber-400">'Kauã Goncalves'</span>,</p>
                <p className="text-slate-300 ml-4">curso: <span className="text-amber-400">'ADS'</span>,</p>
                <p className="text-slate-300 ml-4">foco: <span className="text-amber-400">'Full-stack'</span>,</p>
                <p className="text-slate-300 ml-4">local: <span className="text-amber-400">'Rio de Janeiro, BR'</span>,</p>
                <p className="text-slate-300 ml-4">disponivel: <span className="text-green-400">true</span>,</p>
                <p className="text-purple-400">{'}'}</p>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}
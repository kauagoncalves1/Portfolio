import ScrollReveal from './ScrollReveal'

const projects = [
  {
    title: 'Barbearia TH',
    description: 'Site institucional para barbearia com design dark luxury, agendamento via WhatsApp, seção de serviços e preços. Responsivo e otimizado para SEO local.',
    tags: ['Next.js', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com/kauagoncalves1/barbearia-th',
    live: 'https://barbearia-th.vercel.app',
  },
  {
    title: 'Gerenciador de Tarefas',
    description: 'Aplicação para gerenciamento de tarefas desenvolvida em Python. Permite criar, listar e controlar tarefas do dia a dia.',
    tags: ['Python'],
    github: 'https://github.com/kauagoncalves1/Gerenciador-De-Tarefas',
    live: null,
  },
  {
    title: 'Site Faculdade',
    description: 'Primeiro site desenvolvido de forma independente durante a faculdade. Marco inicial da minha jornada no desenvolvimento web.',
    tags: ['HTML', 'CSS'],
    github: 'https://github.com/kauagoncalves1/Site-Faculdade',
    live: null,
  },
  {
    title: 'Renove Estetica',
    description: 'Site institucional com chatbot de IA integrado para uma clínica de estética fictícia, desenvolvido como projeto de estudo full-stack.',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Groq SDK', 'Vercel'],
    github: 'https://github.com/kauagoncalves1/renove-estetica',
    live: 'https://renove-estetica.vercel.app',
  },
  {
  title: 'Portfólio [Este]',
  description: 'Portfólio pessoal desenvolvido com Next.js 14, Tailwind CSS e animações de scroll. Design dark moderno com toggle de tema claro/escuro.',
  tags: ['Next.js', 'Tailwind CSS', 'Vercel'],
  github: 'https://github.com/kauagoncalves1/portfolio',
  live: null,
  },
]

export default function Projects() {
  return (
    <section id="projetos" className="py-24" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
      <div className="max-w-6xl mx-auto px-6">

        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-teal-400 text-sm font-medium tracking-wider uppercase mb-3 block">
              Projetos
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
              O que já construí
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 100}>
              <div className="rounded-xl p-6 flex flex-col h-full border transition-colors duration-300" style={{ backgroundColor: 'var(--color-bg-card)', borderColor: 'var(--color-border)' }}>
                <h3 className="font-display font-bold text-xl text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-md bg-teal-400/10 text-teal-400 text-xs font-medium">{tag}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-white transition-colors underline underline-offset-4">GitHub</a>
                  {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-sm text-teal-400 hover:text-teal-300 transition-colors underline underline-offset-4">Ver site</a>}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}

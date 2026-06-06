import ScrollReveal from './ScrollReveal'

const skillGroups = [
  {
    category: 'Front-end',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'],
  },
  {
    category: 'Back-end',
    skills: ['Node.js', 'PostgreSQL'],
  },
  {
    category: 'Ferramentas',
    skills: ['Git', 'GitHub', 'Vercel'],
  },
]

export default function Skills() {
  return (
    <section id="habilidades" className="py-24" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
      <div className="max-w-6xl mx-auto px-6">

        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-teal-400 text-sm font-medium tracking-wider uppercase mb-3 block">
              Habilidades
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
              Minha stack tecnológica
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group, i) => (
            <ScrollReveal key={group.category} delay={i * 100}>
              <div className="rounded-xl p-6 border" style={{ backgroundColor: 'var(--color-bg-card)', borderColor: 'var(--color-border)' }}>
                <h3 className="font-display font-semibold text-white text-lg mb-4 pb-3 border-b" style={{ borderColor: 'var(--color-border)' }}>
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1.5 rounded-lg text-slate-300 text-sm hover:text-teal-400 transition-colors duration-200" style={{ backgroundColor: 'var(--color-border)' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}
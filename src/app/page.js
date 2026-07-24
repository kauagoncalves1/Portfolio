"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { StackTag, Lightbox, fadeUp, stagger, ThemeToggle, TiltCard } from "@/components/CaseFileUI";

const MARQUEE = [
  ["Next.js", "nextdotjs"],
  ["React", "react"],
  ["Supabase", "supabase"],
  ["TypeScript", "typescript"],
  ["Node.js", "nodedotjs"],
  ["Python", "python"],
  ["Tailwind CSS", "tailwindcss"],
  ["Vercel", "vercel"],
  ["n8n", "n8n"],
  ["WhatsApp API", "whatsapp"],
];

const TEMPLATES = [
  {
    name: "Sua Hamburgueria",
    desc: "Landing page para hamburgueria com cardápio, preços e chamada direta para pedido.",
    url: "https://exemplo-hamburgueria.netlify.app",
    img: "/portfolio-img/lp-hamburgueria-1.jpeg",
  },
  {
    name: "Seu Salão",
    desc: "Site para salão de beleza com vitrine de serviços e botão de agendamento.",
    url: "https://exemplo-salao.netlify.app",
    img: "/portfolio-img/lp-salao-1.jpeg",
  },
  {
    name: "Seu Restaurante",
    desc: "Landing para restaurante com cardápio, localização e reservas.",
    url: "https://exemplo-restaurant.netlify.app",
    img: "/portfolio-img/lp-restaurante-1.jpeg",
  },
  {
    name: "Will's Barbershop",
    desc: "Landing dark para barbearia, com equipe, cuidados e agendamento via WhatsApp.",
    url: "https://sua-barber.netlify.app/",
    img: "/portfolio-img/wills-barbershop.jpg",
    note: "Marca fictícia — criada para portfólio",
  },
  {
    name: "Modelo genérico",
    desc: "Base flexível para adaptar rapidamente a qualquer negócio local.",
    url: "https://exemplo-do-site.netlify.app/",
    img: "/portfolio-img/lp-barbearia-1.jpeg",
  },
];

function Marquee() {
  const items = [...MARQUEE, ...MARQUEE];
  return (
    <div className="marquee-band">
      <motion.div
        className="marquee-track"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
      >
        {items.map(([label, slug], i) => (
          <div className="marquee-item" key={i}>
            <img src={`https://cdn.simpleicons.org/${slug}/1e1912`} alt="" onError={(e) => (e.currentTarget.style.display = "none")} />
            {label}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  const openImg = (src, alt) => setLightbox({ src, alt });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("kaua.goncalves0603@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {}
  };

  return (
    <>
      <nav className={scrolled ? "scrolled" : ""}>
        <div className="wrap">
          <a href="#" className="logo">Kaua<em>.</em>Goncalves</a>
          <ul className={`navlinks ${menuOpen ? "open" : ""}`}>
            <li><a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a></li>
            <li><a href="#skills" onClick={() => setMenuOpen(false)}>Stack</a></li>
            <li><a href="#projetos" onClick={() => setMenuOpen(false)}>Projetos</a></li>
            <li><a href="#templates" onClick={() => setMenuOpen(false)}>Modelos prontos</a></li>
            <li><a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a></li>
            <li><Link href="/orcamento" onClick={() => setMenuOpen(false)} style={{ color: "var(--red)", fontWeight: 600 }}>Fazer orçamento →</Link></li>
          </ul>
          <Link href="/orcamento" className="nav-cta">Fazer orçamento</Link>
          <ThemeToggle />
          <button className={`navtoggle ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>
      <div className="nav-spacer" />

      <header className="hero">
        <div className="hero-aurora">
          <motion.div className="blob b1" animate={{ x: [0, 40, -20, 0], y: [0, 30, -10, 0] }} transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="blob b2" animate={{ x: [0, -30, 20, 0], y: [0, -20, 25, 0] }} transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="blob b3" animate={{ x: [0, 25, -35, 0], y: [0, -15, 20, 0] }} transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }} />
        </div>
        <div className="wrap hero-grid">
          <motion.div className="hero-col-text" variants={stagger} initial="hidden" animate="show">
            <motion.div variants={fadeUp} className="eyebrow">
              <span className="dot" /> Disponível para novos projetos
            </motion.div>
            <motion.h1 variants={fadeUp} className="title">
              Sistemas e sites
              <br />
              que <span className="it">funcionam</span> de verdade.
            </motion.h1>
            <motion.p variants={fadeUp} className="hero-sub">
              Sou o Kauã, desenvolvedor full-stack no Rio de Janeiro. Cada projeto
              abaixo é um caso real: um negócio, um problema e um sistema entregue
              em produção — do front ao banco de dados, com automação onde faz
              sentido.
            </motion.p>
            <motion.div variants={fadeUp} className="hero-actions">
              <a href="#projetos" className="btn btn-primary">Ver projetos</a>
              <Link href="/orcamento" className="btn btn-ghost">Fazer orçamento</Link>
            </motion.div>
            <motion.div variants={fadeUp} className="identity-row">
              <div className="meta-row">
                <div><div className="m-l">Base</div><div className="m-v">Rio de Janeiro</div></div>
                <div><div className="m-l">Foco</div><div className="m-v">Full-stack &amp; IA</div></div>
                <div><div className="m-l">Stack</div><div className="m-v">Next.js · Supabase</div></div>
                <div><div className="m-l">Status</div><div className="m-v">Disponível</div></div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-photo"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <img src="/portfolio-img/kaua-profile.jpg" alt="Kauã Gonçalves" />
          </motion.div>
        </div>
      </header>

      <Marquee />

      <section className="section" id="sobre">
        <div className="wrap">
          <motion.div className="section-head" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.5 }}>
            <div className="eyebrow"><span className="dot" />Perfil</div>
            <h2>Sobre mim</h2>
          </motion.div>
          <div className="about-grid">
            <motion.div className="about-text" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
              <motion.p variants={fadeUp}>
                Comecei pelo front-end e hoje entrego <strong>sistemas completos de
                produção</strong> — bancos de dados, painéis administrativos,
                integrações com IA e automações — para pequenos negócios reais.
              </motion.p>
              <motion.p variants={fadeUp}>
                Trabalho como <strong>freelancer</strong>, do primeiro site
                institucional até plataformas com agendamento, precificação e
                vendas. Cada projeto é documentado e publicado como um case
                completo, não como exercício de portfólio.
              </motion.p>
              <motion.p variants={fadeUp}>
                Meu foco atual é ir além do CRUD tradicional: uso <strong>IA
                (Groq/Llama)</strong> para assistentes dentro dos sistemas e{" "}
                <strong>automações com n8n</strong> para eliminar tarefas manuais —
                como prospecção e envio de mensagens — do dia a dia dos meus
                clientes.
              </motion.p>
            </motion.div>
            <motion.div className="stat-grid" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
              <motion.div variants={fadeUp} className="stat"><div className="n">6+</div><div className="l">Projetos entregues</div></motion.div>
              <motion.div variants={fadeUp} className="stat"><div className="n">100%</div><div className="l">Aprovação dos Clientes</div></motion.div>
              <motion.div variants={fadeUp} className="stat"><div className="n">IA</div><div className="l">Integrada aos sistemas</div></motion.div>
              <motion.div variants={fadeUp} className="stat"><div className="n">n8n</div><div className="l">Automação de processos</div></motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section section-alt" id="skills">
        <div className="wrap">
          <motion.div className="section-head" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.5 }}>
            <div className="eyebrow"><span className="dot" />Ferramentas</div>
            <h2>Stack &amp; habilidades</h2>
          </motion.div>
          <motion.div className="skills-grid" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }}>
            <motion.div variants={fadeUp} className="skill-card">
              <h3>Front-end</h3>
              <div className="taglist">
                <StackTag label="Next.js 15" /><StackTag label="React" /><StackTag label="Tailwind CSS" /><StackTag label="JavaScript" />
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="skill-card">
              <h3>Back-end &amp; Dados</h3>
              <div className="taglist">
                <StackTag label="Node.js" /><StackTag label="Python" /><StackTag label="Supabase" /><StackTag label="PostgreSQL & RLS" />
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="skill-card">
              <h3>IA &amp; Automação</h3>
              <div className="taglist">
                <StackTag label="Groq API" /><StackTag label="Llama 3.3" /><StackTag label="n8n" /><StackTag label="Z-API (WhatsApp)" />
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="skill-card">
              <h3>Dados &amp; Visualização</h3>
              <div className="taglist">
                <span className="tag">Recharts</span><span className="tag">Dashboards</span><span className="tag">Analytics</span>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="skill-card">
              <h3>Infra &amp; Deploy</h3>
              <div className="taglist">
                <StackTag label="Vercel" /><StackTag label="Git / GitHub" /><StackTag label="Docker (básico)" />
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="skill-card">
              <h3>Produto</h3>
              <div className="taglist">
                <span className="tag">Painéis admin</span><span className="tag">UX responsivo</span><span className="tag">Documentação técnica</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="section" id="projetos">
        <div className="wrap">
          <motion.div className="section-head" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.5 }}>
            <div className="eyebrow"><span className="dot" />Projetos</div>
            <h2>Sistemas em produção</h2>
            <p>Cada um resolve um problema real de um negócio real — do front ao banco de dados.</p>
          </motion.div>

          <div className="project-list">
            <motion.div className="project" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.6, ease: [0.16,1,0.3,1] }}>
              <TiltCard className="project-media" onClick={() => openImg("/portfolio-img/norte-1.jpeg", "Norte House Burger")}>
                <img src="/portfolio-img/norte-1.jpeg" alt="Norte House Burger — vitrine do cardápio" />
                <span className="zoom-hint">Ampliar</span>
              </TiltCard>
              <div className="project-info">
                <div className="project-status"><span className="dot" />Em produção</div>
                <h3>Norte House Burger</h3>
                <p>Painel de gestão completo para hamburgueria: calculadora de precificação por ingrediente, vitrine de cardápio com fotos e preços, simulador de pedidos e painel administrativo de vendas. Nasceu de uma planilha de custos e virou sistema real usado no dia a dia do negócio.</p>
                <ul className="project-features">
                  <li>Calculadora de custo por ingrediente com margem e preço final automático</li>
                  <li>Assistente de IA para tirar dúvidas de cliente e sugerir combinações</li>
                  <li>Dashboard de vendas com gráficos de faturamento e itens mais pedidos</li>
                </ul>
                <div className="project-stack">
                  <StackTag label="Next.js 14" /><StackTag label="Supabase" /><StackTag label="Groq API" /><span className="tag">Recharts</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/kauagoncalves1/Norte-House-Precifica-o">GitHub →</a>
                </div>
              </div>
            </motion.div>

            <motion.div className="project" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.6, ease: [0.16,1,0.3,1] }}>
              <TiltCard className="project-media" onClick={() => openImg("/portfolio-img/barbeariath-2.jpeg", "Barbearia TH")}>
                <img src="/portfolio-img/barbeariath-2.jpeg" alt="Barbearia TH — página inicial" />
                <span className="zoom-hint">Ampliar</span>
              </TiltCard>
              <div className="project-info">
                <div className="project-status"><span className="dot" />Landing + agendamento</div>
                <h3>Barbearia TH</h3>
                <p>Sistema de agendamento para barbearia com landing dark, fluxo de escolha de serviço e horário, e painel administrativo de controle. Responsivo e pensado para conversão local.</p>
                <ul className="project-features">
                  <li>Agendamento em 3 passos: serviço, dia e horário disponível</li>
                  <li>Preços exibidos por serviço direto na tela de agendamento</li>
                  <li>Landing dark com identidade própria e botão de WhatsApp fixo</li>
                </ul>
                <div className="project-stack">
                  <StackTag label="Next.js" /><StackTag label="Tailwind CSS" /><StackTag label="Vercel" />
                </div>
                <div className="project-links">
                  <a href="https://github.com/kauagoncalves1/barbearia-th">GitHub →</a>
                  <a href="https://barbearia-th.vercel.app">Ver site →</a>
                </div>
              </div>
            </motion.div>

            <motion.div className="project" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.6, ease: [0.16,1,0.3,1] }}>
              <TiltCard className="project-media" onClick={() => openImg("/portfolio-img/renove-2.jpeg", "Renove Estética")}>
                <img src="/portfolio-img/renove-2.jpeg" alt="Renove Estética — página inicial" />
                <span className="zoom-hint">Ampliar</span>
              </TiltCard>
              <div className="project-info">
                <div className="project-status"><span className="dot" />Landing + chatbot IA</div>
                <h3>Renove Estética</h3>
                <p>Site institucional com chatbot de IA integrado para uma clínica de estética em Ipanema, desenvolvido como estudo full-stack de integração de IA em produtos reais.</p>
                <ul className="project-features">
                  <li>Chatbot de IA que responde dúvidas sobre procedimentos e agenda horários</li>
                  <li>Design responsivo, testado direto no app mobile do cliente</li>
                  <li>Seção "Sobre nós" e vitrine de procedimentos oferecidos</li>
                </ul>
                <div className="project-stack">
                  <StackTag label="Next.js" /><StackTag label="TypeScript" /><StackTag label="Groq SDK" />
                </div>
                <div className="project-links">
                  <a href="https://github.com/kauagoncalves1/renove-estetica">GitHub →</a>
                  <a href="https://renove-estetica.vercel.app">Ver site →</a>
                </div>
              </div>
            </motion.div>

            <motion.div className="project no-media" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.6, ease: [0.16,1,0.3,1] }}>
              <div className="project-info">
                <div className="project-status"><span className="dot" />SaaS · Em produção</div>
                <h3>Atendia</h3>
                <p>SaaS de atendimento automatizado via WhatsApp para pequenos negócios (barbearias, restaurantes, salões, clínicas, pet shops). A IA responde clientes 24/7 direto no WhatsApp do negócio, com painel multi-tenant, cobrança recorrente e conformidade com a LGPD.</p>
                <ul className="project-features">
                  <li>Atendimento automático via IA (Gemini) integrado ao WhatsApp por Z-API</li>
                  <li>Painel multi-tenant com isolamento de dados por RLS e autenticação via Clerk</li>
                  <li>Assinaturas recorrentes com Mercado Pago e planos Trial, Básico e Pro</li>
                </ul>
                <div className="project-stack">
                  <StackTag label="Next.js 15" /><StackTag label="Supabase" /><StackTag label="Clerk" /><StackTag label="Google Gemini" /><StackTag label="Z-API (WhatsApp)" /><StackTag label="Mercado Pago" />
                </div>
                <div className="project-links">
                  <a href="https://github.com/kauagoncalves1/Atendia">GitHub →</a>
                  <a href="https://atendia-pi.vercel.app">Ver site →</a>
                </div>
              </div>
            </motion.div>

            <motion.div className="project no-media" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.6, ease: [0.16,1,0.3,1] }}>
              <div className="project-info">
                <div className="project-status"><span className="dot" />Automação WhatsApp</div>
                <h3>Integração Supabase + WhatsApp (Z-API)</h3>
                <p>Script em Python que lê contatos direto do Supabase e envia mensagens personalizadas via WhatsApp usando a Z-API — desafio técnico para uma vaga de estágio. No caminho, depurei incompatibilidades de versão de API, políticas de RLS mal configuradas e headers obrigatórios não documentados.</p>
                <ul className="project-features">
                  <li>Leitura de contatos direto do banco Supabase via API autenticada</li>
                  <li>Envio de mensagem personalizada por contato através da Z-API</li>
                  <li>Debug de erros reais: versão de API, RLS mal configurada, headers não documentados</li>
                </ul>
                <div className="project-stack">
                  <StackTag label="Python" /><StackTag label="Supabase" /><StackTag label="Z-API (WhatsApp)" /><span className="tag">RLS</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/kauagoncalves1/automacao-whatsapp-">GitHub →</a>
                </div>
              </div>
            </motion.div>

            <motion.div className="project no-media" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.6, ease: [0.16,1,0.3,1] }}>
              <div className="project-info">
                <div className="project-status"><span className="dot" />Automação · n8n</div>
                <h3>Prospecção automática de clientes</h3>
                <p>Workflow em n8n que busca novos leads e dispara mensagens de prospecção automaticamente, sem intervenção manual. Construído para reduzir o tempo gasto em contato frio e manter um funil de novos clientes rodando sozinho.</p>
                <ul className="project-features">
                  <li>Busca automática de novos leads seguindo critérios definidos</li>
                  <li>Disparo de mensagem inicial de prospecção sem ação manual</li>
                  <li>Workflow rodando de forma independente, direto no n8n</li>
                </ul>
                <div className="project-stack">
                  <StackTag label="n8n" /><span className="tag">Automação</span><StackTag label="WhatsApp" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section section-alt" id="templates">
        <div className="wrap">
          <motion.div className="section-head" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.5 }}>
            <div className="eyebrow"><span className="dot" />Modelos prontos</div>
            <h2>Landing pages para o seu negócio</h2>
            <p>Templates prontos que adapto rápido para o seu negócio local — visite os exemplos ao vivo.</p>
          </motion.div>
          <motion.div className="tpl-grid" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }}>
            {TEMPLATES.map((t) => (
              <motion.a
                key={t.name}
                href={t.url}
                target="_blank"
                rel="noopener noreferrer"
                className="tpl-card"
                variants={fadeUp}
                whileHover={{ y: -4 }}
              >
                <div className={`tpl-thumb ${t.img ? "" : "empty"}`}>
                  {t.img ? <img src={t.img} alt={t.name} /> : <span>Ver ao vivo</span>}
                </div>
                <div className="tpl-body">
                  <h4>{t.name}</h4>
                  {t.note && <div className="tpl-note">{t.note}</div>}
                  <p>{t.desc}</p>
                  <span className="tpl-link">Visitar site →</span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section" id="contato">
        <div className="wrap">
          <motion.div className="contact-box" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6, ease: [0.16,1,0.3,1] }}>
            <h2>Vamos construir algo?</h2>
            <p>Disponível para projetos freelancer e oportunidades na area dev. Se tem uma ideia, um negócio pra automatizar ou um sistema pra construir, me chama.</p>
            <div className="contact-actions">
              <a href="mailto:kaua.goncalves0603@gmail.com" className="btn btn-primary">Enviar e-mail</a>
              <a href="https://wa.me/5521986129519" className="btn btn-ghost" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <a href="https://www.linkedin.com/in/kaua-gon%C3%A7alves" className="btn btn-ghost" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <div className="copy-note">{copied ? "✓ E-mail copiado" : ""}</div>
          </motion.div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <p>© 2026 Kauã Gonçalves</p>
          <div className="foot-links">
            <a href="https://github.com/kauagoncalves1">GitHub</a>
            <a href="https://www.linkedin.com/in/kaua-gon%C3%A7alves">LinkedIn</a>
          </div>
        </div>
      </footer>

      <Lightbox src={lightbox?.src} alt={lightbox?.alt} onClose={() => setLightbox(null)} />
    </>
  );
}

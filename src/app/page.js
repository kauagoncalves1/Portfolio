"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("sistemas");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav>
        <div className="wrap">
          <a href="#" className="logo">
            kauã<em>.</em>dev
          </a>
          <ul className={`navlinks ${menuOpen ? "open" : ""}`}>
            <li>
              <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a>
            </li>
            <li>
              <a href="#skills" onClick={() => setMenuOpen(false)}>Stack</a>
            </li>
            <li>
              <a href="#projetos" onClick={() => setMenuOpen(false)}>Projetos</a>
            </li>
            <li>
              <Link href="/orcamento" onClick={() => setMenuOpen(false)}>Orçamento</Link>
            </li>
            <li>
              <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
            </li>
          </ul>
          <button className="navtoggle" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>
      </nav>

      <header className="hero">
        <div className="wrap">
          <div className="folio-tag">
            <span className="dot"></span> Disponível para projetos freelancer
          </div>
          <h1 className="title">
            Sistemas e sites
            <br />
            que <span className="it">funcionam</span> de verdade.
          </h1>
          <p className="hero-sub">
            Sou o Kauã, desenvolvedor full-stack no Rio de Janeiro. Cada projeto abaixo é
            um caso real: um negócio, um problema e um sistema entregue em produção — do
            front ao banco de dados, com automação onde faz sentido.
          </p>
          <div className="hero-actions">
            <a href="#projetos" className="btn btn-primary">
              Ver projetos →
            </a>
            <a href="#contato" className="btn btn-ghost">
              Falar comigo
            </a>
          </div>

          <div className="hero-meta" data-reveal>
            <div>
              <div className="l">Base</div>
              <div className="v">Rio de Janeiro</div>
            </div>
            <div>
              <div className="l">Foco</div>
              <div className="v">Full-stack &amp; automação</div>
            </div>
            <div>
              <div className="l">Stack</div>
              <div className="v">Next.js · Supabase</div>
            </div>
            <div>
              <div className="l">Status</div>
              <div className="v">Disponível</div>
            </div>
          </div>
        </div>
      </header>

      <section className="section" id="sobre">
        <div className="wrap">
          <div className="section-label">
            <span className="tab-mark">Perfil</span>
            <h2>Sobre mim</h2>
            <div className="rule"></div>
          </div>
          <div className="about-grid">
            <div className="about-text" data-reveal>
              <p>
                Comecei pelo front-end e hoje entrego <strong>sistemas completos de
                produção</strong> — bancos de dados, painéis administrativos, integrações
                com IA e automações — para pequenos negócios reais.
              </p>
              <p>
                Trabalho como <strong>freelancer</strong>, do primeiro site institucional
                até plataformas com agendamento, precificação e vendas. Cada projeto é
                documentado e publicado como um case completo, não como exercício de
                portfólio.
              </p>
              <p>
                Meu foco atual é ir além do CRUD tradicional: uso <strong>IA (Groq/Llama)</strong>{" "}
                para assistentes dentro dos sistemas e <strong>automações com n8n</strong> para
                eliminar tarefas manuais — como prospecção e envio de mensagens — do dia a
                dia dos meus clientes.
              </p>
            </div>
            <div className="stat-grid" data-reveal>
              <div className="stat">
                <div className="n">6+</div>
                <div className="l">Projetos entregues</div>
              </div>
              <div className="stat">
                <div className="n">100%</div>
                <div className="l">Deploy Vercel</div>
              </div>
              <div className="stat">
                <div className="n">IA</div>
                <div className="l">Integrada aos sistemas</div>
              </div>
              <div className="stat">
                <div className="n">n8n</div>
                <div className="l">Automação de processos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section"
        id="skills"
        style={{
          background: "var(--paper-alt)",
          borderTop: "2px solid var(--ink)",
          borderBottom: "2px solid var(--ink)",
        }}
      >
        <div className="wrap">
          <div className="section-label">
            <span className="tab-mark">Ferramentas</span>
            <h2>Stack &amp; habilidades</h2>
            <div className="rule"></div>
          </div>
          <div className="skills-grid" data-reveal>
            <div className="skill-card">
              <h3>Front-end</h3>
              <div className="taglist">
                <span className="tag">Next.js 14</span>
                <span className="tag">React</span>
                <span className="tag">Tailwind CSS</span>
                <span className="tag">JavaScript</span>
              </div>
            </div>
            <div className="skill-card">
              <h3>Back-end &amp; Dados</h3>
              <div className="taglist">
                <span className="tag">Node.js</span>
                <span className="tag">Python</span>
                <span className="tag">Supabase</span>
                <span className="tag">PostgreSQL &amp; RLS</span>
              </div>
            </div>
            <div className="skill-card">
              <h3>IA &amp; Automação</h3>
              <div className="taglist">
                <span className="tag">Groq API</span>
                <span className="tag">Llama 3.3</span>
                <span className="tag">n8n</span>
                <span className="tag">Z-API (WhatsApp)</span>
              </div>
            </div>
            <div className="skill-card">
              <h3>Dados &amp; Visualização</h3>
              <div className="taglist">
                <span className="tag">Recharts</span>
                <span className="tag">Dashboards</span>
                <span className="tag">Analytics</span>
              </div>
            </div>
            <div className="skill-card">
              <h3>Infra &amp; Deploy</h3>
              <div className="taglist">
                <span className="tag">Vercel</span>
                <span className="tag">Git / GitHub</span>
                <span className="tag">Docker (básico)</span>
              </div>
            </div>
            <div className="skill-card">
              <h3>Produto</h3>
              <div className="taglist">
                <span className="tag">Painéis admin</span>
                <span className="tag">UX responsivo</span>
                <span className="tag">Documentação técnica</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="projetos">
        <div className="wrap">
          <div className="section-label">
            <span className="tab-mark">Arquivo</span>
            <h2>Projetos</h2>
            <div className="rule"></div>
          </div>

          <div className="tabbar">
            <button
              className={`tabbtn ${activeTab === "sistemas" ? "active" : ""}`}
              onClick={() => setActiveTab("sistemas")}
            >
              Sistemas
            </button>
            <button
              className={`tabbtn ${activeTab === "landing" ? "active" : ""}`}
              onClick={() => setActiveTab("landing")}
            >
              Landing pages
            </button>
          </div>

          {/* SISTEMAS */}
          <div className={`tabpanel ${activeTab === "sistemas" ? "active" : ""}`}>
            <div className="case" data-reveal>
              <div className="case-stamp">Em produção</div>
              <div className="case-media">
                <div className="imgpair">
                  <img src="/portfolio-img/norte-1.jpeg" alt="Norte House Burger — vitrine do cardápio" />
                  <img src="/portfolio-img/norte-2.jpeg" alt="Norte House Burger — painel de gestão" />
                </div>
              </div>
              <div className="case-body">
                <div className="case-tag">Painel de gestão · Hamburgueria</div>
                <h3>Norte House Burger</h3>
                <p>
                  Painel de gestão completo para hamburgueria: calculadora de precificação
                  por ingrediente, vitrine de cardápio com fotos e preços, simulador de
                  pedidos e painel administrativo de vendas. Nasceu de uma planilha de
                  custos e virou sistema real usado no dia a dia do negócio.
                </p>
                <ul className="case-features">
                  <li>Calculadora de custo por ingrediente com margem e preço final automático</li>
                  <li>Vitrine pública do cardápio com fotos, preço e descrição de cada burger</li>
                  <li>Assistente de IA para tirar dúvidas de cliente e sugerir combinações</li>
                  <li>Dashboard de vendas com gráficos de faturamento e itens mais pedidos</li>
                </ul>
                <div className="case-stack">
                  <span className="tag">Next.js 14</span>
                  <span className="tag">Supabase</span>
                  <span className="tag">Groq API</span>
                  <span className="tag">Recharts</span>
                </div>
                <div className="case-links">
                  <a href="#">GitHub →</a>
                  <a href="#">Ver site →</a>
                </div>
              </div>
            </div>

            <div className="case" data-reveal>
              <div className="case-stamp">Landing + agendamento</div>
              <div className="case-media">
                <div className="imgpair">
                  <img src="/portfolio-img/barbeariath-2.jpeg" alt="Barbearia TH — página inicial" />
                  <img src="/portfolio-img/barbeariath-1.jpeg" alt="Barbearia TH — agendamento de horário" />
                </div>
              </div>
              <div className="case-body">
                <div className="case-tag">Landing page + agendamento</div>
                <h3>Barbearia TH</h3>
                <p>
                  Sistema de agendamento para barbearia com landing dark, fluxo de escolha
                  de serviço e horário, e painel administrativo de controle. Responsivo e
                  pensado para conversão local.
                </p>
                <ul className="case-features">
                  <li>Agendamento em 3 passos: serviço, dia e horário disponível</li>
                  <li>Preços exibidos por serviço direto na tela de agendamento</li>
                  <li>Landing dark com identidade visual própria e botão de WhatsApp fixo</li>
                </ul>
                <div className="case-stack">
                  <span className="tag">Next.js</span>
                  <span className="tag">Tailwind CSS</span>
                  <span className="tag">Vercel</span>
                </div>
                <div className="case-links">
                  <a href="https://github.com/kauagoncalves1/barbearia-th">GitHub →</a>
                  <a href="https://barbearia-th.vercel.app">Ver site →</a>
                </div>
              </div>
            </div>

            <div className="case" data-reveal>
              <div className="case-stamp">Landing + chatbot IA</div>
              <div className="case-media">
                <div className="imgpair">
                  <img src="/portfolio-img/renove-1.jpeg" alt="Renove Estética — app mobile" />
                  <img src="/portfolio-img/renove-2.jpeg" alt="Renove Estética — página inicial" />
                </div>
              </div>
              <div className="case-body">
                <div className="case-tag">Landing + chatbot IA</div>
                <h3>Renove Estética</h3>
                <p>
                  Site institucional com chatbot de IA integrado para uma clínica de
                  estética em Ipanema, desenvolvido como estudo full-stack de integração de
                  IA em produtos reais.
                </p>
                <ul className="case-features">
                  <li>Chatbot de IA que responde dúvidas sobre procedimentos e agenda horários</li>
                  <li>Design responsivo, testado direto no app mobile do cliente</li>
                  <li>Seção "Sobre nós" e vitrine de procedimentos oferecidos</li>
                </ul>
                <div className="case-stack">
                  <span className="tag">Next.js</span>
                  <span className="tag">TypeScript</span>
                  <span className="tag">Groq SDK</span>
                </div>
                <div className="case-links">
                  <a href="https://github.com/kauagoncalves1/renove-estetica">GitHub →</a>
                  <a href="https://renove-estetica.vercel.app">Ver site →</a>
                </div>
              </div>
            </div>

            <div className="case no-media" data-reveal>
              <div className="case-body">
                <div className="case-tag">Desafio técnico · b2bflow</div>
                <h3>Integração Supabase + WhatsApp (Z-API)</h3>
                <p>
                  Script em Python que lê contatos direto do Supabase e envia mensagens
                  personalizadas via WhatsApp usando a Z-API — desafio técnico para uma
                  vaga de estágio. No caminho, depurei incompatibilidades de versão de API,
                  políticas de RLS mal configuradas e headers obrigatórios não
                  documentados. Publicado no GitHub sem credenciais expostas.
                </p>
                <ul className="case-features">
                  <li>Leitura de contatos direto do banco Supabase via API autenticada</li>
                  <li>Envio de mensagem personalizada por contato através da Z-API</li>
                  <li>Debug de erros reais: versão de API, RLS mal configurada, headers não documentados</li>
                </ul>
                <div className="case-stack">
                  <span className="tag">Python</span>
                  <span className="tag">Supabase</span>
                  <span className="tag">Z-API</span>
                  <span className="tag">RLS</span>
                </div>
                <div className="case-links">
                  <a href="#">GitHub →</a>
                </div>
              </div>
            </div>

            <div className="case no-media" data-reveal>
              <div className="case-body">
                <div className="case-tag">Automação · n8n</div>
                <h3>Prospecção automática de clientes</h3>
                <p>
                  Workflow em n8n que busca novos leads e dispara mensagens de prospecção
                  automaticamente, sem intervenção manual. Construído para reduzir o tempo
                  gasto em contato frio e manter um funil de novos clientes rodando
                  sozinho.
                </p>
                <ul className="case-features">
                  <li>Busca automática de novos leads seguindo critérios definidos</li>
                  <li>Disparo de mensagem inicial de prospecção sem ação manual</li>
                  <li>Workflow rodando de forma independente, direto no n8n</li>
                </ul>
                <div className="case-stack">
                  <span className="tag">n8n</span>
                  <span className="tag">Automação</span>
                  <span className="tag">WhatsApp</span>
                </div>
              </div>
            </div>
          </div>

          {/* LANDING PAGES */}
          <div className={`tabpanel ${activeTab === "landing" ? "active" : ""}`}>
            <div className="lp-grid">
              <div className="lp-card" data-reveal>
                <div className="lp-media">
                  <img src="/portfolio-img/lp-hamburgueria-1.jpeg" alt="Sua Hamburgueria — página inicial" />
                  <img src="/portfolio-img/lp-hamburgueria-2.jpeg" alt="Sua Hamburgueria — cardápio" />
                </div>
                <div className="lp-label">
                  <h4>Sua Hamburgueria</h4>
                  <span>Landing page</span>
                </div>
              </div>

              <div className="lp-card" data-reveal>
                <div className="lp-media">
                  <img src="/portfolio-img/lp-barbearia-1.jpeg" alt="Sua Barbearia — sobre" />
                  <img src="/portfolio-img/lp-barbearia-2.jpeg" alt="Sua Barbearia — página inicial" />
                </div>
                <div className="lp-label">
                  <h4>Sua Barbearia</h4>
                  <span>Landing page</span>
                </div>
              </div>

              <div className="lp-card" data-reveal>
                <div className="lp-media single">
                  <img src="/portfolio-img/lp-salao-1.jpeg" alt="Seu Salão — página inicial" />
                </div>
                <div className="lp-label">
                  <h4>Seu Salão</h4>
                  <span>Landing page</span>
                </div>
              </div>

              <div className="lp-card" data-reveal>
                <div className="lp-media">
                  <img src="/portfolio-img/lp-restaurante-1.jpeg" alt="Seu Restaurante — página inicial" />
                  <img src="/portfolio-img/lp-restaurante-2.jpeg" alt="Seu Restaurante — sobre" />
                </div>
                <div className="lp-label">
                  <h4>Seu Restaurante</h4>
                  <span>Landing page</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="contato">
        <div className="wrap">
          <div className="contact-box" data-reveal>
            <h2>Vamos construir algo?</h2>
            <p>
              Disponível para projetos freelancer e oportunidades full-stack. Se tem uma
              ideia, um negócio pra automatizar ou um sistema pra construir, me chama.
            </p>
            <div className="contact-actions">
              <a href="mailto:kaua.goncalves0603@gmail.com" className="btn btn-primary">
                Enviar e-mail
              </a>
              <a href="https://wa.me/5521986129519" className="btn btn-ghost">
                WhatsApp
              </a>
              <a href="https://www.linkedin.com/in/kaua-gon%C3%A7alves" className="btn btn-ghost">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <p>© 2026 Kauã Gonçalves — dossiê de projetos</p>
          <div className="foot-links">
            <a href="https://github.com/kauagoncalves1">GitHub</a>
            <a href="https://www.linkedin.com/in/kaua-gon%C3%A7alves">LinkedIn</a>
          </div>
        </div>
      </footer>
    </>
  );
}

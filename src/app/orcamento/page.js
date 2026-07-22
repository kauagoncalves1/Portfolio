"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const WHATSAPP_NUMBER = "5521986129519"; 

const QUOTE_ITEMS = [
  { id: "landing", name: "Landing page simples", desc: "Site institucional de 1 página, responsivo.", price: 600 },
  { id: "multipage", name: "Site multi-página", desc: "Várias páginas (Home, Sobre, Serviços, Contato).", price: 1200 },
  { id: "admin", name: "Painel administrativo", desc: "Login, gestão de conteúdo/pedidos, dashboard.", price: 900 },
  { id: "db", name: "Banco de dados (Supabase)", desc: "Estrutura de dados, autenticação e storage.", price: 500 },
  { id: "ai", name: "Assistente com IA", desc: "Chatbot/assistente integrado (Groq/Llama).", price: 700 },
  { id: "automation", name: "Automação de processos", desc: "Fluxos automáticos (n8n, notificações, relatórios).", price: 550 },
  { id: "analytics", name: "Dashboard de analytics", desc: "Gráficos e métricas do negócio em tempo real.", price: 450 },
  { id: "ecommerce", name: "Loja / pedidos online", desc: "Catálogo, carrinho e simulação de pedidos.", price: 800 },
  { id: "maintenance", name: "Manutenção mensal", desc: "Suporte, ajustes e pequenas melhorias contínuas.", price: 250 },
];

const fmt = (n) => "R$ " + n.toLocaleString("pt-BR");

export default function Orcamento() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState([]);

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

  const toggle = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const chosen = QUOTE_ITEMS.filter((i) => selected.includes(i.id));
  const total = chosen.reduce((sum, i) => sum + i.price, 0);

  const sendQuote = () => {
    if (chosen.length === 0) return;
    let msg = "Olá! Fiz uma simulação de orçamento no seu portfólio e gostaria de conversar sobre o projeto:\n\n";
    chosen.forEach((i) => {
      msg += `• ${i.name} — ${fmt(i.price)}\n`;
    });
    msg += `\nTotal estimado: ${fmt(total)}\n\nPodemos conversar sobre os detalhes?`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <nav>
        <div className="wrap">
          <Link href="/" className="logo">
            kauã<em>.</em>dev
          </Link>
          <ul className={`navlinks ${menuOpen ? "open" : ""}`}>
            <li>
              <Link href="/#sobre" onClick={() => setMenuOpen(false)}>Sobre</Link>
            </li>
            <li>
              <Link href="/#skills" onClick={() => setMenuOpen(false)}>Stack</Link>
            </li>
            <li>
              <Link href="/#projetos" onClick={() => setMenuOpen(false)}>Projetos</Link>
            </li>
            <li>
              <Link href="/orcamento" onClick={() => setMenuOpen(false)} style={{ color: "var(--stamp)" }}>Orçamento</Link>
            </li>
            <li>
              <Link href="/#contato" onClick={() => setMenuOpen(false)}>Contato</Link>
            </li>
          </ul>
          <button className="navtoggle" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>
      </nav>

      <header className="hero" style={{ paddingBottom: "40px" }}>
        <div className="wrap">
          <div className="folio-tag">
            <span className="dot"></span> Simulador de orçamento
          </div>
          <h1 className="title">
            Monte seu <span className="it">orçamento</span>
            <br />
            e me chame no WhatsApp.
          </h1>
          <p className="hero-sub">
            Marque o que seu projeto precisa e veja uma estimativa na hora. É só um
            ponto de partida — no fim você me manda direto pelo WhatsApp e a gente
            ajusta o escopo certinho.
          </p>
        </div>
      </header>

      <section className="section" style={{ paddingTop: "20px" }}>
        <div className="wrap">
          <div className="quote-layout" data-reveal>
            <div className="quote-items">
              {QUOTE_ITEMS.map((item) => {
                const checked = selected.includes(item.id);
                return (
                  <label
                    key={item.id}
                    className={`quote-item ${checked ? "checked" : ""}`}
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggle(item.id)}
                    />
                    <div className="qi-info">
                      <div className="qi-name">{item.name}</div>
                      <div className="qi-desc">{item.desc}</div>
                    </div>
                    <div className="qi-price">{fmt(item.price)}</div>
                  </label>
                );
              })}
            </div>

            <div className="quote-summary">
              <h3>Resumo</h3>
              <p className="qs-hint">
                Valores de referência ajustáveis conforme escopo real
                do projeto.
              </p>
              <div className="qs-list">
                {chosen.length === 0 ? (
                  <div className="qs-empty">Nenhum item selecionado ainda.</div>
                ) : (
                  chosen.map((i) => (
                    <div className="qs-line" key={i.id}>
                      <span>{i.name}</span>
                      <span>{fmt(i.price)}</span>
                    </div>
                  ))
                )}
              </div>
              <div className="qs-total">
                <span className="l">Total estimado</span>
                <span className="v">{fmt(total)}</span>
              </div>
              <p className="qs-note">
                *Estimativa inicial, sem compromisso. O valor final é confirmado após
                conversa sobre o escopo.
              </p>
              <button
                className="qs-send"
                disabled={chosen.length === 0}
                onClick={sendQuote}
              >
                Enviar pelo WhatsApp →
              </button>
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

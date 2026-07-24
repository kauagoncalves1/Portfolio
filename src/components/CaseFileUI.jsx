"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";

const ICON_SLUGS = {
  "Next.js 15": "nextdotjs",
  "Next.js 14": "nextdotjs",
  "Next.js": "nextdotjs",
  "React": "react",
  "TypeScript": "typescript",
  "JavaScript": "javascript",
  "Tailwind CSS": "tailwindcss",
  "Node.js": "nodedotjs",
  "Python": "python",
  "Supabase": "supabase",
  "PostgreSQL & RLS": "postgresql",
  "RLS": "postgresql",
  "Vercel": "vercel",
  "Git / GitHub": "git",
  "Docker (básico)": "docker",
  "n8n": "n8n",
  "Automação": "n8n",
  "Z-API (WhatsApp)": "whatsapp",
  "WhatsApp": "whatsapp",
  "Groq API": "groq",
  "Groq SDK": "groq",
  "Llama 3.3": "meta",
  "Google Gemini": "googlegemini",
  "Clerk": "clerk",
  "Mercado Pago": "mercadopago",
};

export function StackTag({ label }) {
  const slug = ICON_SLUGS[label];
  return (
    <span className="tag">
      {slug && (
        <img
          src={`https://cdn.simpleicons.org/${slug}/1e1912`}
          alt=""
          loading="lazy"
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        />
      )}
      {label}
    </span>
  );
}

export const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export function Lightbox({ src, alt, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {src && (
        <motion.div
          className="lightbox"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button className="lightbox-close" onClick={onClose}>Fechar ✕</button>
          <motion.img
            src={src}
            alt={alt}
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.97, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.getAttribute("data-theme") === "dark");
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch {}
  };

  return (
    <button className="theme-toggle" onClick={toggle} aria-label="Alternar modo escuro">
      {dark ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="4.5" />
          <path d="M12 2v2.5M12 19.5V22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8L6 18M18 6l1.8-1.8" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.5 14.5c-4.7 1.4-9-2.9-7.6-7.6.1-.5-.4-1-.9-.8C8.4 7.6 6.5 10.6 7 14c.6 4 4 7.4 8 8 3.4.5 6.4-1.4 7.9-4.9.2-.6-.3-1-.9-.8-.5.2-1 .3-1.5.2Z" />
        </svg>
      )}
    </button>
  );
}

export function TiltCard({ className, children, onClick }) {
  const ref = useRef(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 220, damping: 22 });
  const sry = useSpring(ry, { stiffness: 220, damping: 22 });

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * 10);
    rx.set(-py * 10);
  };
  const onLeave = () => { rx.set(0); ry.set(0); };

  return (
    <motion.div
      ref={ref}
      className={className}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: srx, rotateY: sry }}
    >
      {children}
    </motion.div>
  );
}

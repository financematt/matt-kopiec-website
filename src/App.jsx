import React from 'react';
import './styles.css';

// ─────────────────────────────────────────────────────────────────
// YOUR LINKS — fill these in before publishing
// ─────────────────────────────────────────────────────────────────
const LINKS = {
  x:         'https://x.com/MattKopiec',
  linkedin:  'https://www.linkedin.com/in/mateuszkopiec/',
  github:    'https://github.com/financematt',
  reddit:    'https://www.reddit.com/user/mattkopiec/',
  instagram: 'https://www.instagram.com/mateuszkopiec/',
  incro:     'https://incro.pl',
  cfostudio: 'https://cfostudio.io',
  book:      '#',   // replace with real URL when ready
  talk:      '#',   // replace with real URL when ready
  article:   '#',   // replace with real URL when ready
};
// ─────────────────────────────────────────────────────────────────


export default function App() {
  return (
    <div className="page">
      <SocialRow />
      <Hero />
      <Badges />
      <ForbesStrip />
      <Ventures />
      <Writing />
      <Footer />
    </div>
  );
}


function SocialRow() {
  const links = [
    { symbol: '𝕏',    label: '@mkopiec',  href: LINKS.x },
    { symbol: 'in',   label: 'linkedin',  href: LINKS.linkedin },
    { symbol: '{ }',  label: 'github',    href: LINKS.github },
    { symbol: 'r/',   label: 'reddit',    href: LINKS.reddit },
    { symbol: '◎',   label: 'instagram', href: LINKS.instagram },
  ];

  return (
    <div className="social-row fade-section" style={{ animationDelay: '0ms' }}>
      {links.map(({ symbol, label, href }) => (
        <a
          key={label}
          href={href}
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {symbol} {label}
        </a>
      ))}
    </div>
  );
}


function Hero() {
  return (
    <div className="hero fade-section" style={{ animationDelay: '80ms' }}>
      <p className="hero-label">// co-founder · cfo · author</p>
      <h1 className="hero-name">Matt Kopiec</h1>
      <p className="hero-role">incro · cfo studio · warsaw</p>
      <p className="hero-bio">
        Building investor-ready finances for tech companies. Co-founder of incro
        and CFO Studio — an AI-powered financial intelligence platform built on
        zero hallucinations.
      </p>
    </div>
  );
}


function Badges() {
  const items = [
    'Forbes 30 Under 30 Poland',
    'SGH Graduate',
    'Warsaw AI Summit',
    '50+ Companies Advised',
  ];

  return (
    <div className="badges fade-section" style={{ animationDelay: '160ms' }}>
      {items.map((item) => (
        <span key={item} className="badge">{item}</span>
      ))}
    </div>
  );
}


function ForbesStrip() {
  return (
    <div className="forbes-strip fade-section" style={{ animationDelay: '240ms' }}>
      <span className="forbes-wordmark">Forbes</span>
      <div className="forbes-body">
        <span className="forbes-main">30 Under 30 Poland</span>
        <span className="forbes-sub">Class of 2023 · Finance &amp; VC</span>
      </div>
    </div>
  );
}


function Ventures() {
  const companies = [
    {
      name: 'incro',
      desc: 'financial consulting · investor-ready finances',
      href: LINKS.incro,
    },
    {
      name: 'CFO Studio',
      desc: 'AI financial analysis · zero hallucinations',
      href: LINKS.cfostudio,
    },
  ];

  return (
    <div className="ventures fade-section" style={{ animationDelay: '320ms' }}>
      <p className="section-label">// ventures</p>
      {companies.map(({ name, desc, href }) => (
        <a
          key={name}
          href={href}
          className="co-row"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <p className="co-name">{name}</p>
            <p className="co-desc">{desc}</p>
          </div>
          <span className="co-arrow">→</span>
        </a>
      ))}
    </div>
  );
}


function Writing() {
  const pieces = [
    {
      title: 'Investment Profitability Assessment',
      meta: 'book · 2023',
      href: LINKS.book,
    },
    {
      title: "AI in Finance — When Getting It Wrong Isn't an Option",
      meta: 'talk · 2025',
      href: LINKS.talk,
    },
    {
      title: 'Zero Based Budgeting for SaaS Companies',
      meta: 'article · 2024',
      href: LINKS.article,
    },
  ];

  return (
    <div className="articles fade-section" style={{ animationDelay: '400ms' }}>
      <p className="section-label">// writing &amp; research</p>
      {pieces.map(({ title, meta, href }) => (
        <a
          key={title}
          href={href}
          className="article-row"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="article-title">{title}</span>
          <span className="article-meta">{meta}</span>
        </a>
      ))}
    </div>
  );
}


function Footer() {
  return (
    <footer className="site-footer fade-section" style={{ animationDelay: '480ms' }}>
      <span className="footer-copy">© 2026 matt kopiec</span>
      <div className="footer-mark">
        <div className="footer-dot" />
      </div>
    </footer>
  );
}

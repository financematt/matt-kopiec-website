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
      <p className="hero-label">// entrepreneur · author · AI for CFO enthusiast</p>
      <h1 className="hero-name">Matt Kopiec</h1>
      <p className="hero-role">incro · cfo studio · warsaw · poland</p>
      <p className="hero-bio">
        I help CFOs implement AI and turn messy companies finances into investor-ready stories.
        Co-founder of incro and CFO Studio — an AI agent for finance. Dad of 1.
      </p>
    </div>
  );
}


function Badges() {
  const items = [
    'Forbes 30 Under 30 Poland',
    'Warsaw School of Economics Graduate',
    'Book author',
    '100+ Companies Advised',
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
        <span className="forbes-sub">2025 Batch</span>
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
      title: '4 most common mistakes in startup finances',
      meta: 'article · 2023',
      href: 'https://www.linkedin.com/pulse/ive-analyzed-over-100-startup-financial-statements-4-most-kopiec-okpif/?trackingId=3eB7%2FZU%2BRKGLvdt%2BSF4yhw%3D%3D',
    },
    {
      title: "My Personal summary of 2025",
      meta: 'article · 2025',
      href: 'https://www.linkedin.com/pulse/my-personal-summary-2025-matt-kopiec-ok6nf/?trackingId=3eB7%2FZU%2BRKGLvdt%2BSF4yhw%3D%3D',
    },
    {
      title: 'Methods and procedures in fixed asset investment assessment',
      meta: 'book · 2023',
      href: 'https://ksiegarnia.difin.pl/metody-i-procedury-w-ocenie-inwestycji-rzeczowych',
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

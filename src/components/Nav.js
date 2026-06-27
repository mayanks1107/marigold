import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.jpeg';
import './Nav.css';

const links = [
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Team', href: '/#team' },
  { label: 'Education & Training', href: '/education-training' },
  { label: 'Reviews', href: '/#reviews' },
  { label: 'What to Expect', href: '/#expect' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/#contact' },
];

export default function Nav({ menuOpen, setMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <Link to="/" className="nav__logo">
        <img src={logo} alt="Marigold Neurocognitive & Mental Health Clinic" className="nav__logo-img" />
      </Link>
      <nav className={`nav__links${menuOpen ? ' nav__links--open' : ''}`}>
        {links.map((l) => (
          <Link key={l.label} to={l.href} className="nav__link" onClick={() => setMenuOpen(false)}>
            {l.label}
          </Link>
        ))}
        <Link to="/#contact" className="nav__cta" onClick={() => setMenuOpen(false)}>
          Book a Consultation
        </Link>
      </nav>
      <button type="button" className="nav__hamburger" onClick={() => setMenuOpen((o) => !o)} aria-label="Toggle menu">
        <span className={`nav__bar${menuOpen ? ' open' : ''}`} />
        <span className={`nav__bar${menuOpen ? ' open' : ''}`} />
        <span className={`nav__bar${menuOpen ? ' open' : ''}`} />
      </button>
    </header>
  );
}

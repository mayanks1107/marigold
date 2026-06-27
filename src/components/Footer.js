import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.jpeg';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <img src={logo} alt="Marigold Neurocognitive & Mental Health Clinic" className="footer__logo" />
          <p className="footer__tagline">Where science meets compassion, and healing blooms.</p>
          <p className="footer__disclaimer">
            Marigold is not a crisis or emergency service. If you are in immediate distress, contact emergency services.
          </p>
        </div>
        <div className="footer__col">
          <p className="footer__col-title">Navigate</p>
          <Link to="/#about">About</Link>
          <Link to="/#services">Services</Link>
          <Link to="/#team">Team</Link>
          <Link to="/education-training">Education &amp; Training</Link>
          <Link to="/#faq">FAQ</Link>
          <Link to="/#contact">Contact</Link>
          <Link to="/policies">Policies</Link>
        </div>
        <div className="footer__col">
          <p className="footer__col-title">Contact</p>
          <a href="tel:+91-9101709654">Call: +91-9101709654</a>
          <a href="https://wa.me/916366850890" target="_blank" rel="noopener noreferrer">WhatsApp: +91 63668 50890</a>
          <a href="https://www.instagram.com/marigoldmentalhealthclinic" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Marigold Neurocognitive &amp; Mental Health Clinic.</p>
        <p>Content is for informational purposes only and does not constitute medical advice.</p>
        <Link to="/policies" className="footer__policies-link">Privacy, Terms &amp; Clinic Policies</Link>
      </div>
    </footer>
  );
}

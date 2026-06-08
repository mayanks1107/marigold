import React, { useState } from 'react';
import { faqs } from '../data/faqs';
import './FAQ.css';

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="faq" id="faq">
      <div className="faq__inner">
        <div className="faq__left">
          <h2 className="faq__title">FAQS</h2>
          <div className="faq__illus" aria-hidden="true">
            <svg viewBox="0 0 120 140" fill="none">
              <ellipse cx="60" cy="75" rx="48" ry="55" fill="#ffb3c1" />
              <path d="M30 45 Q60 20 90 45" stroke="#1a237e" strokeWidth="3" fill="none" />
              <path d="M35 50 Q60 30 85 50" stroke="#3949ab" strokeWidth="2" fill="none" opacity="0.6" />
            </svg>
          </div>
        </div>
        <div className="faq__list">
          {faqs.map((item, i) => (
            <div
              key={item.q}
              className={`faq__item${open === i ? ' faq__item--open' : ''}`}
            >
              <button type="button" className="faq__q" onClick={() => setOpen(open === i ? null : i)}>
                <span className="faq__q-text">{item.q}</span>
                <span className="faq__icon">{open === i ? '−' : '+'}</span>
              </button>
              <div className={`faq__a${open === i ? ' faq__a--visible' : ''}`}>
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

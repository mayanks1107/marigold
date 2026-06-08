import React from 'react';
import backImg from '../back.jpg';
import desoPhoto from './DESO.jpeg';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div
        className="hero__top"
        style={{ backgroundImage: `url(${backImg})` }}
      >
        {/* <div className="hero__brand">
          <p className="hero__clinic-name">MARIGOLD</p>
          <p className="hero__clinic-sub">NEUROCOGNITIVE &amp; MENTAL HEALTH CLINIC</p>
        </div> */}
      </div>

      <div className="hero__bottom">
        <div className="hero__bottom-text">
          <p className="hero__what-label">What is</p>
          <h1 className="hero__what-title">MARIGOLD</h1>
          <p className="hero__tagline">
            Where science meets compassion,
            and healing blooms.
          </p>
          <p className="hero__desc">
            At Marigold Neurocognitive & Mental Health Clinic, we believe that wellbeing is rarely just about the mind, the brain, or the body alone—it's about the whole person

          </p>
                      <p className="hero__desc">
                   
              By bringing together Psychology, Psychiatry, General Medical Care, and Neurocognitive sciences, we've created a space where people can seek support, find clarity, and feel genuinely understood. Whether you're dealing with stress, anxiety, burnout, emotional ups and downs, attention or memory concerns, sleep difficulties, health-related worries, or simply trying to make sense of life's latest plot twist, you don't have to navigate it alone.

            </p>
          <div className="hero__actions">
            <a href="#contact" className="hero__btn hero__btn--primary">Book a session</a>
            <a href="#services" className="hero__btn hero__btn--outline">Our Services</a>
          </div>
        </div>

        
      </div>
    </section>
  );
}

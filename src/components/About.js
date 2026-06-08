import React from 'react';
import './About.css';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__inner">
        <p className="section-eyebrow">Our Philosophy</p>
        <h2 className="section-title">A space where you belong</h2>

        <div className="about__grid">
          <div className="about__text">
            
            <p>             We know that healing isn't always a straight line. Some days look like breakthroughs; other days look like getting out of bed, answering that email, or finally booking the appointment you've been putting off. All of those count.
</p>
            <p>
              Our team of Psychologists, Psychiatrists, Neuropsychologists, Physicians works together to provide compassionate, evidence-based, and personalized care that supports mental, emotional, cognitive, and physical wellbeing. Because behind every symptom, diagnosis, or challenge is a person—not a label.</p>
            <p>Inspired by the marigold flower, a symbol of resilience, warmth, renewal, and quiet strength, our mission is to help people reconnect with balance, hope, and a greater sense of wellbeing, one step at a time.</p>

            
          </div>

          <div className="about__cards">
            <div className="about__card">
              <h3> Who Can Reach Out?</h3>
              <p>
                Short answer? <b>Anyone.</b>
                <br/><br/>
                              <p>You do not need a diagnosis, referral, or crisis to seek support.<br/><br/>
Whether you're feeling stressed, anxious, overwhelmed, burnt out, struggling with relationships, facing academic or workplace challenges, navigating a life transition, concerned about your attention or memory, or simply looking to better understand yourself, we're here to help.</p><br/>
<p>We welcome children, adolescents, adults, older adults, students, professionals, couples, families, caregivers, women, men, LGBTQIA+ individuals, and people from all backgrounds, identities, and life experiences.</p>
<p>No concern is too small, and no one is expected to have everything figured out.
</p>
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import './Expect.css';

const steps = [
  {
    title: 'Reaching Out',
    body: "Taking the first step can feel intimidating—and that's completely normal. When you contact Marigold, we'll guide you through the process, answer your questions, and help connect you with the professional best suited to your needs, whether that's a psychologist, psychiatrist, physician, or a collaborative care team. You don't need a diagnosis, referral, or perfectly organized explanation of what's going on. Showing up is enough.",
  },
  {
    title: 'Your First Session',
    body: "Think of the first session as a conversation, not an exam. We'll take time to understand your experiences, concerns, goals, strengths, and what brings you to seek support. Together, we'll explore the most appropriate next steps for your wellbeing.",
  },
  {
    title: 'Your Care Plan',
    body: 'Because no two people are the same, neither are their care plans. Depending on your needs, support may include counselling, psychotherapy, assessments, psychiatric consultation, medication support, lifestyle guidance, psychoeducation, or wellness strategies tailored to your goals.',
  },
  {
    title: 'A Collaborative Journey',
    body: "Healing isn't always linear, and that's okay. Some days progress looks like a breakthrough. Other days it looks like simply showing up. Both count. You don't need to have all the answers before reaching out. You simply need a place to begin.",
  },
];

export default function Expect() {
  return (
    <section className="expect" id="expect">
      <div className="expect__inner">
        <p className="section-eyebrow">What to Expect</p>
        <h2 className="section-title">Your journey with us</h2>
        <p className="expect__intro">
          At Marigold Neurocognitive & Mental Health Clinic, we believe that seeking support is a meaningful act of self-care. Whether you're looking for counselling, psychological support, psychiatric care, medical guidance, or simply a space to better understand yourself, we're here to help.<br/>
          Our goal isn't to make you dependent on therapy or appointments—it's to help you build the insight, skills, confidence, and resilience to navigate life with greater clarity and wellbeing.

        </p>
        <div className="expect__steps">
          {steps.map((s, i) => (
            <article key={s.title} className="expect__step">
              <span className="expect__num">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import './Contact.css';
import lines from "../assets/decor/green-leaves.png"

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', concern: '', message: '' });
  const [sent, setSent] = useState(false);

  const concerns = [
    'Psychological Consultation',
    'Therapy / Counselling',
    'Assessment',
    'Cognitive Wellness',
    'Academic / Career Support',
    'Family / Relationship',
    'Other / Not Sure',
  ];

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__inner">
        <div className="contact__left">
          <p className="contact__eyebrow">GOT QUESTIONS?</p>
          <h2 className="contact__title">GET IN TOUCH WITH US!</h2>
          <div className="contact__details">
            <p><strong>PHONE</strong><br /><a href="tel:+91-9101709654">+91-9101709654</a></p>
            <p><strong>WHATSAPP</strong><br /><a href="https://wa.me/916366850890" target="_blank" rel="noopener noreferrer">+91 63668 50890</a></p>
            <p><strong>INSTAGRAM</strong><br /><a href="https://www.instagram.com/marigoldmentalhealthclinic" target="_blank" rel="noopener noreferrer">@marigoldmentalhealthclinic</a></p>
          </div>
          <div className="contact__social">
            <a href="https://wa.me/916366850890" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">WA</a>
            <a href="tel:9101709654" aria-label="Call">📞</a>
            <a href="https://www.instagram.com/marigoldmentalhealthclinic" target="_blank" rel="noopener noreferrer" aria-label="Instagram">IG</a>
            <img className="contact-lines" src={lines}/>
          </div>
          
          <p className="contact__crisis">
            Marigold is not a 24/7 crisis service. If you are in immediate danger, contact emergency services.
          </p>
        </div>

        <div className="contact__right">
        
          <div className="contact__illus" aria-hidden="true"></div>
          {sent ? (
            <div className="contact__success">
              <h3>Thank you, {form.name || 'friend'}!</h3>
              <p>Your message has been received. We will be in touch soon.</p>
              <button
                type="button"
                className="contact__reset"
                onClick={() => {
                  setSent(false);
                  setForm({ name: '', email: '', concern: '', message: '' });
                }}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__field">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required />
              </div>
              <div className="contact__field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
              </div>
              <div className="contact__field">
                <label htmlFor="concern">Area of Concern</label>
                <select id="concern" name="concern" value={form.concern} onChange={handleChange} required>
                  <option value="" disabled>Select one</option>
                  {concerns.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div className="contact__field">
                <label htmlFor="message">Message (optional)</label>
                <textarea id="message" name="message" value={form.message} onChange={handleChange} rows={4} />
              </div>
              <button type="submit" className="contact__submit">Send Message</button>
            </form>
          )}
        </div>
        
      </div>
    </section>
  );
}

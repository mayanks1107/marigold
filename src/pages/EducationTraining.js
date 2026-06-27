import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import christLogo from '../components/christ logo.jpg';
import mumbaiLogo from '../components/UniversityOfMumbaiLogo1.png';
import jainLogo from '../components/jain-university-logo.png';
import symbiosisLogo from '../components/symbiosis.png';
import madrasLogo from '../components/madras uni.png';
import calcuttaLogo from '../components/university_calcutta.png';
import nmimsLogo from '../components/nmims.jpg';
import ramaiahLogo from '../components/rammiah.jpg';
import duLogo from '../components/du.jpg';
import bangaloreLogo from '../components/bangalore uni.png';
import ignouLogo from '../components/ignou.jpg';
import mccLogo from '../components/madras christ uni.png';
import wccLogo from '../components/womens christ college.png';
import loretoLogo from '../components/loreto college.png';
import kamalaLogo from '../components/kamala nehru college.jpg';
import dpsLogo from '../components/dps megacity logo.jpeg';
import somaiyaLogo from '../components/somaiya.png';
import sdg3Logo from '../components/sdg3.jpg';
import sdg4Logo from '../components/sdg4.jpg';
import sdg10Logo from '../components/sdg10.png';
import sdg17Logo from '../components/sdg 17.png';
import './EducationTraining.css';

const institutes = [
  { name: 'CHRIST University', logo: christLogo },
  { name: 'University of Mumbai', logo: mumbaiLogo },
  { name: 'Jain University', logo: jainLogo },
  { name: 'Symbiosis International', logo: symbiosisLogo },
  { name: 'University of Madras', logo: madrasLogo },
  { name: 'University of Calcutta', logo: calcuttaLogo },
  { name: 'NMIMS', logo: nmimsLogo },
  { name: 'Ramaiah University', logo: ramaiahLogo },
  { name: 'Delhi University', logo: duLogo },
  { name: 'Bangalore University', logo: bangaloreLogo },
  { name: 'IGNOU', logo: ignouLogo },
  { name: 'Madras Christian College', logo: mccLogo },
  { name: "Women's Christian College, Chennai", logo: wccLogo },
  { name: 'Loreto College, Kolkata', logo: loretoLogo },
  { name: 'Kamala Nehru College, Delhi', logo: kamalaLogo },
  { name: 'DPS Megacity', logo: dpsLogo },
  { name: 'Somaiya Vidyavihar University', logo: somaiyaLogo },
];

const programmes = [
  {
    title: 'For Schools',
    items: [
      'Student mental health and well-being programmes',
      'Emotional resilience and life-skills education',
      'Learning difficulties and cognitive screening',
      'Teacher capacity-building workshops',
      'School mental health awareness initiatives',
      'Parent education programmes',
      'Career and psychological well-being sessions',
      'Stress management during examinations',
      'Bullying prevention and emotional safety programmes',
    ],
  },
  {
    title: 'For Colleges & Universities',
    items: [
      'Mental health awareness campaigns',
      'Neuropsychology and psychology workshops',
      'Research methodology and academic skill development',
      'Clinical skill enhancement programmes',
      'Internship and mentorship opportunities',
      'Faculty development programmes',
      'Career guidance for psychology students',
      'Suicide prevention and psychological first-aid awareness',
      'Student leadership and resilience programmes',
    ],
  },
  {
    title: 'For Healthcare Institutions',
    items: [
      'Neuropsychology training',
      'Multidisciplinary clinical workshops',
      'Cognitive rehabilitation training',
      'Capacity building for healthcare professionals',
      'Continuing professional education',
      'Clinical supervision and consultation',
      'Mental health promotion initiatives',
    ],
  },
  {
    title: 'For Organizations & Corporate Institutions',
    items: [
      'Employee mental health and wellness programmes',
      'Stress management and burnout prevention',
      'Psychological resilience training',
      'Leadership well-being workshops',
      'Workplace mental health awareness',
      'Team-building and emotional intelligence programmes',
    ],
  },
];

const sdgs = [
  {
    title: 'SDG 3 - Good Health & Well-being',
    logo: sdg3Logo,
    featured: true,
    text: 'Advancing mental and cognitive health through comprehensive, evidence-based psychological and neuropsychological services.',
  },
  {
    title: 'SDG 4 - Quality Education',
    logo: sdg4Logo,
    featured: true,
    text: 'Promoting lifelong learning through internships, professional training, mentorship, and continuing education.',
  },
  {
    title: 'SDG 10 - Reduced Inequalities',
    logo: sdg10Logo,
    text: 'Advocating for equitable access to quality mental healthcare and inclusive professional opportunities.',
  },
  {
    title: 'SDG 17 - Partnerships for the Goals',
    logo: sdg17Logo,
    text: 'Strengthening mental healthcare through interdisciplinary collaboration, institutional partnerships, and shared expertise.',
  },
];

function InfoPanel({ title, children }) {
  return (
    <section className="education__panel">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default function EducationTraining() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="education-page">
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main className="education">
        <div className="education__shell">
          <aside className="education__logos" aria-label="Partner institute logos">
            <p className="education__logos-kicker">Institutional Network</p>
            <p>Trusted by Students from Leading Educational Institutions</p>
            <div className="education__logo-grid">
              {institutes.map((institute) => (
                <figure className="education__logo-card" key={institute.name}>
                  <img src={institute.logo} alt={`${institute.name} logo`} />
                  <figcaption>{institute.name}</figcaption>
                </figure>
              ))}
            </div>
          </aside>

          <div className="education__content">
            <Link to="/" className="education__back">Back to Home</Link>
            <p className="section-eyebrow">Education &amp; Training</p>
            <h1 className="section-title">Advancing Mental Health, Education, and Sustainable Impact</h1>
            <p className="education__intro">
              Guided by the principles of health, education, equity, and community impact reflected in the
              United Nations Sustainable Development Goals.
            </p>

            <InfoPanel title="Supporting the United Nations Sustainable Development Goals">
              <p>
                Our work reflects the values and aspirations of the United Nations Sustainable Development
                Goals by contributing to mental health, lifelong learning, equity, and institutional
                collaboration.
              </p>
              <div className="education__sdg-grid">
                {sdgs.map((sdg) => (
                  <article className={`education__sdg${sdg.featured ? ' education__sdg--featured' : ''}`} key={sdg.title}>
                    <img src={sdg.logo} alt={`${sdg.title} logo`} />
                    <div>
                      <h3>{sdg.title}</h3>
                      <p>{sdg.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </InfoPanel>

            <InfoPanel title="Professional Education & Capacity Building">
              <p>
                Marigold is committed to shaping the future of mental healthcare through high-quality
                education and professional development. We offer personalised training, internships,
                workshops, seminars, mentorship, and advanced skill-development programmes in
                Neuropsychology, Psychology, Cognitive Rehabilitation, and Mental Health.
              </p>
              <p>
                Working alongside schools, colleges, universities, healthcare institutions, and professional
                organisations, we design tailored educational initiatives that cultivate clinical competence,
                critical thinking, and evidence-based practice.
              </p>
            </InfoPanel>

            <InfoPanel title="Institutional Partnerships">
              <p>
                We believe meaningful progress is achieved through collaboration. Marigold partners with
                educational institutions, healthcare organisations, research centres, NGOs, and corporate
                bodies to develop impactful mental health and educational initiatives.
              </p>
              <p>We provide customised programmes including:</p>
              <div className="education__programme-grid">
                {programmes.map((programme) => (
                  <article className="education__programme" key={programme.title}>
                    <h3>{programme.title}</h3>
                    <ul>
                      {programme.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
              <p>
                Each programme is thoughtfully designed to meet the unique needs of the institution while
                fostering healthier learning and working environments.
              </p>
            </InfoPanel>

            <InfoPanel title="Expert-Led Excellence">
              <p>
                Our services are delivered by a distinguished multidisciplinary team of consultants and
                mental health professionals with expertise spanning Neuropsychology, Clinical Psychology,
                Psychiatry, Psychotherapy, Cognitive Rehabilitation, and Behavioural Sciences.
              </p>
              <p>
                Under the leadership and academic guidance of our Founder - Deso Barman, PhD - Clinical
                Neuropsychologist, our team is committed to delivering scientifically informed,
                compassionate, and person-centred care while fostering excellence in education, professional
                training, and collaborative practice.
              </p>
            </InfoPanel>

            <InfoPanel title="Our Vision">
              <p>
                We envision a future in which mental health and cognitive well-being are recognised as
                fundamental to human flourishing, educational excellence, and sustainable societal
                development. Through innovation, collaboration, and unwavering commitment to professional
                excellence, we aspire to advance healthier minds, stronger institutions, and more resilient
                communities.
              </p>
            </InfoPanel>

            <InfoPanel title="Connect With Us">
              <p>
                We welcome opportunities to collaborate with schools, colleges, universities, healthcare
                institutions, organisations, and community partners. Whether through academic partnerships,
                professional training, institutional consultancy, workshops, or mental health initiatives,
                we look forward to creating meaningful impact together.
              </p>
              <Link to="/#contact" className="education__cta">Start a Collaboration</Link>
            </InfoPanel>

            <section className="education__disclaimer" aria-label="SDG disclaimer">
              <h2>Disclaimer</h2>
              <p>
                Marigold Neurocognitive &amp; Mental Health Clinic aligns its work with the principles and
                aspirations of the United Nations Sustainable Development Goals (SDGs). This alignment
                reflects our commitment to advancing health, education, equity, and community well-being
                and does not imply endorsement, accreditation, certification, sponsorship, or formal
                affiliation with the United Nations or any of its agencies.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

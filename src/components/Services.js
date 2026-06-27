import React, { useState } from 'react';
import './Services.css';
import flower from '../assets/decor/lavender-taped.png';
const categories = [
  {
    title: 'Psychology & Neurocognitive Services',
    items: [
      'Initial Psychological Consultation',
      'Mental Health Consultation',
      'Neurocognitive Consultation',
      'Second Opinion Consultation',
      'Psychological Assessment',
      'Personality Assessment',
      'Counselling Assessment',
      'Psychoeducational Assessment',
      'Academic & Learning Assessment',
      'Attention & Executive Function Assessment',
      'Career & Vocational Assessment',
      'Cognitive Wellness & Memory Screening',
      'Individual Counselling',
      'Cognitive Behaviour Therapy (CBT)',
      'Acceptance & Commitment Therapy (ACT)',
      'Solution-Focused Brief Therapy (SFBT)',
      'Mindfulness-Based Interventions',
      'Supportive Counselling',
      'Stress and Burnout',
      'Anxiety and Excessive Worry',
      'Panic and Fear-Related Concerns',
      'Obsessive Thoughts and Compulsive Behaviours',
      'Low Mood and Emotional Distress',
      'Adjustment and Life Transition Difficulties',
      'Self-Esteem and Confidence Concerns',
      'Emotional Regulation Difficulties',
      'Academic and Workplace Stress',
      'Relationship and Interpersonal Difficulties',
      'Grief, Loss, and Bereavement',
      'Personal Growth and Self-Development',
    ],
  },
  {
    title: 'Psychiatric Services',
    items: [
      'Comprehensive Psychiatric Evaluation',
      'Diagnostic Assessment and Treatment Planning',
      'Medication Management and Follow-Up',
      'Psychiatric Second Opinion Consultation',
      'Anxiety Disorders',
      'Panic Disorder',
      'Obsessive-Compulsive Disorder (OCD)',
      'Trauma and Stress-Related Difficulties',
      'Depression and Mood Difficulties',
      'Sleep-Related Concerns',
      'Adjustment Difficulties',
      'Integrated Care with Psychologists and Physicians',
      'Family Psychoeducation and Treatment Planning',
    ],
  },
  {
    title: 'General Physician & Wellness Services',
    items: [
      'General Health Consultation',
      'Preventive Health Consultation',
      'Lifestyle Medicine Consultation',
      "Men's Health Consultation",
      "Women's Health Consultation",
      'Sleep Health Consultation',
      'Nutrition and Wellness Guidance',
      'Screening for Physical Health Conditions Affecting Mental Wellbeing',
      'Stress and Burnout Screening',
      'Fatigue and Wellness Assessment',
      'Health Education and Preventive Care Guidance',
    ],
  },
  {
    title: 'Academic, Career & Professional Support',
    items: [
      'Academic Stress Management',
      'Study Skills and Learning Strategies',
      'Executive Function Coaching',
      'Career Guidance and Counselling',
      'Career Exploration and Decision-Making Support',
      'Professional Development Consultation',
    ],
  },
  {
    title: 'Family & Relationship Services',
    items: [
      'Relationship Counselling',
      'Premarital Counselling',
      'Family Consultation',
      'Parent Guidance',
      'Caregiver Support',
    ],
  },
  {
    title: 'Psychoeducation & Wellbeing Programs',
    items: [
      'Mental Health Psychoeducation',
      'Emotional Resilience Building',
      'Stress Management Skills',
      'Wellbeing and Lifestyle Support',
      'Mental Health Workshops',
      'School & College Wellbeing Programs',
      'Corporate Mental Health & Wellbeing Programs',
      'Awareness and Capacity-Building Sessions',
    ],
  },
];

export default function Services() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="services" id="services">
      <div className="services__inner">
        <h2 className="section-title">Our Services</h2>
            <img className = "service-flower"src = {flower}/>
        <div className="services__layout">
        
          <div className="services__nav">
            {categories.map((cat, i) => (
              <button
                key={cat.title}
                type="button"
                className={`services__nav-btn${openIdx === i ? ' services__nav-btn--active' : ''}`}
                onClick={() => setOpenIdx(i)}
              >
                {cat.title}
              </button>
            ))}
          </div>
          <div className="services__panel">
            <h3>{categories[openIdx].title}</h3>
            <ul>
              {categories[openIdx].items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { founder, teamIntro, teamMembers } from '../data/team';
import driedFlowers from '../assets/decor/dried-flowers.png';
import moonFlowers from '../assets/decor/moon-flowers.png';
import teamGif from '../assets/decor/teams.gif';
import './Team.css';
import dot from "../assets/decor/blobs.png"
import lines from "../components/lines.png"
import tapes from '../assets/decor/pink-blooms.png'
function getInitials(name) {
  return name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

function MemberAvatar({ member }) {
  return (
    <div className="team-card__avatar">
      {member.photo ? (
        <img
          src={member.photo}
          alt={member.name}
          className={`team-card__avatar-img${member.imageClass ? ` ${member.imageClass}` : ''}`}
        />
      ) : (
        getInitials(member.name)
      )}
    </div>
  );
}

function DetailBlock({ title, items }) {
  return (
    <div className="team-card__block">
      <h4>{title}</h4>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function PsychotherapyBlock({ member }) {
  return (
    <div className="team-card__block">
      <h4>Psychotherapy & Emotional Wellbeing</h4>
      {member.psychotherapyIntro &&
        member.psychotherapyIntro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      {member.psychotherapyLead && (
        <p>
          <strong>{member.psychotherapyLead}</strong>
        </p>
      )}
      <ul>
        {member.psychotherapyInterests.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function MemberDetails({ member }) {
  return (
    <div className="team-card__body">
      {member.subtitle && <p className="team-card__subtitle">{member.subtitle}</p>}
      {member.registration && <p className="team-card__registration">{member.registration}</p>}
      {member.intro && <p>{member.intro}</p>}
      {(member.paragraphs || [member.bio]).map((p, i) => (
        <p key={i}>{p}</p>
      ))}

      {member.psychotherapyInterests && (
        <PsychotherapyBlock member={member} />
      )}
      {member.neuroInterests && (
        <DetailBlock title="Neuropsychology & Cognitive Wellbeing" items={member.neuroInterests} />
      )}
      {member.areas && <DetailBlock title={member.areasTitle || 'Areas of Interest'} items={member.areas} />}
      {member.approaches && <DetailBlock title={member.approachesTitle || 'Therapeutic Approach'} items={member.approaches} />}
      {member.services && <DetailBlock title="Clinical Services" items={member.services} />}
      {member.education && (
        <div className="team-card__block">
          <h4>Education</h4>
          {member.education.map((e) => (
            <p key={e.degree}>
              <strong>{e.degree}</strong>
              {e.school ? ` - ${e.school}` : ''}
            </p>
          ))}
        </div>
      )}
      {member.certifications && <DetailBlock title="Training & Certifications" items={member.certifications} />}
      {member.additionalTraining && <DetailBlock title="Additional Training" items={member.additionalTraining} />}
      {member.clinicalTraining && <DetailBlock title="Clinical Training" items={member.clinicalTraining} />}
      <div className="team-card__footer-meta">
        {member.languages && (
          <p>
            <strong>Languages:</strong> {member.languages.join(' / ')}
          </p>
        )}
        {member.ageGroups && (
          <p>
            <strong>Age groups:</strong> {member.ageGroups}
          </p>
        )}
        <br/>
        {!member.role?.toLowerCase().includes('clinic coordinator') && (
          <p>To schedule an appointment with {member.name}, please contact our team.</p>
        )}
      </div>
    </div>
  );
}

function FounderCard({ member }) {
  return (
    <article className="team-card team-card--open team-card--featured team-founder">
      <div className="team-founder__content">
        <div className="team-founder__intro">
          <p className="team-founder__eyebrow">Founder</p>
          <h3>{member.name}</h3>
          <p className="team-card__pronouns">{member.pronouns}</p>
          <p className="team-card__role">{member.role}</p>
          
        </div>

        <MemberDetails member={member} />
        {/* <p  className="team-card__fees">{member.fees} per session</p> */}
      </div>
      <div className="team-founder__photo">
        <div className="team-card__meta">
          <MemberAvatar member={member} />
          
        </div>
        
      </div>
    </article>
  );
}

function MemberCard({ member, onOpen }) {
  return (
    <article className="team-card">
      <div className="team-card__head">
        <MemberAvatar member={member} />
        <div className="team-card__meta">
          <h3>{member.name}</h3>
          <p className="team-card__pronouns">{member.pronouns}</p>
          <p className="team-card__role">{member.role}</p>
          {member.subtitle && <p className="team-card__card-subtitle">{member.subtitle}</p>}
          {member.fees && <p className="team-card__fees">{member.fees}</p>}
        </div>
        <button
          type="button"
          className="team-card__toggle"
          onClick={() => onOpen(member)}
          aria-label={`View ${member.name}'s profile`}
        >
          +
        </button>
      </div>
    </article>
  );
}

function MemberModal({ member, onClose }) {
  useEffect(() => {
    if (!member) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.body.classList.add('team-modal-open');
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('team-modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [member, onClose]);

  if (!member) return null;

  return createPortal(
    <div className="team-modal" role="dialog" aria-modal="true" aria-labelledby="team-modal-title">
      <button type="button" className="team-modal__backdrop" onClick={onClose} aria-label="Close profile" />
      <article className="team-modal__panel">
        <div className="team-modal__header">
          <MemberAvatar member={member} />
          <div className="team-card__meta">
            <h3 id="team-modal-title">{member.name}</h3>
            <p className="team-card__pronouns">{member.pronouns}</p>
            <p className="team-card__role">{member.role}</p>
            {member.subtitle && <p className="team-card__card-subtitle">{member.subtitle}</p>}
            {member.fees && <p className="team-card__fees">{member.fees}</p>}
          </div>
          <button type="button" className="team-modal__close" onClick={onClose} aria-label="Close profile">
            x
          </button>
        </div>
        <MemberDetails member={member} />
      </article>
    </div>,
    document.body
  );
}

function MemberGroup({ title, members, onOpen }) {
  if (!members.length) return null;

  return (
    <>
      <h3 className="team__grid-title">{title}</h3>
      <div className="team__grid">
        {members.map((m) => (
          <MemberCard key={m.name} member={m} onOpen={onOpen} />
        ))}
      </div>
    </>
  );
}

const accessProgramGroups = [
  {
    title: 'Priority Consideration',
    items: [
      'Individuals affected by conflict, displacement, or humanitarian crises, including those impacted by the situation in Manipur',
      'Individuals from underserved or remote communities, including parts of Northeast India, Ladakh, and North Bengal',
      'Students, research scholars, and fresh graduates',
      'Unemployed individuals',
      'Low-income households',
      'Persons with disabilities facing financial hardship',
    ],
  },
  {
    title: 'Additional Consideration',
    items: [
      'Early-career professionals with modest incomes',
      'Single parents and primary caregivers',
      'Individuals facing significant medical or caregiving expenses',
      'Individuals requiring long-term therapy',
    ],
  },
  {
    title: 'Case-by-Case Consideration',
    items: [
      'LGBTQIA+ individuals facing financial exclusion',
      'Survivors of abuse or domestic violence',
      'Caregivers of persons with severe illness, disability, dementia, or neurological conditions',
    ],
  },
];

function AccessProgram() {
  return (
    <section className="team-access" aria-labelledby="team-access-title">
      <div className="team-access__intro">
        <p className="team-access__eyebrow">Sliding Scale Support</p>
        <h3 id="team-access-title">Marigold Access Program</h3>
        <p>
          A limited number of reduced-fee appointments are available for individuals facing financial or
          access barriers to mental healthcare.
        </p>
      </div>
      <div className="team-access__grid">
        {accessProgramGroups.map((group) => (
          <div className="team-access__group" key={group.title}>
            <h4>{group.title}</h4>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="team-access__note">
        Sliding-scale appointments are limited and allocated confidentially based on financial
        circumstances, access barriers, and availability. 🌼
      </p>
    </section>
  );
}

function isCoordinator(member) {
  return member.role.toLowerCase().includes('clinic coordinator');
}

const teamGroups = [
    {
    title: 'Psychiatrists',
    names: ['Dr. Shivam Tyagi', 'Dr. Shubhankar Mondal'],
  },
  // {
  //   title: 'Clinical Psychologists & Rehabilitation Counselor',
  //   names: [
  //      'Heather Subba',
  //      'Dr. Shenu Salestin Richa',
  //     'Bijaya Thokchom',
  //     'Victoria Lanu Aimol',
  //     'Newton Nepram',
  //     'Adricia Mukhim',
  //     'Pooja Basumatary',
     
      
  //   ],
  // },
  {
    title: 'Consultant Psychologists',
    names: [
      'Dr. Phibawan Syiemlieh',
      'Adale Chewang',
      'Suzanne Singh',
      'Mercy Lalhmangaihi',
      'Aishwarya G',
      'Neaha Dkhar',
      'Zoha Ahmed',
      'Naazneen',
      // 'Samina Ahmed',
    ],
  },
  {
    title: 'Physicians',
    names: ['Dr. Rakhi Singha', 'Dr. Prathamesh K. Joshi', 'Dr. Landjeet Karam'],
  },

];

function getMembersByName(names) {
  return names
    .map((name) => teamMembers.find((member) => member.name === name))
    .filter(Boolean);
}

export default function Team() {
  const [selectedMember, setSelectedMember] = useState(null);
  const coordinators = teamMembers.filter(isCoordinator);

  return (
    <section className="team" id="team">
      <div className="team__inner">
        <div className="team__header">
          <div className="team__header-text">
            <p className="section-eyebrow section-eyebrow--light">Our Founder & Team</p>
            <h2 className="section-title section-title--light">People behind your care</h2>
          </div>
          <div className="team__decor" aria-hidden="true">
            <img className="team__decor-sticker team__decor-sticker--lines" src={lines} alt="" />
            <img className="team__decor-sticker team__decor-sticker--dried" src={driedFlowers} alt="" />
            <img className="three-dot-team" src = {dot}/>
            {/* <img className="team__decor-sticker team__decor-sticker--moon" src={moonFlowers} alt="" /> */}


          </div>
        </div>

        <div className="team__founder-wrap">
          <FounderCard member={founder} />
        </div>

        <div className="team__intro-row">
          <div className="team__intro">
            <h3 className="team__intro-title">Our Team</h3>
            {teamIntro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

        </div>
        {teamGroups.map((group) => (
          <MemberGroup
            key={group.title}
            title={group.title}
            members={getMembersByName(group.names)}
            onOpen={setSelectedMember}
          />
        ))}
        <MemberGroup title="Clinic Coordinator" members={coordinators} onOpen={setSelectedMember} />
        <AccessProgram />
        <MemberModal member={selectedMember} onClose={() => setSelectedMember(null)} />
        <img className='pink-bloom' src={tapes}/>
      </div>
    </section>
  );
}

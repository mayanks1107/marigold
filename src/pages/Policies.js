import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import './Policies.css';

function PolicySection({ id, title, subtitle, children }) {
  return (
    <section className="policies__section" id={id}>
      <h2 className="policies__section-title">{title}</h2>
      {subtitle && <p className="policies__section-subtitle">{subtitle}</p>}
      <div className="policies__section-body">{children}</div>
    </section>
  );
}

function PolicyBlock({ title, children }) {
  return (
    <div className="policies__block">
      {title && <h3>{title}</h3>}
      {children}
    </div>
  );
}

export default function Policies() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="policies-page">
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main className="policies">
        <div className="policies__inner">
          <Link to="/" className="policies__back">← Back to Home</Link>
          <p className="section-eyebrow">Legal &amp; Clinical Information</p>
          <h1 className="section-title">Clinic Policies</h1>
          <p className="policies__intro">
            Please review the following policies that govern care, privacy, appointments, and emergency
            information at Marigold Neurocognitive &amp; Mental Health Clinic.
          </p>

          <nav className="policies__toc" aria-label="Policy sections">
            <a href="#udyam">UDYAM Registration</a>
            <a href="#privacy">Privacy &amp; Confidentiality</a>
            <a href="#terms">Terms &amp; Conditions</a>
            <a href="#cancellation">Cancellation &amp; Refunds</a>
            <a href="#emergency">Emergency Information</a>
          </nav>

          <PolicySection
            id="udyam"
            title="Government-Recognized UDYAM Registered Enterprise"
            subtitle="UDYAM Registration Number: UDYAM-AS-05-0076505"
          >
            <PolicyBlock title="Registration Information">
              <p>
                Marigold Neurocognitive &amp; Mental Health Clinic is officially registered under the
                UDYAM (MSME) framework of the Ministry of Micro, Small and Medium Enterprises,
                Government of India.
              </p>
              <p>
                Registered on 04 June 2026, Marigold is recognized as a Micro Enterprise operating
                within the Human Health Services sector under the National Industrial Classification
                (NIC) framework.
              </p>
            </PolicyBlock>

            <PolicyBlock title="Who We Are">
              <p>
                Marigold Neurocognitive &amp; Mental Health Clinic is a multidisciplinary mental health
                organization dedicated to promoting psychological wellbeing, cognitive health,
                neurorehabilitation, and emotional resilience across the lifespan.
              </p>
              <p>
                We strive to make quality mental health and neurocognitive services accessible,
                evidence-informed, culturally responsive, and person-centred.
              </p>
            </PolicyBlock>

            <PolicyBlock title="What We Do">
              <p>Our services may include:</p>
              <ul>
                <li>Psychological counselling and psychotherapy</li>
                <li>Neuropsychological consultation and cognitive wellbeing support</li>
                <li>Cognitive rehabilitation and executive function interventions</li>
                <li>Mental health support for children, adolescents, adults, and older adults</li>
                <li>Caregiver guidance and psychoeducation</li>
                <li>Psychological assessments and screenings, where appropriate and within professional scope</li>
                <li>Emotional wellbeing and resilience-building programmes</li>
                <li>School, university, and workplace mental health initiatives</li>
                <li>Professional consultation, training, and mental health awareness programmes</li>
                <li>Collaborative care and referral-based support with healthcare professionals and institutions</li>
              </ul>
            </PolicyBlock>

            <PolicyBlock title="What Our UDYAM Registration Means">
              <p>
                UDYAM Registration is the Government of India&apos;s official registration system for
                Micro, Small and Medium Enterprises (MSMEs). This registration confirms that Marigold
                operates through a formally recognized and government-registered organizational
                structure.
              </p>
              <p>It reflects our commitment to:</p>
              <ul>
                <li>Professionalism and accountability</li>
                <li>Transparent organizational practices</li>
                <li>Responsible governance and administration</li>
                <li>Sustainable and ethical service delivery</li>
                <li>Building a trusted mental health and neurocognitive care organization</li>
              </ul>
            </PolicyBlock>

            <PolicyBlock title="Our Commitment">
              <p>
                At Marigold Neurocognitive &amp; Mental Health Clinic, we believe that effective care
                extends beyond clinical services. It requires trust, integrity, professionalism, and a
                commitment to serving individuals, families, educational institutions, healthcare
                providers, and communities with compassion and excellence.
              </p>
              <p>
                As a Government-recognized UDYAM-registered enterprise, we remain dedicated to advancing
                mental health, cognitive wellbeing, and psychological support through ethical,
                evidence-informed, and person-centred practice.
              </p>
              <p>
                Please note that UDYAM Registration is a business registration issued by the Government
                of India and does not constitute clinical accreditation, professional licensure, or
                endorsement of specific healthcare services. Professional services are delivered by
                appropriately qualified practitioners in accordance with their respective professional
                qualifications, registrations, and ethical responsibilities.
              </p>
            </PolicyBlock>
          </PolicySection>

          <PolicySection
            id="privacy"
            title="Privacy & Confidentiality Policy"
            subtitle="Marigold Neurocognitive & Mental Health Clinic · Last Updated: 01-06-26"
          >
            <PolicyBlock title="Our Commitment">
              <p>
                At Marigold Neurocognitive &amp; Mental Health Clinic, we recognize that privacy, dignity,
                confidentiality, and trust are fundamental to effective healthcare. We are committed to
                protecting the personal, medical, psychological, and sensitive information entrusted to us
                by our clients.
              </p>
              <p>
                Our clinic strives to provide care that is respectful, culturally sensitive, inclusive,
                trauma-informed, and responsive to the diverse backgrounds, identities, languages, beliefs,
                abilities, and life experiences of the individuals we serve.
              </p>
              <p>
                This Privacy &amp; Confidentiality Policy explains how we collect, use, store, protect, and
                disclose information in connection with our psychological, psychiatric, medical,
                neurocognitive, educational, and wellness services.
              </p>
            </PolicyBlock>

            <PolicyBlock title="1. Information We Collect">
              <p>We may collect information necessary for providing safe, ethical, and effective care, including:</p>
              <h4>Personal Information</h4>
              <ul>
                <li>Name</li>
                <li>Age and date of birth</li>
                <li>Gender identity (where relevant)</li>
                <li>Contact information</li>
                <li>Emergency contact information</li>
                <li>Location information necessary for service provision</li>
              </ul>
              <h4>Health Information</h4>
              <ul>
                <li>Medical history</li>
                <li>Mental health history</li>
                <li>Psychological information</li>
                <li>Medication information</li>
                <li>Consultation records</li>
                <li>Assessment results</li>
                <li>Referral information</li>
                <li>Treatment plans</li>
              </ul>
              <h4>Administrative Information</h4>
              <ul>
                <li>Appointment records</li>
                <li>Billing and payment information</li>
                <li>Communication records</li>
                <li>Consent forms</li>
                <li>Service-related documentation</li>
              </ul>
              <p>
                We collect only information that is reasonably necessary for providing care, maintaining
                records, meeting legal obligations, and improving service delivery.
              </p>
            </PolicyBlock>

            <PolicyBlock title="2. How We Use Your Information">
              <p>Your information may be used to:</p>
              <ul>
                <li>Provide psychological, psychiatric, medical, and wellness services</li>
                <li>Conduct assessments and evaluations</li>
                <li>Develop treatment and support plans</li>
                <li>Coordinate care among authorized professionals within the clinic</li>
                <li>Schedule and manage appointments</li>
                <li>Process payments</li>
                <li>Maintain clinical records</li>
                <li>Respond to inquiries</li>
                <li>Comply with legal, regulatory, and professional obligations</li>
                <li>Improve service quality and client experience</li>
              </ul>
              <p>We do not sell personal information to third parties.</p>
            </PolicyBlock>

            <PolicyBlock title="3. Confidentiality">
              <p>
                Information shared during consultations is treated as confidential and is protected in
                accordance with professional ethical standards and applicable laws.
              </p>
              <p>
                Our clinicians maintain strict confidentiality regarding information disclosed during
                appointments, assessments, and communications.
              </p>
              <p>
                Confidential information will not be shared with family members, employers, educational
                institutions, insurance providers, or other third parties without your consent unless an
                exception applies.
              </p>
            </PolicyBlock>

            <PolicyBlock title="4. Limits of Confidentiality">
              <p>
                While confidentiality is a core principle of care, there are circumstances where disclosure
                may be required or permitted by law, professional ethics, or safety considerations.
              </p>
              <p>Information may be disclosed when:</p>
              <h4>Risk of Harm</h4>
              <p>
                There is reason to believe that an individual may present a serious and imminent risk of
                harm to themselves or another person.
              </p>
              <h4>Abuse or Neglect</h4>
              <p>
                Disclosure is required by law regarding suspected abuse, neglect, exploitation, or harm
                involving children, vulnerable individuals, or other protected persons.
              </p>
              <h4>Legal Requirements</h4>
              <p>
                Disclosure is required by a court order, legal process, regulatory authority, or applicable
                law.
              </p>
              <h4>Medical Emergencies</h4>
              <p>
                Information is necessary to protect the health, safety, or welfare of the client or another
                individual during an emergency.
              </p>
              <h4>Professional Consultation</h4>
              <p>
                Clinicians may seek confidential professional consultation or supervision for clinical
                purposes. Identifying information is minimized whenever reasonably possible.
              </p>
            </PolicyBlock>

            <PolicyBlock title="5. Collaborative Care">
              <p>
                Marigold operates through a multidisciplinary model that may include psychologists,
                psychiatrists, physicians, and other authorized healthcare professionals.
              </p>
              <p>
                Where appropriate and necessary for your care, relevant information may be shared among
                authorized members of your treatment team.
              </p>
              <p>
                Such sharing occurs solely for clinical purposes and remains subject to confidentiality
                obligations.
              </p>
            </PolicyBlock>

            <PolicyBlock title="6. Telehealth and Online Services">
              <p>
                Marigold currently provides services through online platforms and teleconsultation
                technologies.
              </p>
              <p>
                While reasonable measures are taken to ensure privacy and security, electronic
                communication may involve risks beyond the clinic&apos;s control.
              </p>
              <p>Clients are encouraged to:</p>
              <ul>
                <li>Attend sessions from a private location</li>
                <li>Use secure internet connections</li>
                <li>Protect passwords and personal devices</li>
                <li>Avoid public or shared networks when possible</li>
              </ul>
              <p>
                Unless explicitly agreed upon in writing, sessions may not be recorded by either the
                clinician or client.
              </p>
            </PolicyBlock>

            <PolicyBlock title="7. Data Security">
              <p>
                We take reasonable administrative, technical, and organizational measures to protect
                personal information from unauthorized access, loss, misuse, alteration, disclosure, or
                destruction.
              </p>
              <p>Security measures may include:</p>
              <ul>
                <li>Password-protected systems</li>
                <li>Restricted access controls</li>
                <li>Secure storage practices</li>
                <li>Encrypted communication where reasonably available</li>
                <li>Confidentiality obligations for staff and consultants</li>
              </ul>
              <p>
                No electronic system can guarantee absolute security. However, we strive to maintain
                appropriate safeguards consistent with professional standards.
              </p>
            </PolicyBlock>

            <PolicyBlock title="8. Record Retention">
              <p>
                Clinical and administrative records may be retained for periods required by applicable
                laws, professional standards, insurance requirements, and legitimate healthcare purposes.
              </p>
              <p>
                Records may be securely archived or destroyed when retention is no longer required.
              </p>
            </PolicyBlock>

            <PolicyBlock title="9. Client Rights">
              <p>
                Subject to applicable laws and professional obligations, clients may have the right to:
              </p>
              <ul>
                <li>Request access to their information</li>
                <li>Request correction of inaccurate information</li>
                <li>Request clarification regarding records</li>
                <li>Withdraw consent for certain disclosures</li>
                <li>Ask questions regarding privacy practices</li>
                <li>Lodge concerns regarding privacy or confidentiality</li>
              </ul>
              <p>
                Certain requests may be limited where disclosure could create significant risk, violate
                legal obligations, or interfere with professional responsibilities.
              </p>
            </PolicyBlock>

            <PolicyBlock title="10. Diversity, Inclusion, and Cultural Respect">
              <p>Marigold is committed to providing care that is respectful of:</p>
              <ul>
                <li>Cultural diversity</li>
                <li>Linguistic diversity</li>
                <li>Religious and spiritual beliefs</li>
                <li>Disability and accessibility needs</li>
                <li>Gender diversity</li>
                <li>Sexual orientation</li>
                <li>Neurodiversity</li>
                <li>Family structures and relationship diversity</li>
                <li>Socioeconomic backgrounds</li>
              </ul>
              <p>
                Personal information related to identity, culture, beliefs, or lived experiences is collected
                only when relevant to care and is treated with the same standards of confidentiality and
                respect as all other information.
              </p>
            </PolicyBlock>

            <PolicyBlock title="11. Website Privacy">
              <p>
                Our website may collect limited technical information such as browser type, device
                information, website usage statistics, and cookies for functionality and service
                improvement.
              </p>
              <p>
                Website data is used for operational purposes and is not sold to third parties.
              </p>
              <p>
                Users may disable cookies through browser settings, though some website features may be
                affected.
              </p>
            </PolicyBlock>

            <PolicyBlock title="12. Policy Updates">
              <p>
                This Privacy &amp; Confidentiality Policy may be updated periodically to reflect changes in
                professional standards, technology, legal requirements, or clinic practices.
              </p>
              <p>Updated versions will be made available through the clinic website.</p>
            </PolicyBlock>
          </PolicySection>

          <PolicySection
            id="terms"
            title="Terms & Conditions"
            subtitle="Marigold Neurocognitive & Mental Health Clinic · Effective Date: 01-06-26"
          >
            <p className="policies__lead">
              Please read these Terms &amp; Conditions carefully before using the services of Marigold
              Neurocognitive &amp; Mental Health Clinic. By accessing our website, booking an appointment,
              or engaging with our services, you acknowledge that you have read, understood, and agreed to
              these Terms &amp; Conditions.
            </p>

            <PolicyBlock title="1. About Our Services">
              <p>
                Marigold Neurocognitive &amp; Mental Health Clinic provides professional services including,
                but not limited to:
              </p>
              <ul>
                <li>Psychological consultations</li>
                <li>Counselling and psychotherapy</li>
                <li>Psychological and psychoeducational assessments</li>
                <li>Neurocognitive consultations and screenings</li>
                <li>Psychiatric consultations</li>
                <li>General physician consultations</li>
                <li>Psychoeducation and wellbeing services</li>
                <li>Workshops and educational programs</li>
              </ul>
              <p>
                Services are provided through appropriately qualified professionals acting within their
                scope of competence, training, licensure, and professional responsibilities.
              </p>
            </PolicyBlock>

            <PolicyBlock title="2. Nature of Services">
              <p>
                The services provided by Marigold are intended to support psychological, psychiatric,
                medical, cognitive, emotional, and overall wellbeing.
              </p>
              <p>
                Participation in any service does not guarantee specific outcomes, symptom improvement,
                diagnosis, treatment response, academic performance, employment outcomes, relationship
                outcomes, or other results.
              </p>
              <p>
                Every individual responds differently to healthcare and psychological interventions.
              </p>
            </PolicyBlock>

            <PolicyBlock title="3. Eligibility">
              <p>Clients must:</p>
              <ul>
                <li>Provide accurate and truthful information.</li>
                <li>Be legally capable of providing consent.</li>
                <li>
                  Be at least 18 years of age or have consent from a parent, legal guardian, or authorized
                  representative where applicable.
                </li>
              </ul>
              <p>Additional documentation may be requested when required for service provision.</p>
            </PolicyBlock>

            <PolicyBlock title="4. Appointments and Scheduling">
              <p>Appointments are scheduled based on clinician availability.</p>
              <p>The Clinic reserves the right to:</p>
              <ul>
                <li>Reschedule appointments when necessary.</li>
                <li>Modify clinician assignments.</li>
                <li>Cancel appointments due to unforeseen circumstances.</li>
              </ul>
              <p>Reasonable efforts will be made to notify clients of any changes.</p>
            </PolicyBlock>

            <PolicyBlock title="5. Teleconsultation Services">
              <p>Marigold currently provides services primarily through online consultations.</p>
              <p>Clients acknowledge that:</p>
              <ul>
                <li>Teleconsultation has limitations compared to in-person care.</li>
                <li>Technical interruptions may occur.</li>
                <li>Internet and device security cannot be guaranteed by the Clinic.</li>
                <li>Certain concerns may require referral for in-person assessment or emergency care.</li>
              </ul>
              <p>Clients are encouraged to attend appointments from a private and secure location.</p>
            </PolicyBlock>

            <PolicyBlock title="6. Emergencies and Crisis Situations">
              <p>
                Marigold is not an emergency, crisis intervention, ambulance, or emergency medical service.
              </p>
              <p>Clients experiencing medical emergencies, psychiatric emergencies, immediate risk of harm,
                suicidal crisis, violent behaviour, or acute medical conditions should immediately contact
                local emergency services, a nearby hospital, or appropriate emergency resources.
              </p>
              <p>
                The Clinic may be unable to provide immediate responses outside scheduled appointments.
              </p>
            </PolicyBlock>

            <PolicyBlock title="7. Confidentiality and Privacy">
              <p>
                Client information is handled in accordance with our Privacy &amp; Confidentiality Policy.
              </p>
              <p>Confidentiality may be limited where disclosure is required by law, necessary to prevent
                serious harm, required by court order, necessary in emergencies, or required for
                safeguarding vulnerable individuals.
              </p>
              <p>Further details are outlined in the Privacy &amp; Confidentiality Policy.</p>
            </PolicyBlock>

            <PolicyBlock title="8. Collaborative Care">
              <p>
                Marigold operates using an integrated care model that may involve psychologists,
                psychiatrists, physicians, and other authorized professionals.
              </p>
              <p>
                Where clinically appropriate, relevant information may be shared among members of the
                treatment team for the purpose of providing coordinated care.
              </p>
              <p>Such sharing remains subject to confidentiality obligations.</p>
            </PolicyBlock>

            <PolicyBlock title="9. Assessments and Reports">
              <p>
                Psychological, psychiatric, educational, cognitive, or medical assessments are conducted for
                specific professional purposes.
              </p>
              <p>Assessment findings reflect information available at the time of assessment, should not
                be interpreted outside their intended purpose, and may not be suitable for legal,
                employment, immigration, insurance, disability, or court-related purposes unless
                specifically stated.
              </p>
              <p>The Clinic reserves professional discretion regarding report preparation and release.</p>
            </PolicyBlock>

            <PolicyBlock title="10. Client Responsibilities">
              <p>Clients agree to provide accurate information, participate respectfully in consultations,
                inform clinicians of relevant changes in circumstances, attend appointments punctually, and
                follow agreed administrative procedures.
              </p>
              <p>
                Clients are responsible for decisions made regarding their own healthcare, treatment, and
                wellbeing.
              </p>
            </PolicyBlock>

            <PolicyBlock title="11. Respectful Conduct">
              <p>
                Marigold is committed to maintaining a safe, inclusive, and respectful environment.
              </p>
              <p>
                Abusive, discriminatory, threatening, harassing, sexually inappropriate, or disruptive
                behaviour toward clinicians, staff, consultants, or other individuals may result in
                suspension or termination of services.
              </p>
            </PolicyBlock>

            <PolicyBlock title="12. Payments and Fees">
              <p>Fees are communicated before service delivery.</p>
              <p>Payment may be required before appointment confirmation.</p>
              <p>
                The Clinic reserves the right to revise fees, service structures, and payment procedures
                with reasonable notice.
              </p>
              <p>Applicable taxes and statutory charges may apply.</p>
            </PolicyBlock>

            <PolicyBlock title="13. Cancellation and Missed Appointments">
              <p>
                Cancellation and refund policies are governed by the Clinic&apos;s separate Cancellation
                &amp; Refund Policy.
              </p>
              <p>Clients are encouraged to provide adequate notice if they are unable to attend.</p>
              <p>Repeated missed appointments may affect future scheduling.</p>
            </PolicyBlock>

            <PolicyBlock title="14. Intellectual Property">
              <p>
                All website content, educational materials, branding, logos, graphics, written content, and
                resources remain the intellectual property of Marigold Neurocognitive &amp; Mental Health
                Clinic unless otherwise stated.
              </p>
              <p>
                Materials may not be reproduced, copied, distributed, or commercially used without prior
                written permission.
              </p>
            </PolicyBlock>

            <PolicyBlock title="15. Recording of Sessions">
              <p>
                To protect privacy and confidentiality, sessions may not be recorded, photographed,
                livestreamed, or distributed by clients without prior written permission.
              </p>
              <p>Clinicians will not record sessions without appropriate consent.</p>
              <p>
                Unauthorized recording may result in termination of services and other actions permitted by
                law.
              </p>
            </PolicyBlock>

            <PolicyBlock title="16. Non-Discrimination and Cultural Respect">
              <p>
                Marigold is committed to providing respectful, inclusive, and culturally responsive care.
              </p>
              <p>
                We welcome individuals regardless of age, gender, gender identity, sexual orientation,
                disability, religion or spirituality, language, ethnicity, nationality, cultural
                background, relationship status, or neurodiversity.
              </p>
            </PolicyBlock>

            <PolicyBlock title="17. Website Information Disclaimer">
              <p>
                Information provided through the website, social media, educational materials, blogs,
                workshops, or public resources is intended for informational and educational purposes only.
              </p>
              <p>
                Such information should not be considered a substitute for individualized professional
                medical, psychiatric, psychological, legal, or emergency advice.
              </p>
            </PolicyBlock>

            <PolicyBlock title="18. Limitation of Liability">
              <p>To the extent permitted by applicable law, Marigold does not guarantee specific outcomes.</p>
              <p>
                The Clinic is not responsible for decisions independently made by clients or for
                interruptions caused by internet failures, technical issues, third-party service providers,
                or events beyond reasonable control.
              </p>
              <p>
                Nothing in these Terms excludes rights that cannot legally be excluded under applicable law.
              </p>
            </PolicyBlock>

            <PolicyBlock title="19. Amendments">
              <p>The Clinic reserves the right to update these Terms &amp; Conditions periodically.</p>
              <p>
                Updated versions will be published on the website and become effective upon publication
                unless otherwise stated.
              </p>
            </PolicyBlock>

            <PolicyBlock title="20. Governing Law">
              <p>
                These Terms &amp; Conditions shall be governed by and interpreted in accordance with the laws
                of India.
              </p>
              <p>
                Any disputes arising from the use of Clinic services shall be subject to the jurisdiction
                of the appropriate courts and legal authorities having jurisdiction under applicable Indian
                law.
              </p>
            </PolicyBlock>
          </PolicySection>

          <PolicySection
            id="cancellation"
            title="Cancellation, Rescheduling & Refund Policy"
            subtitle="Marigold Neurocognitive & Mental Health Clinic · Effective Date: 01-06-26"
          >
            <p className="policies__lead">
              At Marigold, we understand that unexpected circumstances arise and schedules may change. This
              policy aims to balance flexibility for clients while respecting the time, preparation, and
              professional commitments of our clinicians.
            </p>

            <PolicyBlock title="1. Appointment Confirmation">
              <p>Appointments are confirmed only after:</p>
              <ul>
                <li>Required booking information has been received.</li>
                <li>Applicable consent forms have been completed.</li>
                <li>Payment has been received, where applicable.</li>
              </ul>
              <p>The appointment time reserved is dedicated exclusively to the client.</p>
            </PolicyBlock>

            <PolicyBlock title="2. Rescheduling Appointments">
              <p>Clients may request to reschedule an appointment by providing advance notice.</p>
              <h4>More than 24 hours before the appointment</h4>
              <p>
                Appointments may be rescheduled without any additional charge, subject to clinician
                availability.
              </p>
              <h4>Less than 24 hours before the appointment</h4>
              <p>
                Rescheduling requests may be accommodated at the Clinic&apos;s discretion. A rescheduling fee
                may apply where appropriate.
              </p>
            </PolicyBlock>

            <PolicyBlock title="3. Cancellation Policy">
              <h4>Cancellation more than 24 hours before the appointment</h4>
              <p>Eligible for a full refund or rescheduling credit.</p>
              <h4>Cancellation within 24 hours of the appointment</h4>
              <p>
                Consultation fees are generally non-refundable. Exceptions may be considered in cases of
                genuine emergencies, serious illness, bereavement, natural disasters, or other exceptional
                circumstances.
              </p>
            </PolicyBlock>

            <PolicyBlock title="4. Missed Appointments (No-Shows)">
              <p>A &quot;no-show&quot; occurs when a client does not attend, is more than 15 minutes late without
                prior communication, or cannot be reached using the contact details provided.
              </p>
              <p>
                Missed appointments are generally non-refundable and may not be eligible for rescheduling.
                Repeated missed appointments may affect future booking availability.
              </p>
            </PolicyBlock>

            <PolicyBlock title="5. Late Arrivals">
              <p>
                If a client arrives late, the session may need to end at the originally scheduled time and
                session fees remain unchanged. Additional time cannot be guaranteed due to subsequent
                appointments.
              </p>
            </PolicyBlock>

            <PolicyBlock title="6. Clinician Cancellation or Rescheduling">
              <p>
                If a clinician must cancel or reschedule due to illness, emergency, technical difficulties,
                or unforeseen circumstances, clients may choose to reschedule or receive a full refund for
                the affected session. No cancellation fee will apply.
              </p>
            </PolicyBlock>

            <PolicyBlock title="7. Technical Difficulties During Online Sessions">
              <h4>Client-Side Issues</h4>
              <p>
                If a session cannot proceed due to the client&apos;s device, internet connection, environment,
                or technical setup, the session may be shortened and refunds may not be available.
              </p>
              <h4>Clinic-Side Issues</h4>
              <p>
                If a session cannot proceed due to technical issues on the Clinic&apos;s side, the session will
                be rescheduled or a full or partial refund will be provided, as appropriate.
              </p>
            </PolicyBlock>

            <PolicyBlock title="8. Assessment Services">
              <p>
                Once an assessment process has begun, assessment fees may be partially or fully
                non-refundable depending on the stage of completion. Completed reports and professional
                services already rendered are generally non-refundable.
              </p>
            </PolicyBlock>

            <PolicyBlock title="9. Refund Processing">
              <p>
                Approved refunds will generally be processed through the original payment method. Refund
                processing times may vary depending on banking institutions, payment gateways, and financial
                service providers.
              </p>
            </PolicyBlock>

            <PolicyBlock title="10. Exceptional Circumstances">
              <p>
                Requests involving medical emergencies, hospitalization, bereavement, natural disasters, or
                significant personal emergencies may be reviewed individually and with compassion.
              </p>
            </PolicyBlock>

            <PolicyBlock title="11. Workshops, Group Programs & Educational Events">
              <p>
                Specific cancellation and refund terms may apply to workshops, training programs, webinars,
                group sessions, and educational events. These will be communicated separately where
                applicable.
              </p>
            </PolicyBlock>
          </PolicySection>

          <PolicySection id="emergency" title="Emergency Information">
            <p className="policies__lead">
              At Marigold Neurocognitive &amp; Mental Health Clinic, we are committed to providing
              professional psychological, psychiatric, neurocognitive, and medical services through
              scheduled consultations. However, our clinic is not an emergency service, crisis intervention
              service, ambulance service, or emergency medical facility.
            </p>

            <PolicyBlock title="Important Information">
              <p>
                Our clinicians may not be immediately available outside scheduled appointments and cannot
                guarantee real-time responses to emails, website enquiries, contact forms, text messages,
                social media messages, appointment requests, or voicemails.
              </p>
              <p>
                These communication channels should not be used to seek urgent medical, psychiatric,
                psychological, or crisis support.
              </p>
            </PolicyBlock>

            <PolicyBlock title="If You Are Experiencing an Emergency">
              <p>Please seek immediate assistance if you or someone else is experiencing:</p>
              <ul>
                <li>Thoughts of suicide or self-harm</li>
                <li>A suicide attempt</li>
                <li>Immediate risk of harm to self or others</li>
                <li>Severe emotional or psychological crisis</li>
                <li>Psychiatric emergency</li>
                <li>Violent behaviour</li>
                <li>Acute medical emergency</li>
                <li>Loss of consciousness</li>
                <li>Severe injury</li>
                <li>Chest pain, breathing difficulties, or other urgent medical symptoms</li>
              </ul>
              <p>Do not wait for a response from the Clinic. Immediately contact:</p>
              <ul>
                <li>Local emergency services</li>
                <li>The nearest hospital emergency department</li>
                <li>A psychiatrist or physician available locally</li>
                <li>A trusted family member, caregiver, guardian, or emergency contact</li>
              </ul>
            </PolicyBlock>

            <PolicyBlock title="Teleconsultation Limitations">
              <p>
                Online consultations have limitations and may not be suitable for all situations. Where a
                clinician believes that a client&apos;s needs exceed what can be safely managed through
                teleconsultation, the clinician may recommend in-person medical evaluation, emergency
                psychiatric assessment, hospital-based care, referral to another healthcare provider, or
                immediate emergency intervention.
              </p>
              <p>Clients are responsible for seeking emergency assistance when advised to do so.</p>
            </PolicyBlock>

            <PolicyBlock title="Client Location Information">
              <p>
                For safety reasons, clients may be asked to provide their current location, emergency
                contact information, and relevant local emergency resources. This information may be used
                if there is a serious and immediate concern regarding safety or wellbeing.
              </p>
            </PolicyBlock>

            <PolicyBlock title="Protection of Life and Safety">
              <p>
                While confidentiality is a fundamental principle of care, clinicians may disclose relevant
                information without consent where permitted or required by law and professional obligations
                in situations involving serious and imminent risk of harm, medical emergencies, safety
                concerns involving vulnerable individuals, or circumstances requiring emergency
                intervention.
              </p>
              <p>
                Such disclosures will be limited to the information reasonably necessary to protect safety
                and wellbeing.
              </p>
            </PolicyBlock>
          </PolicySection>
        </div>
      </main>
      <Footer />
    </div>
  );
}

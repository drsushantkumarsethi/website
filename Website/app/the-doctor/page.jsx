'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { doctorData } from '../../data/doctorData';
import { useAppointment } from '../../components/AppointmentContext';
import { MedicalEcgLine, HepaticCellLattice, MedicalCrossSparkle } from '../../components/MedicalAccents';

export default function TheDoctorPage() {
  const { openBooking } = useAppointment();
  const [activeTab, setActiveTab] = useState('background');

  const navTabs = [
    { id: 'background', label: 'Background' },
    { id: 'clinical-interests', label: 'Clinical interests' },
    { id: 'academics', label: 'Academics' },
    { id: 'recent-activity', label: 'Recent activity' },
    { id: 'publications', label: 'Publications' }
  ];

  return (
    <div className="the-doctor-page">
      {/* 1. Hero Section (Screenshot 7) */}
      <section className="doctor-hero-section" style={{ position: 'relative', overflow: 'hidden' }}>
        <MedicalEcgLine style={{ position: 'absolute', top: '20px', right: '4%', zIndex: 0 }} />
        <HepaticCellLattice style={{ position: 'absolute', bottom: '10px', left: '-15px', zIndex: 0 }} />
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link href="/">Home</Link> <span>/</span> <span>The doctor</span>
          </nav>

          <div className="doctor-hero-grid">
            <div>
              <div className="eyebrow-wrap">
                <span className="eyebrow-line"></span>
                <span className="eyebrow-text">SENIOR CONSULTANT &amp; ACADEMIC LEADER</span>
              </div>

              <h1 className="doctor-hero-h1">
                Senior expertise.<br />Care that understands.
              </h1>

              <p className="doctor-hero-subtitle">
                {doctorData.doctor.fullName} • Senior Consultant, Gastroenterology, Hepatology, Therapeutic Endoscopy &amp; Liver Transplantation • {doctorData.doctor.location}
              </p>
            </div>

            {/* Doctor Photo in Chair with Floating Card (Screenshot 7) */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="meet-image-card" style={{ maxWidth: '340px', width: '100%' }}>
                <div className="meet-img-frame">
                  <Image
                    src="/images/apollo-consultation-chamber.jpg"
                    alt={doctorData.doctor.fullName}
                    width={340}
                    height={300}
                    className="meet-img"
                    priority
                  />
                  <div className="meet-floating-badge">
                    <div className="meet-badge-title">+ Senior Consultant</div>
                    <div className="meet-badge-sub">Gastroenterology, Hepatology &amp; Liver Transplant</div>
                  </div>
                </div>
                <div className="meet-caption">
                  APOLLO HOSPITALS BHUBANESWAR CONSULTATION DESK
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Subnav Anchor Bar (Screenshot 7 bottom) */}
      <div className="doctor-subnav-bar">
        <div className="container">
          <ul className="doctor-subnav-list">
            {navTabs.map((tab) => (
              <li key={tab.id}>
                <a
                  href={`#${tab.id}`}
                  className={`doctor-subnav-link ${activeTab === tab.id ? 'is-active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 3. Section: Background (Screenshots 8, 9, 10) */}
      <section id="background" className="doc-section-row">
        <div className="container">
          {/* Part A: Clinical Narrative & Role */}
          <div className="doc-split-grid" style={{ marginBottom: '80px' }}>
            <div>
              <div className="eyebrow-wrap">
                <span className="eyebrow-line"></span>
                <span className="eyebrow-text">A SENIOR CLINICIAN. A CONSIDERED APPROACH.</span>
              </div>
              <h2 className="doc-section-heading">
                Experience shaped<br />around the individual.
              </h2>

              <div className="role-card-boxed" style={{ marginTop: '36px' }}>
                <span className="role-card-label">CURRENT PROFESSIONAL ROLE</span>
                <div className="role-card-title">Senior Consultant &amp; Head of Academics</div>
                <div className="role-card-dept">Department of Gastroenterology &amp; Hepatology</div>
                <div className="role-card-hosp">Apollo Hospitals, Bhubaneswar</div>
              </div>
            </div>

            <div>
              <p className="doc-section-lead" style={{ marginBottom: '1.25rem' }}>
                Dr. Sushant Kumar Sethi is a Senior Consultant in Gastroenterology and Hepatology based in Bhubaneswar, Odisha. He brings over 25 years of medical experience to the assessment and care of digestive, liver, and pancreatic conditions.
              </p>
              <p className="doc-section-lead" style={{ marginBottom: '1.25rem' }}>
                His qualifications include an MBBS and MD in Medicine from SCB Medical College, Cuttack, followed by a DNB in Gastroenterology. His professional background includes AIIMS and Indraprastha Apollo Hospitals in New Delhi, alongside clinical and teaching roles in Bhubaneswar.
              </p>
              <p className="doc-section-lead" style={{ marginBottom: '1.5rem' }}>
                He combines an analytical approach to complex gastrointestinal concerns with an emphasis on listening, clear explanations, and care tailored to each person’s needs.
              </p>

              <div className="languages-box">
                <span className="languages-label">Languages for a more comfortable conversation</span>
                <div className="languages-pills">
                  {doctorData.doctor.languages.map((lang, idx) => (
                    <span key={idx} className="lang-pill">{lang}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Part B: Education & Specialist Training (Screenshot 9, 10) */}
          <div className="doc-split-grid" style={{ marginBottom: '80px' }}>
            <div>
              <div className="eyebrow-wrap">
                <span className="eyebrow-line"></span>
                <span className="eyebrow-text">EDUCATION &amp; SPECIALIST TRAINING</span>
              </div>
              <h2 className="doc-section-heading">
                A foundation<br />of specialist learning.
              </h2>
              <p className="doc-section-lead">
                Clinical education followed by further training in advanced endoscopic techniques.
              </p>
            </div>

            <div>
              <div className="doc-timeline-table">
                {doctorData.doctor.qualifications.map((q, idx) => (
                  <div key={idx} className="timeline-row">
                    <div className="timeline-year-tag">{q.year}</div>
                    <div>
                      <h3 className="timeline-degree-title">{q.degree}</h3>
                      <p className="timeline-inst-name">{q.institution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Part C: Clinical & Teaching Background (Screenshot 10, 11) */}
          <div className="doc-split-grid">
            <div>
              <div className="eyebrow-wrap">
                <span className="eyebrow-line"></span>
                <span className="eyebrow-text">CLINICAL &amp; TEACHING BACKGROUND</span>
              </div>
              <h2 className="doc-section-heading">
                Experience across<br />leading institutions.
              </h2>
            </div>

            <div>
              <div className="inst-exp-list">
                {doctorData.doctor.institutionalExperience.map((exp, idx) => (
                  <div key={idx} className="inst-exp-item">
                    <span className="inst-loc-tag">{exp.locationTag}</span>
                    <h3 className="inst-name">{exp.institution}</h3>
                    <p className="inst-role-text">{exp.role}</p>
                  </div>
                ))}
              </div>

              {/* Real Facility Photos */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginTop: '30px' }}>
                <div style={{ borderRadius: '10px', overflow: 'hidden', border: '1px solid var(--color-border)', backgroundColor: '#ffffff' }}>
                  <div style={{ position: 'relative', width: '100%', height: '180px' }}>
                    <Image
                      src="/images/apollo-hospital-exterior.jpg"
                      alt="Dr. Sethi at Apollo Hospitals Bhubaneswar"
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ padding: '12px 16px', fontSize: '0.84rem', fontWeight: 600, color: 'var(--color-heading)' }}>
                    Apollo Hospitals Bhubaneswar
                    <div style={{ fontSize: '0.76rem', color: 'var(--color-text-muted)', fontWeight: 400 }}>Main hospital entrance &amp; OPD center</div>
                  </div>
                </div>

                <div style={{ borderRadius: '10px', overflow: 'hidden', border: '1px solid var(--color-border)', backgroundColor: '#ffffff' }}>
                  <div style={{ position: 'relative', width: '100%', height: '180px' }}>
                    <Image
                      src="/images/clinic-consultation-chamber.jpg"
                      alt="Dr. Sethi at Private Clinic Chamber"
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ padding: '12px 16px', fontSize: '0.84rem', fontWeight: 600, color: 'var(--color-heading)' }}>
                    Private Clinic Consultation Chamber
                    <div style={{ fontSize: '0.76rem', color: 'var(--color-text-muted)', fontWeight: 400 }}>Evening consultation chamber in Bhubaneswar</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Section: Clinical Interests (Screenshot 11, 12) */}
      <section id="clinical-interests" className="doc-section-row">
        <div className="container">
          <div className="doc-split-grid">
            <div>
              <div className="eyebrow-wrap">
                <span className="eyebrow-line"></span>
                <span className="eyebrow-text">CLINICAL INTERESTS</span>
              </div>
              <h2 className="doc-section-heading">
                From complex questions<br />to clearer decisions.
              </h2>
              <p className="doc-section-lead" style={{ marginBottom: '1.5rem' }}>
                A focus on gastrointestinal disorders, hepatology, and diagnostic and therapeutic endoscopic care.
              </p>
              <div>
                <Link href="/conditions" className="link-with-arrow">
                  <span>Explore condition guides</span>
                  <span className="arrow-icon">↗</span>
                </Link>
              </div>
            </div>

            <div>
              <div className="interests-grid-6">
                {doctorData.doctor.clinicalInterests.map((interest, idx) => (
                  <div key={idx} className="interest-card">
                    {interest}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Section: Academics (Screenshot 12, 13) */}
      <section id="academics" className="doc-section-row">
        <div className="container">
          <div className="doc-split-grid">
            <div>
              <div className="eyebrow-wrap">
                <span className="eyebrow-line"></span>
                <span className="eyebrow-text">TEACHING, RESEARCH &amp; SERVICE</span>
              </div>
              <h2 className="doc-section-heading">
                Clinical care.<br />Academic commitment.
              </h2>
              <p className="doc-section-lead" style={{ marginBottom: '1.5rem' }}>
                Head of Academics and academic coordinator for the DrNB programme since 2018, with contributions to talks, workshops, publications, and book chapters.
              </p>

              <div style={{ marginTop: '24px' }}>
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-heading)' }}>
                  Research interests
                </span>
                <ul className="research-bullet-list">
                  {doctorData.doctor.researchInterests.map((r, idx) => (
                    <li key={idx}>{r}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="academics-list">
                {doctorData.doctor.memberships.map((m, idx) => (
                  <div key={idx} className="academic-leader-item">
                    <span className="leader-tag">{m.category}</span>
                    <h3 className="leader-title">{m.title}</h3>
                    <p className="leader-desc">{m.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Section: Recent Activity (Screenshot 14) */}
      <section id="recent-activity" className="doc-section-row">
        <div className="container">
          <div className="eyebrow-wrap">
            <span className="eyebrow-line"></span>
            <span className="eyebrow-text">RECENT ACADEMIC ACTIVITY</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '36px' }}>
            <h2 className="doc-section-heading" style={{ marginBottom: 0 }}>
              Learning. Sharing.<br />Moving care forward.
            </h2>
            <span style={{ fontSize: '0.78rem', color: 'var(--color-text-light)' }}>
              Profile updated 7 November 2026
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {doctorData.doctor.recentAcademicActivity.map((item, idx) => (
              <div key={idx} className="academic-card">
                <div>
                  <div className="academic-tag-top">{item.tag}</div>
                  <h3 className="academic-card-title">{item.title}</h3>
                  <p className="academic-card-desc">{item.description}</p>
                </div>
                <div>
                  {item.bottomTag ? (
                    <div className="academic-tag-bottom">{item.bottomTag}</div>
                  ) : (
                    <a href={item.linkUrl || '#'} className="link-with-arrow">
                      <span>{item.linkText || 'View details'}</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Section: Publications & Recognition (Screenshot 15) */}
      <section id="publications" className="doc-section-row">
        <div className="container">
          {/* Part A: Selected Publications */}
          <div className="doc-split-grid" style={{ marginBottom: '80px' }}>
            <div>
              <div className="eyebrow-wrap">
                <span className="eyebrow-line"></span>
                <span className="eyebrow-text">SELECTED PUBLICATIONS</span>
              </div>
              <h2 className="doc-section-heading">
                Contributing to<br />clinical knowledge.
              </h2>
            </div>

            <div>
              <div style={{ marginBottom: '24px', fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
                Selected co-authored work in gastroenterology. Open each record for full publication details.
              </div>

              <div className="publications-list">
                {doctorData.doctor.publications.map((pub, idx) => (
                  <div key={idx} className="publication-item">
                    <div className="pub-year">{pub.year}</div>
                    <div>
                      <a href="#" className="pub-title-link">
                        <span>{pub.title}</span>
                        <span className="arrow-icon">↗</span>
                      </a>
                      <div className="pub-journal">{pub.journal}</div>
                      <div className="pub-desc">{pub.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Part B: Awards & Recognition */}
          <div className="doc-split-grid">
            <div>
              <div className="eyebrow-wrap">
                <span className="eyebrow-line"></span>
                <span className="eyebrow-text">SELECTED RECOGNITION</span>
              </div>
              <h2 className="doc-section-heading">
                Awards &amp;<br />professional recognition.
              </h2>
            </div>

            <div>
              <div className="awards-list">
                {doctorData.doctor.awards.map((award, idx) => (
                  <div key={idx} className="award-item">
                    <div className="award-year">{award.year}</div>
                    <div>
                      <div className="award-title">{award.title}</div>
                      <div className="award-org">{award.organization}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

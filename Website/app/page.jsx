'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { doctorData } from '../data/doctorData';
import { blogPosts } from '../data/blogData';
import { useAppointment } from '../components/AppointmentContext';
import { MedicalEcgLine, MedicalStethoscope, HepaticCellLattice, MedicalCrossSparkle, DigestiveCurve } from '../components/MedicalAccents';
import { Stethoscope, Activity, Heart, Shield, Award, GraduationCap, HeartHandshake } from 'lucide-react';

export default function HomePage() {
  const { openBooking } = useAppointment();
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="home-page">
      {/* 1. Hero Section (Screenshot 1) */}
      <section className="hero-section" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Subtle Transparent Medical Decorative Accents */}
        <MedicalEcgLine style={{ position: 'absolute', top: '20px', right: '5%', zIndex: 0 }} />
        <HepaticCellLattice style={{ position: 'absolute', top: '45%', left: '-20px', zIndex: 0 }} />
        <MedicalCrossSparkle style={{ position: 'absolute', top: '15%', left: '46%', zIndex: 0 }} />
        <div className="container">
          <div className="hero-grid">
            {/* Left Content */}
            <div className="hero-text-col">
              <div className="eyebrow-wrap">
                <span className="eyebrow-line"></span>
                <span className="eyebrow-text">SENIOR CONSULTANT • GASTROENTEROLOGY, HEPATOLOGY, ENDOSCOPY &amp; LIVER TRANSPLANT</span>
              </div>
              <div className="hero-sub-label">BHUBANESWAR • ODISHA</div>

              <h1 className="hero-h1">
                Dr. Sushant<br />Kumar Sethi.
              </h1>

              <div className="hero-primary-title">
                Senior Consultant, Gastroenterology, Hepatology, Therapeutic Endoscopy &amp; Liver Transplantation
              </div>
              <div className="hero-academic-title">
                Head of Academics • Gastroenterology, Hepatology, Therapeutic Endoscopy &amp; Liver Transplantation
              </div>

              <div className="hero-badges-row">
                {doctorData.doctor.degrees.map((deg, i) => (
                  <span key={i} className="badge-pill">{deg}</span>
                ))}
              </div>

              <p className="hero-lead-text">
                {doctorData.doctor.experienceSummary}
              </p>

              <div className="hero-care-tags">
                <div className="care-tag-item">
                  <Stethoscope size={16} className="care-tag-icon" />
                  <span>Digestive care</span>
                </div>
                <div className="care-tag-item">
                  <Heart size={16} className="care-tag-icon" />
                  <span>Liver care</span>
                </div>
                <div className="care-tag-item">
                  <Activity size={16} className="care-tag-icon" />
                  <span>Bowel health</span>
                </div>
              </div>

              <div className="hero-actions-row">
                <button
                  type="button"
                  onClick={() => openBooking('General Consultation')}
                  className="btn btn-primary"
                >
                  <span>Book a consultation</span>
                  <span className="arrow-icon">↗</span>
                </button>

                <Link
                  href="/the-doctor"
                  className="link-with-arrow"
                  style={{ fontSize: '0.95rem' }}
                >
                  <span>Full doctor profile</span>
                  <span className="arrow-icon">↗</span>
                </Link>
              </div>
            </div>

            {/* Right Media (Senior Consultant at Apollo Consultation Desk) */}
            <div className="hero-media-wrap">
              <div className="hero-photo-card">
                <div className="hero-photo-frame">
                  <Image
                    src="/images/apollo-consultation-chamber.jpg"
                    alt={`${doctorData.doctor.fullName} - Senior Consultant Gastroenterologist at Apollo Hospitals`}
                    width={480}
                    height={340}
                    priority
                    className="hero-chamber-img"
                  />
                </div>

                {/* Text card placed CLEANLY BELOW the photo - NEVER OVERLAPPING */}
                <div className="hero-caption-card-below">
                  <div className="hero-caption-badge-row">
                    <span className="hero-caption-plus">+</span>
                    <div>
                      <div className="hero-caption-title">Senior Consultant</div>
                      <div className="hero-caption-specialty">Gastroenterology, Hepatology, Therapeutic Endoscopy &amp; Liver Transplantation</div>
                    </div>
                  </div>
                  <div className="hero-caption-location">
                    APOLLO HOSPITALS BHUBANESWAR • CONSULTATION DESK
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-caption-sub">
            SENIOR CLINICAL EXPERTISE, ACADEMIC LEADERSHIP.
          </div>

          {/* Stats Bar Strip (IIGH Clinical Highlights) */}
          <div className="hero-stats-strip">
            <div className="stats-top-row">
              <span style={{ color: 'var(--color-teal)', fontWeight: 700 }}>CLINICAL EXCELLENCE &amp; TRUST ↓</span>
              <span>Senior Specialist Profile</span>
            </div>

            <div className="stats-grid-4">
              <div className="stat-col-item">
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'var(--color-teal-soft)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '12px'
                }}>
                  <Award size={18} color="var(--color-teal)" />
                </div>
                <div className="stat-col-val">25+</div>
                <div className="stat-col-desc">Years of medical &amp; clinical gastroenterology experience</div>
              </div>

              <div className="stat-col-item">
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'var(--color-teal-soft)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '12px'
                }}>
                  <GraduationCap size={18} color="var(--color-teal)" />
                </div>
                <div className="stat-col-val-text">AIIMS &amp; Apollo</div>
                <div className="stat-col-desc">MBBS • MD (Medicine) • DNB (Gastroenterology)</div>
              </div>

              <div className="stat-col-item">
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'var(--color-teal-soft)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '12px'
                }}>
                  <Stethoscope size={18} color="var(--color-teal)" />
                </div>
                <div className="stat-col-val-text">Head of Academics</div>
                <div className="stat-col-desc">Senior Consultant in Gastroenterology &amp; Hepatology</div>
              </div>

              <div className="stat-col-item">
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'var(--color-teal-soft)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '12px'
                }}>
                  <HeartHandshake size={18} color="var(--color-teal)" />
                </div>
                <div className="stat-col-val-text">Patient-Centered</div>
                <div className="stat-col-desc">Personalized care with direct time and clinical clarity</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Meet Dr. Sethi Section (Screenshot 2) */}
      <section className="section-meet-doctor" style={{ position: 'relative', overflow: 'hidden' }}>
        <MedicalStethoscope style={{ position: 'absolute', top: '25px', right: '4%', zIndex: 0 }} />
        <DigestiveCurve style={{ position: 'absolute', bottom: '15px', left: '2%', zIndex: 0 }} />
        <div className="container">
          <div className="meet-grid">
            {/* Left Image (Dr. Sethi Portrait with Card Placed CLEANLY BELOW) */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="meet-image-card" style={{ maxWidth: '360px', width: '100%' }}>
                <div className="meet-img-frame">
                  <Image
                    src="/images/hero-doctor.png"
                    alt={`${doctorData.doctor.fullName} - Senior Consultant Gastroenterologist`}
                    width={360}
                    height={420}
                    className="meet-portrait-img"
                    priority
                  />
                </div>

                {/* Text card placed CLEANLY BELOW the photo - NEVER OVERLAPPING */}
                <div className="meet-caption-card-below">
                  <div className="meet-caption-row">
                    <span className="meet-caption-plus">+</span>
                    <div>
                      <div className="meet-caption-name">{doctorData.doctor.fullName}</div>
                      <div className="meet-caption-degrees">MBBS • MD (Medicine) • DNB (Gastroenterology)</div>
                      <div className="meet-caption-specialty">Gastroenterology, Hepatology, Therapeutic Endoscopy &amp; Liver Transplantation</div>
                    </div>
                  </div>
                  <div className="meet-caption-sub">
                    25+ YEARS SENIOR CLINICAL EXPERTISE &amp; ACADEMIC LEADERSHIP
                  </div>
                </div>
              </div>
            </div>

            {/* Right Bio */}
            <div>
              <div className="eyebrow-wrap">
                <span className="eyebrow-line"></span>
                <span className="eyebrow-text">MEET DR. SETHI</span>
              </div>

              <h2 className="meet-heading">
                Senior expertise.<br />A personal connection.
              </h2>

              <div className="meet-paragraphs">
                <p>
                  Dr. Sushant Kumar Sethi is a Senior Consultant in Gastroenterology and Hepatology based in Bhubaneswar, Odisha, with over 25 years of medical experience.
                </p>
                <p>
                  His clinical background includes AIIMS, New Delhi, Indraprastha Apollo Hospitals, New Delhi, and IMS &amp; SUM Hospitals, Bhubaneswar. As Head of Academics, he also contributes to specialist training, research, and professional learning.
                </p>
              </div>

              <div className="meet-credentials-row">
                <div>
                  <div className="cred-col-degree">MBBS • MD (Medicine)</div>
                  <div className="cred-col-inst">SCB Medical College, Cuttack</div>
                </div>
                <div>
                  <div className="cred-col-degree">DNB (Gastroenterology)</div>
                  <div className="cred-col-inst">National Board of Examinations, 2007</div>
                </div>
              </div>

              <div>
                <Link href="/the-doctor" className="link-with-arrow">
                  <span>Explore his professional profile</span>
                  <span className="arrow-icon">↗</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Recent Academic Activity Section (Screenshot 3) */}
      <section className="section-academic">
        <div className="container">
          <div className="eyebrow-wrap">
            <span className="eyebrow-line"></span>
            <span className="eyebrow-text">RECENT ACADEMIC ACTIVITY</span>
          </div>

          <h2 className="academic-heading">
            Learning. Sharing.<br />Moving care forward.
          </h2>

          <div className="academic-cards-grid">
            {doctorData.doctor.recentAcademicActivity.slice(0, 2).map((item, idx) => (
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
                    <Link href="/the-doctor#academics" className="link-with-arrow">
                      <span>{item.linkText || 'View details'}</span>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div>
            <Link href="/the-doctor#academics" className="link-with-arrow">
              <span>More academic work and publications</span>
              <span className="arrow-icon">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Understand Your Health (Screenshot 4) */}
      <section className="section-conditions">
        <div className="container">
          <div className="eyebrow-wrap">
            <span className="eyebrow-line"></span>
            <span className="eyebrow-text">UNDERSTAND YOUR HEALTH</span>
          </div>

          <div className="conditions-header-row">
            <div>
              <h2 className="conditions-heading">
                Different conditions.<br />One considered approach.
              </h2>
            </div>
            <div className="conditions-header-right">
              <p className="conditions-header-desc">
                Explore the symptoms, assessment, and care behind common digestive and liver concerns.
              </p>
              <div>
                <Link href="/conditions" className="link-with-arrow">
                  <span>Explore all conditions</span>
                  <span className="arrow-icon">↗</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="conditions-cards-3">
            {doctorData.doctor.conditions.slice(0, 3).map((item) => (
              <div key={item.id} className="condition-card">
                <div className="condition-img-wrap">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={320}
                    height={180}
                    className="condition-img"
                  />
                  <span className="condition-num-badge">{item.number}</span>
                </div>
                <div className="condition-body">
                  <div className="condition-cat">{item.category}</div>
                  <h3 className="condition-title">{item.title}</h3>
                  <p className="condition-desc">{item.description}</p>
                  <div>
                    <Link href={`/conditions/${item.slug || item.id}`} className="link-with-arrow">
                      <span>Understand the condition</span>
                      <span className="arrow-icon">↗</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Your Care Journey (Screenshot 5) */}
      <section className="section-journey">
        <div className="container">
          <div className="journey-grid">
            <div>
              <div className="eyebrow-wrap">
                <span className="eyebrow-line"></span>
                <span className="eyebrow-text">YOUR CARE JOURNEY</span>
              </div>
              <h2 className="journey-heading">
                Less uncertainty.<br />More understanding.
              </h2>
              <p className="journey-left-desc">
                Space to share your concerns. Clarity about the next step. A consultation centred around you.
              </p>
              <button
                type="button"
                onClick={() => openBooking('First Consultation Visit')}
                className="link-with-arrow"
                style={{ fontSize: '0.95rem', background: 'none', border: 'none', padding: 0, font: 'inherit', color: 'inherit', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
              >
                <span>Plan your visit</span>
                <span className="arrow-icon">↗</span>
              </button>
            </div>

            <div className="journey-steps-list">
              {doctorData.doctor.careJourneySteps.map((step) => (
                <div key={step.number} className="journey-step-item">
                  <div className="step-num-italic">{step.number}</div>
                  <div>
                    <h3 className="step-item-title">{step.title}</h3>
                    <p className="step-item-desc">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Consultation Centers & Practice Hours */}
      <section className="section-clinic-cta" style={{ padding: '70px 0' }}>
        <div className="container">
          <div className="eyebrow-wrap">
            <span className="eyebrow-line"></span>
            <span className="eyebrow-text">CONSULTATION CENTERS &amp; SCHEDULES</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '36px', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <h2 className="clinic-cta-heading" style={{ fontSize: '2.5rem', marginBottom: '8px' }}>
                Separate Hospital &amp; Clinic Timings
              </h2>
              <p className="clinic-cta-sub" style={{ margin: 0 }}>
                In-person consultations available at Apollo Hospitals (Morning/Afternoon) and Clinic Consultation Chamber (Evening).
              </p>
            </div>
            <div>
              <a
                href={`tel:${doctorData.contact.phone.replace(/\s+/g, '')}`}
                className="btn btn-secondary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <span>Call {doctorData.contact.phone}</span>
                <span className="arrow-icon">↗</span>
              </a>
            </div>
          </div>

          {/* Two Consultation Center Cards with Real Photos */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {/* Apollo Hospitals */}
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '14px',
              border: '1px solid var(--color-border)',
              overflow: 'hidden',
              boxShadow: '0 8px 24px rgba(0,0,0,0.04)'
            }}>
              <div style={{ position: 'relative', width: '100%', height: '200px' }}>
                <Image
                  src="/images/apollo-hospital-exterior.jpg"
                  alt="Apollo Hospitals Bhubaneswar"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  style={{ objectFit: 'cover' }}
                />
                <span style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  backgroundColor: 'rgba(14, 32, 77, 0.9)',
                  color: '#ffffff',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  padding: '4px 10px',
                  borderRadius: '4px',
                  textTransform: 'uppercase'
                }}>
                  Hospital Consultations
                </span>
              </div>
              <div style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-heading)', marginBottom: '8px' }}>
                  Apollo Hospitals, Bhubaneswar
                </h3>
                <p style={{ fontSize: '0.86rem', color: 'var(--color-text-muted)', marginBottom: '14px' }}>
                  Sainik School Road, Unit 15, Bhubaneswar, Odisha 751005
                </p>
                <div style={{
                  backgroundColor: 'var(--color-teal-soft)',
                  border: '1px solid #c7d8b8',
                  padding: '10px 14px',
                  borderRadius: '8px',
                  marginBottom: '18px'
                }}>
                  <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', fontWeight: 700, color: '#354d1d' }}>
                    Hospital Consultation Hours
                  </div>
                  <div style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--color-heading)' }}>
                    Monday – Saturday: 10:00 AM – 05:00 PM
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-text-body)', marginTop: '2px' }}>
                    Endoscopy, Colonoscopy, EUS, ERCP &amp; OPD
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => openBooking('Hospital Consultation', 'apollo-hospital')}
                  className="btn btn-primary btn-full"
                >
                  <span>Book Hospital Visit</span>
                  <span className="arrow-icon">↗</span>
                </button>
              </div>
            </div>

            {/* Evening Clinic */}
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '14px',
              border: '1px solid var(--color-border)',
              overflow: 'hidden',
              boxShadow: '0 8px 24px rgba(0,0,0,0.04)'
            }}>
              <div style={{ position: 'relative', width: '100%', height: '200px' }}>
                <Image
                  src="/images/clinic-consultation-chamber.jpg"
                  alt="Dr. Sushant Sethi Evening Clinic Chamber"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  style={{ objectFit: 'cover' }}
                />
                <span style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  backgroundColor: 'rgba(80, 111, 46, 0.95)',
                  color: '#ffffff',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  padding: '4px 10px',
                  borderRadius: '4px',
                  textTransform: 'uppercase'
                }}>
                  Evening Clinic Chamber
                </span>
              </div>
              <div style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-heading)', marginBottom: '8px' }}>
                  Dr. Sushant Sethi Clinic &amp; Diagnostics
                </h3>
                <p style={{ fontSize: '0.86rem', color: 'var(--color-text-muted)', marginBottom: '14px' }}>
                  Consultation Chamber &amp; Diagnostics, Bhubaneswar, Odisha
                </p>
                <div style={{
                  backgroundColor: 'var(--color-teal-soft)',
                  border: '1px solid #c7d8b8',
                  padding: '10px 14px',
                  borderRadius: '8px',
                  marginBottom: '18px'
                }}>
                  <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', fontWeight: 700, color: '#354d1d' }}>
                    Clinic Consultation Hours
                  </div>
                  <div style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--color-heading)' }}>
                    Monday – Saturday: 06:30 PM – 08:30 PM
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-text-body)', marginTop: '2px' }}>
                    Consultations &amp; comprehensive diagnostics
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => openBooking('Clinic Consultation', 'clinic-chamber')}
                  className="btn btn-primary btn-full"
                >
                  <span>Book Clinic Visit</span>
                  <span className="arrow-icon">↗</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6.5 Clinical Articles & Patient Guides */}
      <section className="section-blog-preview" style={{ padding: '80px 0', borderTop: '1px solid var(--color-border-light)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <div className="eyebrow-wrap">
                <span className="eyebrow-line"></span>
                <span className="eyebrow-text">PATIENT EDUCATION &amp; ARTICLES</span>
              </div>
              <h2 style={{ fontSize: '2.5rem', color: 'var(--color-heading)' }}>
                Clinical guidance.<br />Written for understanding.
              </h2>
            </div>
            <div>
              <Link href="/blog" className="link-with-arrow">
                <span>View all articles</span>
                <span className="arrow-icon">↗</span>
              </Link>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {blogPosts.slice(0, 3).map((post) => (
              <article key={post.slug} className="blog-card">
                <div className="blog-card-media">
                  <Image
                    src={post.coverImage}
                    alt={post.coverImageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="blog-card-img"
                  />
                  <div className="blog-card-badge">{post.category}</div>
                </div>
                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <span>{post.readingTime}</span>
                    <span>•</span>
                    <span>{post.publishedAt}</span>
                  </div>
                  <h3 className="blog-card-title">
                    <Link href={`/blog/${post.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="blog-card-excerpt">
                    {post.excerpt}
                  </p>
                  <div className="blog-card-footer">
                    <span style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--color-heading)' }}>
                      {post.author.name}
                    </span>
                    <Link href={`/blog/${post.slug}`} className="link-with-arrow" style={{ fontSize: '0.86rem', fontWeight: 600 }}>
                      <span>Read guide</span>
                      <span className="arrow-icon">↗</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Before Your Visit FAQ Section (Screenshot 6) */}
      <section className="section-faq">
        <div className="container">
          <div className="faq-grid-2">
            <div>
              <div className="eyebrow-wrap">
                <span className="eyebrow-line"></span>
                <span className="eyebrow-text">BEFORE YOUR VISIT</span>
              </div>
              <h2 className="faq-title">
                A little more clarity.
              </h2>
            </div>

            <div className="faq-items-list">
              {doctorData.doctor.faqs.map((faq) => {
                const isOpen = openFaq === faq.id;
                return (
                  <div key={faq.id} className="faq-row">
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="faq-trigger"
                      aria-expanded={isOpen}
                    >
                      <span>{faq.question}</span>
                      <span className={`faq-trigger-icon ${isOpen ? 'is-open' : ''}`}>
                        +
                      </span>
                    </button>
                    {isOpen && (
                      <div className="faq-content">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

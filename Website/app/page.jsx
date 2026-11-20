'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { doctorData } from '../data/doctorData';
import { useAppointment } from '../components/AppointmentContext';
import { Stethoscope, Activity, Heart, Shield } from 'lucide-react';

export default function HomePage() {
  const { openBooking } = useAppointment();
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="home-page">
      {/* 1. Hero Section (Screenshot 1) */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            {/* Left Content */}
            <div className="hero-text-col">
              <div className="eyebrow-wrap">
                <span className="eyebrow-line"></span>
                <span className="eyebrow-text">SENIOR CONSULTANT • GASTROENTEROLOGY</span>
              </div>
              <div className="hero-sub-label">BHUBANESWAR • ODISHA</div>

              <h1 className="hero-h1">
                Dr. Sushant<br />Kumar Sethi.
              </h1>

              <div className="hero-primary-title">
                Senior Consultant, Gastroenterology &amp; Hepatology
              </div>
              <div className="hero-academic-title">
                Head of Academics • Gastroenterology &amp; Hepatology
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
                  onClick={() => openBooking()}
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

            {/* Right Media (Doctor Portrait in Arch Frame) */}
            <div className="hero-media-wrap">
              <div className="hero-arch-container">
                <div className="hero-arch-ring"></div>
                <Image
                  src="/images/hero-doctor.png"
                  alt={doctorData.doctor.fullName}
                  width={340}
                  height={430}
                  priority
                  className="hero-doctor-img"
                />

                {/* Floating Experience Badge */}
                <div className="hero-float-badge">
                  <span className="float-badge-num">25+</span>
                  <span className="float-badge-label">Years of medical<br />experience</span>
                </div>

                {/* Floating White Doctor Card */}
                <div className="hero-bottom-card">
                  <span className="bottom-card-plus">+</span>
                  <div>
                    <span className="bottom-card-name">{doctorData.doctor.fullName}</span>
                    <span className="bottom-card-degrees">MBBS • MD (Medicine) • DNB (Gastroenterology)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-caption-sub">
            SENIOR CLINICAL EXPERTISE, ACADEMIC LEADERSHIP.
          </div>

          {/* Stats Bar Strip (Screenshot 1 Bottom) */}
          <div className="hero-stats-strip">
            <div className="stats-top-row">
              <span>EXPLORE DIGESTIVE &amp; LIVER CARE ↓</span>
              <span>Profile updated 7 November 2026</span>
            </div>

            <div className="stats-grid-4">
              <div className="stat-col-item">
                <div className="stat-col-val">25+</div>
                <div className="stat-col-desc">Years of medical experience</div>
              </div>

              <div className="stat-col-item">
                <div className="stat-col-val-text">MBBS • MD • DNB</div>
                <div className="stat-col-desc">Medicine &amp; Gastroenterology</div>
              </div>

              <div className="stat-col-item">
                <div className="stat-col-val-text">Senior Consultant</div>
                <div className="stat-col-desc">Clinical care &amp; academic leadership</div>
              </div>

              <div className="stat-col-item">
                <div className="stat-col-val-text">Patient-first</div>
                <div className="stat-col-desc">A considered approach to every consultation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Meet Dr. Sethi Section (Screenshot 2) */}
      <section className="section-meet-doctor">
        <div className="container">
          <div className="meet-grid">
            {/* Left Image */}
            <div>
              <div className="meet-image-card">
                <div className="meet-img-frame">
                  <Image
                    src="/images/meet-doctor-card.jpg"
                    alt={doctorData.doctor.fullName}
                    width={400}
                    height={320}
                    className="meet-img"
                  />
                  <div className="meet-floating-badge">
                    <div className="meet-badge-title">+ Senior Consultant</div>
                    <div className="meet-badge-sub">Gastroenterology &amp; Hepatology</div>
                  </div>
                </div>
                <div className="meet-caption">
                  CLINICAL EXPERIENCE, ACADEMIC LEADERSHIP.
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
                onClick={() => openBooking()}
                className="link-with-arrow"
                style={{ fontSize: '0.95rem' }}
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

      {/* 6. Your Clinic Consultation Strip (Screenshot 5 Bottom) */}
      <section className="section-clinic-cta">
        <div className="container">
          <div className="eyebrow-wrap">
            <span className="eyebrow-line"></span>
            <span className="eyebrow-text">YOUR CLINIC CONSULTATION</span>
          </div>

          <div className="clinic-cta-grid">
            <div>
              <h2 className="clinic-cta-heading">
                A conversation.<br />A considered next step.
              </h2>
              <p className="clinic-cta-sub">
                Choose a preferred date and time on our appointment page.
              </p>
            </div>

            <div>
              <button
                onClick={() => openBooking()}
                className="btn btn-primary"
              >
                <span>Book a consultation</span>
                <span className="arrow-icon">↗</span>
              </button>
            </div>
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

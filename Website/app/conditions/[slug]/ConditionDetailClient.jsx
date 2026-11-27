'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { doctorData } from '../../../data/doctorData';
import { useAppointment } from '../../../components/AppointmentContext';
import { MedicalEcgLine, MedicalStethoscope, MedicalCrossSparkle } from '../../../components/MedicalAccents';
import { Sparkles, Plus, AlertCircle, ArrowUpRight } from 'lucide-react';

export default function ConditionDetailClient({ condition, relatedConditions }) {
  const { openBooking } = useAppointment();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="condition-detail-page" style={{ padding: '40px 0 100px' }}>
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb-nav" aria-label="Breadcrumb" style={{ marginBottom: '24px' }}>
          <Link href="/">Home</Link> <span>/</span> <Link href="/conditions">Conditions</Link> <span>/</span> <span>{condition.title}</span>
        </nav>

        {/* Hero Section */}
        <div className="doctor-hero-grid" style={{ marginBottom: '60px' }}>
          <div>
            <div className="eyebrow-wrap">
              <span className="eyebrow-line"></span>
              <span className="eyebrow-text">{condition.categoryTag}</span>
            </div>

            <h1 className="doctor-hero-h1">
              {condition.title}.<br />
              <span style={{ fontStyle: 'italic', fontWeight: 400 }}>Let&apos;s understand it.</span>
            </h1>

            <p className="doctor-hero-subtitle">
              {condition.shortDescription}
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="meet-img-frame" style={{ maxWidth: '380px', width: '100%', borderRadius: '140px 20px 20px 20px' }}>
              <Image
                src={condition.image}
                alt={condition.title}
                width={380}
                height={260}
                style={{ width: '100%', height: 'auto', display: 'block' }}
                priority
              />
              <div style={{
                background: 'var(--color-navy-dark)',
                color: '#ffffff',
                padding: '6px 14px',
                fontSize: '0.65rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                textAlign: 'center'
              }}>
                ILLUSTRATIVE PHOTOGRAPHY • Pexels
              </div>
            </div>
          </div>
        </div>

        {/* Subnav Anchor List */}
        <div style={{
          borderTop: '1px solid var(--color-border-light)',
          borderBottom: '1px solid var(--color-border-light)',
          padding: '16px 0',
          marginBottom: '60px',
          display: 'flex',
          gap: '28px',
          fontSize: '0.84rem',
          color: 'var(--color-text-muted)'
        }}>
          <span style={{ fontWeight: 600, color: 'var(--color-heading)' }}>IN THIS GUIDE:</span>
          <a href="#overview" style={{ color: 'inherit' }}>Overview</a>
          <a href="#symptoms" style={{ color: 'inherit' }}>Symptoms</a>
          <a href="#assessment" style={{ color: 'inherit' }}>Assessment</a>
          <a href="#care" style={{ color: 'inherit' }}>Care options</a>
          <a href="#questions" style={{ color: 'inherit' }}>Questions</a>
        </div>

        {/* Main Content Layout with Sticky Sidebar */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 0.7fr', gap: '60px', alignItems: 'flex-start' }}>
          {/* Left Column: 5 Main Clinical Sections */}
          <div>
            {/* 01: Understanding the Condition */}
            <section id="overview" style={{ marginBottom: '60px' }}>
              <div style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-text-light)', marginBottom: '8px' }}>
                01 / UNDERSTANDING THE CONDITION
              </div>
              <h2 style={{ fontSize: '2rem', color: 'var(--color-heading)', marginBottom: '16px' }}>
                What is {condition.title.toLowerCase()}?
              </h2>
              <p style={{ fontSize: '1.02rem', lineHeight: '1.7', color: 'var(--color-text-body)' }}>
                {condition.overview}
              </p>
            </section>

            {/* 02: Recognising the Pattern */}
            <section id="symptoms" style={{ marginBottom: '60px' }}>
              <div style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-text-light)', marginBottom: '8px' }}>
                02 / RECOGNISING THE PATTERN
              </div>
              <h2 style={{ fontSize: '2rem', color: 'var(--color-heading)', marginBottom: '24px' }}>
                Symptoms to discuss.
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {condition.symptoms.map((symptom, idx) => (
                  <div key={idx} className="symptom-tag-card">
                    <Sparkles size={16} className="sparkle-icon" color="var(--color-teal)" />
                    <span>{symptom}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 03: Finding Clarity */}
            <section id="assessment" style={{ marginBottom: '60px' }}>
              <div style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-text-light)', marginBottom: '8px' }}>
                03 / FINDING CLARITY
              </div>
              <h2 style={{ fontSize: '2rem', color: 'var(--color-heading)', marginBottom: '16px' }}>
                How it may be assessed.
              </h2>
              <p style={{ fontSize: '1.02rem', lineHeight: '1.7', color: 'var(--color-text-body)' }}>
                {condition.assessment}
              </p>
            </section>

            {/* 04: Your Way Forward */}
            <section id="care" style={{ marginBottom: '60px' }}>
              <div style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-text-light)', marginBottom: '8px' }}>
                04 / YOUR WAY FORWARD
              </div>
              <h2 style={{ fontSize: '2rem', color: 'var(--color-heading)', marginBottom: '16px' }}>
                A personal approach to care.
              </h2>
              <p style={{ fontSize: '1.02rem', lineHeight: '1.7', color: 'var(--color-text-body)', marginBottom: '28px' }}>
                {condition.careOptions}
              </p>

              <div style={{
                borderLeft: '2px solid var(--color-teal)',
                padding: '16px 20px',
                backgroundColor: '#fbfdfc',
                fontSize: '0.88rem'
              }}>
                <div style={{ fontWeight: 600, color: 'var(--color-heading)', marginBottom: '4px' }}>
                  Before your consultation
                </div>
                <div style={{ color: 'var(--color-text-body)', lineHeight: '1.5' }}>
                  {condition.beforeConsultation}
                </div>
              </div>
            </section>

            {/* 05: Common Questions */}
            <section id="questions" style={{ marginBottom: '60px' }}>
              <div style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-text-light)', marginBottom: '8px' }}>
                05 / COMMON QUESTIONS
              </div>
              <h2 style={{ fontSize: '2rem', color: 'var(--color-heading)', marginBottom: '24px' }}>
                A little more clarity.
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {condition.questions.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div key={idx} className="faq-row">
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="faq-trigger"
                        aria-expanded={isOpen}
                      >
                        <span>{faq.q}</span>
                        <span className={`faq-trigger-icon ${isOpen ? 'is-open' : ''}`}>+</span>
                      </button>
                      {isOpen && (
                        <div className="faq-content">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div style={{ marginTop: '24px', fontSize: '0.78rem', color: 'var(--color-text-light)' }}>
                Patient education • Updated November 2026<br />
                General information. This page supports a conversation with your clinician and does not provide an individual diagnosis or treatment plan.
              </div>
            </section>
          </div>

          {/* Right Column: Sticky Specialist Consultation Card */}
          <div style={{ position: 'sticky', top: '100px' }}>
            <div className="sticky-consult-card">
              <span style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-text-light)', display: 'block', marginBottom: '14px' }}>
                SPECIALIST CONSULTATION
              </span>

              <h3 style={{ fontSize: '1.8rem', color: 'var(--color-heading)', lineHeight: '1.2', marginBottom: '20px' }}>
                Care begins with<br />
                <span style={{ fontStyle: 'italic', fontWeight: 400 }}>your story.</span>
              </h3>

              <div style={{ marginBottom: '20px' }}>
                <div style={{ fontWeight: 600, color: 'var(--color-heading)' }}>
                  {doctorData.doctor.fullName}
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>
                  {doctorData.doctor.primaryTitle}
                </div>
              </div>

              <div style={{ marginBottom: '24px', fontSize: '0.85rem', color: 'var(--color-text-body)' }}>
                <div>Dr. Sethi&apos;s clinic</div>
                <div style={{ color: 'var(--color-text-light)' }}>Consultations by request</div>
              </div>

              <button
                type="button"
                onClick={() => openBooking(condition.title)}
                className="btn btn-primary btn-full"
                style={{ marginBottom: '14px' }}
              >
                <span>Plan your visit</span>
                <span className="arrow-icon">↗</span>
              </button>

              <div style={{ fontSize: '0.76rem', color: 'var(--color-text-light)', textAlign: 'center', lineHeight: '1.4' }}>
                Your preferred date and time requires clinic confirmation.
              </div>
            </div>
          </div>
        </div>

        {/* Warning Box */}
        <div style={{
          border: '1px solid #c7d8b8',
          borderLeft: '4px solid var(--color-teal)',
          borderRadius: '8px',
          padding: '20px 24px',
          backgroundColor: 'var(--color-teal-soft)',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '16px',
          margin: '40px 0 80px'
        }}>
          <span style={{ color: 'var(--color-teal)', fontWeight: 800, fontSize: '1.3rem', lineHeight: 1 }}>+</span>
          <div>
            <div style={{ fontWeight: 600, color: 'var(--color-heading)', fontSize: '0.94rem', marginBottom: '4px' }}>
              When symptoms need urgent attention
            </div>
            <div style={{ fontSize: '0.86rem', color: 'var(--color-text-body)', lineHeight: '1.5' }}>
              Seek urgent medical care for severe or worsening abdominal pain, vomiting blood, black stools, fainting, or chest pain. Do not wait for a routine consultation if you feel acutely unwell.
            </div>
          </div>
        </div>

        {/* Related Condition Guides */}
        {relatedConditions.length > 0 && (
          <div style={{ marginBottom: '80px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '28px' }}>
              <div>
                <div className="eyebrow-wrap">
                  <span className="eyebrow-line"></span>
                  <span className="eyebrow-text">KEEP EXPLORING</span>
                </div>
                <h2 style={{ fontSize: '2.4rem', color: 'var(--color-heading)', margin: 0 }}>
                  Related condition guides.
                </h2>
              </div>
              <Link href="/conditions" className="link-with-arrow">
                <span>View all guides</span>
                <span className="arrow-icon">↗</span>
              </Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px' }}>
              {relatedConditions.map((rel) => (
                <div key={rel.slug} className="condition-card">
                  <div className="condition-img-wrap">
                    <Image
                      src={rel.image}
                      alt={rel.title}
                      width={380}
                      height={180}
                      className="condition-img"
                    />
                    <span className="condition-num-badge">{rel.number}</span>
                  </div>
                  <div className="condition-body">
                    <div className="condition-cat">{rel.categoryTag}</div>
                    <h3 className="condition-title">{rel.title}</h3>
                    <p className="condition-desc">{rel.shortDescription}</p>
                    <div>
                      <Link href={`/conditions/${rel.slug}`} className="link-with-arrow">
                        <span>Understand the condition</span>
                        <span className="arrow-icon">↗</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA Banner */}
        <div style={{
          borderTop: '1px solid var(--color-border-light)',
          paddingTop: '60px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px'
        }}>
          <div>
            <div className="eyebrow-wrap">
              <span className="eyebrow-line"></span>
              <span className="eyebrow-text">YOUR NEXT CHAPTER IN HEALTH</span>
            </div>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-heading)' }}>
              Let&apos;s find a clearer way forward.
            </h2>
          </div>

          <button
            type="button"
            onClick={() => openBooking(condition.title)}
            className="btn btn-primary"
          >
            <span>Arrange a consultation</span>
            <span className="arrow-icon">↗</span>
          </button>
        </div>
      </div>
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAppointment } from '../../../components/AppointmentContext';
import {
  Clock,
  Calendar,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ChevronDown,
  Stethoscope,
  Award,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { MedicalCrossSparkle, MedicalEcgLine } from '../../../components/MedicalAccents';

export default function BlogArticleClient({ post, relatedPosts, doctor }) {
  const { openBooking } = useAppointment();
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="blog-article-page">
      {/* Article Header & Hero */}
      <header className="article-header">
        <MedicalCrossSparkle top="20%" right="6%" opacity={0.16} />
        <MedicalEcgLine top="65%" left="4%" opacity={0.12} />

        <div className="container" style={{ maxWidth: '860px' }}>
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: '24px' }}>
            <ol style={{ listStyle: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: 'var(--color-text-light)', padding: 0, margin: 0 }}>
              <li>
                <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
              </li>
              <li><ChevronRight size={12} /></li>
              <li>
                <Link href="/blog" style={{ color: 'inherit', textDecoration: 'none' }}>Blog &amp; Guides</Link>
              </li>
              <li><ChevronRight size={12} /></li>
              <li style={{ color: 'var(--color-primary)', fontWeight: 500 }}>{post.category}</li>
            </ol>
          </nav>

          {/* Meta Tag & Published Info */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px', flexWrap: 'wrap' }}>
            <span style={{
              background: 'rgba(22, 59, 52, 0.08)',
              color: 'var(--color-primary)',
              padding: '4px 12px',
              borderRadius: '9999px',
              fontSize: '0.78rem',
              fontWeight: 600,
              letterSpacing: '0.04em',
              textTransform: 'uppercase'
            }}>
              {post.category}
            </span>
            <span style={{ fontSize: '0.84rem', color: 'var(--color-text-light)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <Clock size={13} /> {post.readingTime}
            </span>
            <span style={{ fontSize: '0.84rem', color: 'var(--color-text-light)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <Calendar size={13} /> Published {post.publishedAt}
            </span>
          </div>

          {/* Article Title & Subtitle */}
          <h1 style={{ fontSize: '2.5rem', lineHeight: 1.25, color: 'var(--color-heading)', marginBottom: '18px', fontWeight: 600, letterSpacing: '-0.02em' }}>
            {post.title}
          </h1>

          <p style={{ fontSize: '1.2rem', lineHeight: 1.6, color: 'var(--color-text-body)', marginBottom: '32px' }}>
            {post.subtitle}
          </p>

          {/* Author Badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', borderTop: '1px solid var(--color-border-light)', borderBottom: '1px solid var(--color-border-light)', padding: '16px 0' }}>
            <Image
              src="/images/dr-sushant-sethi.jpg"
              alt={post.author.name}
              width={48}
              height={48}
              className="blog-author-avatar"
              style={{ width: '48px', height: '48px' }}
            />
            <div>
              <div style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--color-heading)' }}>
                {post.author.name}
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--color-text-light)' }}>
                {post.author.title} • {post.author.experience}
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="article-hero-img-wrap">
            <Image
              src={post.coverImage}
              alt={post.coverImageAlt}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 860px"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--color-text-light)', marginTop: '8px', textAlign: 'center' }}>
            Photo: {post.coverImageAlt} (Educational Medical Imagery)
          </div>
        </div>
      </header>

      {/* Article Content */}
      <main className="article-main" style={{ padding: '50px 0 90px' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          {/* Key Clinical Takeaways Card */}
          {post.keyTakeaways && post.keyTakeaways.length > 0 && (
            <div className="article-takeaways-card">
              <div className="article-takeaways-title">
                <ShieldCheck size={20} style={{ color: 'var(--color-primary)' }} />
                <span>Key Clinical Takeaways</span>
              </div>
              <ul className="article-takeaways-list">
                {post.keyTakeaways.map((point, idx) => (
                  <li key={idx} className="article-takeaways-item">
                    <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px' }} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Article Sections */}
          <div className="article-body-content">
            {post.sections.map((sec, idx) => (
              <section key={idx} style={{ marginBottom: '36px' }}>
                <h2>{sec.heading}</h2>
                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}

                {sec.callout && (
                  <div className={`article-callout-box ${sec.callout.type === 'warning' ? 'article-callout-warning' : 'article-callout-info'}`}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600, marginBottom: '6px' }}>
                      <AlertCircle size={18} />
                      <span>{sec.callout.title}</span>
                    </div>
                    <p style={{ margin: 0, fontSize: '0.96rem', lineHeight: 1.6 }}>{sec.callout.text}</p>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Interactive FAQs Accordion */}
          {post.faqs && post.faqs.length > 0 && (
            <section style={{ marginTop: '50px', paddingTop: '40px', borderTop: '1px solid var(--color-border-light)' }}>
              <div className="eyebrow-wrap" style={{ marginBottom: '12px' }}>
                <span className="eyebrow-line"></span>
                <span className="eyebrow-text">COMMONLY ASKED QUESTIONS</span>
              </div>
              <h3 style={{ fontSize: '1.75rem', color: 'var(--color-heading)', marginBottom: '24px' }}>
                Frequently Asked by Patients
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {post.faqs.map((faq, fIdx) => {
                  const isOpen = openFaq === fIdx;
                  return (
                    <div
                      key={fIdx}
                      style={{
                        background: '#ffffff',
                        border: '1px solid var(--color-border-light)',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        transition: 'box-shadow 0.25s ease'
                      }}
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? -1 : fIdx)}
                        style={{
                          width: '100%',
                          padding: '18px 24px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          textAlign: 'left',
                          color: 'var(--color-heading)',
                          fontSize: '1.05rem',
                          fontWeight: 600
                        }}
                      >
                        <span>{faq.question}</span>
                        <ChevronDown
                          size={18}
                          style={{
                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.25s ease',
                            color: 'var(--color-primary)'
                          }}
                        />
                      </button>

                      {isOpen && (
                        <div style={{ padding: '0 24px 20px', fontSize: '0.98rem', lineHeight: 1.65, color: 'var(--color-text-body)' }}>
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Doctor Bio Card */}
          <div className="article-author-card">
            <Image
              src="/images/dr-sushant-sethi.jpg"
              alt={doctor.fullName}
              width={90}
              height={90}
              className="article-author-img"
            />
            <div>
              <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-light)', marginBottom: '4px' }}>
                Author &amp; Specialist
              </div>
              <h4 style={{ fontSize: '1.35rem', color: 'var(--color-heading)', marginBottom: '4px' }}>
                {doctor.fullName}
              </h4>
              <div style={{ fontSize: '0.88rem', color: 'var(--color-primary)', fontWeight: 500, marginBottom: '8px' }}>
                {doctor.primaryTitle} • {doctor.degrees.join(' • ')}
              </div>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--color-text-body)', margin: 0 }}>
                {doctor.experienceSummary} Head of Academics, Gastroenterology &amp; Hepatology at Apollo Hospitals Bhubaneswar.
              </p>
            </div>
          </div>

          {/* Consultation CTA Banner */}
          <div style={{
            background: 'linear-gradient(135deg, #163b34 0%, #1e4d44 100%)',
            color: '#ffffff',
            borderRadius: 'var(--radius-lg)',
            padding: '40px',
            textAlign: 'center',
            marginTop: '50px',
            boxShadow: '0 16px 36px rgba(22, 59, 52, 0.16)'
          }}>
            <h3 style={{ fontSize: '1.85rem', color: '#ffffff', marginBottom: '12px' }}>
              Need personal medical guidance on this condition?
            </h3>
            <p style={{ fontSize: '1.02rem', color: '#d5e2de', maxWidth: '600px', margin: '0 auto 24px', lineHeight: 1.6 }}>
              Every patient’s digestive health is unique. Arrange a focused clinical consultation with Dr. Sushant Kumar Sethi for diagnostic evaluation.
            </p>
            <button
              onClick={() => openBooking(post.title)}
              className="btn btn-primary"
              style={{
                backgroundColor: '#ffffff',
                color: '#163b34',
                padding: '14px 28px',
                fontSize: '0.98rem',
                fontWeight: 600
              }}
            >
              <span>Schedule a consultation</span>
              <span className="arrow-icon">↗</span>
            </button>
          </div>

          {/* Related Articles */}
          {relatedPosts && relatedPosts.length > 0 && (
            <div style={{ marginTop: '70px', paddingTop: '40px', borderTop: '1px solid var(--color-border-light)' }}>
              <div className="eyebrow-wrap" style={{ marginBottom: '12px' }}>
                <span className="eyebrow-line"></span>
                <span className="eyebrow-text">CONTINUE READING</span>
              </div>
              <h3 style={{ fontSize: '1.75rem', color: 'var(--color-heading)', marginBottom: '28px' }}>
                Related Clinical Articles
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                {relatedPosts.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/blog/${rel.slug}`}
                    style={{
                      background: '#ffffff',
                      border: '1px solid var(--color-border-light)',
                      borderRadius: '12px',
                      padding: '24px',
                      textDecoration: 'none',
                      color: 'inherit',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                    }}
                    className="blog-card"
                  >
                    <div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--color-primary)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '8px' }}>
                        {rel.category}
                      </div>
                      <h4 style={{ fontSize: '1.18rem', color: 'var(--color-heading)', marginBottom: '10px', lineHeight: 1.4 }}>
                        {rel.title}
                      </h4>
                      <p style={{ fontSize: '0.88rem', color: 'var(--color-text-body)', lineHeight: 1.5, margin: 0 }}>
                        {rel.excerpt}
                      </p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '20px', paddingTop: '12px', borderTop: '1px solid var(--color-border-light)' }}>
                      <span style={{ fontSize: '0.78rem', color: 'var(--color-text-light)' }}>{rel.readingTime}</span>
                      <span className="link-with-arrow" style={{ fontSize: '0.84rem', fontWeight: 600 }}>
                        <span>Read guide</span>
                        <span className="arrow-icon">↗</span>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Medical Disclaimer Note */}
          <div style={{ marginTop: '50px', padding: '20px', background: '#f8faf9', borderRadius: '8px', fontSize: '0.78rem', color: 'var(--color-text-light)', lineHeight: 1.5 }}>
            <strong>Medical Disclaimer:</strong> The information published in this guide is intended solely for patient educational purposes and does not substitute for formal in-person clinical diagnosis or treatment. For persistent or severe gastrointestinal symptoms, please schedule an appointment with a registered medical specialist.
          </div>
        </div>
      </main>
    </div>
  );
}

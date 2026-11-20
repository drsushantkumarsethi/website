'use client';

import React from 'react';
import Link from 'next/link';
import { doctorData } from '../../data/doctorData';
import { useAppointment, getConsultationMailto } from '../../components/AppointmentContext';
import { MedicalEcgLine, MedicalCrossSparkle } from '../../components/MedicalAccents';

export default function ProfessionalEnquiriesPage() {
  const { openBooking } = useAppointment();

  return (
    <div className="professional-enquiries-page" style={{ paddingTop: '50px', paddingBottom: '90px' }}>
      <div className="container">
        {/* Main 2-Column Section (Screenshots 4 & 5) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '60px 80px',
            alignItems: 'start',
            paddingBottom: '80px',
            borderBottom: '1px solid #e4ebe8',
          }}
        >
          {/* Left Column */}
          <div>
            <div className="eyebrow-wrap" style={{ marginBottom: '24px' }}>
              <span className="eyebrow-line"></span>
              <span className="eyebrow-text">PROFESSIONAL ENQUIRIES</span>
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
                fontWeight: 700,
                color: 'var(--color-primary)',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                marginBottom: '28px',
              }}
            >
              Start with<br />a conversation.
            </h1>

            <p
              style={{
                color: 'var(--color-text-muted)',
                fontSize: '1.05rem',
                lineHeight: 1.65,
                maxWidth: '460px',
                marginBottom: '36px',
              }}
            >
              For a clinic visit, use the dedicated appointment request page. Your preferred date and time require confirmation.
            </p>

            <div>
              <a
                href={getConsultationMailto('Professional Consultation Request')}
                className="btn btn-primary"
                style={{ padding: '15px 30px', fontSize: '1rem' }}
              >
                <span>Request a consultation</span>
                <span className="arrow-icon">↗</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Details */}
          <div>
            {/* Contact Number */}
            <div
              style={{
                paddingBottom: '28px',
                marginBottom: '28px',
                borderBottom: '1px solid #e4ebe8',
              }}
            >
              <div
                style={{
                  fontSize: '0.72rem',
                  letterSpacing: '0.12em',
                  fontWeight: 600,
                  color: 'var(--color-text-muted)',
                  textTransform: 'uppercase',
                  marginBottom: '10px',
                }}
              >
                CONTACT NUMBER
              </div>
              <a
                href={`tel:${doctorData.contact.phone.replace(/\s+/g, '')}`}
                style={{
                  fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
                className="enquiry-contact-link"
              >
                <span>{doctorData.contact.phone}</span>
                <span className="arrow-icon" style={{ fontSize: '1.2rem' }}>↗</span>
              </a>
            </div>

            {/* Email */}
            <div
              style={{
                paddingBottom: '28px',
                marginBottom: '28px',
                borderBottom: '1px solid #e4ebe8',
              }}
            >
              <div
                style={{
                  fontSize: '0.72rem',
                  letterSpacing: '0.12em',
                  fontWeight: 600,
                  color: 'var(--color-text-muted)',
                  textTransform: 'uppercase',
                  marginBottom: '10px',
                }}
              >
                EMAIL
              </div>
              <a
                href={`mailto:${doctorData.contact.email}`}
                style={{
                  fontSize: 'clamp(1.15rem, 2vw, 1.45rem)',
                  fontWeight: 500,
                  textDecoration: 'none',
                  wordBreak: 'break-all',
                }}
                className="enquiry-contact-link"
              >
                <span>{doctorData.doctor.email}</span>
                <span className="arrow-icon" style={{ fontSize: '1.1rem' }}>↗</span>
              </a>
            </div>

            {/* Professional Updates */}
            <div
              style={{
                paddingBottom: '28px',
                marginBottom: '24px',
                borderBottom: '1px solid #e4ebe8',
              }}
            >
              <div
                style={{
                  fontSize: '0.72rem',
                  letterSpacing: '0.12em',
                  fontWeight: 600,
                  color: 'var(--color-text-muted)',
                  textTransform: 'uppercase',
                  marginBottom: '10px',
                }}
              >
                PROFESSIONAL UPDATES
              </div>
              <a
                href="https://instagram.com/drsushantkumarsethi"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 'clamp(1.15rem, 2vw, 1.45rem)',
                  fontWeight: 500,
                  color: 'var(--color-primary)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'opacity 0.2s',
                }}
                className="hover-opacity"
              >
                <span>@drsushantkumarsethi</span>
                <span style={{ fontSize: '1.1rem', color: 'var(--color-primary)' }}>↗</span>
              </a>
            </div>

            {/* Profile Updated Footnote */}
            <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
              <div>Professional profile updated</div>
              <div>7 November 2026</div>
            </div>
          </div>
        </div>

        {/* Bottom Banner: Let's find a clearer way forward. (Screenshots 4 & 5) */}
        <div
          style={{
            paddingTop: '60px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '30px',
          }}
        >
          <div>
            <div
              style={{
                fontSize: '0.72rem',
                letterSpacing: '0.14em',
                fontWeight: 600,
                color: 'var(--color-text-muted)',
                textTransform: 'uppercase',
                marginBottom: '10px',
              }}
            >
              YOUR NEXT CHAPTER IN HEALTH
            </div>
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)',
                fontWeight: 600,
                color: 'var(--color-primary)',
                letterSpacing: '-0.02em',
              }}
            >
              Let’s find a clearer <span style={{ fontStyle: 'italic', fontWeight: 400 }}>way forward.</span>
            </div>
          </div>

          <div>
            <a
              href={getConsultationMailto('Professional Consultation Request')}
              className="btn btn-primary"
              style={{ padding: '16px 32px', fontSize: '1rem' }}
            >
              <span>Arrange a consultation</span>
              <span className="arrow-icon">↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

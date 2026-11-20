'use client';

import React from 'react';
import Link from 'next/link';
import { doctorData } from '../../data/doctorData';
import { useAppointment } from '../../components/AppointmentContext';

export default function ProceduresPage() {
  const { openBooking } = useAppointment();

  return (
    <div className="procedures-page" style={{ padding: '40px 0 100px' }}>
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
          <Link href="/">Home</Link> <span>/</span> <span>Procedures</span>
        </nav>

        {/* Hero Section (Screenshot 7) */}
        <div className="doc-split-grid" style={{ marginBottom: '80px', alignItems: 'flex-start' }}>
          <div>
            <div className="eyebrow-wrap">
              <span className="eyebrow-line"></span>
              <span className="eyebrow-text">INFORMED, BEFORE YOU BEGIN</span>
            </div>

            <h1 className="doctor-hero-h1">
              Know the reason.<br />Understand the next step.
            </h1>
          </div>

          <div>
            <p className="doc-section-lead" style={{ marginBottom: '1.25rem' }}>
              Dr. Sethi&apos;s Apollo profile lists further training in EUS and ERCP at the Asian Institute of Gastroenterology, Hyderabad.
            </p>
            <p className="doc-section-lead" style={{ marginBottom: '1.5rem' }}>
              These are general procedure guides. A consultation establishes suitability; the hospital confirms procedure availability, arrangements, and costs.
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.92rem', color: 'var(--color-text-body)' }}>
              <li>• Why is this investigation being considered?</li>
              <li>• What are the benefits, risks, and alternatives?</li>
              <li>• How should I prepare, and who should accompany me?</li>
              <li>• When and how will the findings be explained?</li>
            </ul>
          </div>
        </div>

        {/* 3 Detailed Procedures Items (Screenshot 7 & 8) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '80px', marginBottom: '80px' }}>
          {/* Procedure 01: Upper GI Endoscopy */}
          <div className="procedure-step-row" style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '40px', borderTop: '1px solid var(--color-border-light)', paddingTop: '50px' }}>
            <div className="proc-step-num" style={{ fontSize: '3.5rem', fontStyle: 'italic', fontWeight: 300, color: 'var(--color-text-light)', lineHeight: 1 }}>
              01
            </div>
            <div>
              <h2 style={{ fontSize: '2.4rem', color: 'var(--color-heading)', marginBottom: '18px' }}>
                Upper GI Endoscopy
              </h2>
              <p style={{ fontSize: '1.02rem', lineHeight: 1.7, color: 'var(--color-text-body)', marginBottom: '16px' }}>
                A flexible camera allows a clinician to examine the oesophagus, stomach, and duodenum. It may help investigate ongoing pain, swallowing problems, or other upper digestive symptoms.
              </p>
              <p style={{ fontSize: '1.02rem', lineHeight: 1.7, color: 'var(--color-text-body)', marginBottom: '24px' }}>
                Your team explains why it is recommended, possible risks, preparation, and recovery. Follow the hospital&apos;s instructions about fasting and medicines.
              </p>
              <div>
                <button
                  type="button"
                  onClick={() => openBooking('Upper GI Endoscopy')}
                  className="link-with-arrow"
                  style={{ textDecoration: 'underline' }}
                >
                  <span>Read the patient information</span>
                  <span className="arrow-icon">↗</span>
                </button>
              </div>
            </div>
          </div>

          {/* Procedure 02: Endoscopic ultrasound (EUS) */}
          <div className="procedure-step-row" style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '40px', borderTop: '1px solid var(--color-border-light)', paddingTop: '50px' }}>
            <div className="proc-step-num" style={{ fontSize: '3.5rem', fontStyle: 'italic', fontWeight: 300, color: 'var(--color-text-light)', lineHeight: 1 }}>
              02
            </div>
            <div>
              <div style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-text-light)', marginBottom: '8px' }}>
                ENDOSCOPY WITH ULTRASOUND IMAGING.
              </div>
              <h2 style={{ fontSize: '2.4rem', color: 'var(--color-heading)', marginBottom: '18px' }}>
                Endoscopic ultrasound (EUS)
              </h2>
              <p style={{ fontSize: '1.02rem', lineHeight: 1.7, color: 'var(--color-text-body)', marginBottom: '16px' }}>
                EUS combines an endoscope with an ultrasound probe to create images of internal tissues and organs. It may be discussed when a closer assessment of certain digestive or pancreatic concerns is needed.
              </p>
              <p style={{ fontSize: '1.02rem', lineHeight: 1.7, color: 'var(--color-text-body)', marginBottom: '24px' }}>
                Ask what question the test is intended to answer, whether any sampling is planned, and what preparation and recovery will involve.
              </p>
              <div>
                <button
                  type="button"
                  onClick={() => openBooking('Endoscopic ultrasound (EUS)')}
                  className="link-with-arrow"
                  style={{ textDecoration: 'underline' }}
                >
                  <span>Read the patient information</span>
                  <span className="arrow-icon">↗</span>
                </button>
              </div>
            </div>
          </div>

          {/* Procedure 03: ERCP */}
          <div className="procedure-step-row" style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '40px', borderTop: '1px solid var(--color-border-light)', paddingTop: '50px' }}>
            <div className="proc-step-num" style={{ fontSize: '3.5rem', fontStyle: 'italic', fontWeight: 300, color: 'var(--color-text-light)', lineHeight: 1 }}>
              03
            </div>
            <div>
              <div style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-text-light)', marginBottom: '8px' }}>
                ASSESSMENT AND TREATMENT OF SELECTED DUCT PROBLEMS.
              </div>
              <h2 style={{ fontSize: '2.4rem', color: 'var(--color-heading)', marginBottom: '18px' }}>
                ERCP
              </h2>
              <p style={{ fontSize: '1.02rem', lineHeight: 1.7, color: 'var(--color-text-body)', marginBottom: '16px' }}>
                Endoscopic retrograde cholangiopancreatography combines endoscopy and X-ray imaging. It is used to treat selected problems involving the bile or pancreatic ducts.
              </p>
              <p style={{ fontSize: '1.02rem', lineHeight: 1.7, color: 'var(--color-text-body)', marginBottom: '24px' }}>
                ERCP has specific risks and is not required for every digestive complaint. Your specialist will explain whether it is appropriate and discuss alternatives.
              </p>
              <div>
                <button
                  type="button"
                  onClick={() => openBooking('ERCP')}
                  className="link-with-arrow"
                  style={{ textDecoration: 'underline' }}
                >
                  <span>Read the patient information</span>
                  <span className="arrow-icon">↗</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
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
            onClick={() => openBooking()}
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

'use client';

import React from 'react';
import Link from 'next/link';
import { doctorData } from '../data/doctorData';
import { useAppointment } from './AppointmentContext';

export default function SiteFooter() {
  const { openBooking } = useAppointment();

  return (
    <footer className="site-footer">
      <div className="container">
        {/* Main 4-Column Grid */}
        <div className="footer-main-grid">
          {/* Column 1: Brand & Philosophy */}
          <div className="footer-brand-col">
            <Link href="/" className="brand-logo footer-logo" aria-label="Home">
              <div className="logo-circle" aria-hidden="true">
                <span>S</span>
                <span className="logo-plus">+</span>
              </div>
              <div className="brand-text-col">
                <span className="brand-name">{doctorData.doctor.fullName}</span>
                <span className="brand-sub">GASTROENTEROLOGY, HEPATOLOGY, ENDOSCOPY &amp; LIVER TRANSPLANT</span>
              </div>
            </Link>

            <div className="footer-brand-quote">
              <div>Thoughtful care.</div>
              <div className="quote-italic">From the inside out.</div>
            </div>

            <a
              href={doctorData.contact.verifiedInstagram}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link link-with-arrow"
            >
              <span>Instagram</span>
              <span className="arrow-icon">↗</span>
            </a>
          </div>

          {/* Column 2: Explore */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Explore</h4>
            <ul className="footer-links-list">
              <li>
                <Link href="/the-doctor">Meet Dr. Sethi</Link>
              </li>
              <li>
                <Link href="/conditions">Conditions &amp; care</Link>
              </li>
              <li>
                <Link href="/procedures">GI investigations</Link>
              </li>
              <li>
                <Link href="/blog">Blog &amp; articles</Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => openBooking('General Consultation')}
                  style={{ textAlign: 'left', color: 'inherit', background: 'none', border: 'none', padding: 0, font: 'inherit', cursor: 'pointer' }}
                >
                  Plan your appointment
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Condition Guides */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Condition Guides</h4>
            <ul className="footer-links-list">
              {(doctorData.conditions || []).map((c) => (
                <li key={c.slug}>
                  <Link href={`/conditions/${c.slug}`}>{c.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Consultations */}
          <div className="footer-contact-col">
            <h4 className="footer-col-title">Contact &amp; Consultations</h4>
            <div className="contact-doctor-name">{doctorData.doctor.fullName}</div>
            <div className="contact-doctor-title">{doctorData.doctor.primaryTitle}</div>

            <div className="contact-sub-label">Professional enquiries</div>
            <div>
              <a
                href={`tel:${doctorData.contact.phone.replace(/\s+/g, '')}`}
                className="contact-phone-link link-with-arrow"
              >
                <span>{doctorData.contact.phone}</span>
                <span className="arrow-icon">↗</span>
              </a>
            </div>

            <div style={{ marginTop: '8px', marginBottom: '14px' }}>
              <button
                type="button"
                onClick={() => openBooking('General Consultation')}
                className="link-with-arrow"
                style={{
                  fontWeight: 600,
                  color: 'var(--color-primary)',
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  font: 'inherit',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <span>Book a consultation</span>
                <span className="arrow-icon">↗</span>
              </button>
            </div>

            <div className="contact-note" style={{ fontSize: '0.8rem', lineHeight: '1.5', marginTop: '10px' }}>
              <strong style={{ color: 'var(--color-heading)', display: 'block', marginBottom: '4px' }}>Consultation Timings:</strong>
              <div>• <strong>Hospital OPD:</strong> Mon – Sat: 10:00 AM – 5:00 PM (Apollo Hospitals)</div>
              <div>• <strong>Evening Clinic:</strong> Mon – Sat: 6:30 PM – 8:30 PM (Clinic Chamber)</div>
              <div style={{ marginTop: '4px', color: 'var(--color-text-muted)' }}>Bhubaneswar, Odisha • Ph: +91 91246 60465</div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-bottom-left">
            <span>© 2026 Dr. Sushant Kumar Sethi</span>
          </div>

          <div className="footer-bottom-center">
            <span>Senior Consultant • Professional profile</span>
          </div>

          <div className="footer-bottom-right">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="back-to-top-btn link-with-arrow"
            >
              <span>Back to top</span>
              <span className="arrow-icon">↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

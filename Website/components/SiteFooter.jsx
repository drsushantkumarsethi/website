'use client';

import React from 'react';
import Link from 'next/link';
import { doctorData } from '../data/doctorData';
import { useAppointment, getConsultationMailto } from './AppointmentContext';

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const { openBooking } = useAppointment();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-main-grid">
          {/* Column 1: Brand & Quote */}
          <div className="footer-brand-col">
            <Link href="/" className="brand-logo" aria-label="Home">
              <div className="logo-circle" aria-hidden="true">
                <span>S</span>
                <span className="logo-plus">+</span>
              </div>
              <div className="brand-text-col">
                <span className="brand-name">{doctorData.doctor.fullName}</span>
                <span className="brand-sub">GASTROENTEROLOGY &amp; HEPATOLOGY</span>
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
                <button
                  type="button"
                  onClick={() => openBooking()}
                  style={{ textAlign: 'left', color: 'inherit' }}
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
              <a
                href={getConsultationMailto('General Consultation')}
                className="link-with-arrow"
                style={{ fontWeight: 600, color: 'var(--color-primary)' }}
              >
                <span>Book a consultation</span>
                <span className="arrow-icon">↗</span>
              </a>
            </div>

            <div className="contact-note">
              Clinic address and consultation hours will be published once confirmed.
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>
            © {currentYear} {doctorData.doctor.fullName}
          </div>
          <div>
            Senior Consultant • Professional profile
          </div>
          <button onClick={scrollToTop} className="back-to-top">
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}

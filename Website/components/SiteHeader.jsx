'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { doctorData } from '../data/doctorData';
import { useAppointment } from './AppointmentContext';
import { Menu, X, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function SiteHeader() {
  const currentPath = usePathname();
  const { openBooking } = useAppointment();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentPath]);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'The doctor', path: '/the-doctor' },
    { label: 'Conditions', path: '/conditions' },
    { label: 'Procedures', path: '/procedures' },
    { label: 'Blog', path: '/blog' }
  ];

  return (
    <>
      {/* Top Clinical Announcement Strip - Hospital & Clinic Timings */}
      <div className="header-top-bar" role="region" aria-label="Clinical Notice">
        <div className="container header-top-inner">
          <div className="header-top-left">
            <span className="topbar-badge">Appointments &amp; Helpline</span>
            <a href={`tel:${doctorData.contact.phone.replace(/\s+/g, '')}`} className="topbar-item">
              <Phone size={12} className="topbar-icon" />
              <span>Direct: {doctorData.contact.phone}</span>
            </a>
            <span className="topbar-sep">•</span>
            <span className="topbar-item" title="Hospital OPD at Apollo Hospitals">
              <Clock size={12} className="topbar-icon" />
              <span>Hospital: 10:00 AM - 5:00 PM</span>
            </span>
            <span className="topbar-sep">•</span>
            <span className="topbar-item" title="Evening Clinic Timings">
              <Clock size={12} className="topbar-icon" />
              <span>Clinic: 6:30 PM - 8:30 PM</span>
            </span>
          </div>
          <div className="header-top-right">
            <a
              href={`https://wa.me/919124660465?text=${encodeURIComponent('Hello Dr. Sushant Kumar Sethi Clinic, I would like to enquire about a consultation.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="topbar-whatsapp"
            >
              <MessageCircle size={13} />
              <span>WhatsApp Chat</span>
            </a>
            <span className="topbar-sep">|</span>
            <Link href="/locations" className="topbar-link">
              <span>Locations &amp; Hours</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container header-container">
          {/* Brand Logo matching reference */}
          <Link
            href="/"
            className="brand-logo"
            aria-label={`${doctorData.doctor.fullName} - Home`}
          >
            <div className="logo-circle" aria-hidden="true">
              <span>S</span>
              <span className="logo-plus">+</span>
            </div>
            <div className="brand-text-col">
              <span className="brand-name">{doctorData.doctor.fullName}</span>
              <span className="brand-sub">GASTROENTEROLOGY, HEPATOLOGY, ENDOSCOPY &amp; LIVER TRANSPLANT</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-list">
              {navItems.map((item) => {
                const isActive = currentPath === item.path || (item.path !== '/' && currentPath.startsWith(item.path));
                return (
                  <li key={item.path} className="nav-item">
                    <Link
                      href={item.path}
                      className={`nav-link ${isActive ? 'is-active' : ''}`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Header Action Button */}
          <div className="header-actions" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button
              onClick={() => openBooking('General Consultation')}
              className="btn btn-primary"
              id="header-appointment-btn"
            >
              <span>Book a consultation</span>
              <span className="arrow-icon">↗</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: '#ffffff',
            borderBottom: '1px solid #e4ebe8',
            padding: '24px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
          }}>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '20px' }}>
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--color-navy)', fontFamily: 'var(--font-heading)' }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openBooking('General Consultation');
                }}
                className="btn btn-primary btn-full"
              >
                <span>Book a consultation</span>
                <span className="arrow-icon">↗</span>
              </button>
              <a
                href={`tel:${doctorData.contact.phone.replace(/\s+/g, '')}`}
                className="btn btn-secondary btn-full"
                style={{ textAlign: 'center' }}
              >
                <Phone size={14} style={{ display: 'inline', marginRight: '6px' }} />
                <span>Call {doctorData.contact.phone}</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Sticky Mobile Quick Action Bar (Visible only on mobile <= 768px) */}
      <nav className="mobile-bottom-bar" aria-label="Mobile quick actions">
        <a
          href={`tel:${doctorData.contact.phone.replace(/\s+/g, '')}`}
          className="mobile-bar-btn mobile-bar-call"
          aria-label="Call Doctor Consultation Desk"
        >
          <Phone size={18} />
          <span>Call Now</span>
        </a>
        <a
          href={`https://wa.me/919124660465?text=${encodeURIComponent('Hello Dr. Sushant Kumar Sethi Clinic, I would like to enquire about a consultation.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-bar-btn mobile-bar-whatsapp"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={18} />
          <span>WhatsApp</span>
        </a>
        <button
          type="button"
          onClick={() => openBooking('Mobile Quick Booking')}
          className="mobile-bar-btn mobile-bar-book"
          aria-label="Book a consultation appointment"
        >
          <span>Book Visit</span>
        </button>
      </nav>
    </>
  );
}

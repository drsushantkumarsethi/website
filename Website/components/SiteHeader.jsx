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
      {/* Top Clinical Announcement Strip - IIGH Hospital Style */}
      <div className="header-top-bar" role="region" aria-label="Clinical Notice">
        <div className="container header-top-inner">
          <div className="header-top-left">
            <span className="topbar-badge">Consultation Desk</span>
            <a href="tel:+919437545772" className="topbar-item">
              <Phone size={12} className="topbar-icon" />
              <span>Direct: +91 94375 45772</span>
            </a>
            <span className="topbar-sep">•</span>
            <span className="topbar-item">
              <MapPin size={12} className="topbar-icon" />
              <span>Bhubaneswar, Odisha</span>
            </span>
            <span className="topbar-sep">•</span>
            <span className="topbar-item">
              <Clock size={12} className="topbar-icon" />
              <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
            </span>
          </div>
          <div className="header-top-right">
            <a
              href="https://wa.me/919437545772?text=Hello%20Dr.%20Sushant%20Kumar%20Sethi%20Clinic,%20I%20would%20like%20to%20enquire%20about%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="topbar-whatsapp"
            >
              <MessageCircle size={13} />
              <span>WhatsApp Desk</span>
            </a>
            <span className="topbar-sep">|</span>
            <Link href="/clinic-appointments" className="topbar-link">
              <span>Clinic appointments</span>
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
              <span className="brand-sub">GASTROENTEROLOGY &amp; HEPATOLOGY</span>
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
          </div>
        )}
      </header>
    </>
  );
}

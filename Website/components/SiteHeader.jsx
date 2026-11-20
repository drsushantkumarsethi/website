'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { doctorData } from '../data/doctorData';
import { useAppointment } from './AppointmentContext';
import { Menu, X } from 'lucide-react';

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
      {/* Top Clinical Announcement Strip */}
      <div className="header-top-bar" role="region" aria-label="Clinical Notice">
        <div className="container header-top-inner">
          <div className="header-top-left">
            <span>GASTROENTEROLOGY &amp; HEPATOLOGY • BHUBANESWAR</span>
          </div>
          <div className="header-top-right">
            <Link href="/clinic-appointments" style={{ color: 'inherit', textDecoration: 'none' }}>
              <span>Clinic appointments</span>
            </Link>
            <span>|</span>
            <button
              onClick={() => openBooking('General Consultation')}
              className="link-with-arrow"
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                font: 'inherit',
                color: 'inherit',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <span>Request a consultation</span>
              <span className="arrow-icon">↗</span>
            </button>
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
                    style={{ fontSize: '1.05rem', fontWeight: 500, color: '#163b34' }}
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

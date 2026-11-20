'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { doctorData } from '../../data/doctorData';
import { Calendar as CalendarIcon, Clock, CheckCircle2 } from 'lucide-react';

export default function ClinicAppointmentsPage() {
  const [selectedDay, setSelectedDay] = useState(21);
  const [selectedTime, setSelectedTime] = useState('10:30');
  const [fullName, setFullName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Calendar days grid for November 2026 (starts Sunday, Nov 1)
  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName.trim() || !contactNumber.trim()) {
      setErrorMessage('Please fill in your full name and contact phone number.');
      return;
    }
    if (!agreed) {
      setErrorMessage('Please check the agreement checkbox to continue.');
      return;
    }
    setErrorMessage('');
    setSubmitted(true);
  };

  return (
    <div className="clinic-appointments-page" style={{ padding: '40px 0 100px' }}>
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
          <Link href="/">Home</Link> <span>/</span> <span>Clinic appointments</span>
        </nav>

        {/* Hero Section (Screenshot 9) */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '50px', alignItems: 'flex-start', marginBottom: '50px' }}>
          <div>
            <div className="eyebrow-wrap">
              <span className="eyebrow-line"></span>
              <span className="eyebrow-text">DIRECT CLINIC APPOINTMENTS</span>
            </div>

            <h1 className="doctor-hero-h1">
              A little time.<br />
              <span style={{ fontStyle: 'italic', fontWeight: 400 }}>Just for your health.</span>
            </h1>

            <p className="doctor-hero-subtitle" style={{ marginBottom: '20px' }}>
              Request a consultation with Dr. Sushant Kumar Sethi, Senior Consultant in Gastroenterology &amp; Hepatology. Choose your preferred date and time, and leave a number where the clinic can reach you.
            </p>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '9999px',
              backgroundColor: '#f2f7f5',
              fontSize: '0.78rem',
              color: 'var(--color-primary)',
              fontWeight: 500
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-primary)' }}></span>
              <span>Appointment requests • Confirmation required</span>
            </div>
          </div>

          {/* Doctor Card Top Right (Screenshot 9) */}
          <div style={{
            border: '1px solid var(--color-border)',
            borderRadius: '12px',
            padding: '24px',
            backgroundColor: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            gap: '20px'
          }}>
            <Image
              src="/images/hero-doctor.jpg"
              alt={doctorData.doctor.fullName}
              width={70}
              height={70}
              style={{ borderRadius: '50%', objectFit: 'cover' }}
            />
            <div>
              <div style={{ fontWeight: 600, fontSize: '1.05rem', color: 'var(--color-heading)' }}>
                {doctorData.doctor.fullName}
              </div>
              <div style={{ fontSize: '0.84rem', color: 'var(--color-text-muted)', marginBottom: '4px' }}>
                Senior Consultant • Gastroenterology &amp; Hepatology
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-light)' }}>
                MBBS • MD (Medicine) • DNB (Gastroenterology)
              </div>
            </div>
          </div>
        </div>

        {/* Main 2-Column Booking Section (Screenshots 10, 11) */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '50px', alignItems: 'flex-start', marginBottom: '80px' }}>
          {/* Left Form */}
          <div style={{ border: '1px solid var(--color-border)', borderRadius: '14px', padding: '36px', backgroundColor: '#ffffff' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <CheckCircle2 size={48} color="var(--color-primary)" style={{ margin: '0 auto 16px' }} />
                <h3 style={{ fontSize: '1.8rem', color: 'var(--color-heading)', marginBottom: '8px' }}>
                  Consultation Request Registered
                </h3>
                <p style={{ color: 'var(--color-text-body)', marginBottom: '24px' }}>
                  Thank you, <strong>{fullName}</strong>. Your preferred consultation on <strong>{selectedDay} November 2026</strong> at <strong>{selectedTime}</strong> has been received. Our clinic desk will call you at <strong>{contactNumber}</strong> to confirm your slot.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn btn-secondary">
                  Choose another slot
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Step 01: Preferred Visit */}
                <div style={{ marginBottom: '36px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <span style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: '#f2f7f5',
                      color: 'var(--color-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.82rem',
                      fontWeight: 600
                    }}>01</span>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '1.15rem', color: 'var(--color-heading)' }}>
                        Your preferred visit.
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                        Choose a preference, not a confirmed available slot.
                      </div>
                    </div>
                  </div>

                  {/* Calendar Widget (Screenshot 10) */}
                  <div style={{
                    border: '1px solid var(--color-border)',
                    borderRadius: '10px',
                    padding: '24px',
                    backgroundColor: '#ffffff',
                    marginBottom: '20px'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                      <span style={{ fontWeight: 600, fontSize: '0.98rem', color: 'var(--color-heading)' }}>
                        November 2026
                      </span>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <button type="button" style={{ border: '1px solid #e4ebe8', borderRadius: '50%', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', color: '#6e827c' }}>‹</button>
                        <button type="button" style={{ border: '1px solid #e4ebe8', borderRadius: '50%', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', color: '#6e827c' }}>›</button>
                      </div>
                    </div>

                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(7, 1fr)',
                      textAlign: 'center',
                      fontSize: '0.74rem',
                      color: 'var(--color-text-light)',
                      marginBottom: '12px'
                    }}>
                      <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                    </div>

                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(7, 1fr)',
                      gap: '8px 0',
                      textAlign: 'center',
                      fontSize: '0.88rem'
                    }}>
                      {/* Blank days before Sun Nov 1 (Mon-Sat = 6 blanks if Mon is day 1) */}
                      {Array.from({ length: 6 }).map((_, i) => (
                        <span key={`blank-${i}`}></span>
                      ))}
                      {daysInMonth.map((day) => {
                        const isSelected = selectedDay === day;
                        return (
                          <button
                            key={day}
                            type="button"
                            onClick={() => setSelectedDay(day)}
                            style={{
                              width: '36px',
                              height: '36px',
                              margin: '0 auto',
                              borderRadius: '50%',
                              border: isSelected ? '1.5px solid var(--color-primary)' : 'none',
                              backgroundColor: isSelected ? '#f2f7f5' : 'transparent',
                              color: isSelected ? 'var(--color-primary)' : 'var(--color-text-body)',
                              fontWeight: isSelected ? 600 : 400,
                              cursor: 'pointer'
                            }}
                          >
                            {day}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Date & Time Input Boxes (Screenshot 10 bottom) */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '8px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.76rem', color: 'var(--color-text-light)', marginBottom: '4px' }}>
                        Preferred date
                      </label>
                      <input
                        type="text"
                        readOnly
                        value={`${String(selectedDay).padStart(2, '0')}/11/2026`}
                        style={{
                          width: '100%',
                          padding: '10px 14px',
                          border: '1px solid var(--color-border)',
                          borderRadius: '6px',
                          fontSize: '0.9rem',
                          backgroundColor: '#ffffff'
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.76rem', color: 'var(--color-text-light)', marginBottom: '4px' }}>
                        Preferred time <span style={{ float: 'right' }}>IST</span>
                      </label>
                      <input
                        type="time"
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '10px 14px',
                          border: '1px solid var(--color-border)',
                          borderRadius: '6px',
                          fontSize: '0.9rem'
                        }}
                      />
                    </div>
                  </div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--color-text-light)' }}>
                    Times are in India Standard Time. The clinic will confirm its hours and availability.
                  </div>
                </div>

                {/* Step 02: Reach You (Screenshot 11) */}
                <div style={{ marginBottom: '28px', borderTop: '1px solid var(--color-border-light)', paddingTop: '28px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <span style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: '#f2f7f5',
                      color: 'var(--color-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.82rem',
                      fontWeight: 600
                    }}>02</span>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '1.15rem', color: 'var(--color-heading)' }}>
                        How can we reach you?
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                        Only the details needed to arrange your appointment.
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.76rem', color: 'var(--color-text-light)', marginBottom: '4px' }}>
                        Full name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '10px 14px',
                          border: '1px solid var(--color-border)',
                          borderRadius: '6px',
                          fontSize: '0.9rem'
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.76rem', color: 'var(--color-text-light)', marginBottom: '4px' }}>
                        Contact number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '10px 14px',
                          border: '1px solid var(--color-border)',
                          borderRadius: '6px',
                          fontSize: '0.9rem'
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '20px' }}>
                    <input
                      type="checkbox"
                      id="reach-agree"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      style={{ marginTop: '4px' }}
                    />
                    <label htmlFor="reach-agree" style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', lineHeight: '1.5' }}>
                      I agree that the clinic may use these details to contact me about this appointment request.<br />
                      <span style={{ fontSize: '0.74rem', color: 'var(--color-text-light)' }}>
                        Please do not enter medical records or sensitive health information here.
                      </span>
                    </label>
                  </div>

                  {errorMessage && (
                    <div style={{ color: '#b91c1c', fontSize: '0.84rem', marginBottom: '14px' }}>
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="btn btn-primary btn-full"
                    style={{ padding: '14px', fontSize: '1rem' }}
                  >
                    <span>Request a consultation</span>
                    <span className="arrow-icon">↗</span>
                  </button>

                  <div style={{ fontSize: '0.74rem', color: 'var(--color-text-light)', textAlign: 'center', marginTop: '10px' }}>
                    Submitting a request does not confirm a booking. No payment is collected here.
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* Right Summary Card (Screenshot 10, 11) */}
          <div style={{ border: '1px solid var(--color-border)', borderRadius: '14px', padding: '36px', backgroundColor: '#fbfdfc', position: 'sticky', top: '100px' }}>
            <span style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-text-light)', display: 'block', marginBottom: '14px' }}>
              YOUR CONSULTATION REQUEST
            </span>

            <h3 style={{ fontSize: '2.2rem', color: 'var(--color-heading)', lineHeight: '1.15', marginBottom: '32px' }}>
              Care begins<br />
              <span style={{ fontStyle: 'italic', fontWeight: 400 }}>with you.</span>
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', fontSize: '0.9rem', marginBottom: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '14px', borderBottom: '1px solid var(--color-border-light)' }}>
                <span style={{ color: 'var(--color-text-light)' }}>Doctor</span>
                <span style={{ fontWeight: 600, color: 'var(--color-heading)' }}>{doctorData.doctor.fullName}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '14px', borderBottom: '1px solid var(--color-border-light)' }}>
                <span style={{ color: 'var(--color-text-light)' }}>Preferred date</span>
                <span style={{ fontWeight: 500, color: 'var(--color-heading)' }}>{selectedDay} November 2026</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '14px', borderBottom: '1px solid var(--color-border-light)' }}>
                <span style={{ color: 'var(--color-text-light)' }}>Preferred time</span>
                <span style={{ fontWeight: 500, color: 'var(--color-heading)' }}>{selectedTime}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '14px', borderBottom: '1px solid var(--color-border-light)' }}>
                <span style={{ color: 'var(--color-text-light)' }}>Timezone</span>
                <span style={{ color: 'var(--color-text-body)' }}>India Standard Time</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '14px', borderBottom: '1px solid var(--color-border-light)' }}>
                <span style={{ color: 'var(--color-text-light)' }}>Status</span>
                <span style={{ color: '#b45309', fontWeight: 500 }}>Awaiting your request</span>
              </div>
            </div>

            <div style={{
              border: '1px solid var(--color-border-light)',
              borderRadius: '8px',
              padding: '16px',
              backgroundColor: '#ffffff',
              marginBottom: '20px'
            }}>
              <div style={{ fontWeight: 600, fontSize: '0.82rem', color: 'var(--color-heading)', marginBottom: '4px' }}>
                Clinic information
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', lineHeight: 1.4 }}>
                The clinic&apos;s address, contact number, and consultation hours will be published once confirmed.
              </div>
            </div>

            <div>
              <Link href="/the-doctor" className="link-with-arrow">
                <span>Meet your doctor</span>
                <span className="arrow-icon">↗</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Below Section: Come with questions (Screenshot 11 bottom) */}
        <div style={{ borderTop: '1px solid var(--color-border-light)', paddingTop: '60px' }}>
          <div className="doc-split-grid">
            <div>
              <div className="eyebrow-wrap">
                <span className="eyebrow-line"></span>
                <span className="eyebrow-text">A THOUGHTFUL FIRST STEP</span>
              </div>
              <h2 className="doc-section-heading">
                Come with questions.<br />Leave with understanding.
              </h2>
            </div>

            <div className="journey-steps-list">
              {doctorData.doctor.preparationSteps.map((step) => (
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
      </div>
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { doctorData } from '../../data/doctorData';
import {
  MapPin,
  Calendar,
  Clock,
  ShieldCheck,
  AlertTriangle,
  User,
  Phone,
  FileText,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    preferredClinic: 'Apollo Hospitals, Bhubaneswar',
    serviceType: 'General Outpatient Gastroenterology',
    datePreference: '',
    timeWindow: 'Morning (10:00 AM - 1:00 PM)',
    message: '',
    emergencyAck: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setFormError('Please enter your full name and contact number.');
      return;
    }

    if (!formData.emergencyAck) {
      setFormError('Please check the non-emergency acknowledgment checkbox to proceed.');
      return;
    }

    setFormError('');
    setSubmitted(true);
  };

  return (
    <div className="contact-page" style={{ padding: '60px 0 100px' }}>
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb-nav" aria-label="Breadcrumb" style={{ marginBottom: '24px' }}>
          <Link href="/">Home</Link> <span>/</span> <span>Contact &amp; Consultations</span>
        </nav>

        <div className="eyebrow-wrap">
          <span className="eyebrow-line"></span>
          <span className="eyebrow-text">CONSULTATION DESK &amp; INQUIRIES</span>
        </div>

        <div className="conditions-header-row" style={{ marginBottom: '40px' }}>
          <div>
            <h1 className="conditions-heading" style={{ fontSize: '3.2rem' }}>
              A conversation.<br />A considered next step.
            </h1>
          </div>
          <div className="conditions-header-right">
            <p className="conditions-header-desc">
              Coordinate outpatient consultations with Dr. Sushant Kumar Sethi across established healthcare settings in Bhubaneswar.
            </p>
          </div>
        </div>

        {/* Main Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '50px' }}>
          {/* Left Column: Form */}
          <div style={{
            border: '1px solid var(--color-border)',
            borderRadius: '12px',
            padding: '36px',
            backgroundColor: '#ffffff'
          }}>
            <h2 style={{ fontSize: '1.6rem', color: 'var(--color-heading)', marginBottom: '8px' }}>
              Schedule an Outpatient Consultation
            </h2>
            <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', marginBottom: '24px' }}>
              Submit your details and consultation request. Our clinical coordination desk will contact you to verify your appointment token and slot.
            </p>

            {submitted ? (
              <div style={{
                backgroundColor: '#f2f7f5',
                border: '1px solid #d4ece7',
                padding: '30px',
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <CheckCircle2 size={44} color="var(--color-primary)" style={{ margin: '0 auto 16px' }} />
                <h3 style={{ fontSize: '1.4rem', color: 'var(--color-heading)', marginBottom: '8px' }}>
                  Consultation Request Received
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-body)', marginBottom: '20px' }}>
                  Thank you, <strong>{formData.fullName}</strong>. We have registered your request for <strong>{formData.preferredClinic}</strong>.
                </p>
                <div style={{
                  background: '#ffffff',
                  padding: '16px',
                  borderRadius: '6px',
                  fontSize: '0.88rem',
                  color: 'var(--color-text-body)',
                  textAlign: 'left',
                  marginBottom: '20px'
                }}>
                  <p><strong>Contact:</strong> {formData.phone}</p>
                  <p><strong>Clinical Focus:</strong> {formData.serviceType}</p>
                  <p><strong>Preferred Time:</strong> {formData.timeWindow}</p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn btn-secondary"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{
                  background: '#fcf8f3',
                  border: '1px solid #f2e2d0',
                  padding: '12px 16px',
                  borderRadius: '6px',
                  fontSize: '0.84rem',
                  color: '#8c5d2b',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <AlertTriangle size={18} />
                  <span>Scheduled Outpatient Inquiries Only. Not for acute emergency care.</span>
                </div>

                {formError && (
                  <div style={{
                    background: '#fef2f2',
                    border: '1px solid #fee2e2',
                    color: '#991b1b',
                    padding: '12px',
                    borderRadius: '6px',
                    fontSize: '0.88rem'
                  }}>
                    {formError}
                  </div>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-heading)', marginBottom: '6px' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Chandra Mishra"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        border: '1px solid var(--color-border)',
                        borderRadius: '6px',
                        fontSize: '0.92rem'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-heading)', marginBottom: '6px' }}>
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 Mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        border: '1px solid var(--color-border)',
                        borderRadius: '6px',
                        fontSize: '0.92rem'
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-heading)', marginBottom: '6px' }}>
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        border: '1px solid var(--color-border)',
                        borderRadius: '6px',
                        fontSize: '0.92rem'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-heading)', marginBottom: '6px' }}>
                      Practice Location *
                    </label>
                    <select
                      value={formData.preferredClinic}
                      onChange={(e) => setFormData({ ...formData, preferredClinic: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        border: '1px solid var(--color-border)',
                        borderRadius: '6px',
                        fontSize: '0.92rem'
                      }}
                    >
                      <option value="Apollo Hospitals, Bhubaneswar">Apollo Hospitals, Bhubaneswar</option>
                      <option value="Specialist Consultation Center, Central Bhubaneswar">Specialist Consultation Center, Central Bhubaneswar</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-heading)', marginBottom: '6px' }}>
                      Consultation Focus *
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        border: '1px solid var(--color-border)',
                        borderRadius: '6px',
                        fontSize: '0.92rem'
                      }}
                    >
                      <option value="General Outpatient Gastroenterology">General Outpatient Gastroenterology</option>
                      <option value="Hepatology &amp; Liver Disease Consultation">Hepatology &amp; Liver Disease Consultation</option>
                      <option value="Endoscopy / Colonoscopy Evaluation">Endoscopy / Colonoscopy Evaluation</option>
                      <option value="Acid Reflux &amp; GERD">Acid Reflux &amp; GERD</option>
                      <option value="Fatty Liver Disease">Fatty Liver Disease</option>
                      <option value="Irritable Bowel Syndrome (IBS)">Irritable Bowel Syndrome (IBS)</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-heading)', marginBottom: '6px' }}>
                      Preferred Time Window
                    </label>
                    <select
                      value={formData.timeWindow}
                      onChange={(e) => setFormData({ ...formData, timeWindow: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        border: '1px solid var(--color-border)',
                        borderRadius: '6px',
                        fontSize: '0.92rem'
                      }}
                    >
                      <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                      <option value="Afternoon (2:00 PM - 5:00 PM)">Afternoon (2:00 PM - 5:00 PM)</option>
                      <option value="Evening (5:30 PM - 8:00 PM)">Evening (5:30 PM - 8:00 PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-heading)', marginBottom: '6px' }}>
                    Brief Medical Note or Symptoms (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide any details regarding symptom duration or prior tests..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      border: '1px solid var(--color-border)',
                      borderRadius: '6px',
                      fontSize: '0.92rem'
                    }}
                  />
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <input
                    type="checkbox"
                    id="ack"
                    checked={formData.emergencyAck}
                    onChange={(e) => setFormData({ ...formData, emergencyAck: e.target.checked })}
                    style={{ marginTop: '4px' }}
                  />
                  <label htmlFor="ack" style={{ fontSize: '0.84rem', color: 'var(--color-text-body)' }}>
                    I confirm that this is a non-emergency appointment request. I will bring my previous medical history to the consultation.
                  </label>
                </div>

                <button type="submit" className="btn btn-primary btn-full">
                  <span>Submit Appointment Request</span>
                  <span className="arrow-icon">↗</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Contact Details matching screenshot */}
          <div>
            <div style={{
              border: '1px solid var(--color-border)',
              borderRadius: '12px',
              padding: '32px',
              backgroundColor: '#fbfdfc',
              marginBottom: '24px'
            }}>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--color-heading)', marginBottom: '4px' }}>
                {doctorData.doctor.fullName}
              </h3>
              <div style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', marginBottom: '24px' }}>
                {doctorData.doctor.primaryTitle}
              </div>

              <div style={{ marginBottom: '20px' }}>
                <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-light)', marginBottom: '4px' }}>
                  Professional enquiries &amp; Appointments
                </div>
                <a
                  href={`tel:${doctorData.contact.phone.replace(/\s+/g, '')}`}
                  className="link-with-arrow"
                  style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--color-primary)' }}
                >
                  <span>{doctorData.contact.phone}</span>
                  <span className="arrow-icon">↗</span>
                </a>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-light)', marginBottom: '4px' }}>
                  Primary Practice Hospital
                </div>
                <div style={{ fontWeight: 600, color: 'var(--color-heading)' }}>
                  Apollo Hospitals, Bhubaneswar
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-text-body)' }}>
                  Unit 15, Sainik School Road, Bhubaneswar, Odisha 751005
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-light)', marginBottom: '4px' }}>
                  Consultation Schedule
                </div>
                <div style={{ fontWeight: 600, color: 'var(--color-heading)' }}>
                  Monday through Saturday
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                  Prior appointment allocation recommended
                </div>
              </div>
            </div>

            <div style={{
              border: '1px solid var(--color-border)',
              borderRadius: '12px',
              padding: '24px',
              backgroundColor: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              gap: '14px'
            }}>
              <ShieldCheck size={28} color="var(--color-primary)" />
              <div style={{ fontSize: '0.85rem', color: 'var(--color-text-body)', lineHeight: 1.45 }}>
                All patient inquiries are handled with strict medical confidentiality for clinic outpatient coordination.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

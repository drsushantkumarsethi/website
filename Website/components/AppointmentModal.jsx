'use client';

import React, { useState, useEffect } from 'react';
import { doctorData } from '../data/doctorData';
import { X, Calendar, CheckCircle2, AlertTriangle, ShieldCheck, Clock, MapPin, User, Phone, FileText } from 'lucide-react';

const defaultServices = [
  'General Gastroenterology Consultation',
  'Upper GI Endoscopy Consultation',
  'Endoscopic Ultrasound (EUS) Evaluation',
  'ERCP & Biliary / Pancreatic Assessment',
  'Liver & Hepatology Second Opinion',
  'Acid Reflux & GERD Management',
  'Irritable Bowel Syndrome (IBS) Care',
  'Colonoscopy & Colorectal Screening',
  'Fatty Liver Disease (MASLD) Assessment',
  'Chronic Constipation / Motility Evaluation'
];

export default function AppointmentModal({
  isOpen,
  onClose,
  preselectedServiceId,
  preselectedClinicId
}) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    preferredLocation: doctorData?.clinics?.[0]?.id || 'bhubaneswar-main',
    serviceArea: 'General Gastroenterology Consultation',
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM - 1:00 PM)',
    symptomNotes: '',
    confirmedNonEmergency: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        preferredLocation: preselectedClinicId || doctorData?.clinics?.[0]?.id || 'bhubaneswar-main',
        serviceArea: preselectedServiceId || 'General Gastroenterology Consultation'
      }));
      setSubmitted(false);
      setErrorMessage('');
    }
  }, [isOpen, preselectedServiceId, preselectedClinicId]);

  if (!isOpen) return null;

  const clinicsList = doctorData?.clinics && doctorData.clinics.length > 0
    ? doctorData.clinics
    : [{ id: 'bhubaneswar-main', name: 'Dr. Sethi Consultation Clinic', city: 'Bhubaneswar' }];

  const availableServices = (doctorData?.services && doctorData.services.length > 0)
    ? doctorData.services.map(s => s.title || s)
    : (doctorData?.doctor?.procedures && doctorData.doctor.procedures.length > 0)
      ? doctorData.doctor.procedures.map(p => p.title || p)
      : defaultServices;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setErrorMessage('Please provide your full name and a valid contact phone number.');
      return;
    }

    if (!formData.confirmedNonEmergency) {
      setErrorMessage('Please confirm that this is a routine, non-emergency consultation request.');
      return;
    }

    setErrorMessage('');
    setSubmitted(true);

    const email = 'drsushantkumarsethi@gmail.com';
    const clinicName = clinicsList.find(c => c.id === formData.preferredLocation)?.name || 'Bhubaneswar Clinic';
    const subject = `Consultation Request: ${formData.serviceArea} - ${formData.fullName}`;
    const body = `Dear Dr. Sushant Kumar Sethi,

I would like to request a consultation appointment.

Patient Full Name: ${formData.fullName}
Contact Phone Number: ${formData.phone}
Email Address: ${formData.email || 'Not provided'}
Clinical Focus / Concern: ${formData.serviceArea}
Preferred Date: ${formData.preferredDate || 'Earliest available'}
Preferred Time Window: ${formData.preferredTime}
Location: ${clinicName}
Symptoms / Health Notes: ${formData.symptomNotes || 'None'}

Submitted via Dr. Sushant Kumar Sethi Consultation Desk`;

    if (typeof window !== 'undefined') {
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      preferredLocation: clinicsList[0]?.id || 'bhubaneswar-main',
      serviceArea: 'General Gastroenterology Consultation',
      preferredDate: '',
      preferredTime: 'Morning (10:00 AM - 1:00 PM)',
      symptomNotes: '',
      confirmedNonEmergency: false
    });
    onClose();
  };

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-card">
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-header-text">
            <span className="modal-eyebrow">Outpatient Consultation Desk</span>
            <h3 id="modal-title" className="modal-title">Schedule a Consultation</h3>
            <p className="modal-subtitle">with {doctorData?.doctor?.fullName || 'Dr. Sushant Kumar Sethi'} ({doctorData?.doctor?.speciality || 'Gastroenterology & Hepatology'})</p>
          </div>
          <button
            onClick={onClose}
            className="modal-close-btn"
            aria-label="Close appointment modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {submitted ? (
            <div className="appointment-success">
              <div className="success-icon-wrap">
                <CheckCircle2 size={48} className="success-icon" style={{ color: 'var(--color-primary)' }} />
              </div>
              <h4 className="success-title">Consultation Request Received</h4>
              <p className="success-message">
                Thank you, <strong>{formData.fullName}</strong>. Your consultation request for <strong>{clinicsList.find(c => c.id === formData.preferredLocation)?.name || 'Bhubaneswar Clinic'}</strong> has been registered.
              </p>

              <div className="success-summary-box">
                <div className="summary-row">
                  <span className="summary-label">Patient Contact:</span>
                  <span className="summary-val">{formData.phone}</span>
                </div>
                <div className="summary-row">
                  <span className="summary-label">Clinical Focus:</span>
                  <span className="summary-val">{formData.serviceArea}</span>
                </div>
                <div className="summary-row">
                  <span className="summary-label">Preferred Timing:</span>
                  <span className="summary-val">{formData.preferredDate || 'Earliest Available'} ({formData.preferredTime})</span>
                </div>
              </div>

              <div className="next-steps-guide">
                <strong>What happens next:</strong>
                <ul>
                  <li>The clinical coordination desk will review your slot preference and contact you at <strong>{formData.phone}</strong> to confirm the appointment token.</li>
                  <li>Booking details have also been dispatched to <strong>drsushantkumarsethi@gmail.com</strong>.</li>
                  <li>Please bring prior medical records, endoscopy reports, and current prescriptions to your visit.</li>
                </ul>
              </div>

              <div className="modal-actions-success" style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
                <button type="button" onClick={handleReset} className="btn btn-primary btn-full">
                  <span>Done</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="appointment-form">
              {/* Emergency Warning */}
              <div className="modal-alert-emergency">
                <AlertTriangle size={18} className="alert-icon" style={{ flexShrink: 0, marginTop: '2px', color: '#b45309' }} />
                <div>
                  <strong>Routine Outpatient Scheduling Only</strong>
                  <p>
                    This form is not monitored 24/7 for acute emergencies. If you have severe GI bleeding, sudden severe pain, or acute medical distress, please proceed to an emergency department.
                  </p>
                </div>
              </div>

              {errorMessage && (
                <div className="form-error-banner" role="alert" style={{ color: '#b91c1c', background: '#fef2f2', border: '1px solid #fecaca', padding: '10px 14px', borderRadius: '8px', marginBottom: '16px', fontSize: '0.88rem' }}>
                  {errorMessage}
                </div>
              )}

              <div className="form-grid">
                {/* Full Name */}
                <div className="form-group">
                  <label htmlFor="patient-name" className="form-label">
                    <User size={15} />
                    <span>Patient Full Name *</span>
                  </label>
                  <input
                    id="patient-name"
                    type="text"
                    required
                    placeholder="e.g. Ramesh Chandra Mishra"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="form-input"
                  />
                </div>

                {/* Phone */}
                <div className="form-group">
                  <label htmlFor="patient-phone" className="form-label">
                    <Phone size={15} />
                    <span>Contact Phone / WhatsApp *</span>
                  </label>
                  <input
                    id="patient-phone"
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-grid">
                {/* Location Selection */}
                <div className="form-group">
                  <label htmlFor="clinic-select" className="form-label">
                    <MapPin size={15} />
                    <span>Consultation Location *</span>
                  </label>
                  <select
                    id="clinic-select"
                    value={formData.preferredLocation}
                    onChange={(e) => setFormData({ ...formData, preferredLocation: e.target.value })}
                    className="form-select"
                  >
                    {clinicsList.map((clinic) => (
                      <option key={clinic.id} value={clinic.id}>
                        {clinic.name} ({clinic.city || 'Bhubaneswar'})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Clinical Area */}
                <div className="form-group">
                  <label htmlFor="service-select" className="form-label">
                    <FileText size={15} />
                    <span>Primary Reason for Visit *</span>
                  </label>
                  <select
                    id="service-select"
                    value={formData.serviceArea}
                    onChange={(e) => setFormData({ ...formData, serviceArea: e.target.value })}
                    className="form-select"
                  >
                    {availableServices.map((service, sIdx) => (
                      <option key={sIdx} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-grid">
                {/* Preferred Date */}
                <div className="form-group">
                  <label htmlFor="preferred-date" className="form-label">
                    <Calendar size={15} />
                    <span>Preferred Date (Optional)</span>
                  </label>
                  <input
                    id="preferred-date"
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="form-input"
                  />
                </div>

                {/* Preferred Timing */}
                <div className="form-group">
                  <label htmlFor="preferred-timing" className="form-label">
                    <Clock size={15} />
                    <span>Preferred Time Window</span>
                  </label>
                  <select
                    id="preferred-timing"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="form-select"
                  >
                    <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                    <option value="Afternoon (2:00 PM - 5:00 PM)">Afternoon (2:00 PM - 5:00 PM)</option>
                    <option value="Evening (5:30 PM - 8:00 PM)">Evening (5:30 PM - 8:00 PM)</option>
                  </select>
                </div>
              </div>

              {/* Symptom Notes */}
              <div className="form-group">
                <label htmlFor="symptom-notes" className="form-label">
                  Brief Description of Symptoms or History (Optional)
                </label>
                <textarea
                  id="symptom-notes"
                  rows={3}
                  placeholder="e.g. Acid reflux for 3 weeks, elevated liver enzymes on recent health checkup..."
                  value={formData.symptomNotes}
                  onChange={(e) => setFormData({ ...formData, symptomNotes: e.target.value })}
                  className="form-textarea"
                />
              </div>

              {/* Non-Emergency Checkbox */}
              <div className="form-checkbox-group">
                <input
                  type="checkbox"
                  id="emergency-ack"
                  checked={formData.confirmedNonEmergency}
                  onChange={(e) => setFormData({ ...formData, confirmedNonEmergency: e.target.checked })}
                  className="form-checkbox"
                />
                <label htmlFor="emergency-ack" className="checkbox-label">
                  I understand that this form is for a routine outpatient appointment request. I will bring previous medical records and current prescriptions to the visit.
                </label>
              </div>

              <div className="modal-actions">
                <button type="button" onClick={onClose} className="btn btn-secondary">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary" id="submit-appointment-btn">
                  Submit Consultation Request
                </button>
              </div>

              <div className="patient-privacy-note">
                <ShieldCheck size={14} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                <span>Patient privacy is strictly respected. Your information is shared only with the clinical coordination desk.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

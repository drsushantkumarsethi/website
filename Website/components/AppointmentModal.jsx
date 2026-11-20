'use client';

import React, { useState, useEffect } from 'react';
import { doctorData } from '../data/doctorData';
import { X, Calendar, CheckCircle2, AlertTriangle, ShieldCheck, Clock, MapPin, User, Phone, FileText } from 'lucide-react';

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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setErrorMessage('Please provide your full name and a valid contact phone number.');
      return;
    }

    if (!formData.confirmedNonEmergency) {
      setErrorMessage('Please confirm that this is a non-emergency consultation request.');
      return;
    }

    setErrorMessage('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      preferredLocation: doctorData.clinics[0]?.id || '',
      serviceArea: 'General Gastroenterology Consultation',
      preferredDate: '',
      preferredTime: 'Morning (10:00 AM - 1:00 PM)',
      symptomNotes: '',
      confirmedNonEmergency: false
    });
    onClose();
  };

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-card">
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-header-text">
            <span className="modal-eyebrow">Outpatient Consultation Desk</span>
            <h3 id="modal-title" className="modal-title">Schedule a Consultation</h3>
            <p className="modal-subtitle">with {doctorData.doctor.fullName} ({doctorData.doctor.speciality})</p>
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
                <CheckCircle2 size={48} className="success-icon" />
              </div>
              <h4 className="success-title">Consultation Request Received</h4>
              <p className="success-message">
                Thank you, <strong>{formData.fullName}</strong>. Your consultation request for <strong>{doctorData.clinics.find(c => c.id === formData.preferredLocation)?.name || 'Bhubaneswar Clinic'}</strong> has been registered.
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
                  <li>The clinical coordination desk will review your slot preference and contact you via phone or SMS to confirm the appointment token.</li>
                  <li>Please arrive 15 minutes before your scheduled slot with previous medical records and current prescriptions.</li>
                </ul>
              </div>

              <div className="modal-actions-success">
                <button
                  type="button"
                  onClick={handleReset}
                  className="btn btn-primary"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="appointment-form">
              {/* Emergency Warning */}
              <div className="modal-alert-emergency">
                <AlertTriangle size={18} className="alert-icon" />
                <div>
                  <strong>Routine Outpatient Scheduling Only</strong>
                  <p>
                    This form is not monitored 24/7 for acute emergencies. If you have severe GI bleeding, sudden acute pain, or critical distress, proceed to an emergency department.
                  </p>
                </div>
              </div>

              {errorMessage && (
                <div className="form-error-banner" role="alert">
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
                    {doctorData.clinics.map((clinic) => (
                      <option key={clinic.id} value={clinic.id}>
                        {clinic.name} ({clinic.city})
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
                    <option value="General Gastroenterology Consultation">General Gastroenterology Consultation</option>
                    {doctorData.services.map((service) => (
                      <option key={service.id} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                    <option value="Liver & Hepatology Second Opinion">Liver & Hepatology Second Opinion</option>
                    <option value="Endoscopy / Colonoscopy Evaluation">Endoscopy / Colonoscopy Evaluation</option>
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
                    min={new Date().toISOString().split('T')[0]}
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
                  I understand that this form is for a non-urgent outpatient appointment request. I will bring previous medical records and current prescriptions to the visit.
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
                <ShieldCheck size={14} />
                <span>Patient privacy is strictly respected. Your information is shared only with the clinical coordination desk.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
